<template>
    <card>
        <!-- TITLE: -->
         <div class="w-100 d-flex justify-content-between">
             <h5 slot="header" class="title">{{ getTitle }}</h5>
             <svg v-if="type === 'edit'" @click="$emit('closeModal')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
         </div>
        <!-- FORM: -->
        <form @submit.prevent="handleProduct">
            <!-- 1st ROW: NAME AND BRAND -->
            <div class="row">
                <div class="col-md-7">
                    <base-input
                        type="text"
                        label="Nome: *"
                        :error="$store.state.errors.product.name"
                        placeholder="ex: Modelo asadelta"
                        v-model="name"
                        @blur="$store.commit('HANDLE_PRODUCT_ERRORS', {
                            value:name,
                            field:'name',
                            required:true
                        })"
                    >
                    </base-input>
                </div>
                <div class="col-md-5">
                    <base-search
                        label="Fabricante: *"
                        v-model="brand"
                        dataList="productBrand"
                        :list="$store.state.repositories.product.brands"
                        :error="$store.state.errors.product.brand"
                        :verificationState="$store.getters.GET_PRODUCT_BRAND"
                        @clearState="$store.commit('HANDLE_PRODUCT_BRAND', new Object({
                            id:'',
                            label:''
                        }))"
                    >
                    </base-search>
                </div>
            </div>
            <!-- 2nd ROW: CATEGORY AND STOCK-->
            <div class="row">
                <div class="col-md-4">
                    <base-search
                        label="Categoria: *"
                        v-model="category"
                        dataList="productCategories"
                        :list="$store.state.repositories.product.categories"
                        :verificationState="$store.state.product.category.id"
                        :error="$store.state.errors.product.category"
                        @clearState="$store.commit('HANDLE_PRODUCT_CATEGORY', new Object({
                            id:'',
                            label:'',
                            value:''
                        }))"
                    >
                    </base-search>
                </div>
                <div class="col-md-4">
                    <base-search
                        label="Subcategoria: *"
                        v-model="subcategory"
                        dataList="productSubcategories"
                        :list="$store.getters.GET_PRODUCT_SUBCATEGORIES"
                        :verificationState="$store.state.product.subcategory.id"
                        :disabled="category ? false : true"
                        :error="$store.state.errors.product.subcategory"
                        @clearState="$store.commit('HANDLE_PRODUCT_SUBCATEGORY', new Object({
                            id:'',
                            label:'',
                            value:''
                        }))"
                    >
                    </base-search>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="number"
                        label="Estoque: *"
                        placeholder="Quantidade"
                        :error="$store.state.errors.product.stock"
                        v-model="stock"
                    >
                    </base-input>
                </div>
            </div>
            <!-- 3rd ROW: PRICE, PROFIT AND FINAL PRICE -->
            <div class="row">
                <div class="col-md-4">
                    <base-input
                        type="number"
                        step="0.01"
                        label="Preço de custo (R$):"
                        placeholder="R$"
                        :error="$store.state.errors.product.price"
                        v-model="price"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="number"
                        label="Margem de lucro (%):"
                        step="0.01"
                        placeholder="%"
                        :error="$store.state.errors.product.profit"
                        v-model="profit"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="number"
                        step="0.01"
                        label="Preço final (R$):"
                        placeholder="R$"
                        :error="$store.state.errors.product.finalPrice"
                        v-model="finalPrice"
                    >
                    </base-input>
                </div>
            </div>
            <!-- 4th ROW: DESCRIPTION -->
            <div class="row">
                
                <div class="col-md-12">
                    <base-text-area
                        type="text"
                        label="Descrição:"
                        placeholder="Descreva seu produto aqui"
                        :error="$store.state.errors.product.description"
                        v-model="description"
                    >
                    </base-text-area>
                </div>
            </div>
            <!-- 5th ROW: RADIO BUTTONS - HAS CUSTOM ATTRIBUTES CONTROLLER -->
            <!-- <div class="row py-3">
                <div class="row col-md-12">
                    <span class="col-md-12"> Tem atributos personalizáveis?</span>
                </div>
                <div class="row col-md-12">
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasCustomAttributes"
                            name="yes"
                            :value="fieldsetControllers.customAttributes"
                            label="Sim"
                            @input="(value) => fieldsetControllers.customAttributes = value"
                        >
                        </base-radio>
                    </div>
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasCustomAttributes"
                            name="no"
                            :value="fieldsetControllers.customAttributes"
                            label="Não"
                            @input="(value) => fieldsetControllers.customAttributes = value"
                        >
                        </base-radio>
                    </div>
                </div>
            </div> -->
            <!-- 6th ROW: CUSTOM ATTRIBUTES - COLORS AND SIZE-->
            <!-- <div class="row">
                <div class="col-md-6">
                    <base-select
                        label="Cor predominante:"
                        v-model="color"
                    >
                        <template #options>
                            <option v-for="color, index in $store.state.repositories.product.colors" class="hover-pointer text-capitalize" :key="index" :value="color.label">{{ color.label }}</option>
                        </template>
                    </base-select>
                </div>
                <div class="col-md-6">
                    <base-select
                        label="Tamanho:"
                        v-model="size"
                    >
                        <template #options>
                            <option v-for="size, index in $store.state.repositories.product.sizes" class="hover-pointer text-capitalize" :key="index" :value="size.label">{{ size.label }}</option>
                        </template>
                    </base-select>
                </div>
            </div> -->
            <!-- 7th ROW: CUSTOM ATTRIBUTES - EXPIRATION DATE, LOT NUMBER AND VOLTS -->
            <div class="row py-3">
                <div class="col-md-4">
                    <base-input
                        type="date"
                        label="Data de validade:"
                        placeholder=""
                        :error="$store.state.errors.product.expirationDate"
                        v-model="expirationDate"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="text"
                        label="Lote:"
                        placeholder=""
                        :error="$store.state.errors.product.lotNumber"
                        v-model="lotNumber"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-select
                        label="Voltagem:"
                        :error="$store.state.errors.product.volts"
                        v-model="volts"
                    >
                        <template #options>
                            <option v-for="volt, index in $store.state.repositories.product.volts" :key="index" :value="volt.label">{{ volt.label }}</option>
                        </template>
                    </base-select>
                </div>
            </div>
            <!-- 8th ROW: RADIO BUTTONS - HAS DIMENSIONS CONTROLLER -->
            <!-- <div class="row py-3">
                <div class="row col-md-12">
                    <span class="col-md-12"> Adicionar dimensões?</span>
                </div>
                <div class="row col-md-12">
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasDimensions"
                            name="yes"
                            :value="true"
                            label="Sim"
                            @input="(value) => fieldsetControllers.dimensions = value"
                        >
                        </base-radio>
                    </div>
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasDimensions"
                            name="no"
                            :value="false"
                            label="Não"
                            @input="(value) => fieldsetControllers.dimensions = value"
                        >
                        </base-radio>
                    </div>
                </div>
            </div> -->
            <!-- 9th ROW: DIMENSIONS - HEIGHT, WIDTH AND DEPTH -->
            <div class="row py-3">
                <div class="col-md-3">
                    <base-input
                        type="number"
                        label="Altura (CM):"
                        placeholder="cm"
                        :error="$store.state.errors.product.height"
                        v-model="height"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="number"
                        label="Largura (CM):"
                        placeholder="cm"
                        :error="$store.state.errors.product.width"
                        v-model="width"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="number"
                        label="Profundidade (CM):"
                        placeholder="cm"
                        :error="$store.state.errors.product.depth"
                        v-model="depth"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="number"
                        label="Peso (G)"
                        placeholder="g"
                        :error="$store.state.errors.product.weight"
                        v-model="weight"
                    >
                    </base-input>
                </div>
            </div>
            <!-- 10th ROW: TAGS MULTISELECT -->
            <div class="row">
                <div class="col-md-12">
                    <multiselect
                        label="Tags"
                        :initialCollection="$store.state.repositories.product.tags"
                        @sendNewValue="(value) => tags = value"
                    ></multiselect>
                </div>
            </div>
            <!-- 11th ROW: RELATED PRODUCTS MULTISELECT -->
            <!-- <div class="row">
                <div class="col-md-12">
                    <multiselect
                        label="Produtos relacionados:"
                        :initialCollection="$store.state.repositories.product.relatedProducts"
                        @sendNewValue="(value) => relatedProducs = value"
                    ></multiselect>
                </div>
            </div> -->
            <!-- 12th ROW: PICTURES -->
            <div class="row py-3 mb-22 d-flex flex-column justify-content-between">
                <label class="col-md-12"> Imagens do Produto: </label>
                <div class="pictures-container">
                    <div class="picture-unit-container">
                        <base-picture :order="0"/>
                    </div>
                    <div class="picture-unit-container">
                        <base-picture  :order="1"/>
                    </div>
                    <div class="picture-unit-container">
                        <base-picture  :order="2"/>
                    </div>
                    <div class="picture-unit-container">
                        <base-picture  :order="3"/>
                    </div>
                </div>
            </div>
            <base-button native-type="submit" type="primary" class="btn-fill">
                Salvar
            </base-button>
        </form>
    </card>
