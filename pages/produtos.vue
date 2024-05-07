<template>
    <div class="row">
      <div class="col-md-8"><edit-product-form> </edit-product-form></div>
      <!-- <div class="col-md-4"><user-card> </user-card></div> -->
    </div>
  </template>
  <script>
  import EditProductForm from '../components/Product/EditProductForm';
  import UserCard from '../components/UserProfile/UserCard.vue';
  
  export default {
    name: 'user',
    components: {
      EditProductForm,
      UserCard
    },
    async asyncData({store}) {
      await store.dispatch('GET_ALL_RELEVANT_ENTRIES')
    },
  };
  </script>
  <style></style>
  