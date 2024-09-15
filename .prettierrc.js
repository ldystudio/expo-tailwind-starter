/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'es5',
    semi: false,
    useTabs: false,
    htmlWhitespaceSensitivity: 'strict',
    importOrder: [
        '^(react$)|^(react/(.*)$)',
        '^(react-native$)|^(react-native/(.*)$)',
        '^(expo(.*)$)',
        '',
        '<BUILTIN_MODULES>',
        '<TYPES>',
        '<TYPES>^[.]',
        '<THIRD_PARTY_MODULES>',
        '^@[^/]',
        '',
        '^[@/]',
        '^[~/]',
        '^[./]',
        '',
        '^[#/]',
        '',
        '\\.(scss|less|css)$',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
}
