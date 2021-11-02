<template>
  <el-row class="loginBox" type="flex" justify="center" align="middle">
    <el-col class="formBox" :span="12">
      <!-- 表单 -->
      <el-form ref="form" :model="formd" label-width="80px" :rules="rules">
        <!-- 表单项 手机号-->
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="formd.mobile"></el-input>
        </el-form-item>
        <!-- 表单项 验证码 -->
        <el-form-item label="验证码" prop="code">
          <el-input v-model="formd.code"></el-input>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    // 定义自定义校验函数（复杂校验）
    /**
     * rule 校验规则
     * value 表单项输入的值
     * callback（函数）=》决定是否通过校验=> 1. 校验失败调用callback(new Error('错误说明')) 2. 通过=》 callback()
     */
    const validateMobile = (rule, value, callback) => {
      if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
        callback(new Error('手机号格式错误！'))
      } else {
        callback()
      }
    }
    // 返回定义变量
    return {
      // 表单数据
      formd: {
        // 手机号
        mobile: '',
        // 验证码
        code: ''
        // other: ''
      },
      // 表单数据校验规则: 1. 校验规则的属性名和要校验的表单数据的属性名一样
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        code: [
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 登录
    async onSubmit () {
      // console.log(this.$refs.form.validate())
      // 写法1
      // this.$refs.form.validate((res) => {
      //   console.log(res)
      //   if (res) {
      //     // 校验通过
      //     console.log('登录')
      //   }
      // })
      // 写法2(推荐)
      try {
        await this.$refs.form.validate()
        // 校验通过=》执行到这里
        console.log('登录', this.formd)
        this.$router.push('/home')
      } catch (e) {
        // 校验不通过走到这里
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loginBox {
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
      circle at 85% 1%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 96%,
      transparent 96%,
      transparent 100%
    ),
    radial-gradient(
      circle at 14% 15%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 1%,
      transparent 1%,
      transparent 100%
    ),
    radial-gradient(
      circle at 60% 90%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 20%,
      transparent 20%,
      transparent 100%
    ),
    radial-gradient(
      circle at 79% 7%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 78%,
      transparent 78%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 65%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 52%,
      transparent 52%,
      transparent 100%
    ),
    linear-gradient(135deg, rgb(37, 56, 222), rgb(96, 189, 244));
  .formBox {
    border-radius: 20px;
    padding: 20px;
    background: #fff;
  }
}
</style>
