<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="666"
      :page-size="6"
      :pager-count="13"
      @current-change="pageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
/** background是否为分页按钮添加背景色 默认false
 * page-size每页显示条目个数，支持 .sync 修饰符 默认为10
 * total总条目数page-count总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则必须使用 total 属性
 *pager-count页码按钮的数量，当总页数超过该值时会折叠大于等于 5 且小于等于 21 的奇数 默认 7 尽量比7大
 * current-page当前页数，支持 .sync 修饰符
 * layout组件布局，子组件名用逗号分隔是String类型sizes, prev, pager, next, jumper, ->, total, slot
 * page-sizes每页显示个数选择器的选项设置 数组加s
 * current-changecurrentPage 改变时会触发当前页
 * */
export default {
  methods: {
    // 翻页
    pageChange (currPage) {
      console.log(`当前翻到第：${currPage}页`)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
