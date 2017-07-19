<template>
  <div class="Hindex">
    <!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
      </mt-search> -->
    <div class="Hsearch">
      <input type="text" placeholder="搜索">
    </div>
    <ul class="HotGoods">
      <li v-for="(v,i) in HotGoods">{{v}}</li>
    </ul>
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <ul class="GoodsType">
          <li v-for="(v,i) in GoodsType">
            <div v-html="v.Img"></div>{{v.Name}}</li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul class="GoodsType">
          <li v-for="(v,i) in GoodsType">
            <div v-html="v.Img"></div>{{v.Name}}</li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <div class="HBack">
  
    </div>
    <mt-cell title="推荐商家"></mt-cell>
    <ul class="IndexMain">
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
      <li>
        <img src="http://bpic.588ku.com/element_origin_min_pic/16/08/27/1557c140c492b94.jpg">
        <div>
          <div class="TopTitle">
            援助水电费</div>
          <div>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            <i class="icon iconfont icon-gray-star"></i>
            &nbsp;&nbsp;月售67单
          </div>
          <div>
            <i class="icon iconfont icon-jian1"></i>&nbsp;&nbsp;满20减10
          </div>
          <div>
            <i class="icon iconfont icon-xin"></i>&nbsp;&nbsp;新用户下单立减
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      HotGoods: ["奶茶", "一点点"],
      selected: "",
      GoodsType: [
        { Img: "<i class='icon iconfont icon-weibiaoti-1-01'></i>", Name: "美食" },
        { Img: "<i class='icon iconfont icon-xiawucha'></i>", Name: "下午茶" },
        { Img: "<i class='icon iconfont icon-gouwu'></i>", Name: "商超便利" },
        { Img: "<i class='icon iconfont icon-shuguogou1'></i>", Name: "果蔬生鲜" },
        { Img: "<i class='icon iconfont icon-canpinhuizhunshisongda'></i>", Name: "准时达" },
        { Img: "<i class='icon iconfont icon-wucan'></i>", Name: "午餐" },
        { Img: "<i class='icon iconfont icon-hanbao'></i>", Name: "汉堡薯条" },
        { Img: "<i class='icon iconfont icon-xianhualipin1'></i>", Name: "鲜花" }]
    }
  }
}
</script>
<style lang="less">
.Hsearch {
  background-color: #26a2ff;
  padding: 4px 6px;
  input {
    width: 90%;
    margin: 0 auto;
    height: 28px;
    text-indent: 7px;
    border: 0px;
    border-radius: 3px;
  }
}
</style>
<style>
.mint-searchbar {
  background-color: #26a2ff;
}

.mint-searchbar-cancel {
  color: #fff;
}

.Hindex .HotGoods {
  overflow: hidden;
  *zoom: 0;
  background-color: #26a2ff;
  padding: 0 10px;
}

.Hindex .HotGoods li {
  padding: 3px 5px;
  color: #fff;
  float: left;
  font-size: 0.6em;
  vertical-align: middle;
  cursor: pointer;
}

.mint-swipe-items-wrap {
  height: 140px;
}

.GoodsType li {
  float: left;
  width: 25%;
  height: 60px;
  padding: 5px 0;
  text-align: center;
}

.GoodsType li div {
  padding: 2px 0;
}

.IndexMain li {
  padding: 5px 3% 0 3%;
  text-align: left;
  text-indent: 10px;
  overflow: hidden;
  *zoom: 0;
  border-bottom: 1px solid #cccccc;
}

.IndexMain li:hover {
  background-color: #cccccc;
}

.IndexMain li img {
  width: 1.48rem;
  height: 1.48rem;
  float: left;
}

.IndexMain li>div {
  float: left;
}

.IndexMain li>div>div {
  padding: 3px 0;
}

.IndexMain .TopTitle {
  font-size: 0.5rem;
  font-weight: bold;
}
</style>
