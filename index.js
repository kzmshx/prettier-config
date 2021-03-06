/**
 * @type { import("prettier").Options }
 */
module.exports = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: "always",
    overrides: [
        {
            files: ["*.ts"],
            options: {
                parser: "typescript",
            },
        },
        {
            files: ["*.json"],
            options: {
                printWidth: 80,
                tabWidth: 2,
            },
        },
    ],
}
