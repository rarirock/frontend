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
<<<<<<< Updated upstream
            <!-- 소메뉴 시작 -->
            <div class="col-6 col-lg-3 text-lg-end">
              <ul
                class="js-clone-nav d-none d-lg-inline-block text-end site-menu"
              >
                <li><a href="about.html">멤버십</a></li>
                <li><a href="about.html">고객센터</a></li>
                <li><a href="about.html">로그인</a></li>
              </ul>
            </div>
            <!-- 소메뉴 끝 -->
=======
>>>>>>> Stashed changes
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
                  <router-link to="/reservation">예매</router-link>
                  <ul class="dropdown">
                    <li><router-link to="/reservation">예매하기</router-link></li>
                    <li><a href="#">상영시간표</a></li>
                  </ul>
                </li>
                <li class="has-children">
                  <router-link to="/movie-home">영화</router-link>
                  <ul class="dropdown">
<<<<<<< Updated upstream
                    <li><a href="#">홈</a></li>
                    <li><a href="#">현재상영작</a></li>
                    <li><a href="#">상영예정작</a></li>
=======
                    <li><router-link to="/movie-home">홈</router-link></li>
                    <li><router-link to="/movie-list/current">현재상영작</router-link></li>
                    <li><router-link to="/movie-list/expected">상영예정작</router-link></li>
>>>>>>> Stashed changes
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
                  <router-link to="/event-home">이벤트</router-link>
                  <ul class="dropdown">
                    <li><router-link to="/event-home">홈</router-link></li>
                    <li><router-link to="/event-theater">영화</router-link></li>
                    <li><router-link to="/event-premiere">시사회/무대인사</router-link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- 메인메뉴 끝 -->
            <!-- 소메뉴 시작 -->
            <div v-if="!currentUser" class="col-6 col-lg-3 text-lg-end">
              <ul
                class="js-clone-nav d-none d-lg-inline-block text-end site-menu"
              >
                <li><a href="about.html">로그인</a></li>
                <li><a href="about.html">회원가입</a></li>
                <li>
                  <router-link to="/customer-center">고객센터</router-link>
                </li>
                <li>
                  <button
                    class="btn_menu_all"
                    style="border: none; background: none"
                  >
                    <img
                      src="@/assets/images/icon/all_menu.png"
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

            <div v-if="currentUser" class="col-6 col-lg-3 text-lg-end">
              <ul
                class="js-clone-nav d-none d-lg-inline-block text-end site-menu"
              >
                <li><a href="about.html">마이페이지</a></li>
                <li><a href="about.html">로그아웃</a></li>
                <li>
                  <router-link to="/customer-center">고객센터</router-link>
                </li>
                <li>
                  <button
                    class="btn_menu_all"
                    style="border: none; background: none"
                  >
                    <img
                      src="@/assets/images/nav/all_menu.png"
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
        <AppSlider :screeningList="screeningList" />
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

    <!-- Footer 시작 : 푸터 컴포넌트 완성시 삭제 -->
    <!-- 광고 배너 시작 -->
    <div class="py-4">
      <div class="container">
        <div class="row">
          <div class="advertise">
            <img
              src="@/assets/images/advertise/boo_980180.jpg"
              alt="광고배너"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 광고 배너 끝 -->

    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>About Passport<span class="text-primary">.</span></h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <!-- /.widget -->
            <div class="widget">
              <h3>Connect</h3>
              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-pinterest"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-dribbble"></span></a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-3 -->

          <div class="col-lg-2 ml-auto">
            <div class="widget">
              <h3>Links</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-3 -->

          <div class="col-lg-2">
            <div class="widget">
              <h3>Company</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-3 -->

          <div class="col-lg-3">
            <div class="widget">
              <h3>Contact</h3>
              <address>43 Raymouth Rd. Baltemoer, London 3910</address>
              <ul class="list-unstyled links mb-4">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-3 -->
        </div>
        <!-- /.row -->

        <div class="row mt-5">
          <div class="col-12 text-center">
            <p class="mb-0">
              Copyright &copy;. All Rights Reserved. &mdash; Designed with love
              by <a href="https://untree.co">Untree.co</a>
              <!-- License information: https://untree.co/license/ -->
            </p>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.site-footer -->

    <!-- Preloader 시작 -->
    <div id="overlayer"></div>
    <div class="loader">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- Preloader 끝 -->
    <!-- Footer 끝 -->
  </div>
</template>

<script>
import initCustom from "../assets/js/custom";
import AppSlider from "@/components/AppSlider.vue";

// 임시데이터
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
];
export default {
  data() {
    return {
      screeningList,
      currentUser: true, // 임시 로직, 로그인 구현시 지우기
    };
  },
  components: {
    AppSlider,
  },
  mounted() {
    initCustom();
  },
  methods: {
    logOut() {
      this.currentUser = true;  // 임시 로직, 로그인 구현시 지우기

      // this.$store.dispatch("auth/logout"); // 공통함수 logout 호출
      // this.$router.push("/login"); // 강제 /login 페이지로 이동
    },
  },
};
</script>
