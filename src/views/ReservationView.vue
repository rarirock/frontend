<template>



    <div>

        <!-- 상단 메뉴  -->
        <NavBlack></NavBlack>

        <!-- 상영시간 영화 선택 -->
        <div v-if="showSelectMovie">
            <SelectMovie></SelectMovie>

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
import SelectMovie from '@/components/reservation/SelectMovieTime.vue'
import SeatResevation from '@/components/reservation/SeatReservation.vue'
import PaymentView from '@/components/reservation/PaymentView.vue'
import custom from '@/assets/js/custom.js'

export default {
    components: {
        NavBlack,
        SelectMovie,
        SeatResevation,
        PaymentView,
    },
    mounted() {
        custom();

    },
    data() {
        return {
            showSelectMovie: true,
            showSelectSeat: false,
            showPayment: false,
        }
    },

}
</script>

<style >

</style>