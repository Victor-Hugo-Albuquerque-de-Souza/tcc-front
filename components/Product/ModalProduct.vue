<template>
    <div class="wrapper">
        <div class="modal-container">
            <div class="form-container">
                <edit-product-form
                    ref="productForm"
                    :id="id"
                    type="edit"
                    @closeModal="$emit('closeModal')"
                ></edit-product-form>
            </div>
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
    data(){
        return {
            loading: false
        }
    },
    components: {
        EditProductForm
    },
    async mounted() {
        this.loading = true
        await this.$store.dispatch('GET_ALL_RELEVANT_ENTRIES')
        await this.$store.dispatch('GET_PRODUCT_BY_ID', this.id)
        this.loading = false
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
        width: 37.5rem;
        height: 31.25rem;
        overflow-y: auto;
        border-radius: 0.3125rem;
    }
    .form-container::-webkit-scrollbar {
        display: none;
    }

    .card {
        margin-bottom: 0rem !important;
    }
</style>    