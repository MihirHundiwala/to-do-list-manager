const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/to-do-list-manager/',
  transpileDependencies: [
    'vuetify'
  ]
})
