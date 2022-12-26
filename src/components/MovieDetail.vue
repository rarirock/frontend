<template>
  <div>
    <!-- 헤더 component -->
    <NavBlack></NavBlack>

    <!-- 상단 carosal 시작 -->
    <div class="slideImg">
      <div class="container">
        <ImageSlider :slideImg="slideImg" />
      </div>
    </div>
    <!-- 상단 carosal 끝 -->

    <!-- content 시작 -->
    <div id="contents">
      <!-- detail top 시작 -->
      <div class="detail_top_wrap new22">
        <div class="poster_info">
          <img
            src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_103_1.jpg"
            alt="아바타: 물의 길"
          />
        </div>
        <div class="tit_info">
          <span class="ic_grade gr_12">만12세이상관람가 </span
          ><strong>아바타: 물의 길</strong>
        </div>
        <ul class="detail_info1">
          <li class="sub_info1" style="cursor: pointer">
            <em>관람객 평점</em
            ><strong class="txt_ic_score ty2"
              ><em>평점</em><strong>9.5 </strong></strong
            >
          </li>
          <li class="sub_info2"><em>예매율 1위 </em><strong>79.5% </strong></li>
          <li class="sub_info3">
            <em>누적관객수</em
            ><strong
              >2,945,916 <em>명</em> <span class="date_info"> </span
            ></strong>
          </li>
        </ul>
        <ul class="detail_info2">
          <li class="sub_info1">
            <em>장르</em
            ><strong
              ><em>액션, 어드벤쳐, SF / 미국</em><em>2022.12.14 개봉</em
              ><em class="time_info">195분</em></strong
            >
          </li>
          <li class="sub_info2">
            <em>감독</em
            ><strong class="line_type"
              ><a href="#none">제임스 카메론</a></strong
            >
          </li>
          <li class="sub_info3">
            <em>출연</em
            ><strong class="line_type"
              ><a href="#none">조 샐다나</a>, <a href="#none">샘 워싱턴</a>,
              <a href="#none">시고니 위버</a>, <a href="#none">스티븐 랭</a>,
              <a href="#none">케이트 윈슬렛</a>,
              <a href="#none">클리프 커티스</a></strong
            >
          </li>
        </ul>
        <div class="spacial_hall_info">
          <span
            ><a href="#none" title="샤롯데바로가기"
              ><img
                src="https://caching.lottecinema.co.kr/images/cinema/special/special_theatergray_300.png"
                alt="샤롯데바로가기" /></a></span
          ><span
            ><a href="#none" title="수퍼플렉스 바로가기"
              ><img
                src="https://caching.lottecinema.co.kr/images/cinema/special/special_theatergray_940_20221117.png"
                alt="수퍼플렉스 바로가기" /></a></span
          ><span
            ><a href="#none" title="수퍼S 바로가기"
              ><img
                src="https://caching.lottecinema.co.kr/images/cinema/special/special_theatergray_980.png"
                alt="수퍼S 바로가기" /></a
          ></span>
        </div>
        <div class="movie_detail_aside_menu type2">
          <ul>
            <li>
              <button type="button" class="btn_ic_share">
                <em>공유하기</em>
              </button>
              <div id="layerShare" class="layer_wrap layer_share"></div>
            </li>
            <li>
              <button type="button" id="mylikemovie" class="btn_ic_wish">
                <strong>좋아요</strong><em>6,743</em>
              </button>
            </li>
            <li class="area_reserve">
              <a
                href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=18755&amp;movieName=아바타%3A 물의 길"
                class="btn_col1 ty7 rnd btn btn-danger"
                >예매하기</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- detail top 끝 -->
      <!-- moviedetailbar 시작 -->
      <ul class="tab_wrap outer moviedetailbar actionmovingbar new22">
        <!-- 영화정보 tab 시작 -->
        <li class="">
          <button
            type="button"
            class="tab_tit"
            style="width: 470px; left: 50%; float: left"
          >
            <router-link to="/movie-detail/info">영화정보</router-link>
          </button>
          <button
            type="button"
            class="tab_tit"
            style="width: 470px; left: 50%; float: left"
          >
            <router-link to="/movie-detail/review"
              >평점 및 관람평 (2,168)</router-link
            >
          </button>
        </li>
        <!-- 영화정보 tab 끝 -->
        <!-- 평점 및 관람평 시작 -->
        <li class="">
          
        </li>
        <!-- 평점 및 관람평 끝 -->
        <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
        <router-view/>
      </ul>
      <!-- moviedetailbar 끝 -->
    </div>
    <!-- content 끝 -->

    <!-- 푸터 component -->
  </div>
