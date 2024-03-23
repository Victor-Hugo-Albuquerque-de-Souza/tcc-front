import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product/index.js'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        modules: {
            product
        },
        mutations: {
            HANDLE_PRODUCT_NAME(state, payload) {
                state.product.name = payload
            },
        },
        getters: {
            GET_PRODUCT_NAME(state) {
                return state.product.name
            },
        },
        actions: {
        }
    })
}

export default createStore