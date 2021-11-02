<template>
  <div>
    <!-- data展示数据 -->
    <!-- props配置选项object -->
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 树形组件默认数据结构
      // tree组件渲染节点title默认使用的是数据中的label属性
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      // 自定义树形数据结构（自定义属性名）左侧不可改
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    // node-click节点被点击时的回调data 当前点击的节点数据
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
