<template>
<div>
  <el-button @click="open">打开</el-button>
  <el-dialog :visible.sync="dialogVisible" width="50%">
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
  </el-table>
  </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'table-check',
  data () {
    return {
      dialogVisible: false,
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 1,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 1,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 0,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 1,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 0,
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 0,
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          flag: 1,
        }],
        multipleSelection: []
      }
  },
  methods: {
    open () {
      this.dialogVisible = true
      this.tableData3.forEach((items, index) => {
        if (items.flag === 0) {
          this.$nextTick(() => {
            this.$refs.multipleTable.toggleRowSelection(this.tableData3[index],true)
          })
        }
      })
      
    }
  }
}
</script>
