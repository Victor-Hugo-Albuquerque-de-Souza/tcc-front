<template>
    <card>
        <!-- TITLE: -->
        <h5 slot="header" class="title">{{ getTitle }}</h5>
        <!-- FORM: -->
        <form @submit.prevent="updateProduct">
            <!-- 1st ROW: NAME AND BRAND -->
            <div class="row">
                <div class="col-md-7">
                    <base-input
                        type="text"
                        label="Nome:"
                        placeholder="ex: Modelo asadelta"
                        v-model="name"
                    >
                    </base-input>
                </div>
                <div class="col-md-5">
                    <base-select
                        label="Fabricante:"
                    >
                        <template #options>
                            <option value="teste1">Teste 1</option>
                            <option value="teste2">Teste 2</option>
                            <option value="teste3">Teste 3</option>
                        </template>
                    </base-select>
                </div>
            </div>
            <!-- 2nd ROW: CATEGORY -->
            <div class="row">
                <div class="col-md-12">
                    <base-select
                        label="Categoria:"
                        v-model="category"
                    >
                        <template #options>
                            <option value="teste1">Teste 1</option>
                            <option value="teste2">Teste 2</option>
                            <option value="teste3">Teste 3</option>
                        </template>
                    </base-select>
                </div>
            </div>
            <!-- 3rd ROW: PRICE, PROFIT AND FINAL PRICE -->
            <div class="row">
                <div class="col-md-4">
                    <base-input
                        type="number"
                        label="Preço de custo:"
                        placeholder="R$"
                        v-model="price"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="number"
                        label="Margem de lucro:"
                        placeholder="%"
                        v-model="profit"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="number"
                        label="Preço final:"
                        placeholder="R$"
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
                        label="Descrição"
                        placeholder="Descreva seu produto aqui"
                        v-model="description"
                    >
                    </base-text-area>
                </div>
            </div>
            <!-- 5th ROW: RADIO BUTTONS - HAS CUSTOM ATTRIBUTES CONTROLLER -->
            <div class="row py-3">
                <div class="row col-md-12">
                    <span class="col-md-12"> Tem atributos personalizáveis?</span>
                </div>
                <div class="row col-md-12">
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasCustomAttributes"
                            name="yes"
                            :value="true"
                            label="Sim"
                            @input="(value) => fieldsetControllers.customAttributes = value"
                        >
                        </base-radio>
                    </div>
                    <div class="col-md-6">
                        <base-radio
                            groupName="hasCustomAttributes"
                            name="no"
                            :value="false"
                            label="Não"
                            @input="(value) => fieldsetControllers.customAttributes = value"
                        >
                        </base-radio>
                    </div>
                </div>
            </div>
            <!-- 6th ROW: CUSTOM ATTRIBUTES - COLORS AND SIZE-->
            <div v-if="fieldsetControllers.customAttributes" class="row">
                <div class="col-md-6">
                    <base-select
                        label="Cores:"

                    >
                        <template #options>
                            <option value="teste1">Teste 1</option>
                            <option value="teste2">Teste 2</option>
                            <option value="teste3">Teste 3</option>
                        </template>
                    </base-select>
                </div>
                <div class="col-md-6">
                    <base-input
                        type="text"
                        label="Tamanho:"
                        placeholder=""
                        v-model="size"
                    >
                    </base-input>
                </div>
            </div>
            <!-- 7th ROW: CUSTOM ATTRIBUTES - MANUFACTURING DATE, LOT NUMBER AND VOLTS -->
            <div v-if="fieldsetControllers.customAttributes" class="row">
                <div class="col-md-4">
                    <base-input
                        type="text"
                        label="Fabricação:"
                        placeholder=""
                        v-model="manufacturingDate"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="text"
                        label="Lote:"
                        placeholder=""
                        v-model="lotNumber"
                    >
                    </base-input>
                </div>
                <div class="col-md-4">
                    <base-input
                        type="text"
                        label="Voltagem:"
                        placeholder=""
                        v-model="volts"
                    >
                    </base-input>
                </div>
            </div>
            <!-- 8th ROW: RADIO BUTTONS - HAS DIMENSIONS CONTROLLER -->
            <div class="row py-3">
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
            </div>
            <!-- 9th ROW: DIMENSIONS - HEIGHT, WIDTH AND DEPTH -->
            <div v-if="fieldsetControllers.dimensions" class="row">
                <div class="col-md-3">
                    <base-input
                        type="text"
                        label="Altura:"
                        placeholder="cm"
                        v-model="height"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="text"
                        label="Largura:"
                        placeholder="cm"
                        v-model="width"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="text"
                        label="Profundidade:"
                        placeholder="depth"
                        v-model="depth"
                    >
                    </base-input>
                </div>
                <div class="col-md-3">
                    <base-input
                        type="text"
                        label="weight"
                        placeholder="depth"
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
                        @sendNewValue="(value) => tags = value"
                    ></multiselect>
                </div>
            </div>
            <base-button native-type="submit" type="primary" class="btn-fill">
                Save
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
                repository:{
                    brands:[],
                    tags:[]
                },
                category:""
            };
        },
        props:{
            type:{
                type:String,
                default:"create"
            }
        },
        methods: {
            updateProfile() {
            // alert('Your data: ' + JSON.stringify(this.user));
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
                    return this.$store.getters.GET_PRODUCT_NAME
                },
                set(value){
                    this.$store.commit('HANDLE_PRODUCT_NAME', value)
                }
            },
            // category:{
            //     get(){

            //     },
            //     set(){

            //     }
            // },
            description:{
                get(){

                },
                set(){

                }
            },
            price:{
                get(){

                },
                set(){

                }
            },
            profit:{
                get(){

                },
                set(){

                }
            },
            finalPrice:{
                get(){

                },
                set(){

                }
            },
            weight:{
                get(){

                },
                set(){

                }
            },
            availability:{
                get(){

                },
                set(){

                }
            },
            featured:{
                get(){

                },
                set(){

                }
            },
            color:{
                get(){

                },
                set(){

                }
            },
            size:{
                get(){

                },
                set(){

                }
            },
            manufacturingDate:{
                get(){

                },
                set(){

                }
            },
            lotNumber:{
                get(){

                },
                set(){

                }
            },
            volts:{
                get(){

                },
                set(){

                }
            },
            height:{
                get(){

                },
                set(){

                }
            },
            width:{
                get(){

                },
                set(){

                }
            },
            depth:{
                get(){

                },
                set(){

                }
            },
            brandName:{
                get(){

                },
                set(){

                }
            },
            brandUuid:{
                get(){

                },
                set(){

                }
            },
            tags:{
                get(){
                    
                },
                set(){

                }
            }
            
        }
    };
</script>