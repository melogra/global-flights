module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "consistent-return": 2,
        "indent": ["error", 2],
        "no-console": ["off"],
        "no-else-return": 1,
        "semi": [1, "never"],
        "space-unary-ops": 2
    }
};