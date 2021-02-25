// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
    projects: [
        {
            root: './assets',
            package: './package.json',
            tsconfig: './tsconfig.json',
            snippetFolder: './.vscode/vetur/snippets',

            globalComponents: [
              './src/components/**/*.vue'
            ]
          }
    ]
}