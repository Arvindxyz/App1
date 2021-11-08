<template>
  <table>
    <t-header :header="tableHeaders"/>
    <t-row
      v-for="(row, $index) in tableRows"
      :key="$index"
      :row="row"
    />
  </table>
</template>
<script>
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";
export default {
  components: {
    THeader: TableHeader,
    TRow: TableRow,
  },
  props:{
      tableData:{
          type:Array,
          required:true
      },
  },
  computed: {
    tableHeaders() {
      return Object.keys(this.tableData[0]).map((header, index) => {
        return {
          index: index,
          identifier: header,
        };
      });
    },
    tableRows() {
      return this.tableData.map((obj, idx) => {
        return Object.keys(obj).map((key, idx2) => {
          return {
            key: key,
            value: Object.values(obj)[idx2],
            idx: idx,
          };
        });
      });
    },
  },
  methods:{
    
  }
};
</script>
<style scoped>
table {
  width: 80%;
  border-collapse: separate;
  border: 1px solid whitesmoke;
  box-shadow: 0px 0px 20px 12px whitesmoke;
  td {
    font-size: 15px;
    color: gray;
    line-height: 1.4;
    padding: 30px;
    /* width:calc(100% / 7 * 2);
    */  
  }
  th {
    td {
      display: flex;
      text-transform: capitalize;
    }
  }
  tr {
    td {
      text-align: left;
    }
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}
</style>
