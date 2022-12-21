<template>
  <div>
    <!-- 상단 메뉴  -->
    <NavBlack></NavBlack>

    <div class="title_top">
      <h2 class="tit">고객센터</h2>
    </div>
    <ul class="tab_wrap outer">
      <li>
        <button type="button" class="tab_tit" style="width: 20%; left: 0%">
          <span>FAQ</span>
        </button>
      </li>
      <li>
        <button type="button" class="tab_tit" style="width: 20%; left: 20%">
          <span>공지사항</span>
        </button>
      </li>
      <li>
        <button type="button" class="tab_tit" style="width: 20%; left: 40%">
          <span>1:1문의</span>
        </button>
      </li>
      <div class="tab_con ty2">
        <fieldset class="search_wrap ty2">
          <legend>영화관 FAQ 검색하기</legend>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            id="searchKeyword"
            title="검색어를 입력해주세요"
          />
          <button type="button" class="btn_col2">검색</button>
          <div class="txt_help_wrap">
            <p>더 궁금한 점이 있거나, 이미 문의한 내용과 답변을 확인하려면?</p>
            <a href="#none">1:1문의 바로가기</a>
          </div>
        </fieldset>
        <table
          class="tb_acc_wrap"
          summary="FAQ 표입니다. 구분, 질문 순서로 행이 구성되어 있습니다."
        >
          <caption>
            FAQ
          </caption>
          <colgroup>
            <col style="width: 20%" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" id="thead0">No.</th>
              <th scope="col" id="thead1">질문</th>
            </tr>
          </thead>
          <tbody id="tab">
            <tr
              class="acc_head"
              aria-expanded="false"
              role="button"
              id="tr_150"
            >
              <td id="row0" headers="thead0">1</td>
              <td headers="thead1 row0" class="text_l">
                <a href="#none" class="ic_q" title="열기">
                  <strong class="txt_qna q"><span>질문</span></strong
                  >카드로 결제할 경우 환불은 언제 되나요?
                </a>
              </td>
            </tr>
            <tr class="acc_body" role="region" id="tr2_150">
              <td colspan="2" headers="thead1 row0">
                <div class="ic_a">
                  <strong class="txt_qna a"><span>답변</span></strong>
                  <div>
                    ■ 환불안내<br />&nbsp;<br />ㆍ 신용카드<br />&nbsp;- 결제 후
                    3일 이내 취소시 승인취소 가능합니다.<br />&nbsp; - 3일 이후
                    예매 취소 시 영업일 기준 3일 ~7일 이내 카드사에서
                    환불됩니다.<br />&nbsp;<br />ㆍ 체크카드<br />&nbsp; - 결제
                    후 3일 이내 취소 시 당일 카드사에서 환불 처리됩니다.<br />&nbsp;
                    - 3일 이후 예매 취소 시 카드사에 따라 3일 ~ 10일 이내
                    카드사에서 환불됩니다.<br />&nbsp;<br />
                    ㆍ 휴대폰 결제<br />&nbsp; - 결제 일자 기준
                    당월(1일~말일까지) 취소만 가능합니다.<br />&nbsp;- 익월
                    취소의 경우 롯데시네마 고객센터(1544-8855)로 문의 주시기
                    바랍니다.<br /><br />ㆍ카카오페이 간편결제<br />&nbsp;-
                    카카오페이머니를 사용하신 경우 카카오페이머니 잔액으로
                    원복됩니다.<br />&nbsp;- 카드 결제를 한 경우 카드사 정책에
                    따라 승인취소가 진행되며,<br />&nbsp;&nbsp;&nbsp; 3일 이후
                    매입 취소 시 영업일 기준 3~10일 소요됩니다.
                    <br /><br />ㆍ페이코 간편결제<br />&nbsp; - PAYCO
                    쿠폰/포인트를 사용하신 경우 각각의 쿠폰/포인트로
                    원복됩니다.&nbsp;<br />&nbsp; - 카드 결제 금액은 카드사
                    정책에 따라 승인취소가 진행되며,<br />&nbsp;&nbsp;&nbsp; 3일
                    이후 매입취소 시 영업일 기준 3~10일 소요됩니다.
                  </div>
                </div>
              </td>
            </tr>
            <tr class="acc_head" aria-expanded="false" role="button" id="tr_79">
              <td id="row0" headers="thead0">2</td>
              <td headers="thead1 row0" class="text_l">
                <a href="#none" class="ic_q" title="열기">
                  <strong class="txt_qna q"><span>질문</span></strong
                  >SWEET SPOT이 무엇인가요?
                </a>
              </td>
            </tr>
            <tr class="acc_body" role="region" id="tr2_79">
              <td colspan="2" headers="thead1 row0">
                <div class="ic_a">
                  <strong class="txt_qna a"><span>답변</span></strong>
                  <div>
                    <p>
                      SWEET SPOT이란, 스크린 가운데에서 상영관 뒤 벽까지 직선
                      거리의 2/3 지점으로, 롯데시네마가 추천하는 최적의 화면과
                      사운드를 즐길 수 있는 좌석입니다.
                    </p>
                    <p>별도의 추가 요금은 없습니다.</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="acc_head" aria-expanded="false" role="button" id="tr_78">
              <td id="row0" headers="thead0">3</td>
              <td headers="thead1 row0" class="text_l">
                <a href="#none" class="ic_q" title="열기">
                  <strong class="txt_qna q"><span>질문</span></strong
                  >분실물을 찾고 싶어요.
                </a>
              </td>
            </tr>
            <tr class="acc_body" role="region" id="tr2_78">
              <td colspan="2" headers="thead1 row0">
                <div class="ic_a">
                  <strong class="txt_qna a"><span>답변</span></strong>
                  <div>
                    영화관을 이용하시다가 소지물품을 분실하신 경우에는 VS시네마
                    통합콜센터 1544-****로 연락하시어 확인 하실 수 있습니다.
                  </div>
                </div>
              </td>
            </tr>
            <tr class="acc_head" aria-expanded="false" role="button" id="tr_39">
              <td id="row0" headers="thead0">4</td>
              <td headers="thead1 row0" class="text_l">
                <a href="#none" class="ic_q" title="열기"
                  ><strong class="txt_qna q"><span>질문</span></strong
                  >영화티켓 예매 및 취소는 어떻게 하나요?</a
                >
              </td>
            </tr>
            <tr class="acc_body" role="region" id="tr2_39">
              <td colspan="2" headers="thead1 row0">
                <div class="ic_a">
                  <strong class="txt_qna a"><span>답변</span></strong>
                  <div>
                    <p>
                      ■ 티켓예매 (결제 방법)<br />ㆍ 홈페이지, 모바일 앱/웹
                      예매는 영화시작시간 10분 후까지 예매 가능합니다.<br />ㆍ
                      영화관 현장 예매는 &nbsp; 영화시작시간 직전까지 예매
                      가능합니다.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      ■ 티켓취소 <br />ㆍ 홈페이지, 모바일 앱/웹 예매는
                      영화시작시간 20분 전까지 취소 가능합니다.<br />ㆍ&nbsp;영화관
                      현장 취소는&nbsp;영화시작시간 직전까지 취소 가능합니다.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      ※ 현장에서 티켓으로 출력을 진행한 경우 온라인 취소가
                      불가능하며,
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp; 영화관 매표소 / 스위트샵을 통해
                      상영시간 전까지 취소 가능합니다.
                    </p>
                    <p>
                      ※ 무대인사가 포함된 영화의 경우 행사의 원활한 진행을 위해
                      상영시간 24시간 이전부터는 취소가 불가합니다.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="acc_head" aria-expanded="false" role="button" id="tr_35">
              <td id="row0" headers="thead0">5</td>
              <td headers="thead1 row0" class="text_l">
                <a href="#none" class="ic_q" title="열기"
                  ><strong class="txt_qna q"><span>질문</span></strong
                  >관람등급 안내</a
                >
              </td>
            </tr>
            <tr class="acc_body" role="region" id="tr2_35">
              <td colspan="2" headers="thead1 row0">
                <div class="ic_a">
                  <strong class="txt_qna a"><span>답변</span></strong>
                  <div>
                    <p>
                      VS시네마는 영화 및 비디오 진흥에 관한 법률(이하 영비법)을
                      준수합니다.
                    </p>
                    <p>
                      ■ 등급 기준<br />ㆍ 전체 관람가 : 모든 연령의 관람객이
                      관람할 수 있는 영화<br />ㆍ 12세 관람가 : 만 12세 미만의
                      관람객은 관람할 수 없는 영화(보호자 동반 시 12세 미만
                      관람가)<br />ㆍ 15세 관람가 : 만 15세 미만의 관람객은
                      관람할 수 없는 영화(보호자 동반 시 15세 미만 관람가)<br />ㆍ
                      청소년 관람불가 : 만 18세 미만의 관람객은 관람할 수 없는
                      영화
                    </p>
                    <p>
                      영비법 29조에 따르면 [만 12세 이상 관람가/ 만 15세 이상
                      관람가]의 등급이라도 <br />부모 등 보호자를 동반하는 경우
                      어린이(유아) 동반이 가능합니다.<br />반드시 보호자의
                      동반이 필요함을 양지하여 주시기 바랍니다.
                    </p>
                    <p>
                      <strong>
                        단, 청소년 관람불가 영화는 보호자 동반과 관계없이
                        <br />만 18세 미만이거나 연령 조건을 만족하여도 초중고
                        재학 중인 청소년 및 영유아 관람이 절대 불가합니다.
                      </strong>
                    </p>
                    <p>
                      <strong
                        >영화관 현장에서 연령확인 불가 시 입장이 제한될 수
                        있습니다.
                      </strong>
                    </p>
                    <p>
                      <strong
                        >또한 상영등급에 맞지 않는 영화를 관람하거나 무단입장을
                        하는 경우 형사처벌 및 손해 배상의 대상이 될 수 있습니다.
                      </strong>
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- </li> -->
      <!-- <li>
        <button type="button" class="tab_tit" style="width: 20%; left: 20%">
          <span>공지사항</span>
        </button>
      </li>
      <li>
        <button type="button" class="tab_tit" style="width: 20%; left: 40%">
          <span>1:1문의</span>
        </button>
      </li> -->
      <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
    </ul>
  </div>
