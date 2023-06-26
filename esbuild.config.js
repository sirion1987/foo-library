const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  outfile: './dist/index.js',
  bundle: true,
  sourcemap: 'external',
  minify: true,
  globalName: 'fooLibrary',
  loader: {
    '.js': 'jsx'
  }
}).catch(() => process.exit(1));
