const { loadNuxt, build } = require('nuxt')
const consola = require('consola')
const {app, server} = require('./app')

const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  server.listen(port, () => {
    consola.ready({
      message: `Server listening on localhost: ${port}`,
      badge: true
    })
  });
}

start()
