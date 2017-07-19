<template>
  <div class="Find">
    <ul class="First">
      <li>
        <div>
          <p>积分商城</p>
          <p>0元好物在这里！</p>
        </div>
        <div>
          <i class="icon iconfont icon-food"></i>
        </div>
      </li>
      <li>
        <div>
          <p>积分商城</p>
          <p>0元好物在这里！</p>
        </div>
        <div>
          <i class="icon iconfont icon-food"></i>
        </div>
      </li>
      <li>
        <div>
          <p>积分商城</p>
          <p>0元好物在这里！</p>
        </div>
        <div>
          <i class="icon iconfont icon-food"></i>
        </div>
      </li>
      <li>
        <div>
          <p>积分商城</p>
          <p>0元好物在这里！</p>
        </div>
        <div>
          <i class="icon iconfont icon-food"></i>
        </div>
      </li>
    </ul>
    <mt-swipe :auto="9000" style="width:100%; height:2rem;">
      <mt-swipe-item style="width:100%; height:2rem;">
        <img src="../../../../static/img/yhqgg.png" style="width:100%; height:2rem;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../../static/img/yhqgg.png" style="width:100%; height:2rem;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../../static/img/yhqgg.png" style="width:100%; height:2rem;">
      </mt-swipe-item>
    </mt-swipe>
    <div style="width:100%; height:2rem;text-align:center;line-height:2rem; font-weight: bold">
          <i class="icon iconfont "></i>天天特价
    </div>
    <ul class="Two">
      <li>
          <img src="../../../../static/img/11.png">
      </li>
      <li>
          <img src="../../../../static/img/22.png">
      </li>
      <li>
          <img src="../../../../static/img/33.png">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.mint-swipe-items-wrap {
  height: 2rem;
}
</style>
<style lang='less'>
.Find {
  ul.First{
    overflow: hidden;
    *zoom: 0;
    li {
      width: 5rem;
      float: left;
      padding: 3px 0;
      height: 2rem;
      box-sizing: border-box;
      border: 0.5px solid #cccccc;
      div {
        margin-left: 10px;
        float: left;
        padding: 0.5rem 0;
        i {
          font-size: 1.05rem;
        }
        p {
          margin-top: 0.1rem;
        }
      }
    }
  }
  .Two{
     li{
       width:29.3%;
       margin-left: 3%;
       height: 5.27rem;
       float:left;
       img{
         width:100%;height: 100%;
       }
     }
  }
}
</style>
