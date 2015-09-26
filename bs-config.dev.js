//
var url = require('url');

module.exports = {
    files: ['accountingGame/**/*'],
    ghostMode: false,
    injectChanges: false,
    middleware: function (req, res, next) {
      if(req.url.indexOf('/jspm_packages/') === 0) {
        res.setHeader('cache-control', 'public, max-age=' + 1000 * 60 * 0); // 1 min
      }
      next();
    },
    online: false,
    open: false,
    reloadDebounce: 1000,
    server: true,
    ui: false
};
