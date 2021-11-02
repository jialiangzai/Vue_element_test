<template>
  <!-- 卡片 -->
  <el-card shadow="always" :body-style="{ padding: '20px' }">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="dep" label="部门" width="200"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <!-- 当前行的数据row -->
        <template #default="{ row }">
          <p>{{ formSex(row.sex) }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            type="primary"
            @click="$router.push(`/home/detail/${row.id}`)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      @current-change="currentChange"
      style="margin-top: 20px"
    >
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // {
      //   name: '王小虎',
      //   dep: '总裁办',
      //   sex: 1
      // }, {
      //   name: '王小虎',
      //   dep: '总裁办',
      //   sex: 2
      // }, {
      //   name: '王小虎',
      //   dep: '总裁办',
      //   sex: 1
      // }, {
      //   name: '王小虎',
      //   dep: '总裁办',
      //   sex: 2
      // }
      tableData: []
    }
  },
  methods: {
    // 性别
    formSex (val) {
      switch (val) {
        case 1:
          return '男'
        default:
          return '女'
      }
    },
    // 切换页码 ===>在每次切换页面的时候去遍历生成新的数据追加到tableData
    createData (page) {
      console.log('当前的页码为', page)
      const tableData = []
      for (let index = 0; index < 10; index++) {
        tableData.push({
          id: index,
          name: '赛' + (page || 1),
          dep: '厨师',
          sex: Math.floor(Math.random() * 2 + 1)
        })
      }
      this.tableData = tableData
      console.log(tableData)
    },
    // 切换页面
    currentChange (page) {
      this.createData(page)
    }

  },
  // 初始化也会执行一次
  created () {
    this.createData()
  }
}
</script>

<style lang="less" scoped>
</style>
