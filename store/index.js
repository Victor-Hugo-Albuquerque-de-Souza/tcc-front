import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product/index.js'
import repositories from './modules/repositories/index.js'
import tools from './modules/tools/index.js'
import errors from './modules/errors/index.js'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        modules: {
            product,
            repositories,
            tools,
            errors
        },
        mutations: {
            // MUTATIONS DOS PRODUCTS:=======================================================================================================================
            HANDLE_PRODUCT_NAME(state, payload) {
                state.product.name = payload
            },
            HANDLE_PRODUCT_CATEGORY(state, payload) {
                state.product.category.id = payload.id
                state.product.category.label = payload.label
            },
            HANDLE_PRODUCT_DESCRIPTION(state, payload) {
                state.product.description = payload
            },
            HANDLE_PRODUCT_PRICE(state, payload) {
                state.product.price =  parseFloat(payload)
                state.product.finalPrice = Number(state.product.price) + Number((state.product.price * (state.product.profit / 100)))
            },
            HANDLE_PRODUCT_PROFIT(state, payload) {
                state.product.profit =  parseFloat(payload)
                state.product.finalPrice = Number(state.product.price) + Number((state.product.price * (state.product.profit / 100)))
            },
            HANDLE_PRODUCT_FINAL_PRICE(state, payload) {
                state.product.finalPrice =  parseFloat(payload)
                state.product.profit = ((Number(state.product.finalPrice) / Number(state.product.price)) - 1) * 100;
            },
            HANDLE_PRODUCT_AVAILABILITY(state, payload) {
                state.product.availability = payload
            },
            HANDLE_PRODUCT_FEATURED(state, payload) {
                state.product.featured = payload
            },
            HANDLE_PRODUCT_COLOR(state, payload) {
                state.product.customAttributes.color = payload
            },
            HANDLE_PRODUCT_MANUFACTURING_DATE(state, payload) {
                state.product.customAttributes.manufacturingDate = payload
            },
            HANDLE_PRODUCT_LOT_NUMBER(state, payload) {
                state.product.customAttributes.lotNumber = payload
            },
            HANDLE_PRODUCT_VOLTS(state, payload) {
                state.product.customAttributes.volts = payload
            },
            HANDLE_PRODUCT_SIZE(state, payload) {
                state.product.customAttributes.size = payload
            },
            HANDLE_PRODUCT_HEIGHT(state, payload) {
                state.product.dimensions.height = payload
            },
            HANDLE_PRODUCT_WIDTH(state, payload) {
                state.product.dimensions.width = payload
            },
            HANDLE_PRODUCT_DEPTH(state, payload) {
                state.product.dimensions.depth = payload
            },
            HANDLE_PRODUCT_WEIGHT(state, payload) {
                state.product.dimensions.weight = payload
            },
            HANDLE_PRODUCT_BRAND(state, payload) {
                console.log('Chegou no store:', payload)
                state.product.brand.id = payload.id
                state.product.brand.label = payload.label
            },
            HANDLE_PRODUCT_BRAND_UUID(state, payload) {
                state.product.brand = payload
            },
            HANDLE_PRODUCT_TAGS(state, payload) {
                state.product.tags = payload
            },
            HANDLE_PRODUCT_RELATED_PRODUCTS(state, payload) {
                state.product.relatedProducts = payload
            },
            HANDLE_PRODUCT_IMAGES(state, payload){
                if(payload.type === 1){
                    state.product.images.push(payload)
                } else {
                    state.product.images = state.product.images.filter(image => image.uid !== payload.uid)
                }
            },
            HANDLE_PRODUCT_STOCK(state, payload){
                state.product.stock = payload
            },
            HANDLE_TOOLS_ALERT(state, payload){
                state.tools.alert = payload
            },
            // MUTATIONS DOS ERROS:==============================================================================================================
            HANDLE_ERRORS_PRODUCT_NAME(state, payload){
                state.errors.product.name = payload
            }
        },
        getters: {
            // GETTERS DOS PRODUTOS:==========================================================================================================================
            GET_PRODUCT_NAME(state) {
                return state.product.name
            },
            GET_PRODUCT_CATEGORY(state) {
                return state.product.category.label
            },
            GET_PRODUCT_DESCRIPTION(state) {
                return state.product.description
            },
            GET_PRODUCT_PRICE(state) {
                return state.product.price
            },
            GET_PRODUCT_PROFIT(state) {
                return state.product.profit
            },
            GET_PRODUCT_FINAL_PRICE(state) {
                return state.product.finalPrice
            },
            GET_PRODUCT_WEIGHT(state) {
                return state.product.dimensions.weight
            },
            GET_PRODUCT_AVAILABILITY(state) {
                return state.product.availability
            },
            GET_PRODUCT_FEATURED(state) {
                return state.product.featured
            },
            GET_PRODUCT_COLOR(state) {
                return state.product.customAttributes.color
            },
            GET_PRODUCT_SIZE(state) {
                return state.product.customAttributes.size
            },
            GET_PRODUCT_MANUFACTURING_DATE(state) {
                return state.product.customAttributes.manufacturingDate
            },
            GET_PRODUCT_LOT_NUMBER(state) {
                return state.product.customAttributes.lotNumber
            },
            GET_PRODUCT_VOLTS(state) {
                return state.product.customAttributes.volts
            },
            GET_PRODUCT_HEIGHT(state) {
                return state.product.dimensions.height
            },
            GET_PRODUCT_WIDTH(state) {
                return state.product.dimensions.width
            },
            GET_PRODUCT_DEPTH(state) {
                return state.product.dimensions.depth
            },
            GET_PRODUCT_BRAND(state) {
                return state.product.brand.label
            },
            GET_PRODUCT_TAGS(state) {
                return state.product.tags
            },
            GET_PRODUCT_RELATED_PRODUCTS(state) {
                return state.product.relatedProducts
            },
            GET_PRODUCT_STOCK(state) {
                return state.product.stock
            },
            //GETTER DOS ERROS================================================================================================================================
        },
        actions: {
        }
    })
}

export default createStore