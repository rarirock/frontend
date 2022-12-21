<template>
  <div>

    <div>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close">
            <span class="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <nav class="site-nav2 mt-3 nav2-bb">
        <div class="container">
          <div class="site-navigation2">
            <div class="row">
              <div class="col-6 col-lg-3"></div>
              <div class="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap" style="height: 30px">
                <ul class="js-clone-nav text-center site-menu p-0 m-0">
                  <li class="logo_ds">
                    <router-link to="/">
                      <img src="@/assets/images/icon/logo_transparent_black.png" width="150px" style="margin-top: -70px"
                        alt="" />
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-3 text-lg-end">
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-6 col-lg-3"></div>
              <div class="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
                <ul class="js-clone-nav text-center site-menu p-0 m-0">
                  <li class="has-children">
                    <a href="#">예매</a>
                    <ul class="dropdown">
                      <li><router-link to="/reservation">예매하기</router-link></li>
                      <li><a href="#">상영시간표</a></li>
                      <li>
                        <router-link to="/reservation-check">예매확인</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="#">영화</a>
                    <ul class="dropdown">
                      <li><a href="#">홈</a></li>
                      <li><a href="#">현재상영작</a></li>
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
              <div class="col-6 col-lg-3 text-lg-end">
                <ul class="js-clone-nav d-none d-lg-inline-block text-end site-menu">
                  <li><a href="about.html">로그인</a></li>
                  <li><a href="about.html">회원가입</a></li>
                  <li><router-link to="/customer-center">고객센터</router-link></li>
                  <li>
                    <button class="btn_menu_all" style="border: none; background: none">
                      <img src="@/assets/images/icon/all_menu.png" width="17px" style="margin-top: -5px" alt="" />
                    </button>
                  </li>
                </ul>

                <a href="#"
                  class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  data-toggle="collapse" data-target="#main-navbar">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.site-nav2 {
  position: relative;
  top: 0;
  z-index: 9;
  width: 100%;
}

.site-nav2 {
  padding-top: 20px;
  padding-bottom: 0px;
}

.site-nav2 h1,
.site-nav2 .h1 {
  margin: 0;
  padding: 0;
  font-size: 24px;
}

.site-nav2 .site-navigation2 .site-menu {
  margin-bottom: 0;
}

.site-nav2 .site-navigation2 .site-menu>li {
  display: inline-block;
}

.site-nav2 .site-navigation2 .site-menu>li>a {
  font-size: 14px;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none !important;
  color: rgba(0, 0, 0, 0.7);
}

.site-nav2 .site-navigation2 .site-menu>li>a:hover {
  color: #f00;
}

.site-nav2 .site-navigation2 .site-menu>li.cta-button a {
  padding: 6px 20px;
  border-radius: 30px;
  background: #f17945;
  border: 2px solid #f17945;
}

.site-nav2 .site-navigation2 .site-menu>li.cta-button a:hover {
  color: #fff;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.site-nav2 .site-navigation2 .site-menu>li.active>a {
  color: #fff;
}

.site-nav2 .site-navigation2 .site-menu .has-children {
  position: relative;
}

.site-nav2 .site-navigation2 .site-menu .has-children>a {
  position: relative;
  padding-right: 20px;
}

.site-nav2 .site-navigation2 .site-menu .has-children>a:before {
  position: absolute;
  content: "\e313";
  font-size: 14px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "icomoon";
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  z-index: 999;
  position: absolute;
  text-align: left;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown.arrow-top {
  position: absolute;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown.arrow-top:before {
  display: none;
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown.arrow-top:before {
  display: none;
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown a {
  font-size: 14px;
  text-transform: none;
  letter-spacing: normal;
  -webkit-transition: 0s all;
  -o-transition: 0s all;
  transition: 0s all;
  color: #000;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown .active a {
  color: #f17945 !important;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li>a {
  padding: 5px 20px;
  display: block;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li>a:hover {
  color: #f17945;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children>a:before {
  content: "\e315";
  right: 20px;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children>.dropdown,
.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children>ul {
  left: 100%;
  top: 0;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children>.dropdown li a:hover,
.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children>ul li a:hover {
  color: #f17945;
}

.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children:hover>a,
.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children:active>a,
.site-nav2 .site-navigation2 .site-menu .has-children .dropdown>li.has-children:focus>a {
  color: #f17945;
}

.site-nav2 .site-navigation2 .site-menu .has-children:hover>a,
.site-nav2 .site-navigation2 .site-menu .has-children:focus>a,
.site-nav2 .site-navigation2 .site-menu .has-children:active>a {
  color: #f00;
}

.site-nav2 .site-navigation2 .site-menu .has-children:hover,
.site-nav2 .site-navigation2 .site-menu .has-children:focus,
.site-nav2 .site-navigation2 .site-menu .has-children:active {
  cursor: pointer;
}

.site-nav2 .site-navigation2 .site-menu .has-children:hover>.dropdown,
.site-nav2 .site-navigation2 .site-menu .has-children:focus>.dropdown,
.site-nav2 .site-navigation2 .site-menu .has-children:active>.dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1;
}

.nav2-bb {
  border-bottom: 1px solid #EEE;
}
</style>