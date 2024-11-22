<template>
  <div class="row">
    <div class="col-lg-7">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Tabela de Registros de {{ entityTable.selected }}</h4>
        <el-table :data="$store.state.repositories.dataTable.dashboard" :show-overflow-tooltip="true">
          <el-table-column
            min-width="150"
            sortable
            label="Nome"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :sort-method="sortMethodPrice"
            label="Preço"
            property="price"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            :sort-method="sortMethodProfit"
            label="Margem de lucro"
            property="profit"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Estoque"
            property="stock"
          ></el-table-column>
          <el-table-column label="Ações">
            <template slot-scope="scope">
              <div style="display: flex;">
                <!-- Botão Editar -->
                <div @click="handleEdit(scope.row)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
  
                </div>
                <!-- Botão Excluir -->
                <div @click="handleDelete(scope.row)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </card>
    </div>
    <modal-product
      v-if="product.hasEditProductModal"
      :id="product.selectedProductId"
      @closeModal="closeModal"
    ></modal-product>
    <delete-product
      v-if="product.hasDeleteProductModal"
      :id="product.selectedProductId"
      @closeModal="closeDeleteModal"
    ></delete-product>
  </div>
</template>
<script>
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import TaskList from '@/components/Dashboard/TaskList';
import ModalProduct from '~/components/Product/ModalProduct.vue';
import { Table, TableColumn } from 'element-ui';
import DeleteProduct from '~/components/Product/DeleteProduct.vue';

export default {
  name: 'dashboard',
  components: {
    LineChart,
    ModalProduct,
    DeleteProduct,
    BarChart,
    TaskList,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park'
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten'
        }
      ],
      entityTable:{
        selected: 'Produtos'
      },
      product:{
        hasEditProductModal: false,
        hasDeleteProductModal: false,
        selectedProductId: 0
      },
      loading: true
    };
  },
  mounted(){
    this.loading = true
    this.$store.dispatch('GET_ALL_PRODUCTS')
    this.loading = false
  },
  async asyncData({store}){
    await store.commit('CLEAR_PRODUCT_STATES')
  },
  methods:{
    handleEdit(row) {
      this.product.selectedProductId = row.id
      this.product.hasEditProductModal = true
    },
    handleDelete(row) {
      this.product.selectedProductId = row.id
      this.product.hasDeleteProductModal = true
    },
    async closeModal(){
      console.log('chegou no close modal')
      this.product.hasEditProductModal = false
      this.product.hasDeleteProductModal = false
      this.$store.dispatch('GET_ALL_PRODUCTS')
    },
    async closeDeleteModal(){
      this.product.hasEditProductModal = false
      this.product.hasDeleteProductModal = false
      this.$store.dispatch('GET_ALL_PRODUCTS')
    },
    sortMethodProfit(a, b) {
      const formattedA = a.profit.split("%")[0]
      const formattedB = b.profit.split("%")[0]
      return Number(formattedA) - Number(formattedB)
    },
    sortMethodPrice(a, b) {
      const formattedA = a.price.split(" ")[1]
      const formattedB = b.price.split(" ")[1]
      return Number(formattedA) - Number(formattedB)
    },
  }
}
</script>

<style>
  .el-table th.el-table__cell{
    background-color: transparent !important;
  }

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
</style>
