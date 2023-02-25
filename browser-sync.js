const bs = require('browser-sync')
  .create('development server')

bs.init({
  port: 3000,
  server: true
})

bs.watch([ 'index.html', 'dist/**/*.js' ])
  .on('change', bs.reload)
