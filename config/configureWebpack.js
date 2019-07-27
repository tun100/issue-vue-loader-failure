var _ = require('lodash')
var webpack = require('webpack')
var path = require('path')

function makeDefault (str) {
  return [str, 'default']
}

module.exports = (conf, mode) => {
  conf.plugins = [
    // new webpack.ProvidePlugin({
    //   _: 'lodash',
    //   moment: 'moment',
    //   axios: 'axios',
    //   vue: makeDefault('vue'),
    //   Vue: makeDefault('vue'),
    //   vuex: makeDefault('vuex'),
    //   Vuex: makeDefault('vuex'),
    //   VueRouter: makeDefault('vue-router'),
    //   ELEMENT: 'element-ui',
    //   utils: path.join(__dirname, 'object_utils.js')
    // }),
    ...conf.plugins
  ]
  return _.merge(conf, {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000'
        }
      }
    }
  })
}
