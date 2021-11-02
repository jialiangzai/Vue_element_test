<template>
  <div>
    <el-button type="primary" size="medium" @click="show = true"
      >打开弹层</el-button
    >
    <!-- 弹层 -->
    <el-dialog
      title="编辑"
      :visible.sync="show"
      width="80%"
      @close="close"
      @open="open"
    >
      <!-- <div slot="footer"> -->
      <!-- 默认插槽 -->
      <span>弹层内容</span>
      <!-- template具名插槽：定义弹层底部的布局 -->
      <template #footer>
        <!-- <span> -->
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
        <!-- </span> -->
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      console.log('关闭')
    },
    open () {
      console.log('开启')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
