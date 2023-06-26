import esbuild from 'esbuild';

const args = process.argv.slice(2)

const watchPlugin = {
  name: 'watch-plugin',
  setup(build) {
    build.onStart(() => {
      const date = new Date(Date.now()).toLocaleString()

      console.log(`Build starting: ${date}`)
    })
    build.onEnd((result) => {
      const date = new Date(Date.now()).toLocaleString()

      if (result.errors.length > 0) {
         console.log(`Build finished, with errors: ${date}`)
      } else {
         console.log(`Build finished, successfully: ${date}`)
      }
    })
  }
}

const logServeRequest = ({
  method,
  path,
  remoteAddress,
  status,
  timeInMS
}) => {
  console.log(`${remoteAddress} - "${method} ${path} ${status} [${timeInMS}ms]"`)
}

const context = await esbuild.context({
  bundle: true,
  entryPoints: ['./src/index.js'],
  outdir: './public',
  sourcemap: 'external',
  globalName: 'fooLibrary',
  loader: {
    '.js': 'jsx'
  },
  plugins: [watchPlugin]
});

let { host, port } = await context.serve({
  servedir: 'public',
  onRequest: logServeRequest
});


console.log(`> Local: http://127.0.0.1:${port}`)

if (args.includes('--watch')) {
  await context.watch()
  console.log("\n[watch] build finished, watching for changes...")
}
