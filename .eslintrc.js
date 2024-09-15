/** @type {import("eslint").Linter.Config} */
module.exports = {
    $schema: 'https://json.schemastore.org/eslintrc',
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'universe',
        'universe/native',
        'universe/web',
        'universe/shared/typescript-analysis',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react-hooks', 'jsx-a11y', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'import/order': 'off',
        'no-console': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_.*?$',
            },
        ],
    },
}
