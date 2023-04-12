// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react', '@typescript-eslint'
    ],
    'rules': {
        'semi': ['error', 'never'],
        'quotes': [2, 'single']
    },
    'parser': '@typescript-eslint/parser'
}
