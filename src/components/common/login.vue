<template>
  <div style="width:90%;margin:0 auto;">
    <mt-header fixed title="登录">
      <router-link to="/NormalLogin" slot="right">
        密码登录
      </router-link>
    </mt-header>
    <validator>
      <form novalidate>
        <div class="HdisplayFlex" style="height:48px;">
          <div style="line-height:48px;width:2.9rem;font-size:16px;text-align:center;marign-left:10px;">
            &nbsp;&nbsp;&nbsp;&nbsp;手机号
          </div>
          <div class="Hflex" style="line-height:48px;">
            <input type="text" style="line-height:40px;border:0;width:3.5rem;" v-model="phonenumber">
            <button type="button" @click="handleClick" style="height:33px;border-radius:3px; color:#fff; border:1px solid #46aaff;background-color:#46aaff;padding:0 5px;">获取验证码</button>
          </div>
        </div>
        <mt-field label="验证码" placeholder="请输入验证码" type="text" v-model="captcha"></mt-field>
        <br>
        <div style="font-size:12px;">温馨提示：登录时将自动注册，请代表您同意《用户服务协议》</div>
        <br>
        <mt-button type="primary" size="large" @click.native="Login">登录</mt-button>
      </form>
    </validator>
    <mt-tabbar fixed>
      <mt-tab-item id="tab1">
        <i slot="icon" class="icon iconfont icon-weixin-"></i> 微信
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <i slot="icon" class="icon iconfont icon-QQ"></i> QQ
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <i slot="icon" class="icon iconfont icon-weibo3"></i> 微博
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <i slot="icon" class="icon iconfont icon-taobaorenzheng"></i> 淘宝
      </mt-tab-item>
    </mt-tabbar>
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
      captcha: '',
      phonenumber: '',
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
    }
    //登录
    , Login() {

      this.$store.state.token = "132123123131";
      this.$router.push('/Home');
    }
  }
}
</script>

<style>
header {
  height: 50px !important;
}

.mint-cell {
  border-bottom: 1px solid #cccccc;
}
</style>
