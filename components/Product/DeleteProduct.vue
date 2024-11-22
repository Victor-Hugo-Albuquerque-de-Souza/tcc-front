<template>
    <div class="wrapper">
        <div class="modal-container">
            <card>
                <div class="form-container">
                    <div class="box mb-3">
                        Tem certeza que deseja apagar esse produto?
                    </div>

                    <div class="d-flex justify-content-center">
                        <span class="text-white mr-3" @click="deleteProduct">Sim</span>
                        <span class="text-white" @click="$emit('closeModal')">Não</span>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
import EditProductForm from './EditProductForm.vue'
export default {
    name: 'ModalProduct',
    props:{
        id: {
            type: [String, Number],
            default: ''
        }
    },
    components: {
        EditProductForm
    },
    async mounted() {
        await this.$store.dispatch('GET_ALL_RELEVANT_ENTRIES')
        await this.$store.dispatch('GET_PRODUCT_BY_ID', this.id)
        const customAttributes = this.$store.state.product.customAttributes
        const dimensions = this.$store.state.product.dimensions
    },
    methods:{
        async deleteProduct(){
            await this.$store.dispatch('DELETE_PRODUCT', this.id)
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>
    .wrapper {
        width: 0px;
        height: 0px;
    }

    .modal-container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com opacidade (pode ser alterada conforme necessário) */
        backdrop-filter: blur(10px); /* Aplica o desfoque ao fundo */
        -webkit-backdrop-filter: blur(10px); /* Para compatibilidade com o Safari */
    }

    .form-container {
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: fit-content;
        border-radius: 0.3125rem;
    }
    .form-container::-webkit-scrollbar {
        display: none;
    }

    .card {
        width: fit-content !important;
        margin-bottom: 0rem !important;
    }

    .box{
        width: fit-content;
    }

    span:hover{
        cursor: pointer;
    }
</style>    