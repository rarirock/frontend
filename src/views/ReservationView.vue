<template>



    <div>

        <!-- 상단 메뉴  -->
        <NavBlack></NavBlack>

        <!-- 상영시간 영화 선택 -->
        <div v-if="showSelectMovie">
            <SelectMovie></SelectMovie>

        </div>


        <!-- pop up 팝업 좌석 , seat -->
        <div v-if="showSelectMoviePopup">
            <SeatPopup></SeatPopup>
        </div>


        <!-- 좌석 예약 페이지 -->
        <div v-if="showSelectSeat">
            <SeatResevation></SeatResevation>
        </div>

        <!-- 결제 페이지 -->
        <div v-if="showPayment">
            <PaymentView></PaymentView>
        </div>



    </div>
</template>

<script>
import NavBlack from '@/components/NavBlack.vue'
import SeatPopup from '@/components/reservation/SeatPopup.vue'
import SelectMovie from '@/components/reservation/SelectMovie.vue'
import SeatResevation from '@/components/reservation/SeatReservation.vue'
import PaymentView from '@/components/reservation/PaymentView.vue'
import custom from '@/assets/js/custom.js'

export default {
    components: {
        NavBlack,
        SelectMovie,
        SeatPopup,
        SeatResevation,
        PaymentView,
    },
    mounted() {
        custom();

    },
    data() {
        return {
            showSelectMovie: true,
            showSelectMoviePopup: false,
            showSelectSeat: false,
            showPayment: false,
        }
    },

}
</script>

<style >

</style>