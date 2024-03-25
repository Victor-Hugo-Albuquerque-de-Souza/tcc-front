import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product/index.js'
import repositories from './modules/repositories/index.js'

Vue.use(Vuex)

const createStore = () => {
    return new Vuex.Store({
        modules: {
            product,
            repositories
        },
        mutations: {
            HANDLE_PRODUCT_NAME(state, payload) {
                state.product.name = payload
            },
            HANDLE_PRODUCT_CATEGORY(state, payload) {
                state.product.category = payload
            },
            HANDLE_PRODUCT_DESCRIPTION(state, payload) {
                state.product.description = payload
            },
            HANDLE_PRODUCT_PRICE(state, payload) {
                state.product.price = payload
                state.product.finalPrice = Number(state.product.price) + Number((state.product.price * (state.product.profit / 100)))
            },
            HANDLE_PRODUCT_PROFIT(state, payload) {
                state.product.profit = payload
                state.product.finalPrice = Number(state.product.price) + Number((state.product.price * (state.product.profit / 100)))
            },
            HANDLE_PRODUCT_FINAL_PRICE(state, payload) {
                state.product.finalPrice = payload
                state.product.profit = ((Number(state.product.finalPrice) / Number(state.product.price)) - 1) * 100;
            },
            HANDLE_PRODUCT_AVAILABILITY(state, payload) {
                state.product.availability = payload
            },
            HANDLE_PRODUCT_FEATURED(state, payload) {
                state.product.featured = payload
            },
            HANDLE_PRODUCT_COLOR(state, payload) {
                state.product.customAttributes.productColor = payload
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
            HANDLE_PRODUCT_BRAND_NAME(state, payload) {
                state.product.brand.name = payload
            },
            HANDLE_PRODUCT_BRAND_UUID(state, payload) {
                state.product.brand.uuid = payload
            },
            HANDLE_PRODUCT_TAGS(state, payload) {
                state.product.tags = payload
            },
            HANDLE_PRODUCT_RELATED_PRODUCTS(state, payload) {
                state.product.relatedProducts = payload
            }
        },
        getters: {
            GET_PRODUCT_NAME(state) {
                return state.product.name
            },
            GET_PRODUCT_CATEGORY(state) {
                return state.product.category
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
            GET_PRODUCT_BRAND_NAME(state) {
                return state.product.brand.name
            },
            GET_PRODUCT_BRAND_UUID(state) {
                return state.product.brand.uuid
            },
            GET_PRODUCT_TAGS(state) {
                return state.product.tags
            },
            GET_PRODUCT_RELATED_PRODUCTS(state) {
                return state.product.relatedProducts
            },
        },
        actions: {
        }
    })
}

export default createStore