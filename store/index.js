import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product/index.js'
import repositories from './modules/repositories/index.js'
import tools from './modules/tools/index.js'
import errors from './modules/errors/index.js'
import api from '~/service/api.js'
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
            CLEAR_PRODUCT_STATES(state, payload){
                state.product.name = ""
                state.product.brand.id = ""
                state.product.category.id = ""
                state.product.stock = 0
                state.product.price = 0
                state.product.profit = 0
                state.product.finalPrice = 0
                state.product.description = ""
                state.product.customAttributes.color = ""
                state.product.customAttributes.size = ""
                state.product.customAttributes.manufacturingDate = ""
                state.product.customAttributes.lotNumber = ""
                state.product.customAttributes.volts = ""
                state.product.dimensions.height = ""
                state.product.dimensions.width = ""
                state.product.dimensions.depth = ""
                state.product.dimensions.weight = ""
                state.product.tags = []
                state.product.relatedProducts = []
                state.product.images = []
            },
            HANDLE_RELEVANT_ENTRIES(state, payload){
                state.repositories.product.tags = payload.tags
                state.repositories.product.brands = payload.brands
                state.repositories.product.relatedProducts = payload.products
            },
            // MUTATIONS DOS ERROS:==============================================================================================================
            HANDLE_PRODUCT_ERRORS(state, payload) {
                if (payload.value === '' && payload.required) {
                    state.errors.product[payload.field] =' Esse campo é necessário.'
                } else {
                    state.errors.product[payload.field] = ''
                }
            },
            // MUTATIONS DAS TOOLS: ===========================================
            HANDLE_TOOLS_ALERT(state, payload){
                if(payload){
                    state.tools.alert.hasAlert = payload.hasAlert
                    state.tools.alert.type = payload.type
                    state.tools.alert.header = payload.header
                    state.tools.alert.text = payload.text

                    setTimeout(() => {
                        state.tools.alert.hasAlert = false
                    }, 5000);
                } else {
                    state.tools.alert.hasAlert = false
                    state.tools.alert.type = ""
                    state.tools.alert.header = ""
                    state.tools.alert.text = ""
                }
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
            VERIFY_PRODUCT_FORM(state){
                if(state.product.name !== "" &&
                    state.product.category.id !== "" &&
                    state.product.price !== 0 &&
                    state.product.finalPrice !== 0 &&
                    state.product.brand.id !== ""){
                        return true
                    } else {
                        return false
                    }
            }
        },
        actions: {
            async CREATE_PRODUCT(ctx, payload){
                if(ctx.getters.VERIFY_PRODUCT_FORM){
                    try{
                        const newProduct = new Object ({
                            name: ctx.state.product.name,
                            brand: ctx.state.product.brand.id,
                            category: ctx.state.product.category.label,
                            stock: ctx.state.product.stock,
                            price: ctx.state.product.price,
                            profit: ctx.state.product.profit,
                            finalPrice: ctx.state.product.finalPrice,
                            description: ctx.state.product.description,
                            customAttributes:{
                                color:ctx.state.product.customAttributes.color,
                                size:ctx.state.product.customAttributes.size,
                                manufacturingDate:ctx.state.product.customAttributes.manufacturingDate,
                                lotNumber:ctx.state.product.customAttributes.lotNumber,
                                volts:ctx.state.product.customAttributes.volts
                            },
                            dimensions:{
                                height:ctx.state.product.dimensions.height,
                                width:ctx.state.product.dimensions.width,
                                depth:ctx.state.product.dimensions.depth,
                                weight:ctx.state.product.dimensions.weight
                            },
                            tags:ctx.state.product.tags,
                            relatedProducts: ctx.state.product.relatedProducts,
                            images: ctx.state.product.images
                        })
                        const newProductPayload = await api.post('/api/product', newProduct)
                        ctx.commit('HANDLE_TOOLS_ALERT', {
                            hasAlert:true,
                            type:'success',
                            header: 'Tudo certo',
                            text: 'Produto criado com sucesso!'
                        }) 
                        ctx.commit('CLEAR_PRODUCT_STATES')
                        this.$router.push('/user')
                    }catch(err){
                        console.log(err)
                        ctx.commit('HANDLE_TOOLS_ALERT', {
                            hasAlert:true,
                            type:'warning',
                            header: 'Atenção',
                            text: err.response.data.message
                        }) 
                    }
                }else{
                    ctx.commit('HANDLE_TOOLS_ALERT', {
                        hasAlert:true,
                        type:'warning',
                        header: 'Atenção',
                        text: 'Preencha todos os campos obrigatórios'
                    })                    
                }
            },
            async GET_ALL_RELEVANT_ENTRIES(ctx, payload){
                try {
                    const allEntries = await api.get('/get-all-relevant-entries')
                    ctx.commit('HANDLE_RELEVANT_ENTRIES', allEntries.data)
                } catch(error) {
                    console.log(error)
                }
            }
        }
    })
}
export default createStore