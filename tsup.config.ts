import { defineConfig, Options } from 'tsup'


export default defineConfig([
    {
        entry: [
            'src/index.js'
        ],
        outDir: 'dist',
        minify: false,
        dts   : true,
        clean : true,
        cjsInterop: true,
        format: ['cjs', 'esm'],
		noExternal:[
			"lcid"
		]
    }
])
