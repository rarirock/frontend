<template>
  <div>
    <ul class="list_lnk" id="movietype2" style="display: block">
      <li class="on"><a href="#none" role="button">개봉일순</a> |&nbsp;</li>
      <li><a href="#none" role="button">예매순</a> |&nbsp;</li>
      <li><a href="#none" role="button">보고싶어요순</a></li>
    </ul>
    <ul class="movie_list type2">
      <li class="screen_add_box" v-for="(notScreening, index) in notScreeningList"
            :key="index">
        <div class="top_info">
          <span class="poster_info"
            ><img
              :src="notScreening.mposter"
              :alt="notScreening.mtitle" /><em class="num_info"></em
            ><span class="ic_grade gr_15"></span
          ></span>
          <div class="over_box">
            <div class="inner" style="margin-top: -33px">
              <a
                href="https://www.lottecinema.co.kr/NLCHS/ticketing?movieCd=19330&amp;movieName=젠틀맨"
                class="btn_col3 ty3"
                >예매하기</a
              ><a
                href="https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=19330"
                class="btn_col3 ty3"
                >상세정보</a
              >
            </div>
          </div>
        </div>
        <div class="btm_info">
          <strong class="tit_info">{{notScreening.mtitle}}</strong
          ><span class="sub_info1"
            ><span class="rate_info">예매율 <em>{{notScreening.ticketingPer}}%</em></span
            ><span class="remain_info">D-{{notScreening.Dday}}</span></span
          >
        </div>
      </li>  
    </ul>
    <button type="button" class="btn_txt_more"><span>펼쳐보기</span></button>
  </div>
</template>

<script>
const notScreeningList = [
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19330_103_1.jpg",
    mtitle: "젠틀맨",
    ticketingPer: 0.8,
    Dday: 6
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19378_103_1.jpg",
    mtitle: "크레이지 컴페티션",
    ticketingPer: 0.1,
    Dday: 6
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19374_103_1.jpg",
    mtitle: "메모리아",
    ticketingPer: 0,
    Dday: 7
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19375_103_1.jpg",
    mtitle: "라스트필름",
    ticketingPer: 0,
    Dday: 7
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19345_103_1.jpg",
    mtitle: "이태석",
    ticketingPer: 0,
    Dday: 7
  },
]
export default {
    data() {
        return {
            notScreeningList
        }
    },
};
</script>

<style></style>
