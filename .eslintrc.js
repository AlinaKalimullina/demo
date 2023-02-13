module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": "off",
        "curly": [
            "error",
            "all"
        ],
        "quotes": [
            "error",
            "single"
        ]
    }
}