</template>

<script>
import NavBlack from "@/components/NavBlack.vue";
import initCustom from "../assets/js/custom";

export default {
  components: {
    NavBlack,
  },
  mounted() {
    initCustom();
  },
};
</script>

<style>
body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      fieldset,
      ul,
      ol,
      dl,
      dt,
      dd,
      p,
      figure {
        margin: 0;
        padding: 0;
      }
      .title_top {
        margin-bottom: 20px;
        padding: 25px 0 14px;
        border-bottom: 1px solid #eee;
      }
      .title_top .tit {
        float: left;
        font-size: 24px;
        color: #000;
      }
      .tab_wrap.outer {
        padding-top: 80px;
      }
      .tab_wrap {
        position: relative;
      }
      ul,
      ol {
        list-style: none;
      }

      .tab_tit {
        border-bottom: 2px solid #111;
        color: #000;
      }
      .tab_con {
        overflow: inherit;
        position: relative;
        width: auto;
        height: auto;
      }
      .tab_con.ty2 {
        margin-top: -8px;
      }
      .search_wrap {
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
      .search_wrap.ty2 input[type="text"] {
        width: 440px;
        margin-right: 8px;
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
      body,
      input,
      button,
      select,
      textarea {
        font-family: "Noto Sans KR", "Roboto", "dotum", "sans-serif";
        font-size: 12px;
        color: #000;
      }
      .search_wrap [class^="btn_col"] {
        width: 86px;
        height: 38px;
        line-height: 34px;
        vertical-align: middle;
      }
      .btn_col2 {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #414141;
        font-size: 14px;
        color: #ffffff !important;
        text-align: center;
        vertical-align: middle;
        background-color: #414141;
      }
      button {
        border: 1px solid #ddd;
        cursor: pointer;
        background-color: #fff;
      }
      .search_wrap .txt_help_wrap {
        float: right;
        border-left: 1px solid rgba(0, 0, 0, 0.27);
        padding: 0 25px;
        margin-left: 20px;
        font-size: 12px;
      }
      .search_wrap .txt_help_wrap p {
        color: #666666;
        margin-bottom: 10px;
      }
      .search_wrap .txt_help_wrap a {
        color: #000;
        text-decoration: underline;
        margin-right: 24px;
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
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border: 0;
      }
      .tb_acc_wrap thead th {
        border-bottom-color: #bbbbbb;
        font-weight: bold;
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
      .tb_acc_wrap tbody tr.acc_head {
        cursor: pointer;
      }
      .tb_acc_wrap td.text_l {
        padding: 20px;
      }
      .text_l {
        text-align: left !important;
      }
      .tb_acc_wrap tbody tr.acc_body td > div {
        position: relative;
        background-color: #f8f8f8;
      }
      .tb_acc_wrap tbody .ic_a {
        padding: 20px;
        padding-left: 246px;
      }
      .tb_acc_wrap tbody .ic_q,
      .tb_acc_wrap tbody .ic_a {
        text-align: left;
      }
      .tb_acc_wrap tbody .ic_a .txt_qna.a {
        left: 216px;
      }
      .txt_qna.a {
        background-color: #7bdbd1;
      }
      .tb_acc_wrap .txt_qna {
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .txt_qna {
        overflow: hidden;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        border-radius: 50%;
        text-align: center;
      }
      .tb_acc_wrap tbody tr.acc_body {
        display: none;
      }
</style>
