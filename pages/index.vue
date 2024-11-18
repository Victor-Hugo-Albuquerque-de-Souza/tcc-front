<template>
  <div class="row">
    <div class="col-lg-7">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Tabela de Registros de {{ entityTable.selected }}</h4>
        <el-table :data="$store.state.repositories.dataTable.dashboard" @row-click="handleRowClick" :show-overflow-tooltip="true">
          <el-table-column
            min-width="150"
            sortable
            label="Nome"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Preço"
            property="price"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Margem de lucro"
            property="profit"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Estoque"
            property="stock"
          ></el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>
<script>
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import TaskList from '@/components/Dashboard/TaskList';
import { Table, TableColumn } from 'element-ui';

export default {
  name: 'dashboard',
  components: {
    LineChart,
    BarChart,
    TaskList,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
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
      }
    };
  },
  mounted(){
    this.$store.dispatch('GET_ALL_PRODUCTS')
  },
  methods:{
    handleRowClick(row, column, event) {
      console.log('Linha clicada:', row);
    }
  }
}
</script>

<style>
  .el-table th.el-table__cell{
    background-color: transparent !important;
  }
  .el-table__row {
    cursor: pointer;
  }
</style>
