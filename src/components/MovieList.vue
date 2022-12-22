<template>
  <div>
    <!-- 헤더 컴포넌트 -->
    <NavBlack></NavBlack>

    <!-- 현재 상영작, 상영 예정작 페이지 -->
    <div id="contents" class="contents_movie_list">
      <h2 class="hidden">영화목록</h2>
      <div class="movie_screen_box">
        <ul class="tab_btn_type1">
          <li class="active">
            <button type="button"><span>현재 상영작</span></button>
          </li>
          <li class="">
            <button type="button"><span>상영 예정작</span></button>
          </li>
        </ul>
        <ul class="list_lnk" id="movietype1">
          <li class="on"><a href="#none" role="button">예매순</a></li>
          <li><a href="#none" role="button">평점순</a></li>
          <li><a href="#none" role="button">관람평 많은순</a></li>
          <li><a href="#none" role="button">보고싶어요순</a></li>
        </ul>
        <ul class="list_lnk" id="movietype2" style="display: none">
          <li class="on"><a href="#none" role="button">개봉일순</a></li>
          <li><a href="#none" role="button">예매순</a></li>
          <li><a href="#none" role="button">보고싶어요순</a></li>
        </ul>
        <ul class="movie_list type2">
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_103_1.jpg"
                  alt="아바타: 물의 길" /><em class="num_info">1</em
                ><span class="ic_grade gr_12"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=18755&amp;movieName=아바타%3A 물의 길"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=18755"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">아바타: 물의 길</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>79.7%</em></span
                ><span class="star_info">9.5</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19224_103_1.jpg"
                  alt="영웅" /><em class="num_info">2</em
                ><span class="ic_grade gr_12"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19224&amp;movieName=영웅"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19224"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">영웅</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>13.5%</em></span
                ><span class="star_info">9.4</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19300_103_1.jpg"
                  alt="신비아파트 극장판 차원도깨비와 7개의 세계" /><em
                  class="num_info"
                  >3</em
                ><span class="ic_grade gr_all"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19300&amp;movieName=신비아파트 극장판 차원도깨비와 7개의 세계"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19300"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info"
                >신비아파트 극장판 차원도깨비와 7개의 세계</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>1.6%</em></span
                ><span class="star_info">9.8</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19162_103_1.jpg"
                  alt="올빼미" /><em class="num_info">4</em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19162&amp;movieName=올빼미"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19162"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">올빼미</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>1.2%</em></span
                ><span class="star_info">9.7</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19256_103_1.jpg"
                  alt="오늘 밤, 세계에서 이 사랑이 사라진다 해도" /><em
                  class="num_info"
                  >5</em
                ><span class="ic_grade gr_12"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19256&amp;movieName=오늘 밤, 세계에서 이 사랑이 사라진다 해도"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19256"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info"
                >오늘 밤, 세계에서 이 사랑이 사라진다 해도</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.8%</em></span
                ><span class="star_info">9.2</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19262_103_1.jpg"
                  alt="핑크퐁 시네마 콘서트 2: 원더스타 콘서트 대작전" /><em
                  class="num_info"
                  >6</em
                ><span class="ic_grade gr_all"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19262&amp;movieName=핑크퐁 시네마 콘서트 2%3A 원더스타 콘서트 대작전"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19262"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info"
                >핑크퐁 시네마 콘서트 2: 원더스타 콘서트 대작전</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.4%</em></span
                ><span class="star_info">10.0</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19239_103_1.jpg"
                  alt="극장판 뽀로로와 친구들: 바이러스를 없애줘!" /><em
                  class="num_info"
                  >7</em
                ><span class="ic_grade gr_all"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19239&amp;movieName=극장판 뽀로로와 친구들%3A 바이러스를 없애줘!"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19239"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info"
                >극장판 뽀로로와 친구들: 바이러스를 없애줘!</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.3%</em></span
                ><span class="star_info">9.6</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19217_103_1.jpg"
                  alt="스트레인지 월드" /><em class="num_info">8</em
                ><span class="ic_grade gr_all"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19217&amp;movieName=스트레인지 월드"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19217"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">스트레인지 월드</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.1%</em></span
                ><span class="star_info">8.2</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19294_103_1.jpg"
                  alt="페르시아어 수업" /><em class="num_info">9</em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19294&amp;movieName=페르시아어 수업"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19294"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">페르시아어 수업</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">9.4</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202210/18983_103_1.jpg"
                  alt="에브리씽 에브리웨어 올 앳 원스" /><em class="num_info"
                  >10</em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=18983&amp;movieName=에브리씽 에브리웨어 올 앳 원스"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=18983"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">에브리씽 에브리웨어 올 앳 원스</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">8.7</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19288_103_1.jpg"
                  alt="라 비 앙 로즈" /><em class="num_info"></em
                ><span class="ic_grade gr_12"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19288&amp;movieName=라 비 앙 로즈"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19288"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">라 비 앙 로즈</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">9.8</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202206/18651_103_1.jpg"
                  alt="헤어질 결심" /><em class="num_info"></em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=18651&amp;movieName=헤어질 결심"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=18651"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">헤어질 결심</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">9.3</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19263_103_1.jpg"
                  alt="지옥의 화원" /><em class="num_info"></em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19263&amp;movieName=지옥의 화원"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19263"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">지옥의 화원</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">8.4</span></span
              >
            </div>
          </li>
          <li class="screen_add_box">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19372_103_1.jpg"
                  alt="코르사주" /><em class="num_info"></em
                ><span class="ic_grade gr_15"></span
              ></span>
              <div class="over_box">
                <div class="inner" style="margin-top: -33px">
                  <a
                    href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19372&amp;movieName=코르사주"
                    class="btn_col3 ty3"
                    >예매하기</a
                  ><a
                    href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19372"
                    class="btn_col3 ty3"
                    >상세정보</a
                  >
                </div>
              </div>
            </div>
            <div class="btm_info">
              <strong class="tit_info">코르사주</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>0.0%</em></span
                ><span class="star_info">0</span></span
              >
            </div>
          </li>
        </ul>
        <button type="button" class="btn_txt_more">
          <span>펼쳐보기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBlack from '@/components/NavBlack.vue'
