const core = require('@actions/core');
const github = require('@actions/github');
const https = require('https');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {basename, dirname} = require('path')


const run = async () => {
    const token = core.getInput('token');
    const projectName = core.getInput('project-name');
    const apply = core.getInput('apply');
    const localPath = core.getInput('path');


    const download = async (url = 'https://github.com/eco-infra/ecoinfra/releases/latest/download/ecoinfra-linux', dest) => {
        const uri = new URL(url)
        if (!dest) dest = basename(uri.pathname)
        return new Promise((resolve, reject) => {
            https.get(uri.href).on('response',
                (res) => {
                    if (
                        res.statusCode === 200
                    ) {
                        const file = fs.createWriteStream("ecoinfra-linux", {flags: 'wx'});
                        res
                            .on('end', () => {
                                file.end()
                                resolve();
                            })
                            .on('error', (err) => {
                                file.destroy();
                                fs.unlink("ecoinfra-linux", () => reject(err))
                            })
                            .pipe(file);
                    } else if (res.statusCode === 302 || res.statusCode === 301) {
                        download(res.headers.location, dest).then(() => resolve())
                    } else {
                        reject(new Error(`Server responded with ${res.statusCode}: ${res.statusMessage}`));
                    }
                })
        })
    }

    await download();
    await exec('chmod +x ecoinfra-linux');
    try {
        const {
            stdout,
            stderr
        } = await exec(`./ecoinfra-linux --token ${token} --project-name ${projectName} ${apply === 'true' ? '--apply' : ''} ${dirname(localPath)}`);
        if (stderr) {
            console.log('stderr', stderr)
            throw new Error(stderr)
        }

        const data = stdout.toString()
        console.log(data)
        return JSON.stringify(github.context.payload, undefined, 2)
    } catch (e) {
        console.log('error', e)
        throw e
    }
}

try {
    run()
} catch (error) {
    core.setFailed(error.message);
}
