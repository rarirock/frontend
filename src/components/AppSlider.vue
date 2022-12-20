<template>
  <div>
    <!-- AppSlider.vue : slider(carosal) 통신으로 위한 컴포넌트 -->
    <!-- 인기영화 carosal 시작 -->
    <div class="section section-3" data-aos="fade-up" data-aos-delay="100">
      <!-- carosal(인기영화) 소개 문구, 좌우 버튼 -->
      <!-- 이부분 삭제시 slide 실행 안됨 -->
      <div class="container">
        <div class="row align-items-center justify-content-between mb-5">
          <!-- 소개 문구 시작 -->
          <div class="col-lg-5" data-aos="fade-up"></div>
          <!-- 소개 문구 끝 -->
          <!-- 좌우 버튼 시작 -->
          <div
            class="col-lg-5 text-sm-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div id="destination-controls">
              <span class="prev me-3" data-controls="prev">
                <span class="icon-chevron-left"></span>
              </span>
              <span class="next" data-controls="next">
                <span class="icon-chevron-right"></span>
              </span>
            </div>
          </div>
          <!-- 좌우 버튼 끝 -->
        </div>
      </div>
      <!-- 소개문구, 좌우버튼 끝 -->

      <!-- 인기 영화 리스트 시작 -->
      <div class="col-lg-9 d-lg-inline-block destination-slider-wrap">
        <div class="destination-slider">
          <div
            class="destination"
            v-for="(slide, index) in slideList"
            :key="index"
          >
            <div class="thumb" v-on:mouseover="mouseover">
              <img :src="slide.img" alt="Image" class="img-slide" />
              <div class="price">rank</div>
            </div>
            <div class="mt-4">
              <h3>
                <a href="#"> {{ slide.text }} </a>
              </h3>
              <span class="meta">예매율 | 별점</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 인기 영화 리스트 끝 -->
    </div>
    <!-- 인기영화 carosal 끝 -->
  </div>
</template>

<script>
import initCustom from "../assets/js/custom";

export default {
  name: "AppSlider",
  props: {
    slideList: Array,
  },
  mounted() {
    initCustom();
  },
  methods: {
    mouseover: function () {
      // 추후 로직 변경 예정
    alert("마우스오버 이벤트");
  },
  },
};
</script>

<style></style>