export default {
  components :{
    NavBlack
  }
};
</script>

<style>
.contents_movie_list .tit_type1 {margin-bottom: 17px;}
.movie_list.type2 {margin-bottom:0}
.movie_list.type2 li {height:310px; margin-bottom:42px;}
.screen_add_box>a {display:block; width:184px; height:310px; overflow: hidden;}
.screen_add_box>a>img {width:100%; min-height: 100%; border-radius:4px;}
.screen_add_box>a>.num_info{ display:block; position:absolute; left:0; right:0; bottom:0; border-radius: 0 0 4px 4px; height:23px; padding-left:10px; color:#fff; font-weight:bold; font-size:26px; font-style:italic; font-family:'Roboto', "Noto Sans KR"; text-align:left; background:-moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.5) 100%); background:-webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.5) 100%); background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.5) 100%); -ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=0); -webkit-border-radius: 0 0 4px 4px; -moz-border-radius: 0 0 4px 4px; -ms-border-radius: 0 0 4px 4px; -o-border-radius: 0 0 4px 4px;}
.contents_movie_detail .list_lnk a {color:#666;}
.contents_movie_detail .list_lnk .on a {font-weight:normal; color:#000;}
.movie_screen_box {position:relative;}
.movie_screen_box .list_lnk {position:absolute; top:15px; right:0}
.movie_screen_box .list_lnk li a {font-size:14px; color:#666;}
.movie_screen_box .list_lnk li.on a {color:#000; font-weight:normal;}
.tab_btn_type1 {margin-bottom:17px;}
.tab_btn_type1:after {content:''; display:block; clear:both;}
.tab_btn_type1 > li {float:left; margin-right:30px;}
.tab_btn_type1 > li button {padding:0; border:none;}
.tab_btn_type1 > li button > span {display:block; height:32px; line-height:32px; font-size:18px; color:#000; opacity:0.6}
.tab_btn_type1 > li.active button > span {border-bottom:1px solid #000; opacity:1}
.movie_list {overflow:hidden; margin-bottom:50px; margin:0 -7.5px}
.movie_list li {float:left; position:relative; width:184px; margin:0 7.5px; text-align:center;}
.movie_list li .top_info {overflow:hidden; position:relative; height:262px; border-radius:4px;}
.movie_list li .top_info .poster_info {display:block; height:262px;}
.movie_list li .top_info .poster_info img {width:100%;}
.movie_list li .top_info .poster_info .num_info {display:block; position:absolute; left:0; right:0; bottom:0; height:23px; padding-left:10px; color:#fff; font-weight:bold; font-size:26px; font-style:italic; font-family:'Roboto', "Noto Sans KR"; text-align:left; background:-moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.5) 100%); background:-webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.5) 100%); background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.5) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=0 );}
.movie_list li .top_info .poster_info .ic_grade {position:absolute; top:10px; right:8px;}
.movie_list li .top_info .over_box {overflow:hidden; position:absolute; width:100%; height:0;}
.movie_list li.active .top_info .over_box {overflow:inherit; position:absolute; z-index:1; top:0; left:0; width:100%; height:100%;}
.movie_list li.active .top_info .over_box:before {content:''; position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0.7;}
.movie_list li.active .top_info .over_box .inner {position:absolute; z-index:1; top:50%; left:0; right:0; padding:0 18px;}
.movie_list li .top_info .over_box .btn_col3 {display:block; line-height:26px; margin-top:10px; background:transparent; color:#fff !important; border-color:#fff; outline-color: white;}
.movie_list li .top_info .over_box .btn_col3:first-child {margin-top:0}
.movie_list li .top_info .over_box .hall_info_box {position:absolute; top:0; left:0; width:100%; background:red}
.movie_list li .top_info .over_box .btn_end {border-color:#666; color:#666 !important}
.movie_list li .btm_info {display:block; margin-top:14px;}
.movie_list li .btm_info .tit_info {display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; margin-bottom:6px; font-size:13px;}
.movie_list li .btm_info .sub_info1 {display:block; margin-bottom:10px; font-size:11px;}
.movie_list li .btm_info .sub_info1 > span {position:relative; margin-left:8px; font-family:'Roboto', "Noto Sans KR";}
.movie_list li .btm_info .sub_info1 > span:before {content:''; display:inline-block; position:absolute; top:2px; left:0; width:1px; height:8px; background:#B2B2B2}
.movie_list li .btm_info .sub_info1 > span:first-child {margin-left:0;}
.movie_list li .btm_info .sub_info1 > span:first-child:before{display:none;}
.movie_list li .btm_info .sub_info1 .rate_info em {font-weight:bold;}
.movie_list li .btm_info .sub_info1 .star_info {padding-left:22px; font-weight:bold; background:url(https://www.lottecinema.co.kr/NLCHS/Content/images/movie/ic_star.png) no-repeat 9px 20%;}
.movie_list li .btm_info .sub_info1 .remain_info {padding-left:10px; color:#ED4C6B}
.movie_list li .btm_info .sub_info1 .heart_info {display:inline-block; padding-left:10px;}
.movie_list li .btm_info .sub_info1 .heart_info .btn_heart_rnd {margin-top:-4px;}
.movie_list li .btm_info .sub_info2 {display:block;}
.movie_list li .btm_info .sub_info2 > span {display:inline-block; padding:4px 0 4px 21px; font-family:'Roboto', "Noto Sans KR"; font-size:11px;}
</style>
