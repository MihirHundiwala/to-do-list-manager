import Vue from 'vue'
import Vuex from 'vuex'

import ui_module from "./ui.js"
import data_module from "./data.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ui: ui_module,
        data: data_module
    }
})