const fs = require("fs")

const zones = fs.readdirSync("./src/context").map(file => {
    return {
        from: `src/context/!(${file})/**/*`,
        target: `src/context/${file}/**/*`
    }
})

module.exports = {
    "rules": {
        "import/no-restricted-paths": [
            "error",
            {
                zones
            }
        ],
        "semi": "error"
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    settings: {
        "import/resolver": {
            typescript: {}
        }
    },
}
