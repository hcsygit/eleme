<template>
  <div class="Footer">
      <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="tab1" @click.native="Action(1)">
        <i slot="icon" class="icon iconfont icon-shujuguanlisvg73"></i> 外卖
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="Action(2)">
        <i slot="icon" class="icon iconfont icon-faxian2"></i> 发现
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="Action(3)">
        <i slot="icon" class="icon iconfont icon-dingdan3"></i> 订单
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="Action(4)">
        <i slot="icon" class="icon iconfont icon-wode7"></i>  我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default{
    data(){
        return{
             selected: 'tab1',   
        }
    },
    methods:{
          //跳转页面
          Action(N){
            var self=this;
            this.$store.state.HeaderType=N;
            if(N==1){
               self.$router.push("Home");
            }
            if(N==2){
               self.$router.push("Find");
            }
            if(N==3){
               self.$router.push("Order");
            }
            if(N==4){
              self.$router.push("MySelf");
            }
          }
    }
}
</script>