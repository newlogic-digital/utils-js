import { createBundle } from 'dts-buddy'

await createBundle({
    project: 'tsconfig.json',
    output: 'types/index.d.ts',
    modules: {
        '@newlogic-digital/utils-js': 'index.js'
    }
})
