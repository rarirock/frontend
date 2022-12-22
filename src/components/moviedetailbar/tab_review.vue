<template>
  <div>
    <div class="tab_con">
      <h4 class="hidden">평점 및 관람평</h4>
      <div class="wrap_reviewstarscore starReg" id="movie_review_box">
        <div class="star_score_box">
          <h4 class="h4_tit">평점 · 관람평 작성</h4>
          <div class="star_info">
            <div class="star_rate type5">
              <button type="button" class="star starR1 on">
                <em>별1점</em></button
              ><button type="button" class="star starR2 on">
                <em>별2점</em></button
              ><button type="button" class="star starR1 on">
                <em>별3점</em></button
              ><button type="button" class="star starR2 on">
                <em>별4점</em></button
              ><button type="button" class="star starR1 on">
                <em>별5점</em></button
              ><button type="button" class="star starR2 on">
                <em>별6점</em></button
              ><button type="button" class="star starR1 on">
                <em>별7점</em></button
              ><button type="button" class="star starR2 on">
                <em>별8점</em></button
              ><button type="button" class="star starR1 on">
                <em>별9점</em></button
              ><button type="button" class="star starR2 on">
                <em>별10점</em>
              </button>
            </div>
            <strong class="score_info"><em>10</em></strong>
          </div>
          <p class="txt_info">
            영화 관람 후 관람평 작성 시
            <span class="num">POINT 50P</span> 적립
          </p>
        </div>
        <div class="movi_review_box">
          <div class="review_write_box">
            <textarea
              id="txtComment"
              placeholder="평점 및 영화 관람평을 작성해주세요. 주제와 무관한 리뷰 또는 스포일러는 표시제한 또는 삭제될 수 있습니다.
작성하신 평점 및 관람평은 롯데시네마 App, 홈페이지, SNS 등에 인용될 수 있습니다."
              title="관람평 작성"
            ></textarea
            ><span class="byte_info"
              ><strong class="byte">0</strong>/<em>220</em></span
            >
          </div>
          <button type="submit" id="btnComment" class="btn_submit">
            관람평 작성
          </button>
        </div>
      </div>
      <div class="movi_review_list">
        <h5 class="hidden">관람평 목록</h5>
        <div class="review_top">
          <span class="tit"
            ><span class="txt_ic_score"
              ><span class="starimg">관람객 관람평</span></span
            ></span
          >
          <div class="wrap_sort_right">
            <span class="total_num">총 <em>2,168</em>건</span>
            <ul class="sort_list">
              <li id="reviewsortseq1" class="active">
                <button class="latest">최신순</button>
              </li>
              <li id="reviewsortseq3">
                <button class="empathy">공감순</button>
              </li>
            </ul>
          </div>
        </div>
        <ul class="review_con_list" id="review_con_list1"></ul>
        <ul class="review_con_list" id="review_con_list2">
          <li>
            <span class="img_info"
              ><img src="../../assets/images/customer/ic_survey_01.png" alt=""
            /></span>
            <div class="top_info">
              <span class="name">서*봉</span
              ><span class="txt_ic_score"
                ><span class="stargradebg"
                  ><span class="blindbg grade10"
                    ><span class="stargradecolor"></span></span></span
                ><span class="gradenum">10</span></span
              ><span class="date_info">2022.12.20</span>
            </div>
            <div class="review_info">미친 CG 최고였어요. ??????</div>
            <div class="btm_info">
              <div class="edit_review"><em></em></div>
              <button type="button" class="btn_ic_good" id="reviewid_2757102">
                <em>좋아요</em><span id="recommandcount_2757102">0</span>
              </button>
            </div>
          </li>
          <li>
            <span class="img_info"
              ><img src="../../assets/images/customer/ic_survey_01.png" alt=""
            /></span>
            <div class="top_info">
              <span class="name">이*섭</span
              ><span class="txt_ic_score"
                ><span class="stargradebg"
                  ><span class="blindbg grade8"
                    ><span class="stargradecolor"></span></span></span
                ><span class="gradenum">8</span></span
              ><span class="date_info">2022.12.20</span>
            </div>
            <div class="review_info">영상미가 좋았어요 재미있게 봤어요</div>
            <div class="btm_info">
              <div class="edit_review"><em></em></div>
              <button type="button" class="btn_ic_good" id="reviewid_2757100">
                <em>좋아요</em><span id="recommandcount_2757100">0</span>
              </button>
            </div>
          </li>
          <li>
            <span class="img_info"
              ><img src="../../assets/images/customer/ic_survey_01.png" alt=""
            /></span>
            <div class="top_info">
              <span class="name">김*철</span
              ><span class="txt_ic_score"
                ><span class="stargradebg"
                  ><span class="blindbg grade8"
                    ><span class="stargradecolor"></span></span></span
                ><span class="gradenum">8</span></span
              ><span class="date_info">2022.12.20</span>
            </div>
            <div class="review_info">지루하지 않고 재미있게 봤어요</div>
            <div class="btm_info">
              <div class="edit_review"><em></em></div>
              <button type="button" class="btn_ic_good" id="reviewid_2757099">
                <em>좋아요</em><span id="recommandcount_2757099">0</span>
              </button>
            </div>
          </li>
        </ul>
        <button type="button " class="btn_txt_more" id="btn_review_more">
          <span>펼쳐보기</span>
        </button>
      </div>
      <div class="list_bdr_box">
        <h3 class="title txt_caution2">유의사항</h3>
        <ul class="list_txt">
          <li>
            관람평 작성에 대한 포인트는 익일 적립되며, 관람 후 초기 1회에
            대해서만 적립됩니다.
          </li>
          <li>수정/삭제 후 재등록 시에는 포인트 적립이 되지 않습니다.</li>
          <li>
            관람평은 관람 내역당 1회만 작성 가능하며, 상영종료된 영화의 관람평은
            작성 불가합니다.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
