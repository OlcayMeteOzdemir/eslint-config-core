# eslint-config-core

Custom ESLint settings as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/eslint-config-core
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/eslint-config-core
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/eslint-config-core eslint eslint-plugin-import eslint-plugin-prettier
```

## Usage

A `.eslintrc` file will be automatically created in the root of your project with:

```json
{
    "extends": [
        "@meteozdemir/eslint-config-core",
        "@meteozdemir/eslint-config-core/rules/prettier"
    ],
    "rules": {}
}
```

If the file is not created automatically by any reason, simply create a `.eslintrc` file in the root of project and copy code above.

## @meteozdemir/eslint-config-core/rules/prettier

Prettier is enabled by default with this package and `@meteozdemir/eslint-config-core/rules/prettier` disables ESLint rules that might conflict with Prettier.

If you don't want to use Prettier, remove `'@meteozdemir/eslint-config-core/rules/prettier'` from `.eslintrc` file.

```json
{
    "extends": ["@meteozdemir/eslint-config-core"],
    "rules": {}
}
```

## Rule Override

Add any rule you want to override to rules object in `.eslintrc` file.

```json
{
    "extends": [
        "@meteozdemir/eslint-config-core",
        "@meteozdemir/eslint-config-core/rules/prettier"
    ],
    "rules": {
        // ...
        "no-var": "off",
        "no-console": "off"
    }
}
```
