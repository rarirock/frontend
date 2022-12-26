<template>
  <div>
    <ul class="list_lnk" id="movietype1">
          <li class="on"><a href="#none" role="button">예매순</a> |&nbsp;</li>
          <li><a href="#none" role="button"> 평점순</a> |&nbsp;</li>
          <li><a href="#none" role="button"> 관람평 많은순</a> |&nbsp;</li>
          <li><a href="#none" role="button"> 보고싶어요순</a></li>
        </ul>
        <ul class="list_lnk" id="movietype2" style="display: none">
          <li class="on"><a href="#none" role="button">개봉일순</a></li>
          <li><a href="#none" role="button">예매순</a></li>
          <li><a href="#none" role="button">보고싶어요순</a></li>
        </ul>
        <ul class="movie_list type2">
          <li class="screen_add_box" v-for="(screening, index) in screeningList"
            :key="index">
            <div class="top_info">
              <span class="poster_info"
                ><img
                  :src="screening.mposter"
                  :alt="screening.mtitle" /><em class="num_info">{{screening.rank}}</em
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
              <strong class="tit_info">{{screening.mtitle}}</strong
              ><span class="sub_info1"
                ><span class="rate_info">예매율 <em>{{screening.ticketingPer}}%</em></span
                ><span class="star_info">{{screening.audiencesRate}}</span></span
              >
            </div>
          </li>
        </ul>
        <button type="button" class="btn_txt_more">
          <span>펼쳐보기</span>
        </button>
  </div>
</template>

<script>
const screeningList = [
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_103_1.jpg",
    mtitle: "아바타 : 물의 길",
    audiencesRate: 9.5,
    rank: 1,
    ticketingPer: 78.9,
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19224_103_1.jpg",
    mtitle: "영웅",
    audiencesRate: 9.4,
    rank: 2,
    ticketingPer: 13.5,
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19300_103_1.jpg",
    mtitle: "신비아파트 극장판 차원도깨비와 7개의 세계",
    audiencesRate: 9.8,
    rank: 3,
    ticketingPer: 1.6,
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19162_103_1.jpg",
    mtitle: "올빼미",
    audiencesRate: 9.7,
    rank: 4,
    ticketingPer: 1.2,
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19256_103_1.jpg",
    mtitle: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
    audiencesRate: 9.2,
    rank: 5,
    ticketingPer: 0.8,
  },
  {
    mposter: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19262_103_1.jpg",
    mtitle: "핑크퐁 시네마 콘서트 2: 원더스타 콘서트 대작전",
    audiencesRate: 10.0,
    rank: 6,
    ticketingPer: 0.4,
  },
]
export default {
    data() {
        return {
            screeningList,
        }
    },
}
</script>

<style>

</style>