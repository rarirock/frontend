<template>
  <div>
    <!-- AppSlider.vue : slider(carosal) 통신으로 위한 컴포넌트 -->
    <!-- 인기영화 carosal 시작 -->
    <div class="section section-3" data-aos="fade-up" data-aos-delay="100">
      <!-- carosal(인기영화) 소개 문구, 좌우 버튼 -->
      <!-- 이부분 삭제시 slide 실행 안됨 -->
      <div class="container">
        <div class="row align-items-center justify-content-between mb-5">
          <!-- 소개 문구 시작 -->
          <div class="col-lg-5" data-aos="fade-up"></div>
          <!-- 소개 문구 끝 -->
          <!-- 좌우 버튼 시작 -->
          <div
            class="col-lg-5 text-sm-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="destination-controls">
              <span class="prev me-3" data-controls="prev">
                <span class="icon-chevron-left"></span>
              </span>
              <span class="next" data-controls="next">
                <span class="icon-chevron-right"></span>
              </span>
            </div>
          </div>
          <!-- 좌우 버튼 끝 -->
        </div>
      </div>
      <!-- 소개문구, 좌우버튼 끝 -->

      <!-- 인기 영화 리스트 시작 -->
      <div class="col-lg-9 d-lg-inline-block destination-slider-wrap">
        <div class="destination-slider">
          <div
            class="destination"
            v-for="(screening, index) in screeningList"
            :key="index"
          >
            <div class="top_info">
              <span class="poster_info">
                <img :src="screening.mposter" :alt="screening.mtitle" class="img-slide" />
                <em class="rank">{{screening.rank}}</em> </span
              ><span class="ic_grade gr_12"></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <nav>
                  <a
                    href="/reservation"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><router-link
                    to="/movie-detail/info" :key="$route.path"
                    class="btn_col3 ty3"
                    >상세정보</router-link
                  >
                  </nav>
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">{{screening.mtitle}}</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율&nbsp;<em>{{screening.ticketingPer}}%</em></span
                ><span class="star_info" style="cursor: pointer">{{screening.audiencesRate}}</span
                ><span class="heart_info"
                  ><button type="button" class="btn_heart_rnd">
                  </button></span
                ></span
              >
            </div>
          </div>
          
        </div>
      </div>
      <!-- 인기 영화 리스트 끝 -->
    </div>
    <!-- 인기영화 carosal 끝 -->
  </div>
</template>

<script>
import initCustom from "../assets/js/custom";

export default {
  name: "AppSlider",
  props: {
    screeningList: Array,
  },
  mounted() {
    initCustom();
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.destination-slider .destination {color:#FFF; text-align:center;}
.destination-slider .destination .top_info {overflow:hidden; position:relative; height:100%; border-radius:4px;}
.destination-slider .destination .top_info .poster_info {display:block; height:100%;}
.destination-slider .destination .top_info .poster_info img {width:100%;}
.destination-slider .destination .top_info .poster_info .rank {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  font-style: italic;
  font-family: "Roboto", "Noto Sans KR";
  text-align: left;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=0 );
}
.destination-slider .destination .top_info .poster_info .ic_grade {
  position: absolute;
  top: 10px;
  right: 8px;
}
.destination-slider .destination .top_info .over_box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  line-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.3s;
}
.destination-slider .destination .top_info .over_box .inner {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  right: 0;
  padding: 0 18px;
}
.destination-slider .destination .top_info .over_box .btn_col3 {
  display: block;
  line-height: 26px;
  margin-top: 10px;
  background: transparent;
  color: #fff !important;
  border-color: #fff;
  outline-color: white;
  border: 1px solid;
  border-radius: 5px;
}
.destination-slider .destination .top_info:hover .over_box,
.destination-slider .destination .top_info:focus .over_box {
  opacity: 1;
}
.destination-slider .destination .btm_info {
  display: block;
  margin-top: 10px;
}
.destination-slider .destination .btm_info .tit_info {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 6px;
  font-size: 13px;
}
.destination-slider .destination .btm_info .sub_info1 {
  display: block;
  margin-bottom: 10px;
  font-size: 11px;
}
.destination-slider .destination .btm_info .sub_info1 > span {
  position: relative;
  margin-left: 8px;
  font-family: "Roboto", "Noto Sans KR";
}
.destination-slider .destination .btm_info .sub_info1 > span:before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 2px;
  left: 0;
  width: 1px;
  height: 8px;
  background: #b2b2b2;
}
.destination-slider .destination .btm_info .sub_info1 > span:first-child {
  margin-left: 0;
}
.destination-slider
  .destination
  .btm_info
  .sub_info1
  > span:first-child:before {
  display: none;
}
.destination-slider .destination .btm_info .sub_info1 .rate_info em {
  font-weight: bold;
}
.destination-slider .destination .btm_info .sub_info1 .star_info {
  padding-left: 22px;
  font-weight: bold;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/movie/ic_star.png)
    no-repeat 9px 20%;
}
.destination-slider .destination .btm_info .sub_info1 .remain_info {
  padding-left: 10px;
  color: #ed4c6b;
}
.btn_heart_rnd {
  width: 16px;
  height: 16px;
  background-image: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/heart_rnd_16_off.png);
  background-color: transparent;
  border: none;
}
.btn_heart_rnd.active {
  width: 16px;
  height: 16px;
  background-image: url("@/assets/images/icon/heart_rnd_on.png");
}
.destination-slider .destination .btm_info .sub_info1 .heart_info {
  display: inline-block;
  padding-left: 10px;
}
.destination-slider
  .destination
  .btm_info
  .sub_info1
  .heart_info
  .btn_heart_rnd {
  margin-top: -3px;
}
</style>
