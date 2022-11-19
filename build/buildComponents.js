const glob = require('glob');
const path = require('path');
const esbuild = require('esbuild');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outfile: 'server/public/bundle.js',
}).catch(() => process.exit(1));

esbuild.build({
    stdin: {
        contents: glob
            .sync('src/**/client.scss')
            .map(fileName => `@import './${fileName}';`)
            .join('\n'),
        loader: 'css',
        resolveDir: path.join(__dirname, '..'),
    },
    bundle: true,
    minify: true,
    plugins: [sassPlugin()],
    outfile: 'server/public/style.css',
}).catch(() => process.exit(1));
