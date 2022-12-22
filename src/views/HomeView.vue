<template>
  <div>
    <!-- header 시작 : 공용 header 와 디자인이 달라 별도로 사용 -->
    <!-- mobile-menu 시작 -->
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <!-- mobile-menu 끝 -->

    <!-- 광고배너 시작 -->
    <div style="background-color: rgb(140, 178, 215); height: 80px">
      <div class="row">
        <div class="advertise_top">
          <img src="@/assets/images/advertise/AA_98080.jpg" alt="광고배너" />
        </div>
      </div>
    </div>
    <!-- 광고배너 끝 -->

    <!-- nav bar 시작 -->
    <nav class="site-nav">
      <div class="container">
        <div class="site-navigation">
          <!-- 상단 메뉴 : 로고 , 소메뉴 -->
          <div class="row">
            <div class="col-6 col-lg-3"></div>
            <!-- 로고 시작 -->
            <div
              class="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap"
              style="height: 50px"
            >
              <ul class="js-clone-nav text-center site-menu p-0 m-0">
                <li class="logo_ds">
                  <img
                    src="../assets/images/nav/logo_transparent.png"
                    width="150px"
                    style="margin-top: -60px"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <!-- 로고 끝 -->
            <!-- 소메뉴 시작 -->
            <div class="col-6 col-lg-3 text-lg-end">
              <ul
                class="js-clone-nav d-none d-lg-inline-block text-end site-menu"
              >
                <li><a href="about.html">멤버십</a></li>
                <li><router-link to="/customer-center">고객센터</router-link></li>
                <li><a href="about.html">로그인</a></li>
              </ul>
            </div>
            <!-- 소메뉴 끝 -->
          </div>
          <!-- 상단 메뉴 끝 -->
          <!-- 하단 메뉴 : 메인메뉴 , 소메뉴 -->
          <div class="row">
            <!-- 빈 공간 -->
            <div class="col-6 col-lg-3"></div>
            <!-- 메인메뉴 시작 -->
            <div
              class="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap"
            >
              <ul class="js-clone-nav text-center site-menu p-0 m-0">
                <li class="has-children">
                  <a href="#">예매</a>
                  <ul class="dropdown">
                    <li><router-link to="/reservation">예매하기</router-link></li>
                    <li><a href="#">상영시간표</a></li>
                    <li><router-link to="/reservation-check">예매확인</router-link></li>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="#">영화</a>
                  <ul class="dropdown">
                    <li><a href="#">홈</a></li>
                    <li><router-link to="/movie-list/current">현재상영작</router-link></li>
                    <li><a href="#">상영예정작</a></li>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="#">영화관</a>
                  <ul class="dropdown">
                    <li><a href="#">스페셜관</a></li>
                    <li><a href="#">영화관1</a></li>
                    <li><a href="#">영화관2</a></li>
                    <li><a href="#">영화관3</a></li>
                    <li><a href="#">영화관4</a></li>
                  </ul>
                </li>
                <li class="has-children">
                  <a href="#">이벤트</a>
                  <ul class="dropdown">
                    <li><a href="#">홈</a></li>
                    <li><a href="#">영화</a></li>
                    <li><a href="#">시사회/무대인사</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- 메인메뉴 끝 -->
            <!-- 소메뉴 시작 -->
            <div class="col-6 col-lg-3 text-lg-end">
              <ul
                class="js-clone-nav d-none d-lg-inline-block text-end site-menu"
              >
                <li><a href="about.html">회원가입</a></li>
                <li><a href="about.html">바로예매</a></li>
                <li>
                  <button
                    class="btn_menu_all"
                    style="border: none; background: none"
                  >
                    <img
                      src="../assets/images/nav/all_menu.png"
                      width="17px"
                      style="margin-top: -5px"
                      alt=""
                    />
                  </button>
                </li>
              </ul>

              <a
                href="#"
                class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
            <!-- 소메뉴 끝 -->
          </div>
        </div>
      </div>
    </nav>
    <!-- nav bar 끝 -->
    <!-- header 끝 -->

    <!-- 메인 홈 시작 -->
    <div class="hero overlay">
      <!-- 대형 포스터 시작 -->
      <div class="img-bg rellax">
        <img
          src="../assets/images/header/AA_1920774.jpg"
          alt="Image"
          class="img-fluid"
        />
      </div>
      <!-- 대형 포스터 끝 -->

      <!-- 인기영화 carosal 시작 -->
      <div class="slideList">
        <AppSlider :slideList="slideList" />
      </div>
      <!-- 인기영화 carosal 끝 -->

      <div id="contents">
      <!-- 스페셜관 시작 -->
      <div class="specialCinema">
        <div class="container">
          <div class="sec_tit">스페셜관</div>
          <ul class="special_wrap2">
            <li style="padding-left: 13px; list-style: none">
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/WebAdmin/cd746f8b4a544f33988d6810ba2934cd.png"
                  alt="샤롯데바로가기"
              /></a>
            </li>
            <li style="padding-left: 37px">
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/WebAdmin/0df5043330d7485b8081dc2d1bebaa3a.png"
                  alt="수퍼플렉스 바로가기"
              /></a>
            </li>
            <li style="padding-left: 37px">
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/WebAdmin/cf8b080e65254806a2bd54aa4324920b.png"
                  alt="수퍼S 바로가기"
              /></a>
            </li>
          </ul>
          <button type="button" class="btn_txt_more ty2">더보기</button>
        </div>
      </div>
      <!-- 스페셜관 끝 -->

      <!-- 이벤트 시작 -->
      <div id="main_eventList" class="main_cont_wrap event">
        <div class="container">
          <div class="sec_tit0">이벤트</div>
          <div class="event_wrap">
            <ul class="img_lst_wrap">
              <li class="img_w_01">
                <a href="#none" title="화면이동"
                  ><img
                    src="https://caching.lottecinema.co.kr//Media/Event/7c7a2e619b3045d3b0384d17e90cf948.jpg"
                    alt=""
                /></a>
              </li>
              <li class="img_w_01">
                <a href="#none" title="화면이동"
                  ><img
                    src="https://caching.lottecinema.co.kr//Media/Event/1c44079ed0524c3e842b8d7c21aa605d.jpg"
                    alt=""
                /></a>
              </li>
              <li class="img_w_02">
                <a href="#none" title="화면이동"
                  ><img
                    src="https://caching.lottecinema.co.kr//Media/Event/0c1613eafe2540298352ef9047e03fcd.jpg"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn_txt_more ty2">더보기</button>
        </div>
      </div>
      <!-- 이벤트 끝 -->

      <!-- 시사회 시작 -->
      <div class="main_cont_wrap premiere">
        <div class="container">
          <div class="sec_tit0">시사회/무대인사</div>
          <ul class="premiere_wrap">
            <li>
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/Event/80c0f568d80f4ea1a72e6426aafdfa19.jpg"
                  alt="<영웅> 1주차 무대인사"
              /></a>
            </li>
            <li>
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/Event/70c3ead4157947b1a771a9334602a692.jpg"
                  alt="<스위치> 회원시사회 (2차)"
              /></a>
            </li>
            <li>
              <a href="#none"
                ><img
                  src="https://caching.lottecinema.co.kr//Media/Event/6d548a0b591445c98e62a685c19e58ce.jpg"
                  alt="<더 퍼스트 슬램덩크> 회원시사회"
              /></a>
            </li>
          </ul>
          <button type="button" class="btn_txt_more ty2">더보기</button>
        </div>
      </div>
      <!-- 시사회 끝 -->

      <!-- 공지사항 시작 -->
      <div class="main_cont_wrap notice">
        <div class="container">
          <div class="sec_tit">공지사항</div>
          <div class="rolling_menu_wrap">
            <ul class="rolling_menu">
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="2D 일반 관람권 활용 스페셜관 이용 안내 "
                  >2D 일반 관람권 활용 스페셜관 이용 안내
                </a>
              </li>
              <li>
                <a href="#none" title="롯데시네마 영구VIP 서비스 종료 안내"
                  >롯데시네마 영구VIP 서비스 종료 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
              <li>
                <a href="#none" title="영화관람권 가격 변경 안내"
                  >영화관람권 가격 변경 안내</a
                >
              </li>
            </ul>
          </div>
          <button type="button" class="btn_txt_more ty2">더보기</button>
        </div>
      </div>
      <!-- 공지사항 끝 -->
      </div>
    </div>
    <!-- 메인 홈 끝 -->

  </div>
</template>

<script>
import initCustom from "../assets/js/custom";
import AppSlider from "@/components/AppSlider.vue";

// 임시데이터
const slideList = [
  {
    img: " images/img-1.jpg",
    text: "제목1",
  },
  {
    img: " images/img-2.jpg",
    text: "제목2",
  },
  {
    img: " images/img-3.jpg",
    text: "제목3",
  },
  {
    img: " images/img-4.jpg",
    text: "제목4",
  },
  {
    img: " images/img-5.jpg",
    text: "제목5",
  },
  {
    img: " images/img-6.jpg",
    text: "제목6",
  },
  {
    img: " images/img-7.jpg",
    text: "제목7",
  },
];
export default {
  data() {
    return {
      slideList,
    };
  },
  components: {
    AppSlider,
  },
  mounted() {
    initCustom();
  },
};
</script>
