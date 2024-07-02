import neostandard, { plugins } from 'neostandard'
import globals from 'globals'

export default [
    ...neostandard({
        globals: {
            ...globals.browser
        },
        ignores: ['**/+.js']
    }),
    plugins['@stylistic'].configs.customize({
        indent: 4,
        commaDangle: 'never',
        braceStyle: '1tbs'
    })
]
