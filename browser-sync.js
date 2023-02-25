const bs = require('browser-sync')
  .create('development server')

bs.init({
  port: 3000,
  server: true
})

bs.watch('index.html')
  .on('change', bs.reload)

bs.watch('style.css')
  .on('change', bs.reload)

bs.watch('dist/**/*.js')
  .on('change', bs.reload)