</template>

<script>
import initCustom from "@/assets/js/custom";
import ImageSlider from "@/components/ImageSlider.vue";
import NavBlack from '@/components/NavBlack.vue'

const slideImg = [
  {
    img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_105_13.jpg",
  },
  {
    img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_105_14.jpg",
  },
  {
    img: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_105_15.jpg",
  },
];

export default {
  name: "MovieDetail",
  data() {
    return {
      slideImg,
    };
  },
  mounted() {
    initCustom();
  },
  components: {
    NavBlack,
    ImageSlider,
  },
};
</script>

<style>
ul{
  list-style-type: none;
}
.slideImg {
  width: 1200px;
  height: 560px;
  margin: 0 auto;
  background-color: black;
}
#contents {
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  padding-top: 35px;
}
.detail_top_wrap {
  position: relative;
  min-height: 240px;
  padding-left: 245px;
  margin-bottom: 15px;
}
.detail_top_wrap .poster_info {
  position: absolute;
  top: -66px;
  left: 0;
  width: 205px;
  height: 305px;
  z-index: 1;
}
.detail_top_wrap .poster_info img {
  width: 100%;
  border-radius: 4px;
  height: 100%;
}
.detail_top_wrap .tit_info {
  margin: -2px 0 15px 0;
  font-size: 26px;
}
.detail_top_wrap .ic_grade {
  width: 36px;
  height: 36px;
  margin: -3px 4px 0 0;
  line-height: 36px;
  vertical-align: top;
}
.detail_top_wrap .ic_grade:before {
  font-size: 13px;
}
.detail_top_wrap .detail_info1 {
  overflow: hidden;
  padding-bottom: 17px;
  margin-bottom: 20px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
}
.detail_top_wrap .detail_info1 > li {
  float: left;
  margin-right: 25px;
}
.detail_top_wrap .detail_info1 > li > em {
  margin-right: 10px;
  vertical-align: middle;
}
.detail_top_wrap .detail_info1 > li strong {
  font-size: 20px;
  font-family: "Roboto", "Noto Sans KR";
  vertical-align: middle;
}
.detail_top_wrap .detail_info1 > li strong em {
  font-family: "Noto Sans KR";
}
.detail_top_wrap .detail_info1 > li strong .date_info {
  font-size: 14px;
  color: #666;
}
.detail_top_wrap .detail_info2 {
  margin-bottom: 17px;
  font-size: 13px;
}
.detail_top_wrap .detail_info2 > li {
  margin-top: 11px;
}
.detail_top_wrap .detail_info2 > li:first-child {
  margin-top: 0;
}
.detail_top_wrap .detail_info2 > li em {
  margin-right: 10px;
}
.detail_top_wrap .detail_info2 > li strong {
  color: #666;
}
.detail_top_wrap .detail_info2 > li.sub_info3 strong {
  line-height: 24px;
}
.detail_top_wrap .detail_info2 .sub_info1 strong > em {
  position: relative;
  padding-left: 15px;
}
.detail_top_wrap .detail_info2 .sub_info1 strong > em:first-child {
  padding-left: 0;
}
.detail_top_wrap .detail_info2 .sub_info1 strong > em:before {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  left: 0;
  width: 1px;
  height: 9px;
  background: #ddd;
}
.detail_top_wrap .detail_info2 .sub_info1 strong > em:first-child:before {
  display: none;
}
.detail_top_wrap .detail_info2 .sub_info2 .line_type a,
.detail_top_wrap .detail_info2 .sub_info3 .line_type a {
  border-bottom: 1px solid #666;
  color: #666;
}
.detail_top_wrap .spacial_hall_info {
  float: left;
  position: relative;
  width: 400px;
}
.detail_top_wrap .spacial_hall_info::after {
  content: "";
  display: block;
  clear: both;
}
.detail_top_wrap .spacial_hall_info span {
  display: inline-block;
  min-width: 82px;
  padding: 0 5px;
  margin-bottom: 10px;
  text-align: center;
}
.detail_top_wrap .spacial_hall_info span img {
  height: 20px;
}
.detail_top_wrap.new22 .ic_grade:before {
  margin: 7px 0 0 7px;
}
.movie_detail_aside_menu {
  padding-left: 430px;
}
.movie_detail_aside_menu ul:after {
  content: "";
  display: block;
  clear: both;
}
.movie_detail_aside_menu ul > li {
  float: left;
  margin-left: 32px;
}
.movie_detail_aside_menu ul > li:first-child {
  margin-left: 0;
}
.movie_detail_aside_menu ul > li .btn_ic_share {
  display: block;
  position: relative;
  width: 28px;
  height: 28px;
  padding: 0 10px;
  background: url("../assets/images/icon/ic_share.png") no-repeat 50% 0;
  border: 0;
  background-size: cover;
}
.movie_detail_aside_menu ul > li .btn_ic_share em {
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
}
.movie_detail_aside_menu ul > li .btn_ic_wish {
  display: block;
  position: relative;
  width: 39px;
  height: 28px;
  padding-left: 10px;
  background: url("../assets/images/icon/heart_off.png") no-repeat 10px 0;
  border: none;
  background-size: contain;
}
.movie_detail_aside_menu ul > li .btn_ic_wish strong {
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
}
.movie_detail_aside_menu ul > li .btn_ic_wish em {
  display: block;
  min-width: 20px;
  margin-left: 0px;
  position: absolute;
  top: 5px;
  left: 50%;
  padding: 1px 0;
  background: #fff;
  font-size: 11px;
  line-height: 11px;
  font-family: "Roboto", "Noto Sans KR";
  text-align: center;
}
.movie_detail_aside_menu ul > li .btn_ic_wish em.max:after {
  content: "+";
}
.movie_detail_aside_menu ul > li .btn_ic_wish.active {
  background: url("../assets/images/icon/heart_full.png") no-repeat 10px 0;
  color: #ff243e;
  background-size: contain;
}
.movie_detail_aside_menu ul > li.area_reserve {
  margin-top: -15px;
}
.movie_detail_aside_menu ul > li.area_reserve .btn_col1 {
  min-width: 120px;
  font-size: 18px;
}
.detail_top_wrap.new22 .movie_detail_aside_menu.type1 {
  padding-top: 15px;
}
.detail_top_wrap.new22 .movie_detail_aside_menu.type2 {
  padding-top: 25px;
}
/* 평점 :유형1 ========== */
.txt_ic_score {
  display: inline-block;
  vertical-align: middle;
}
.txt_ic_score em {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  text-indent: -9999em;
  background: url("../assets/images/icon/star_10.png") no-repeat 0 0;
}
.txt_ic_score strong {
  display: inline-block;
  font-family: "Roboto";
  vertical-align: middle;
}
/* ty2 (사이즈 수정 해도됨, 수정 후 이 문구 지우삼) */
.txt_ic_score.ty2 em {
  width: 14px;
  height: 14px;
  margin: -2px 3px 0 0;
  background: url("../assets/images/icon/star_14.png") no-repeat 0 0;
  background-size: cover;
}
.txt_ic_score.ty2 strong {
  font-size: 15px;
}
.movi_tab_info1 {
  overflow: hidden;
  margin: 0px 0 45px 0;
}
.contents_movie_detail .tit_info {
  display: block;
  margin-bottom: 20px;
  font-size: 15px;
}
.contents_movie_detail .tit_info strong {
  font-size: 26px;
}
.contents_movie_detail .banner_wrap {
  margin-top: 60px;
}
.contents_movie_detail .no_data {
  padding: 140px 0;
  background: #f8f8f8;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #ccc;
}
.contents_movie_detail .list_bdr_box {
  margin-top: 60px;
}
.contents_movie_detail .list_txt {
  margin-left: 10px;
}
.movi_tab_info1 .left_con {
  float: left;
  width: 450px;
}
.movi_tab_info1 .left_con .mCustomScrollbar {
  height: 115px;
  overflow: hidden;
}
.movi_tab_info1 .left_con .txt_info {
  padding-right: 80px;
  font-size: 13px;
  line-height: 1.8;
  
}
.movi_tab_info1 .right_con {
  float: right;
  width: 480px;
}
.movi_tab_info1 .group_graph:after {
  content: "";
  display: block;
  clear: both;
}
.movi_tab_info1 .group_graph .bx_graph01 {
  float: left;
  position: relative;
  width: 32%;
  height: 76px;
  margin-top: 49px;
}
.movi_tab_info1 .group_graph .bx_graph01 .bg {
  position: absolute;
  z-index: 1;
  top: -9px;
  width: 100%;
  height: 51px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/movie/graph_bgx2.png)
    no-repeat center 0;
  background-size: 111px auto;
}
.movi_tab_info1 .group_graph .bx_graph01 dl {
  position: relative;
  height: 51px;
  border-bottom: 1px solid #666666;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dt {
  position: absolute;
  bottom: -20px;
  width: 50%;
  font-size: 10px;
  color: #666;
  text-align: center;
  white-space: nowrap;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dt.mal {
  left: 0;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dt.fem {
  left: 50%;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.mal {
  width: 17px;
  margin-left: -36px;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.fem {
  width: 28px;
  margin-left: 9px;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd .bar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.mal .bar {
  background-color: #8be2fc;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.fem .bar {
  background-color: #fb5b95;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd strong {
  position: absolute;
  width: 38px;
  z-index: 2;
  top: -3px;
  font-family: "Roboto";
  font-size: 12px;
  white-space: nowrap;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd strong span {
  font-size: 10px;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.mal strong {
  right: -36px;
  color: #8be2fc;
}
.movi_tab_info1 .group_graph .bx_graph01 dl dd.fem strong {
  right: -29px;
  color: #fb5b95;
}
.movi_tab_info1 .group_graph .bx_graph02 {
  float: right;
  width: 280px;
  height: 110px;
  padding-top: 15px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl {
  position: relative;
  height: 85px;
  border-bottom: 1px solid #666666;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dt {
  position: absolute;
  bottom: -20px;
  width: 50px;
  font-size: 12px;
  color: #666;
  text-align: center;
  white-space: nowrap;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dt.gen10 {
  left: 36px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dt.gen20 {
  left: 86px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dt.gen30 {
  left: 138px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dt.gen40 {
  left: 188px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd {
  position: absolute;
  bottom: 0;
  width: 50px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.gen10 {
  left: 36px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.gen20 {
  left: 86px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.gen30 {
  left: 138px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.gen40 {
  left: 188px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd .bar {
  display: block;
  width: 8px;
  height: 100%;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  background-color: #8b8b8b;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd strong {
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: -15px;
  font-family: "Roboto";
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd strong span {
  font-size: 10px;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.top .bar {
  background-color: #f51641;
}
.movi_tab_info1 .group_graph .bx_graph02 dl dd.top strong {
  color: #f51641;
}
.movi_tab_info2 {
  position: relative;
  margin-bottom: 60px;
}
.movi_tab_info2 .tit_info {
  position: relative;
  margin: 0 50px -20px 0;
}
.movi_tab_info2 .swiper-wrapper {
  padding-top: 37px;
}
.tab_wrap.outer.new22 > li > .tab_tit {
  font-size: 18px;
  font-family: 'Noto Sans KR','Roboto';
}
.tab_wrap.outer.new22 > li.active > .tab_tit {
  
}
.tab_wrap.outer.new22 > li .wrap_reviewstarscore {
  padding: 30px;
  margin-top: -30px;
  background: #f8f8f8;
}
.tab_wrap.outer.new22 .movi_review_box {
  margin-bottom: 0;
  background: #fff;
  font-family: 'Noto Sans KR','Roboto';
}
.tab_wrap.outer.new22 .movi_review_box .review_write_box {
  width: 771px;
  background: #fff;
}
.tab_wrap.outer.new22 .movi_review_box .btn_submit {
  background: #414141;
}
.tab_wrap.outer.new22 .movi_review_box .review_write_box .byte_info {
  margin: 0 10px 5px 0;
  margin-top: -3px;
  background: #fff;
}
.tab_wrap.outer.new22 .wrap_reviewstarscore .star_score_box .h4_tit {
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
}
.tab_wrap.outer.new22 .wrap_reviewstarscore .star_score_box .star_info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab_wrap.outer.new22 .wrap_reviewstarscore .star_score_box .score_info {
  width: 70px;
  padding-left: 5px;
  font-family: "Roboto";
  font-size: 46px;
}
.tab_wrap.outer.new22 .wrap_reviewstarscore .star_score_box .txt_info {
  padding: 15px 0 40px;
  font-size: 15px;
  color: #999;
  text-align: center;
}
.tab_wrap.outer.new22 .wrap_reviewstarscore .star_score_box .txt_info .num {
  color: #666;
  font-family: "Roboto";
}
.tab_wrap.outer.new22 .movi_review_list {
  padding-top: 30px;
}
.tab_wrap.outer.new22 .movi_review_list .review_top {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.tab_wrap.outer.new22 .movi_review_list .review_top .tit {
  font-family: "Roboto";
  color: #999;
}
.tab_wrap.outer.new22 .movi_review_list .review_top .tit .txt_ic_score {
  font-size: 12px;
  vertical-align: baseline;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .tit
  .txt_ic_score
  .starimg {
  position: relative;
  padding-left: 40px;
  font-family: "Noto Sans KR";
  font-size: 13px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .tit
  .txt_ic_score
  .starimg:before {
  content: "";
  display: block;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -13px;
  width: 26px;
  height: 26px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/icon_star_new22.svg)
    no-repeat 0 0;
  background-size: 100%;
}
.tab_wrap.outer.new22 .movi_review_list .review_top .tit .txt_ic_score .num {
  padding-left: 8px;
  font-family: "Roboto";
  font-size: 18px;
  color: #333;
}
.tab_wrap.outer.new22 .movi_review_list .review_top .wrap_sort_right {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .total_num {
  font-size: 15px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .total_num
  em {
  font-family: "Roboto";
  font-weight: bold;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list {
  position: relative;
  margin-left: 5px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list:before {
  content: "";
  display: block;
  position: absolute;
  left: 5px;
  top: 2px;
  width: 1px;
  height: 18px;
  background-color: #eee;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li {
  margin-left: 15px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li
  button {
  color: #999;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li.active
  button {
  color: #000;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li
  button.latest:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 11px;
  font-size: 15px;
  margin: 0;
  margin-right: 4px;
  border: 0;
  vertical-align: -1px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/icon_sort_latest.svg)
    no-repeat 0 0;
  background-size: 100%;
  opacity: 0.5;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li
  button.empathy:before {
  content: "";
  display: inline-block;
  width: 11px;
  height: 17px;
  font-size: 15px;
  margin: 0;
  margin-right: 4px;
  border: 0;
  vertical-align: -4px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/icon_sort_empathy.svg)
    no-repeat 0 0;
  background-size: 100%;
  opacity: 0.5;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_top
  .wrap_sort_right
  .sort_list
  > li.active
  button:before {
  opacity: 1;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list .review_info {
  margin-bottom: 0;
  line-height: 20px;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list .top_info {
  position: relative;
  margin-bottom: 6px;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list .top_info .name {
  display: block;
  font-size: 14px;
  padding-bottom: 8px;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list .top_info .date_info {
  position: absolute;
  top: 0;
  right: 10px;
  font-family: "Roboto";
  font-size: 14px;
  color: #999;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score {
  position: relative;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .gradenum {
  font-size: 14px;
  font-family: "Roboto";
  vertical-align: 3px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg {
  display: inline-block;
  width: 78px;
  height: 14px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ic_star_00.svg)
    no-repeat 0 0;
  background-size: 100%;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .stargradecolor {
  display: inline-block;
  width: 78px;
  height: 14px;
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ic_star_10.svg)
    no-repeat 0 0;
  background-size: 100%;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg {
  overflow: hidden;
  display: inline-block;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade10 {
  width: 78px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade9 {
  width: 71px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade8 {
  width: 63px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade7 {
  width: 55px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade6 {
  width: 47px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade5 {
  width: 39px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade4 {
  width: 31px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade3 {
  width: 23px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade2 {
  width: 15px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .top_info
  .txt_ic_score
  .stargradebg
  .blindbg.grade1 {
  width: 7px;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list .btm_info {
  display: flex;
  align-items: center;
  padding-right: 10px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .btm_info
  .btn_ic_good {
  margin-left: auto;
  padding: 0;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .btm_info
  .edit_review
  .btn_review_edit,
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .btm_info
  .edit_review
  .btn_review_delete {
  position: relative;
  padding-left: 4px;
  font-size: 11px;
  color: #767676;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .btm_info
  .edit_review
  .btn_review_edit:before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  padding-right: 1px;
  vertical-align: -3px;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list
  .btm_info
  .edit_review
  .btn_review_delete:before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  padding-right: 2px;
  vertical-align: -3px;
}
.tab_wrap.outer.new22 .movi_review_list .review_con_list > li:last-child {
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.tab_wrap.outer.new22
  .movi_review_list
  .review_con_list#review_con_list1
  > li:last-child {
  border-bottom: 0;
}
.star_rate.type5 .starR1 {
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star50_off.png)
    no-repeat 0 0;
  background-size: auto 100%;
  width: 25px;
  height: 50px;
  float: left;
  cursor: pointer;
  padding: 0;
}
.star_rate.type5 .starR2 {
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star50_off.png)
    no-repeat 100% 0;
  background-size: auto 100%;
  width: 25px;
  height: 50px;
  float: left;
  cursor: pointer;
  padding: 0;
}
.star_rate.type5 .starR1.on {
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star50_on.png)
    no-repeat 0 0;
  background-size: auto 100%;
  width: 25px;
  height: 50px;
}
.star_rate.type5 .starR2.on {
  background: url(https://www.lottecinema.co.kr/NLCHS/Content/images/icon/ico_star50_on.png)
    no-repeat 100% 0;
  background-size: auto 100%;
  width: 25px;
  height: 50px;
}
.star_rate.type5 .star {
  margin-right: 0;
}
.star_rate.type5 .star.starR2 {
  margin-right: 10px;
}
.review_con_list > li {
  position: relative;
  padding: 20px 0 15px 68px;
  border-top: 1px solid #eee;
}
.review_con_list > li:first-child {
  border-color: #ccc;
}
.review_con_list > li.my_review {
  background: #f8f8f8;
}
.review_con_list > li .img_info {
  display: block;
  position: absolute;
  top: 15px;
  left: 10px;
  overflow: hidden;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.review_con_list > li .img_info img {
  width: 100%;
  border-radius: 50%;
}
.review_con_list .top_info {
  margin-bottom: 12px;
}
.review_con_list .top_info .name_info {
  position: relative;
  padding-right: 11px;
  margin-right: 9px;
  font-size: 12px;
}
.review_con_list .top_info .name_info:before {
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  right: 0;
  width: 1px;
  height: 12px;
  background: #eeeeee;
}
.review_con_list .top_info .txt_ic_score {
  font-size: 14px;
  margin-right: 11px;
}
.review_con_list .txt_cpn2 {
  height: 13px;
  line-height: 13px;
}
.review_con_list .review_info {
  margin-bottom: 11px;
  font-size: 13px;
}
.review_con_list .btm_info .date_info {
  font-size: 11px;
  color: #666;
}
.review_con_list .btn_info {
  position: absolute;
  top: 15px;
  right: 0;
}
.review_con_list .btn_info .btn_box {
  display: none;
}
.review_con_list .btn_info.active .btn_box {
  display: inline-block;
}
.review_con_list .btn_col4 {
  height: 25px !important;
  margin-left: 4px;
  line-height: 25px !important;
  font-size: 11px;
}
.movi_review_box {
  height: 97px;
  margin-bottom: 55px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.movi_review_box .star_score_box {
  float: left;
  width: 320px;
  height: 88px;
  background: #f8f8f8;
  text-align: center;
  border-right: 1px solid #ccc;
}
.movi_review_box .star_score_box .score_info {
  display: block;
  margin: 20px 0 7px 0;
  font-size: 13px;
}
.movi_review_box .star_score_box .score_info em {
  font-family: "Roboto", "Noto Sans KR";
  font-size: 28px;
}
.movi_review_box .review_write_box {
  float: left;
  width: 538px;
}
.movi_review_box .review_write_box textarea {
  height: 70px;
  border: none;
  width: 100%;

  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  padding: 13px 18px;
}
.movi_review_box .review_write_box textarea:disabled {
  background: none;
}
.movi_review_box .review_write_box .byte_info {
  display: block;
  margin: 0 10px 10px 0;
  text-align: right;
  font-size: 10px;
  color: #666;
  font-family: "Roboto", "Noto Sans KR";
}
.movi_review_box .review_write_box .byte_info strong {
  color: #000;
  font-weight: bold;
}
.movi_review_box .btn_submit {
  float: left;
  width: 115px;
  height: 97px;
  border: none;
  margin: -1px -1px 0 0;
  padding: 0;
  background: #666;
  color: #fff;
  font-size: 15px;
}
.movi_review_box .btn_col4 {
  background: none;
}
.movi_review_list .review_top {
  overflow: hidden;
  width: 100%;
  margin-bottom: 14px;
}
.movi_review_list .review_top .total_info {
  float: left;
  font-size: 15px;
}
.movi_review_list .review_top .total_info em {
  font-weight: bold;
  font-family: "Roboto", "Noto Sans KR";
}
.movi_review_list .review_top .sort_list {
  overflow: hidden;
  float: right;
}
.tab_wrap.outer {padding-top:80px;}
.tab_wrap.outer > li > .tab_tit {height:50px; line-height:50px; border-bottom:1px solid #CCC; font-size:15px; color:#7F7F7F;}
.tab_wrap.outer > li > .tab_tit.ty2 {line-height:1.3;}
.tab_wrap.outer > li.active > .tab_tit {border-bottom:2px solid #111;color:#000;}
</style>
