<template>
  <div class="hello">
    <article class="article">
    <!-- 轮播图 -->
    <!-- <section class="focus">
    <div class="addWrap">
      <div class="swipe" id="mySwipe" style="visibility: visible;">
        <div class="swipe-wrap" style="width: 2250px;"></div>
      </div>
      <ul id="position" class="focusUl" style="color: transparent;cursor: pointer"></ul>
    </div>
    &lt;!&ndash;
    <img src="picture/focus.png" class="index_img" />
    &ndash;&gt;
  </section>
  -->
  <section class="focus">
    <div class="addWrap" id="slideBox">
      <div class="swipe bd" id="mySwipe" style="visibility: visible;">
        <div class="swipe-wrap" style="width: 2250px;">
          <!--以下为渲染图片的部分-->
          <div data-index="0" style="width: 375px; left: 0px; transition-duration: 300ms; transform: translate(-375px, 0px) translateZ(0px);">
            <a href="#">
              <img class="img-focus" src="images/guangfazhenqingkah5.jpg" width="100%"></a>
          </div>
          <div data-index="1" style="width: 375px; left: -375px; transition-duration: 300ms; transform: translate(-375px, 0px) translateZ(0px);">
            <a href="#">
              <img class="img-focus" src="images/changlong.jpg" width="100%"></a>
          </div>
          <div data-index="2" style="width: 375px; left: -750px; transition-duration: 300ms; transform: translate(-375px, 0px) translateZ(0px);">
            <a href="#">
              <img class="img-focus" src="images/huaxiayinhang.jpg" width="100%"></a>
          </div>
          <div data-index="3" style="width: 375px; left: -1125px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);">
            <a href="#">
              <img class="img-focus" src="images/fuqiantalang.jpg" width="100%"></a>
          </div>
        </div>
      </div>
      <div class="hd">
        <ul id="position" class="focusUl" style="color: transparent;cursor: pointer">
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li cur"></li>
        </ul>
      </div>

    </div>
    <!-- <img src="picture/focus.png" class="index_img" />
    -->
  </section>
  <!-- 导航五模块 -->
  <nav class="navList">
    <ul>
      <li data-tap="holidayInfo">
        <a href="#">
          <img src="images/msite_vacation.jpg" class="index_nav">
          <p class="colra navP">跟团游</p>
        </a>
      </li>
      <li data-tap="freeInfo">
        <a href="#">
          <img src="images/msite_flight.jpg" class="index_nav">
          <p class="colra navP">自助游</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="images/msite_hotel.jpg" class="index_nav">
          <p class="colra navP">酒店</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="images/msite_ship.jpg" class="index_nav">
          <p class="colra navP">邮轮</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="images/msite_ticket.jpg" class="index_nav">
          <p class="colra navP">门票</p>
        </a>
      </li>
    </ul>
  </nav>
  <!-- 热门线路 -->
  <section class="subjectList" style="">
    <a href="javascript:void(0);" class="more">
      <hgroup>
        <h1 class="h1_tit left color3"> <i class="hot"></i>
          热门线路
        </h1>
      </hgroup>
    </a>
    <ul id="ul">
      <li data-id="">
        <a>
          <div class="hot_top">
            <img src="images/21.png">
            <img src="images/qingyuan.jpg" class="index_img">
            <span class="span_type orange">跟团游</span>
          </div>
          <p class="color3 left hot_bot">&lt;清远古龙峡一日跟团游&gt;古龙峡漂流纯玩一天游</p>
          <span class="right span_price"> ￥ <b class="font14">123起</b>
          </span>
        </a>
      </li>
      <li>
        <a>
          <div class="hot_top">
            <img src="./images/21.png">
            <img src="./images/foshanheshan.png" class="index_img">
            <span class="span_type orange">跟团游</span>
          </div>
          <p class="color3 left hot_bot">&lt;佛山鹤山两日跟团游&gt;住挂五星鹤山碧桂园酒店+巴厘岛式泳池+佛山李小龙乐园</p>
          <span class="right span_price">  ￥ <b class="font14">379起</b>
          </span>
        </a>
      </li>
      <li>
        <a>
          <div class="hot_top">
            <img src="./images/21.png">
            <img src="./images/guiyang.jpg" class="index_img">
            <span class="span_type orange">跟团游</span>
          </div>
          <p class="color3 left hot_bot">&lt;贵阳+黄果树+西江苗寨4日跟团游&gt;动车往返/醉美西江苗文化+深度体验黄果树风景区</p>
          <span class="right span_price"> ￥ <b class="font14">1750起</b>
          </span>
        </a>
      </li>
      <li>
        <a>
          <div class="hot_top">
            <img src="./images/21.png">
            <img src="./images/zhangjiajie.jpg" class="index_img">
            <span class="span_type orange">跟团游</span>
          </div>
          <p class="color3 left hot_bot">&lt;张家界+天门山+凤凰古城5日跟团游&gt;深圳高铁往返/猛洞河漂流+芙蓉镇+赠送烟雨张家界</p>
          <span class="right span_price"> ￥ <b class="font14">2180起</b>
          </span>
        </a>
      </li>
    </ul>
    <h2 class="h2_tit center colre"></h2>
  </section>
</article>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../dits/css/index_common.css' 
@import '../../dits/css/swipe.css' 
@import '../../dits/css/layout.css' 
@import '../../dits/css/new_index.css' 
@import '../../dits/css/index.css' 

</style>
