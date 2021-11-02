<template>
  <div>
    <!-- 当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。 -->
    <!-- 1. 通过el-table的data属性父传子传入列表数据 -->
    <el-table :data="tableData" style="width: 100%">
      <!--2. el-table-column每列数据显示控制=》prop指定显示列表项什么属性/键显示对应的数据 label指定列名  自动遍历-->
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <!-- <el-table-column prop="address" label="地址"> </el-table-column> -->
      <el-table-column label="操作">
        <!-- 默认插槽可以传入自定义结构 -->
        <!-- 如果需要操作数据使用作用域插槽获取组件内部当前行的数据row -->
        <!-- slot-scope="scope"是默认插槽的老式写法等价于#default="scope" -->
        <template #default="{ row }">
          <p>{{ row }}</p>
          <el-button type="danger" @click="delPerson(row.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        phone: '110',
        id: 0
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        phone: '110',
        id: 1
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        phone: '110',
        id: 2
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        phone: '110',
        id: 3
      }]
    }
  },
  methods: {
    delPerson (i) {
      this.tableData.splice(i, 1)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
