# Eco Infra Action

Report on emissions directly from your CI/CD pipeline

## Inputs

### `token`

**Required** API Token, find this on the Eco Infra platform dashboard under user settings.

### `project-name`

**Required** Identifier for the project.

### `plan-file`

**Required** Path of the plan file.


## Example usage

```yaml
uses: ecoinfra/ecoinfra-action@v1.1.2
with:
  token: '64865a80-9431-48d8-9cd4-0aaca15ec377'
  project-name: 'my-project'
  plan-file: './plan.json'
```

## Example Output
```bash
  _____           _         _                      
 | ____|_ __ ___ (_)___ ___(_) ___  _ __           
 |  _| | '_ ` _ \| / __/ __| |/ _ \| '_ \          
 | |___| | | | | | \__ \__ \ | (_) | | | |         
 |_____|_| |_| |_|_|___/___/_|\___/|_| |_|         
 / ___| _   _ _ __ ___  _ __ ___   __ _ _ __ _   _ 
 \___ \| | | | '_ ` _ \| '_ ` _ \ / _` | '__| | | |
  ___) | |_| | | | | | | | | | | | (_| | |  | |_| |
 |____/ \__,_|_| |_| |_|_| |_| |_|\__,_|_|   \__, |
                                             |___/ 
┌───────────────────────────────────────────────────────────────────────────┬─────────────────────────┐
│ Resource                                                                  │ Emission CO2e/month     │
├───────────────────────────────────────────────────────────────────────────┼─────────────────────────┤
│ ./terraform/.aws_instance.test                                            │ 84115.58399999999       │
└───────────────────────────────────────────────────────────────────────────┴─────────────────────────┘
   84116.00 ┼────── 

```
