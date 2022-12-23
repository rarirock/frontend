<template>
  <div>
    <!-- 상단 메뉴  -->
    <NavBlack></NavBlack>

    <!-- 대제목 시작 -->
    <div class="cc_title_wrap">
    <div class="cc_title_top">
      <h2 class="cc_tit">고객센터</h2>
    </div>
    </div>
    <!-- 대제목 끝 -->

    <!-- 3대장 시작 -->
    <div class="container col-6">
      <ul class="cc_tab_wrap cc_outer" id="myTab" role="tablist">
        <div class="row">
          <div class="col">
            <li class="nav-item" role="presentation">
              <!-- cc_tab_tit 은 버튼 아래 경계선 밑줄 -->
              <!-- 버튼 클릭시 active 되어 해당버튼에만 밑줄이 표시되게 -->
              <!-- class="cc_tab_tit" style="width: 100%" -->
              <button
                class="cc_tab_tit active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                style="width: 100%"
              >
                <span>FAQ</span>
              </button>
            </li>
          </div>
          <div class="col">
            <li class="nav-item" role="presentation">
              <button
                class="cc_tab_tit"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                style="width: 100%"
              >
                <span>공지사항</span>
              </button>
            </li>
          </div>
          <div class="col">
            <li class="nav-item" role="presentation">
              <button
                class="cc_tab_tit"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                style="width: 100%"
              >
                <span>1:1문의(QNA)</span>
              </button>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <!-- 3대장 끝 -->

    <!-- Content 시작 -->
    <div class="tab-content" id="myTabContent">

      <!-- FAQ 파트 시작 -->
      <div
        class="cc_tab_content tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <!-- faq 검색 시작 -->
        <fieldset class="cc_search_wrap ty2">
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            id="searchKeyword"
            title="검색어를 입력해주세요"
          />
          <button type="button" class="cc_btn_col2">검색</button>
        </fieldset>
        <!-- faq 검색 끝 -->

        <!-- faq accordion 테이블 시작 -->
        <table class="tb_acc_wrap">
          <thead>
            <tr>
              <th>구분</th>
              <th>질문</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="panel-faq-categorie">이용안내</td>
              <td class="text-start" width="80%">
                <div class="panel-faq-container">
                  <p class="panel-faq-title">What is Lorem Ipsum?</p>
                  <div class="panel-faq-answer">
                    <p>Answer (1) ... ↓</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="panel-faq-categorie">회원가입</td>
              <td class="text-start" width="80%">
                <div class="panel-faq-container">
                  <p class="panel-faq-title">Where does it come from?</p>
                  <div class="panel-faq-answer">
                    <p>Answer (2) ... ↓</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="panel-faq-categorie">결제관련</td>
              <td class="text-start" width="80%">
                <div class="panel-faq-container">
                  <p class="panel-faq-title">Why do we use it?</p>
                  <div class="panel-faq-answer">
                    <p>Answer (3) ... ↓</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="panel-faq-categorie">이용안내</td>
              <td class="text-start" width="80%">
                <div class="panel-faq-container">
                  <p class="panel-faq-title">Where can I get some?</p>
                  <div class="panel-faq-answer">
                    <p>Answer (4) ... ↓</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="panel-faq-categorie">배송관련</td>
              <td class="text-start" width="80%">
                <div class="panel-faq-container">
                  <p class="panel-faq-title">
                    The standard Lorem Ipsum passage, used since the 1500s
                  </p>
                  <div class="panel-faq-answer">
                    <p>Answer (5) ... ↓</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- faq accordion 테이블 끝 -->

      </div>
      <!-- FAQ 파트 끝 -->

      <!-- 공지사항 파트 시작 -->
      <div
        class="cc_tab_content tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <!-- 공지사항 구분: 전체/영화관별 -->
        <!-- 공지사항 탭 바로 밑에 전체공지/영화관공지 두개의 탭 생성(2~3마진) -->
        <!-- 검색박스와 테이블 둘다 바뀜 -->
        <!-- 버튼형식으로 v-if:show 쓰는게 좋아보임 -->

        <!-- 공지사항 검색 시작 -->
        <fieldset class="cc_search_wrap ty2">
          <select class="form-select cc_noti_select" v-model="searchSelect">
            <option>제목</option>
            <option>내용</option>
            <option>제목+내용</option>
          </select>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            id="searchKeyword"
            title="검색어를 입력해주세요"
          />
          <button type="button" class="cc_btn_col2">검색</button>
        </fieldset>
        <!-- 공지사항 검색 끝 -->

        <!-- 공지사항 테이블 시작 -->
        <table class="tb_acc_wrap">
          <thead>
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="noti-no" width="10%">1</td>
              <td class="noti-categorie" width="15%">이용안내</td>
              <td class="text-start" width="auto">
                What is Lorem Ipsum?
              </td>
              <td width="15%">2022/12/23</td>
            </tr>
            <tr>
              <td class="noti-no">1</td>
              <td class="noti-categorie">이용안내</td>
              <td class="text-start" width="70%">
                What is Lorem Ipsum?
              </td>
              <td>2022/12/23</td>
            </tr>
            <tr>
              <td class="noti-no">1</td>
              <td class="noti-categorie">이용안내</td>
              <td class="text-start" width="70%">
                What is Lorem Ipsum?
              </td>
              <td>2022/12/23</td>
            </tr>
            <tr>
              <td class="noti-no">1</td>
              <td class="noti-categorie">이용안내</td>
              <td class="text-start" width="70%">
                What is Lorem Ipsum?
              </td>
              <td>2022/12/23</td>
            </tr>
            <tr>
              <td class="noti-no">1</td>
              <td class="noti-categorie">이용안내</td>
              <td class="text-start" width="70%">
                What is Lorem Ipsum?
              </td>
              <td>2022/12/23</td>
            </tr>
            <tr>
              <td class="noti-no">1</td>
              <td class="noti-categorie">이용안내</td>
              <td class="text-start" width="70%">
                What is Lorem Ipsum?
              </td>
              <td>2022/12/23</td>
            </tr>
          </tbody>
        </table>
        <!-- 공지사항 테이블 끝 -->

      </div>
      <!-- 공지사항 파트 끝 -->

      <!-- 1:1문의 시작 -->
      <div
        class="cc_tab_content tab-pane fade"
        id="contact-tab-pane"
        role="tabpanel"
        aria-labelledby="contact-tab"
        tabindex="0"
      >
        ccccccccccccc
      </div>
      <!-- 1:1문의 끝 -->
    </div>
    <!-- Content 끝 -->
  </div>
