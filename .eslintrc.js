module.exports = {
    root: true,
    extends: '@pascaliske/eslint-config/angular',
    parserOptions: {
        project: `${__dirname}/tsconfig.lint.json`,
        createDefaultProgram: true,
    },
    env: {
        browser: true,
        node: true,
    },
}
