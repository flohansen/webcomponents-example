const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'server/public/bundle.js',
}).catch(() => process.exit(1));
