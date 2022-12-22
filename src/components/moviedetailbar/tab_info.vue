<template>
  <div>
    <div class="tab_con">
      <h4 class="hidden">영화정보</h4>
      <div class="movi_tab_info1">
        <div class="left_con">
          <strong class="tit_info">시놉시스</strong>
          <div
            class="mCustomScrollbar _mCS_1 mCS-autoHide"
            data-mcs-theme="minimal-dark"
            style="position: relative; overflow: visible"
          >
            <div
              id="mCSB_1"
              class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
              style="max-height: none"
              tabindex="0"
            >
              <div
                id="mCSB_1_container"
                class="mCSB_container"
                style="position: relative; top: 0; left: 0"
                dir="ltr"
              >
                <p class="txt_info">
                  <span
                    >&lt;아바타: 물의 길&gt;은 판도라 행성에서<br />'제이크
                    설리'와 '네이티리'가 이룬 가족이 겪게 되는 무자비한
                    위협과<br />살아남기 위해 떠나야 하는 긴 여정과 전투,<br />그리고
                    견뎌내야 할 상처에 대한 이야기를 그렸다.<br /><br />월드와이드
                    역대 흥행 순위 1위를 기록한 전편 &lt;아바타&gt;에 이어<br />제임스
                    카메론 감독이 13년만에 선보이는 영화로,<br />샘 워싱턴, 조
                    샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고<br />존
                    랜도가 프로듀싱을 맡았다.</span
                  >
                </p>
              </div>
            </div>
            <div
              id="mCSB_1_scrollbar_vertical"
              class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
              style="display: block"
            >
              <div class="mCSB_draggerContainer">
                <div
                  id="mCSB_1_dragger_vertical"
                  class="mCSB_dragger"
                  style="
                    position: absolute;
                    min-height: 50px;
                    display: block;
                    height: 50px;
                    max-height: 81px;
                    top: 0px;
                  "
                >
                  <div class="mCSB_dragger_bar" style="line-height: 50px"></div>
                </div>
                <div class="mCSB_draggerRail"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_con">
          <strong class="tit_info">관람 선호도</strong>
          <div class="group_graph">
            <div class="bx_graph01">
              <div class="bg"></div>
              <dl>
                <dt class="mal">남성</dt>
                <dd class="mal">
                  <span class="bar" style="height: 48.7%"></span
                  ><strong>48.7<span>%</span></strong>
                </dd>
                <dt class="fem">여성</dt>
                <dd class="fem">
                  <span class="bar" style="height: 51.3%"></span
                  ><strong>51.3<span>%</span></strong>
                </dd>
              </dl>
            </div>
            <div class="bx_graph02">
              <dl>
                <dt class="gen10">10대</dt>
                <dd class="gen10 undefined" style="height: 6.4%">
                  <span class="bar"></span><strong>6.4<span>%</span></strong>
                </dd>
                <dt class="gen20">20대</dt>
                <dd class="gen20 top" style="height: 34.3%">
                  <span class="bar"></span><strong>34.3<span>%</span></strong>
                </dd>
                <dt class="gen30">30대</dt>
                <dd class="gen30 undefined" style="height: 31.1%">
                  <span class="bar"></span><strong>31.1<span>%</span></strong>
                </dd>
                <dt class="gen40">40대</dt>
                <dd class="gen40 undefined" style="height: 28.3%">
                  <span class="bar"></span><strong>28.3<span>%</span></strong>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="movi_tab_info2" id="movie_trailer">
        <h5 class="tit_info">트레일러 (5)</h5>
        <!-- tiny-slider 로 만들기 -->
      </div>
      <div class="movi_tab_info3" id="movie_poster">
        <h5 class="tit_info">포스터 · 스틸컷 (24)</h5>
        <!-- tiny-slider 로 만들기 -->
        <div class="stealcut_view_wrap">
          <!-- tiny-slider 로 만들기 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
