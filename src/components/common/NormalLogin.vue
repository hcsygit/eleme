<template>
  <div style="width:90%;margin:0 auto;">
    <mt-header fixed title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
  
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
   <br>
    <mt-button type="primary" size="large" @click.native="Login">登录</mt-button>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
import { GetCode } from '../../api/api';
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  }, mounted() {

  }, methods: {
    //获取验证码
    handleClick() {
      let para = {
        phonenumber: this.phonenumber
      };
      GetCode({ para }).then((res) => {
        console.log(res);
      });
    },
    //登录
    Login(){
      this.$router.push('/Home');
    }
  }
}
</script>

<style>

</style>
