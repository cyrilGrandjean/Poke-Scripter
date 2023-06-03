import serve from "rollup-plugin-serve";
import metablock from "rollup-plugin-userscript-metablock";
import pkg from "./package.json" assert {type: "json"};
import meta from "./meta.json" assert {type: "json"};
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescriptPlugin from "@rollup/plugin-typescript";
import typescript from "typescript";
import fs from "fs";
import nodeResolve from "@rollup/plugin-node-resolve";

const host = 'localhost';
const port = 5000;


const generateGrant = () => {
    const grantResult = meta.grant;
    [
        "GM.info",
        "GM.xmlhttpRequest"
    ].forEach((item) => {
        if (!grantResult.includes(item)) {
            grantResult.push(item);
        }
    })
    return grantResult;
}

export default function () {
    const isProduction = process.env.NODE_ENV == 'prod';
    const defaultConfig = {};

    // Input options
    if (isProduction) {
        defaultConfig.input = 'src/main.ts';
    } else {
        defaultConfig.input = {
            dev: 'src/main.ts',
            update: 'update-script.ts'
        };
    }
    // Output options
    if (isProduction) {
        defaultConfig.output = {
            file: 'dist/bundle.user.js',
            format: 'iife',
            banner: () => ('\n/*\n' + fs.readFileSync('./LICENSE', 'utf8') + '*/\n')
        };
    } else {
        defaultConfig.output = {
            entryFileNames: '[name].user.js',
            dir: 'dist',
        };
    }
    // Plugin options
    defaultConfig.plugins = [];
    defaultConfig.plugins.push(
        babel({babelHelpers: 'bundled'})
    );
    defaultConfig.plugins.push(
        commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ]
        })
    );
    defaultConfig.plugins.push(
        json()
    );
    defaultConfig.plugins.push(
        typescriptPlugin({typescript})
    );
    const metadata = {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        homepage: pkg.homepage,
        author: pkg.author,
        license: pkg.license,
    };
    if (!isProduction) {
        metadata.downloadURL = `http://${host}:${port}/dev.user.js`;
        metadata.grant = generateGrant();
    }
    defaultConfig.plugins.push(
        metablock({
            file: './meta.json',
            override: metadata
        })
    );
    defaultConfig.plugins.push(
        nodeResolve({extensions: ['.js', '.ts']})
    );

    if (!isProduction) {
        defaultConfig.plugins.push(
            serve({
                contentBase: 'dist',
                host: host,
                port: port,
                open: true,
                openPage: '/update.user.js'
            })
        );
    }
    return defaultConfig;
};
