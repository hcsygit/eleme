<template>
  <div class="Myself">
    <div class="Top" v-for="(v,i) in MyInfo">
      <div class="Top-L">
        <img :src="v.Src">
      </div>
      <div class="Top-R">
        <h2>{{v.Name}}</h2>
        <div>
          <i class="icon iconfont icon-icon1460191894852"></i>{{v.Phone}}</div>
        <i class="icon iconfont icon-gengduo"></i>
      </div>
    </div>
    <ul v-cloak class="HdisplayFlex">
      <li class="Hflex">{{TwoData[0].money}}
        <div>钱包</div>
      </li>
      <li class="Hflex">{{TwoData[0].yh}}
        <div>优惠</div>
      </li>
      <li class="Hflex">{{TwoData[0].JF}}
        <div>积分</div>
      </li>
    </ul>
    <br>
    <mt-cell title="收货地址" is-link>
       <span></span>
       <img slot="icon" src="../../../../static/img/定位.png" width="24" height="24"> 
    </mt-cell>
    <mt-cell title="我的收藏" is-link>
       <span></span>
       <img slot="icon" src="../../../../static/img/聚收藏.png" width="24" height="24"> 
    </mt-cell>
    <br>
    <mt-cell title="推荐有奖" is-link>
       <span>5元现金</span>
       <img slot="icon" src="../../../../static/img/推荐.png" width="24" height="24"> 
    </mt-cell>
    <mt-cell title="积分商城" is-link>
       <span>0元好物在这里</span>
       <img slot="icon" src="../../../../static/img/便利店.png" width="24" height="24"> 
    </mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MyInfo: [{
        Src: '../../../../static/img/433434.png',
        Name: '皇朝思瑜',
        Phone: '1575732121'
      }],
      TwoData: [{
        money: 22,
        yh: 2,
        JF: 2345,
      }]
    }
  }
}
</script>

<style lang="less">
.Myself {
  .Top {
    height: 2.5rem;
    padding: 0 10px;
    background-color: #26a2ff;
    padding-top: 0.5rem;
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    .Top-L {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: left;
      margin-right: 1em;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .Top-R {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      text-align: left;
      min-width: 0;
      color: #fff;
      h2 {
        font-weight: bold;
        font-size: 2em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 5rem;
        padding-top: 5px;
      }
      div {
        padding: 5px 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 5rem;
        font-size: 1.2em;
      }
      .icon-gengduo {
        float: right;
        margin-top: -1rem;
      }
    }
  }
}

.Hflex {
  font-size: 0.5rem;
  padding: 1rem 0;
  box-sizing: border-box;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  
}
.Hflex:hover {
    background-color: #f1f1f1;
  }
.mint-cell-title{
  text-align: left;
}
</style>
