import serve from "rollup-plugin-serve";
import metablock from "rollup-plugin-userscript-metablock";
import pkg from "./package.json" assert {type: "json"};
import meta from "./meta.json" assert {type: "json"};
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescriptPlugin from "@rollup/plugin-typescript";
import typescript from "typescript";
import fs from "fs";
import nodeResolve from "@rollup/plugin-node-resolve";

const host = 'localhost';
const port = 5000;

const generateDownloadUrl = () => {
    if (!meta.downloadURL) {
        return pkg.homepage.replace('#readme', `/releases/latest/download/${pkg.name}.user.js`);
    }
    return meta.downloadURL;
}

export default function () {
    const isProduction = process.env.NODE_ENV == 'prod';
    const defaultConfig = {};

    // Input options
    defaultConfig.input = 'src/main.ts';
    // Output options
    defaultConfig.output = {
        format: 'iife',
        banner: () => ('\n/*\n' + fs.readFileSync('./LICENSE', 'utf8') + '*/\n')
    };
    if (isProduction) {
        defaultConfig.output.file = 'dist/bundle.user.js';
    } else {
        defaultConfig.output.file = 'dist/dev.user.js';
    }
    // Plugin options
    defaultConfig.plugins = [];
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
        metadata.name += '-dev';
    } else {
        metadata.downloadURL = generateDownloadUrl();
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
                openPage: '/dev.user.js'
            })
        );
    }
    return defaultConfig;
};
