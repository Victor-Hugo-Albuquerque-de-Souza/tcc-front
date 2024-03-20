import vuex from 'vuex'
import product from './modules/product/index'

const myStore = () => {
    return new vuex.Store({
        modules:[
            product
        ],
        actions: {},
        mutations: {
            HANDLE_PRODUCT_NAME(state, payload){
                state[0].name = payload
            }
        },
        getters: {
            GET_PRODUCT_NAME(){
                return product.state.name
            }
            // totalProdutos: state => state.produtos.length
        }
    })
}

export default myStore
