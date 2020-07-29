import typescript from "rollup-plugin-typescript2";
import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import pkg from "./package.json"
import copy from "rollup-plugin-copy";

export default {
    input: "./docz/src/components/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs"
        },
        {
            file: pkg.module,
            format: "esm"
        }
    ],
    external: [
        "tslib",
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        external(),
        babel({
            exclude: ['node_modules/**']
        }),
        resolve(),
        commonjs(),
        typescript(),
        terser(),
        copy({
            targets: [
                { src: './LICENSE', dest: 'dist/' },
                { src: './README.md', dest: 'dist/' },
            ]
        })
    ]
};