</template>

<script>
import NavBlack from "@/components/NavBlack.vue";
import initCustom from "../assets/js/custom";
import accTable from "../assets/js/accordion";

export default {
  components: {
    NavBlack,
  },
  mounted() {
    initCustom();
    accTable();
  },
};
</script>

<style scoped>
/* 포괄 css */
button {
  border: 0px solid #ddd;
  cursor: pointer;
  background-color: #fff;
}
input[type="password"],
input[type="text"],
input[type="number"],
input[type="tel"] {
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}
input,
select,
button {
  vertical-align: middle;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
a,
a:link,
a:visited,
a:active,
a:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
ul,
ol {
  list-style: none;
}

/* 3가지 버튼 css */
.cc_title_wrap {
  margin-top: 50px;
}
.cc_title_top {
  width: 980px;
  margin: auto;
  height: 50px;
  border-bottom: 1px solid #eee;
}
.cc_title_top .cc_tit {
  float: left;
  font-size: 24px;
  color: #000;
  line-height: 50px;
}
.cc_tab_wrap.cc_outer {
  padding-top: 20px;
}
.cc_tab_wrap {
  position: relative;
}
.cc_tab_tit {
  height: 50px;
  color: #000;
}
.cc_tab_tit.active {
  border-bottom: 2px solid #111;
}
.cc_tab_content {
  overflow: inherit;
  position: relative;
  width: 980px;
  height: auto;
  margin: 40px auto;
}

/* 검색창 css */
.cc_search_wrap {
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background: #f8f8f8;
  padding: 22px 22px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  font-size: 0;
}
.cc_search_wrap.ty2 input[type="text"] {
  width: 440px;
  margin-right: 8px;
}
.cc_search_wrap [class^="btn_col"] {
  width: 86px;
  height: 38px;
  line-height: 34px;
  vertical-align: middle;
}
.cc_btn_col2 {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  width: 60px;
  height: 38px;
  border: 1px solid #414141;
  font-size: 14px;
  color: #ffffff !important;
  text-align: center;
  vertical-align: middle;
  background-color: #414141;
}

/* accordion css */
.panel-faq-container {
  margin-bottom: -16px;
}
.panel-faq-title {
  padding-left: 10px;
  color: #000;
  cursor: pointer;
  font-weight: 500;
}
.panel-faq-no,
.panel-faq-categorie {
  font-weight: 500;
}
.panel-faq-answer {
  height: 0;
  overflow: hidden;
  transition: all 1s;
  background-color: #f8f8f8;
  padding-left: 10px;
}
.acc_active {
  display: block;
  height: 300px;
}
.tb_acc_wrap {
  width: 980px;
  margin: 5px auto;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
}
.tb_acc_wrap thead th {
  border-bottom-color: #bbbbbb;
  font-size: 15px;
  font-weight: 900;
}
.tb_acc_wrap th,
.tb_acc_wrap td {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding: 15px 0;
  font-size: 15px;
  text-align: center;
  line-height: 24px;
}

/* 공지사항 검색창 css */
.form-select {
  display: inline-block;
}
.form-select:focus {
  border-color: #000;
  outline: 0;
  box-shadow: 0 0 0 0rem rgba(7, 13, 89, 0.25);
}
.cc_noti_select {
  width: 120px;
  height: 40px;
  margin-right: 8px;
  line-height: 40px;
  padding: 0 18px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}
</style>
