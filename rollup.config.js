// Modules.
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

// Default plugin configuration for both development and production.
let plugins = [
    postcss({
        extract: 'bundle.min.css',
        minimize: true,
    }),
    nodeResolve({
        browser: true,
    }),
    babel({
        exclude: './node_modules/**',
        babelHelpers: 'bundled',
    }),
    terser(),
    copy({
        targets: [
            { src: 'dist', dest: 'docs' },
            { src: 'prism', dest: 'docs' },
            { src: 'wp-content', dest: 'docs' },
            { src: 'styles/normalize.css', dest: 'docs/styles' },
        ],
    }),
];

// Add plugins for development only environment.
if (process.env.NODE_ENV === 'development') {
    plugins = [
        ...plugins,
        serve({
            open: true,
            // Page to navigate to when opening the browser.
            openPage: '/docs/',
        }),
        livereload('dist'),
    ];
}

export default {
    input: 'js/index.js',
    output: {
        file: 'dist/bundle.min.js',
        format: 'iife',
        name: 'veevaLib', // for exposing functions to php side for use
    },
    plugins,
};