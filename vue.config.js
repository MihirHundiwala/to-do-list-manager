// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production' ? '/to-do-list-manager/' : '/',
//   transpileDependencies: [
//     'vuetify'
//   ]
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/to-do-list-manager/'
  : '/',
}