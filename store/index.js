import vuex from 'vuex'
import product from './modules/product/index'

const myStore = () => {
    return new vuex.Store({
        modules:[
            product
        ],
        mutations: {},
        actions: {},
        getters: {
            // totalProdutos: state => state.produtos.length
        }
    })
}
