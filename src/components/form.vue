<template>
  <!-- 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件 -->
  <!-- label-width="80px"表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。-->
  <!-- :rules属性开启校验规则右侧可自定义  model表单数据对象 对象格式-->
  <el-form ref="form" :model="formd" label-width="80px" :rules="rules">
    <!-- 表单项 -->
    <!-- 手机号 -->
    <el-form-item label="手机号" prop="mobile">
      <el-input v-model="formd.mobile"></el-input>
    </el-form-item>
    <!-- 验证码 -->
    <el-form-item label="验证码" prop="code">
      <el-input v-model="formd.code"></el-input>
    </el-form-item>
    <el-form-item label="特别说明" >
      <el-input v-model="formd.other"></el-input>
    </el-form-item>
    <!-- 提交 -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {

  data () {
    // 定义自定义校验函数（复杂校验）data return返回之前
    /**
       * rule 校验规则 可以不穿单必须要有不能省略
       * value 表单项输入的值
       * callback（函数）=》决定是否通过校验=> 1. 校验失败调用callback(new Error('错误说明')) 2. 通过=》 callback()
       * var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }else {
            callback();
          }
       */
    const validateMobile = (rules, value, callback) => {
      // 不通过
      if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
        callback(new Error('手机号格式错误！'))
      } else {
        // 通过
        callback()
      }
    }

    return {
      // model表单数据对象 对象格式
      formd: {
        mobile: '',
        code: '',
        // 其他
        other: ''
      },
      // 表单校验 对象 正则 函数
      // 表单数据校验规则: 1. 校验规则的属性名和要校验的表单数据的属性名一样
      rules: {
        mobile: [
          // {规则，不通过时的信息,触发校验的方式}
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ],
        code: [
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      // console.log('提交了')
      // 用户并没有验证而是直接点击提交  -----获取到ref的组件的实例找到表单数据对象.validate
      // console.log(this.$refs.form.validate())// 返回promise对象
      try {
        // validate任一表单项被校验后触发------>被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）
        await this.$refs.form.validate()
      } catch (error) {
        console.log(error)
      }
    },
    // 重置 只能处理校验的表单控件/输入框
    resetForm () {
      this.formd.other = ''
      this.$refs.form.resetFields() // 这个方法不光可以清理校验痕迹还可以恢复表单默认数据
    }
  }
  /** 1.表单数据对象 获取data中  在form根组件中用model属性表单数据对象 对象格式 其中的input表单控件用v-model双向数据绑定
   * 2. 校验规则
   *  基础校验：为form根组件添加:rules属性开启校验规则=右侧可自定义左侧固定；
   *            data中写表单数据校验规则:校验规则的属性名和要校验的表单数据的属性名一样；
   *            rules是对象，键为校验的名字，值为数组，可存放多条校验规则， {规则，不通过时的信息,触发校验的方式}，从上到下执行；
   *            在form的Form-Item子组件添加prop:"xxxxx" 使用校验规则 名字就是rules对象的键
   * 函数(复杂)校验:1.定义自定义校验函数（复杂校验）并存储到一个变量中 data return返回之前
   *               2. 函数三个参数
   *                                rule 校验规则 可以不穿单必须要有不能省略
   *                                value 表单项输入的值
   *                                 callback（函数)决定是否通过校验=> 1. 校验失败调用callback(new Error('错误说明')) 2. 通过=》 callback()
   *              3. 自定义校验 callback 必须被调用
   *              4.绑定到校验规则中{ validator: 存储的变量名, trigger: '触发方式' }
   *              5.在form的Form-Item子组件添加prop:"xxxxx" 使用校验规则 名字就是rules对象的键
   * */
}
</script>

<style lang="less" scoped>
</style>