</template>
<script>
export default {
    data() {
        return {
            fieldsetControllers:{
                customAttributes:false,
                dimensions:false
            },
        };
    },
    props:{
        type:{
            type:String,
            default:"create"
        },
        id: {
            type: [String, Number],
            default: ''
        }
    },
    methods: {
        async handleProduct() {
            if(this.type === 'create'){
                this.$store.dispatch('CREATE_PRODUCT')
            } else if (this.type === 'edit'){
                await this.$store.dispatch('EDIT_PRODUCT', this.id)
                this.$emit('closeModal')
            }
        },
        handleProductNameError(evt){
            this.$store.commit('HANDLE_ERRORS_PRODUCT_NAME', evt)
        }
    },
    computed:{
        getTitle(){
            if(this.type === 'create'){
                return 'Novo produto'
            } else {
                return 'Produto em edição..'
            }
        },
        name:{
            get(){
                return this.$store.state.product.name
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_NAME', value)
            }
        },
        category:{
            get(){
                return this.$store.state.product.category.label
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_CATEGORY', value)
            }
        },
        subcategory:{
            get(){
                return this.$store.state.product.subcategory.label
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_SUBCATEGORY', value)
            }
        },
        description:{
            get(){
                return this.$store.state.product.description
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_DESCRIPTION', value)
            }
        },
        price:{
            get(){
                return this.$store.state.product.price
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_PRICE', value)
            }
        },
        profit:{
            get(){
                return this.$store.state.product.profit
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_PROFIT', value)
            }
        },
        finalPrice:{
            get(){
                return this.$store.state.product.finalPrice
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_FINAL_PRICE', value)
            }
        },
        weight:{
            get(){
                return this.$store.state.product.dimensions.weight
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_WEIGHT', value)
            }
        },
        stock:{
            get(){
                return this.$store.state.product.stock
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_STOCK', value)
            }
        },
        color:{
            get(){
                return this.$store.state.product.customAttributes.color
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_COLOR', value)
            }
        },
        size:{
            get(){
                return this.$store.state.product.customAttributes.size
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_SIZE', value)
            }
        },
        expirationDate:{
            get(){
                return  this.$store.state.product.customAttributes.expirationDate
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_EXPIRATION_DATE', value)
            }
        },
        lotNumber:{
            get(){
                return this.$store.state.product.customAttributes.lotNumber
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_LOT_NUMBER', value)
            }
        },
        volts:{
            get(){
                return this.$store.state.product.customAttributes.volts
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_VOLTS', value)
            }
        },
        height:{
            get(){
                return this.$store.state.product.dimensions.height
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_HEIGHT', value)
            }
        },
        width:{
            get(){
                return this.$store.state.product.dimensions.width
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_WIDTH', value)
            }
        },
        depth:{
            get(){
                return this.$store.state.product.dimensions.depth
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_DEPTH', value)
            }
        },
        brand:{
            get(){
                return this.$store.state.product.brand.label
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_BRAND', value)
            }
        },
        tags:{
            get(){
                return this.$store.state.product.tags
            },
            set(value){
                this.$store.commit('HANDLE_PRODUCT_TAGS', value)
            }
        }
    }
};
</script>