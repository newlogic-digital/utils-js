import neostandard, { plugins } from 'neostandard'
import globals from 'globals'

export default [
    ...neostandard({
        env: ['browser'],
        ignores: ['**/+.js']
    }),
    plugins['@stylistic'].configs.customize({
        indent: 4,
        commaDangle: 'never',
        braceStyle: '1tbs'
    })
]
