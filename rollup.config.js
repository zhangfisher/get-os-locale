
import clear from 'rollup-plugin-clear'
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import  resolve from "@rollup/plugin-node-resolve"

const plugins =  [
    // resolve(),
    commonjs(),
    babel({
        babelHelpers:"bundled",
        exclude: 'node_modules/**'
    }),
    // clear({targets:["dist"]}),
    // terser()
]
export default  [
    {
        input:  './src/index.js',
        output: [
            {
                file: 'dist/index.mjs',
                format:"es"
            },
            {
                file: 'dist/index.js',
                exports:"default",
                format:"cjs"
            }
        ],
        plugins
    }

]
