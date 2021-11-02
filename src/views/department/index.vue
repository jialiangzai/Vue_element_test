<template>
  <div>
    <div>放一个树形组件（作业）</div>
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
      data: [
        {
          // 总裁办
          label: '总裁办',
          children: [
            {
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1',
                children: []
              }]
            }
          ]
        },
        { // 总秘办
          label: '总秘办',
          children: [
            {
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1',
                children: []
              }]
            },
            {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1',
                children: []
              }]
            }
          ]
        },
        { // 财务部
          label: '财务部',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                  children: []
                }

              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                  children: []
                }
              ]
            }
          ]
        }
      ],
      // 自定义树形数据结构（自定义属性名）左侧不可改
      defaultProps: {
        label: 'label',
        children: 'children'
      }
    }
  },
  methods: {
    handleNodeClick (datas, n) {
      console.log('节点所对应的对象、节点对应的 Node', datas, n)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
