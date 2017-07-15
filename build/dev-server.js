require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

// 定义express实例
var app = express()
/*mock start*/
//注册路由
var router = express.Router();
// 数据导入
// 首页数据  数组
var welcome = require('../json/home/index/index.json')
// 新品数据 数组
var news = require('../json/home/news/news.json')
// 分类数据  数组
var channels = require('../json/home/channels/channel/channels.json')
// 全部产品
var all = require('../json/all/all.json')
// boss 推荐
var ceo = require('../json/home/channels/ceo/ceo.json')


//设计路由
router.get('/welcome',(req,res)=>{
  let welData = {
    code:1,
    data:welcome
  }
  res.json(welData)
})
router.get('/news',(req,res)=>{
  let newData ={
    code:1,
    data:news
  }
  res.json(newData)
})
router.get('/channels',(req,res)=>{
  let id = req.query.id
  let channel=channels.find((item)=>{
    return item.ItemIndexId==id
  })
  let channelData={
    code:1,
    Data:channel
  }
  res.send(channelData)
})
router.get('/ceo/:id',(req,res)=>{
    let id = req.params.id
    let ceodata=ceo.find((item)=>{
      return item.ItemIndexId==id
    })
    let ceoData={
      code:1,
      Data:ceodata
    }
    res.send(ceoData)
})
router.get('/all',(req,res)=>{
  let allData = {
    cade:1,
    data:all
  }
  res.json(allData)
})

// 使用路由
app.use('/api',router)
/*mock end*/
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
