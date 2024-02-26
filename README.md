# Eco Infra Action

Report on emissions directly from your CI/CD pipeline

## Inputs

### `token`

**Required** API Token, find this on the Eco Infra platform dashboard under user settings.

### `project-name`

**Required** Identifier for the project.

### `path`

**Required** Path of the project.

### `apply`

**Required** Apply to Eco Infra Platform. Defaults to `"true"`.


## Example usage

```yaml
uses: ecoinfra/ecoinfra-action@v1.1.2
with:
  token: '64865a80-9431-48d8-9cd4-0aaca15ec377'
  project-name: 'my-project'
  path: './terraform'
  apply: 'true'
```
