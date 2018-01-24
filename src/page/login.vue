<template>
  <el-form  ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password"  v-model="password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox  checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="loginForm()">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
  export default{
    data(){
      return{
        username:"",
        password:""
      }
    },
    methods:{
      loginForm(){
        let userInfo = {
          username : this.username,
          password : this.password
        };
        console.log(userInfo);
        if(this.username !=""&&this.password != ""){
          this.$store.commit('updateUserInfo', userInfo);
          setTimeout(()=>{
              this.$router.push("/test");
          },1500)
        }
      }
    }

  }

</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 180px auto;
    border: 2px solid #8492A6;
    width: 350px;
    padding: 35px 35px 15px 35px;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
