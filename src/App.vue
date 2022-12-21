<template>
  <div id="app">
    <!-- 본문(main/section) -->
    <router-view />
    <!-- footerCom : 꼬리말 -->
    <FooterCom />
  </div>
</template>


<script>
import FooterCom from "./components/common/FooterCom.vue";

export default {
  components: {
    FooterCom
  }
}
</script>


<style lang="scss">
// 자식 컴포넌트는 아래 css 파일을 공유함
@import "./assets/css/style.css";
</style>
