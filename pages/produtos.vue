<template>
    <div class="row">
      <div class="col-md-8"><edit-product-form> </edit-product-form></div>
    </div>
  </template>
  <script>
  import EditProductForm from '../components/Product/EditProductForm';
  
  export default {
    name: 'user',
    components: {
      EditProductForm
    },
    async asyncData({store}) {
      await store.commit('CLEAR_PRODUCT_STATES')
      await store.dispatch('GET_ALL_RELEVANT_ENTRIES')
    },
  };
  </script>
  <style></style>
  