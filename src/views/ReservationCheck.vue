<template>
  <div>

    <!-- 상단 메뉴  -->
    <NavBlack></NavBlack>

    <!-- 예매 티켓 확인 시작 -->
    <div>
      <div id="form-container" class="mt-5">
        <h3>예매 티켓 확인</h3>
          <!-- 예매한 영화의 이름이 일치하면 그 영화의 포스터 or 배너가 표시되는 div -->
          <div class="mt-3">
            '예매영화의 사진'
          </div>

          <!-- 예매정보 불러오는 div -->
          <div class="col-md-6">
            <ul> 
              <li 
                :class="{ active: index == currentIndex }"
                v-for="(data, index) in ticket"
                :key ="index"
              >예매번호<br>
              <!-- 티켓(예매) 번호 -->
              {{ data.ticketNo }}
              </li>
              <li 
                :class="{ active: index == currentIndex }"
                v-for="(data, index) in ticket"
                :key ="index"
              >상영일<br>
              <!-- 영화상영일 -->
              {{ data.ticketDate }}
              </li>
              <li 
                :class="{ active: index == currentIndex }"
                v-for="(data, index) in ticket"
                :key ="index"
              >상영시간<br>
              <!-- 영화 상영시간 -->
              {{ data.ticketTime }}
              </li>
              <li 
                :class="{ active: index == currentIndex }"
                v-for="(data, index) in ticket"
                :key ="index"
              >상영관<br>
              <!-- 영화상영관 -->
              {{ data.ticketTheater }}
              </li>
              <li 
                :class="{ active: index == currentIndex }"
                v-for="(data, index) in ticket"
                :key ="index"
              >좌석<br>
              <!-- 좌석 -->
              {{ data.ticketSeat }}
              </li>
            </ul>
          </div>
          <!-- 예매정보 div 끝 -->

      </div>
    </div>
    <!-- 예매 티켓 확인 끝 -->
    

    <!-- 확인버튼(홈으로 이동) -->
    <button type="button" @click="toHome">확인</button>


  </div>
</template>

<script>
// @ is an alias to /src
import NavBlack from '@/components/NavBlack.vue'
// import 예약티켓확인Service 필요
import initCustom from "../assets/js/custom";

export default {
  data() {
    return {
      ticket: [],
      currentIndex: -1,
    }
  },
  components: {
    NavBlack
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' })
    }
  },
  mounted() {
    initCustom();
  },
};
</script>

<style></style>
