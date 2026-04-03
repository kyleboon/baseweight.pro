module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    overrides: [
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        'no-descending-specificity': null, // stylistic preference
        'no-empty-source': null, // for vue file support
        'order/properties-alphabetical-order': true, // stylistic preference
        'import-notation': null, // project uses @import for CSS partials
        'selector-class-pattern': null, // project uses lp-prefixed camelCase
        'selector-id-pattern': null, // project uses lp-prefixed camelCase
    },
};
