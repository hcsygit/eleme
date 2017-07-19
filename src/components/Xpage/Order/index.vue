<template>
    <div class="Order">
         <div class="Title"> 
             我的订单
         </div>
         <v-panel :HData="HData">

         </v-panel>
    </div>  
</template>

<script>
import vPanel from '../../common/panel.vue';
export default {
  components:{
      vPanel
  },data(){
      return{
          HData:[
              {ImgSrc:'../../../../static/img/logo.png',Title:'新白鹿（西湖银泰店）',Status:'订单已完成',Time:'2017-07-08 17:50',Name:'烤鱼',Price:'74.0'},
              {ImgSrc:'../../../../static/img/logo.png',Title:'新白鹿（西湖银泰店）',Status:'订单已完成',Time:'2017-07-07 17:50',Name:'水煮鱼',Price:'84.0'},
              {ImgSrc:'../../../../static/img/logo.png',Title:'新白鹿（西湖银泰店）',Status:'订单已完成',Time:'2017-07-08 17:50',Name:'烤鱼',Price:'74.0'},
              {ImgSrc:'../../../../static/img/logo.png',Title:'新白鹿（西湖银泰店）',Status:'订单已完成',Time:'2017-07-07 17:50',Name:'水煮鱼',Price:'84.0'}
          ]
      }
  }
}
</script>

<style lang="less">
   .Order{
       .Title{
           height: 2rem;
           line-height: 2rem;
           text-indent: 10px;
           font-weight: bold;
           text-align: left;
       }
   }
</style>
