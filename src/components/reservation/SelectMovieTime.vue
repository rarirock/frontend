<template>
    <div>
        <!-- 영화 시간 선택화면 시작-->
        <div>
            <div id="contents" class="contents_full contents_reserve">
                <div class="wrap_reserve">
                    <h2 class="hidden">예매하기</h2>

                    <!-- 좌측 세로 메뉴 시작 -->
                    <div class="section_step_tit">
                        <ul>
                            <li class="active step01"><a href="#reserveStep01"><strong
                                        class="tit"><span>01</span><br>상영시간</strong>
                                    <div class="bx_con">
                                        <dl>
                                            <dt>선택한 영화 제목</dt>
                                            <dd>아바타: 물의 길</dd>
                                            <dt>선택한 상영관</dt>
                                            <dd>노원 7관</dd>
                                            <dt>선택한 상영 날짜</dt>
                                            <dd>2022-12-20(화)</dd>
                                            <dt>선택한 시간</dt>
                                            <dd>16:45~20:07</dd>
                                        </dl>
                                    </div>
                                </a></li>
                            <li class="disabled"><a style="cursor: default;"><strong
                                        class="tit"><span>02</span><br>인원/좌석</strong></a></li>
                            <li class="disabled"><a style="cursor: default;"><strong
                                        class="tit"><span>03</span><br>결제</strong></a></li>
                            <li class="disabled"><a style="cursor: default;"><strong
                                        class="tit"><span>04</span><br>결제완료</strong></a></li>
                        </ul>
                    </div>
                    <!-- 좌측 세로 메뉴 끝 -->

                    
                    <div id="reserveStep01" class="section_step_con step01 active">
                        <h3 class="hidden">상영시간</h3>

                        <!-- 1/3 부분 시작 -->
                        <div class="article article_cinema area__movingbar litype2">
                            <div class="group_top">
                                <h4 class="tit">{{ selectTheater.cinemaName }}</h4>
                            </div>
                            <div class="inner">
                                <ul class="tab_wrap outer actionmovingbar">
                                    <li class="active">
                                        <span class="tab_tit" style="width: 50%; left: 0%; text-align: center;">
                                            전체
                                        </span>
                                        <div class="tab_con">
                                            <h5 class="hidden">전체</h5>
                                            <div class="cinema_select_wrap cinemaSelect basicCinema"
                                                style="overflow:auto;">
                                                <ul>
                                                   
                                                    <div v-for="(data, num) in theater" :key="num">
                                                        <li class="depth1"
                                                            :class="{ 'active': selectTheater.cinemaName == data.cinemaName }">
                                                            <a   @click="getTheater(data)">{{ data.cinemaName
                                                            }}</a></li>
                                                    </div>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 1/3 부분 끝 -->

                        <!-- 2/3 부분 시작 -->
                        <div class="article article_movie">
                            <div class="group_top">
                                <h4 class="tit movie_name">{{ themaOfMovie.mTitle }}</h4>
                            </div>
                            <div class="inner">

                                <!-- 영화 정렬 순서 시작 -->
                                <div class="list_filter">
                                    <select title="영화 정렬 방법 선택">
                                        <option value="A">예매순</option>
                                        <option value="B">관객순</option>
                                        <option value="C">평점순</option>
                                        <option value="D">예정작</option>
                                    </select>
                                    <div class="bx_btn_view">
                                    </div>
                                </div>
                                <!-- 영화 정렬 순서 끝 -->


                                <!-- 영화 목록 보여주기 시작 -->
                                <div class="movie_select_wrap list movieSelect">
                                    <div data-mcs-theme="minimal-dark"
                                        class="mCustomScrollbar movieScroll _mCS_9 mCS-autoHide"
                                        style="position: relative; overflow: visible;">
                                        <div id="mCSB_9" tabindex="0"
                                            class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                            style="max-height: none; overflow:auto;">
                                            <div id="mCSB_9_container" dir="ltr" class="mCSB_container"
                                                style="position: relative; top: 0px; left: 0px;">
                                                <ul>

                                                    <!-- 선택한 영화 제목 상단에 보여주기 -->
                                                    <li :class="{ 'active': themaOfMovie.mTitle == data.mTitle }"
                                                        v-for="(data, index) in ScreeningList" :key="index"
                                                        @click="getMovie(data)"><a  >

                                                            <div class="group_infor">
                                                                <div class="bx_tit">
                                                                    <span
                                                                        :class="{ 'ic_grade gr_12': data.mAge == 12,
                                                                         'ic_grade gr_15': data.mAge == 15,
                                                                          'ic_grade gr_18': data.mAge == 18,
                                                                           'ic_grade gr_all': data.mAge == 'all' }"></span>

                                                                    <strong class="tit">{{ data.mTitle }}</strong>
                                                                </div>
                                                                <dl>
                                                                    <dd><strong class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 영화 목록 보여주기 끝 -->


                            </div>
                        </div>
                        <!-- 2/3 부분 끝 -->

                        <!-- 3/3 부분 시작  -->
                        <div class="article article_time area__movingbar litype6">
                            <div class="group_top">
                                <h4 class="tit">{{ nowDate }}</h4>
                            </div>
                            <div class="inner">

                                <!-- 날짜 선택 시작 -->
                                <div class="date_select_wrap dateReserveWrap">
                                    <div class="slide_wrap slide_reserve_date">
                                        <ul class="owl-carousel owl-loaded owl-drag">
                                            <!-- TODO: 날짜 표시 시작 -->
                                            <div class="owl-stage-outer">
                                                <div class="owl-carousel owl-stage"
                                                    style="transform: translate3d(0px, 0px, 0px); transition: all 0.4s ease 0s; width: 420px;">
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><strong class="month">{{ mm }}월</strong><span
                                                                class="date"><label><input type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        :data-playdate="nowDate" data-isplaydate="Y"
                                                                        data-playweek="오늘" checked="checked"><strong>{{
                                                                                dd
                                                                        }}</strong><em>오늘</em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date"><label><input type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-21" data-isplaydate="Y"
                                                                        data-playweek="수"><strong>{{ dd + 1
                                                                        }}</strong><em>{{ }}</em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date"><label><input type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-22" data-isplaydate="Y"
                                                                        data-playweek="목"><strong>{{ dd + 2
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date"><label><input type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-23" data-isplaydate="Y"
                                                                        data-playweek="금"><strong>{{ dd + 3
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date sat"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="Y" data-playdate="2022-12-24"
                                                                        data-isplaydate="Y" data-playweek="토"><strong>{{
                                                                                dd + 4
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date sun"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="Y" data-playdate="2022-12-25"
                                                                        data-isplaydate="Y" data-playweek="일"><strong>{{
                                                                                dd + 5
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-26"
                                                                        data-isplaydate="Y" data-playweek="월"><strong>{{
                                                                                dd + 6
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item active" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-27"
                                                                        data-isplaydate="Y" data-playweek="화"><strong>{{
                                                                                dd + 7
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-28"
                                                                        data-isplaydate="Y" data-playweek="수"><strong>{{
                                                                                dd + 8
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-29"
                                                                        data-isplaydate="Y" data-playweek="목"><strong>{{
                                                                                dd + 9
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-30"
                                                                        data-isplaydate="Y" data-playweek="금"><strong>{{
                                                                                dd + 10
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><span class="date sat disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-31"
                                                                        data-isplaydate="Y" data-playweek="토"><strong>{{
                                                                                dd + 11
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><strong class="month"></strong><span
                                                                class="date sun disabled"><label><input type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2023-01-01" data-isplaydate="Y"
                                                                        data-playweek="일"><strong>{{ dd + 12
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                    <div class="owl-item" style="width: 52.5px;">
                                                        <li class="item"><span class="date disabled"><label><input
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2023-01-02"
                                                                        data-isplaydate="N" data-playweek="월"><strong>{{
                                                                                dd + 13
                                                                        }}</strong><em></em></label></span>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 날짜 표시 끝 -->

                                            <!-- TODO: 날짜 양옆 화살표 시작 -->
                                            <!-- <div  class="owl-nav"><button 
                                                    type="button" role="presentation" class="owl-prev disabled"><span
                                                        
                                                        aria-label="Previous">‹</span></button><button
                                                     type="button" role="presentation"
                                                    class="owl-next"><span 
                                                        aria-label="Next">›</span></button></div>
                                            <div  class="owl-dots disabled"></div> -->
                                            <!-- 날짜 양옆 화살표 끝 -->
                                        </ul>
                                    </div>
                                </div>
                                <!-- 날짜 선택 끝 -->

                                <!-- 영화 상영관 리스트 시작 -->
                                <ul class="tab_wrap outer sml actionmovingbar">
                                    <li class="active"><button type="button" class="tab_tit"
                                            style="width: 16.6667%; left: 0%;"><span></span></button>
                                        <div class="tab_con ty5">
                                            <div data-mcs-theme="minimal-dark"
                                                class="timeScroll mCustomScrollbar _mCS_73 mCS-autoHide"
                                                style="position: relative; overflow: auto;">
                                                <div>
                                                    <div id="mCSB_73_container" dir="ltr" class="mCSB_container"
                                                        style="position: relative; top: 0px; left: 0px; overflow: auto; ">
                                                        <div class="group_time_select">
                                                            <div class="time_select_tit">
                                                                <span
                                                                        :class="{ 'ic_grade gr_12': themaOfMovie.mAge == 12,
                                                                         'ic_grade gr_15': themaOfMovie.mAge == 15,
                                                                          'ic_grade gr_18': themaOfMovie.mAge == 18,
                                                                           'ic_grade gr_all': themaOfMovie.mAge == 'all' }"></span>
                                                                <strong>{{ themaOfMovie.mTitle }}</strong>
                                                            </div>
                                                                    <!-- 3D -->
                                                            <div class="time_select_wrap timeSelect" v-if="thName3D" >
                                                                <ul class="list_hall">
                                                                    <li>3D</li>
                                                                </ul>
                                                                <ul class="list_time"  >
                                                                    <li class="near"  v-for="(cineTimedata, index) in thName3D" :key="index" >
                                                                        <a role="button"   @click="selectMovieTime(cineTimedata)" :class="{'btn disabled':cineTimedata.leftSeat==0}" >
                                                                            <dl>
                                                                                <dt>상영시간</dt>
                                                                                <dd class="time">
                                                                                    <strong>{{ cineTimedata.cineTime }}</strong>
                                                                                    <div class="tooltip">종료 16:27</div>
                                                                                </dd>
                                                                                <dt>잔여석</dt>
                                                                                <dd class="seat" v-if="cineTimedata.leftSeat!=0">
                                                                                    <strong>{{ cineTimedata.leftSeat }}</strong> /
                                                                                    {{ cineTimedata.totalSeat }}
                                                                                </dd>
                                                                                <dd class="full" v-if="cineTimedata.leftSeat==0">
                                                                                    <strong>매진</strong>
                                                                                </dd>
                                                                                <dt>상영관</dt>
                                                                                <dd class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                                   <!-- 4D3D 수퍼4D -->
                                                            <div class="time_select_wrap timeSelect" v-if="thName4D3D">
                                                                <ul class="list_hall">
                                                                    <li>4D3D</li>
                                                                </ul>
                                                                <ul class="list_time"  >
                                                                    <li class="near" v-for="(cineTimedata, index) in thName4D3D" :key="index"  >
                                                                        <a role="button"   @click="selectMovieTime(cineTimedata)"    >
                                                                            <dl>
                                                                                <dt>상영시간</dt>
                                                                                <dd class="time">
                                                                                    <strong>{{ cineTimedata.cineTime }}</strong>
                                                                                    <div class="tooltip">종료 16:27</div>
                                                                                </dd>
                                                                                <dt>잔여석</dt>
                                                                                <dd class="seat" v-if="cineTimedata.leftSeat!=0">
                                                                                    <strong>{{ cineTimedata.leftSeat }}</strong> /
                                                                                    {{ cineTimedata.totalSeat }}
                                                                                </dd>
                                                                                <dd class="full" v-if="cineTimedata.leftSeat==0">
                                                                                    <strong>매진</strong>
                                                                                </dd>
                                                                                <dt>상영관</dt>
                                                                                <dd class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <!-- 2D -->
                                                            <div class="time_select_wrap timeSelect" v-if="thName2D">
                                                                <ul class="list_hall">
                                                                    <li>2D</li>
                                                                </ul>
                                                                <ul class="list_time"  >
                                                                    <li class="near" v-for="(cineTimedata, index) in thName2D" :key="index"  >
                                                                        <a  role="button"  @click="selectMovieTime(cineTimedata)" :class="{'btn disabled':cineTimedata.leftSeat==0}" >
                                                                            <dl>
                                                                                <dt>상영시간</dt>
                                                                                <dd class="time">
                                                                                    <strong>{{ cineTimedata.cineTime }}</strong>
                                                                                    <div class="tooltip">종료 16:27</div>
                                                                                </dd>
                                                                                <dt>잔여석</dt>
                                                                                <dd class="seat" v-if="cineTimedata.leftSeat!=0">
                                                                                    <strong>{{ cineTimedata.leftSeat }}</strong> /
                                                                                    {{ cineTimedata.totalSeat }}
                                                                                </dd>
                                                                                <dd class="full" v-if="cineTimedata.leftSeat==0">
                                                                                    <strong>매진</strong>
                                                                                </dd>
                                                                                <dt>상영관</dt>
                                                                                <dd class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <!-- 2D 4K -->
                                                            <div class="time_select_wrap timeSelect" v-if="thName2D4K">
                                                                <ul class="list_hall">
                                                                    <li>2D4K</li>
                                                                </ul>
                                                                <ul class="list_time" >
                                                                    <li class="near" v-for="(cineTimedata, index) in thName2D4K" :key="index"   >
                                                                        <a role="button"   @click="selectMovieTime(cineTimedata)" :class="{'btn disabled':cineTimedata.leftSeat==0}" >
                                                                            <dl>
                                                                                <dt>상영시간</dt>
                                                                                <dd class="time">
                                                                                    <strong>{{ cineTimedata.cineTime }}</strong>
                                                                                    <div class="tooltip">종료 16:27</div>
                                                                                </dd>
                                                                                <dt>잔여석</dt>
                                                                                <dd class="seat" v-if="cineTimedata.leftSeat!=0">
                                                                                    <strong>{{ cineTimedata.leftSeat }}</strong> /
                                                                                    {{ cineTimedata.totalSeat }}
                                                                                </dd>
                                                                                <dd class="full" v-if="cineTimedata.leftSeat==0">
                                                                                    <strong>매진</strong>
                                                                                </dd>
                                                                                <dt>상영관</dt>
                                                                                <dd class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div  id="mCSB_73_scrollbar_vertical"
                                                    class="mCSB_scrollTools mCSB_73_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                    style="display: block;">
                                                    <div  class="mCSB_draggerContainer">
                                                        <div  id="mCSB_73_dragger_vertical"
                                                            class="mCSB_dragger"
                                                            style="position: absolute; min-height: 50px; display: block; height: 633px; max-height: 624px; top: 0px;">
                                                            <div  class="mCSB_dragger_bar"
                                                                style="line-height: 50px;"></div>
                                                        </div>
                                                        <div  class="mCSB_draggerRail"></div>
                                                    </div>
                                                </div> -->
                                            </div>
                                        </div>
                                    </li>
                                    <li><span type="button" class="tab_tit" style="width: 83%; left: 16.6667%;"></span>

                                    </li>
                                    <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
                                </ul>
                                <!-- 영화 상영관 리스트 끝 -->
                            </div>
                        </div>
                        <!-- 3/3 부분 끝 -->

                    </div>
                </div>
            </div>
        </div>
        <!-- 영화 시간 선택화면 끝  -->


        <!-- 좌석 미니맵 시작 -->
        <div class="dim" v-if="seatPopup">
        <div id="layerReserveStep01" class="layer_wrap layer_reserve layer_reserve01_sum2 active" tabindex="0"
            style="left: 50%; top: 50%; margin-top: -256.5px; margin-left: -250px;">
            <div class="layer_header">
                <h4 class="hidden">예매 내용 확인 팝업</h4>

                <!-- TODO: 영화 끝나는 시간 추가하기 -->
                <div id="stepOnePopupHeaderScreen"><strong>{{selectedMovieTime.cineTime}}~16:07(1관)</strong></div>
                <button type="button" class="btn_close" @click="closeScreenLayer"> 팝업 닫기 </button>
            </div>
            <div class="layer_contents">
                <div class="seat_infor_sum">
                    <div class="group_top" id="stepOnePopupContentsSeatCount">
                        <dl>
                            <dt>잔여좌석</dt>
                            <dd><strong>{{selectedMovieTime.leftSeat}}</strong>/{{selectedMovieTime.totalSeat}}</dd>
                        </dl>
                    </div>
                    <div class="group_con screen_preview_box">
                        <div class="screen_preview_con">
                            <div class="screen_info cineCont">

                                <!-- 개발영역 -->
                                <div class="smallScreen">
                                    <span class="title_screen1">SCREEN</span>

                                    <!-- 미니맵 시작-->
                                    <div class="minimap" id="stepOnePopupMiniMap">
                                        <div class="floor_bx seatSet1"> <span class="floor_tit"
                                                style="display: none;">10F</span>
                                            <div class="seat_area" style="width: 166.851px; height: 58.7295px;">
                                                <a style="left: 28.5957px; top: 0px;" class="sel handicapped p0" block-code="p0" data-seat="A4" seat-group="grNum1" alt="A4 장애인 발받침석" seat-code="1A04">
                                                    <span class="handicapped f1">
                                                        4
                                                    </span>
                                                </a>
                                                <a style="left: 36px; top: 0px;" class="sel handicapped p0" block-code="p0" data-seat="A5"
                                                    seat-group="grNum1" alt="A5 장애인 발받침석" seat-code="1A05"> <span
                                                        class="handicapped f2">5</span></a><a
                                                    style="left: 43.4043px; top: 0px;"  
                                                    class="sel handicapped p0" block-code="p0" data-seat="A6"
                                                    seat-group="grNum1" alt="A6 장애인 발받침석" seat-code="1A06"> <span
                                                        class="handicapped f2">6</span></a><a
                                                    style="left: 50.8085px; top: 0px;"  
                                                    class="sel handicapped p0" block-code="p0" data-seat="A7"
                                                    seat-group="grNum1" alt="A7 장애인 발받침석" seat-code="1A07"> <span
                                                        class="handicapped f2">7</span></a><a
                                                    style="left: 65.617px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A9"
                                                    seat-group="grNum1" alt="A9 발받침석" seat-code="1A09"> <span
                                                        class="foot_seat f2">9</span></a><a
                                                    style="left: 73.0213px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A10"
                                                    seat-group="grNum1" alt="A10 발받침석" seat-code="1A10"> <span
                                                        class="foot_seat f2">10</span></a><a
                                                    style="left: 80.4255px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A11"
                                                    seat-group="grNum1" alt="A11 발받침석" seat-code="1A11"> <span
                                                        class="foot_seat f2">11</span></a><a
                                                    style="left: 87.8298px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A12"
                                                    seat-group="grNum1" alt="A12 발받침석" seat-code="1A12"> <span
                                                        class="foot_seat f2">12</span></a><a
                                                    style="left: 95.234px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A13"
                                                    seat-group="grNum1" alt="A13 발받침석" seat-code="1A13"> <span
                                                        class="foot_seat f2">13</span></a><a
                                                    style="left: 102.638px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A14"
                                                    seat-group="grNum1" alt="A14 발받침석" seat-code="1A14"> <span
                                                        class="foot_seat f2">14</span></a><a
                                                    style="left: 110.043px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A15"
                                                    seat-group="grNum1" alt="A15 발받침석" seat-code="1A15"> <span
                                                        class="foot_seat f2">15</span></a><a
                                                    style="left: 117.447px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A16"
                                                    seat-group="grNum1" alt="A16 발받침석" seat-code="1A16"> <span
                                                        class="foot_seat f2">16</span></a><a
                                                    style="left: 124.851px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A17"
                                                    seat-group="grNum1" alt="A17 발받침석" seat-code="1A17"> <span
                                                        class="foot_seat f2">17</span></a><a
                                                    style="left: 138.638px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A18"
                                                    seat-group="grNum2" alt="A18 발받침석" seat-code="1A18"> <span
                                                        class="foot_seat f2">18</span></a><a
                                                    style="left: 146.043px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A19"
                                                    seat-group="grNum2" alt="A19 발받침석" seat-code="1A19"> <span
                                                        class="foot_seat f2">19</span></a><a
                                                    style="left: 153.447px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A20"
                                                    seat-group="grNum2" alt="A20 발받침석" seat-code="1A20"> <span
                                                        class="foot_seat f2">20</span></a><a
                                                    style="left: 160.851px; top: 0px;"  
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A21"
                                                    seat-group="grNum2" alt="A21 발받침석" seat-code="1A21"> <span
                                                        class="foot_seat f2">21</span></a><a
                                                    style="left: 28.5957px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B4" seat-group="grNum3"
                                                    alt="B4 " seat-code="1B04"> <span class=" f1">4</span></a><a
                                                    style="left: 36px; top: 4.97541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="B5" seat-group="grNum3" alt="B5 "
                                                    seat-code="1B05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B6" seat-group="grNum3"
                                                    alt="B6 " seat-code="1B06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B7" seat-group="grNum3"
                                                    alt="B7 " seat-code="1B07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B8" seat-group="grNum3"
                                                    alt="B8 " seat-code="1B08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 4.97541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="B9" seat-group="grNum3" alt="B9 "
                                                    seat-code="1B09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B10" seat-group="grNum3"
                                                    alt="B10 " seat-code="1B10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B11" seat-group="grNum3"
                                                    alt="B11 " seat-code="1B11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B12" seat-group="grNum3"
                                                    alt="B12 " seat-code="1B12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 4.97541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="B13" seat-group="grNum3" alt="B13 "
                                                    seat-code="1B13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B14" seat-group="grNum3"
                                                    alt="B14 " seat-code="1B14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B15" seat-group="grNum3"
                                                    alt="B15 " seat-code="1B15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B16" seat-group="grNum3"
                                                    alt="B16 " seat-code="1B16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B17" seat-group="grNum3"
                                                    alt="B17 " seat-code="1B17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B18" seat-group="grNum4"
                                                    alt="B18 " seat-code="1B18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B19" seat-group="grNum4"
                                                    alt="B19 " seat-code="1B19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B20" seat-group="grNum4"
                                                    alt="B20 " seat-code="1B20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 4.97541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="B21" seat-group="grNum4"
                                                    alt="B21 " seat-code="1B21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C4" seat-group="grNum5"
                                                    alt="C4 " seat-code="1C04"> <span class=" f1">4</span></a><a
                                                    style="left: 36px; top: 9.95082px;"   class="sel  p0"
                                                    block-code="p0" data-seat="C5" seat-group="grNum5" alt="C5 "
                                                    seat-code="1C05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C6" seat-group="grNum5"
                                                    alt="C6 " seat-code="1C06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C7" seat-group="grNum5"
                                                    alt="C7 " seat-code="1C07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C8" seat-group="grNum5"
                                                    alt="C8 " seat-code="1C08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 9.95082px;"   class="sel  p0"
                                                    block-code="p0" data-seat="C9" seat-group="grNum5" alt="C9 "
                                                    seat-code="1C09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C10" seat-group="grNum5"
                                                    alt="C10 " seat-code="1C10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C11" seat-group="grNum5"
                                                    alt="C11 " seat-code="1C11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C12" seat-group="grNum5"
                                                    alt="C12 " seat-code="1C12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 9.95082px;"   class="sel  p0"
                                                    block-code="p0" data-seat="C13" seat-group="grNum5" alt="C13 "
                                                    seat-code="1C13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C14" seat-group="grNum5"
                                                    alt="C14 " seat-code="1C14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C15" seat-group="grNum5"
                                                    alt="C15 " seat-code="1C15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C16" seat-group="grNum5"
                                                    alt="C16 " seat-code="1C16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C17" seat-group="grNum5"
                                                    alt="C17 " seat-code="1C17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C18" seat-group="grNum6"
                                                    alt="C18 " seat-code="1C18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C19" seat-group="grNum6"
                                                    alt="C19 " seat-code="1C19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C20" seat-group="grNum6"
                                                    alt="C20 " seat-code="1C20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 9.95082px;"  
                                                    class="sel  p0" block-code="p0" data-seat="C21" seat-group="grNum6"
                                                    alt="C21 " seat-code="1C21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D4"
                                                    seat-group="grNum7" alt="D4 " seat-code="1D04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D5"
                                                    seat-group="grNum7" alt="D5 " seat-code="1D05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D6"
                                                    seat-group="grNum7" alt="D6 " seat-code="1D06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D7"
                                                    seat-group="grNum7" alt="D7 " seat-code="1D07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D8"
                                                    seat-group="grNum7" alt="D8 " seat-code="1D08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D9"
                                                    seat-group="grNum7" alt="D9 " seat-code="1D09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D10"
                                                    seat-group="grNum7" alt="D10 " seat-code="1D10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D11"
                                                    seat-group="grNum7" alt="D11 " seat-code="1D11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D12"
                                                    seat-group="grNum7" alt="D12 " seat-code="1D12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D13"
                                                    seat-group="grNum7" alt="D13 " seat-code="1D13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D14"
                                                    seat-group="grNum7" alt="D14 " seat-code="1D14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D15"
                                                    seat-group="grNum7" alt="D15 " seat-code="1D15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D16"
                                                    seat-group="grNum7" alt="D16 " seat-code="1D16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 14.9262px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D17"
                                                    seat-group="grNum7" alt="D17 " seat-code="1D17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 14.9262px;"  
                                                    class="sel  p0" block-code="p0" data-seat="D18" seat-group="grNum8"
                                                    alt="D18 " seat-code="1D18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 14.9262px;"  
                                                    class="sel  p0" block-code="p0" data-seat="D19" seat-group="grNum8"
                                                    alt="D19 " seat-code="1D19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 14.9262px;"  
                                                    class="sel  p0" block-code="p0" data-seat="D20" seat-group="grNum8"
                                                    alt="D20 " seat-code="1D20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 14.9262px;"  
                                                    class="sel  p0" block-code="p0" data-seat="D21" seat-group="grNum8"
                                                    alt="D21 " seat-code="1D21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E4"
                                                    seat-group="grNum9" alt="E4 " seat-code="1E04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E5"
                                                    seat-group="grNum9" alt="E5 " seat-code="1E05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E6"
                                                    seat-group="grNum9" alt="E6 " seat-code="1E06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E7"
                                                    seat-group="grNum9" alt="E7 " seat-code="1E07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E8"
                                                    seat-group="grNum9" alt="E8 " seat-code="1E08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E9"
                                                    seat-group="grNum9" alt="E9 " seat-code="1E09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E10"
                                                    seat-group="grNum9" alt="E10 " seat-code="1E10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E11"
                                                    seat-group="grNum9" alt="E11 " seat-code="1E11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E12"
                                                    seat-group="grNum9" alt="E12 " seat-code="1E12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E13"
                                                    seat-group="grNum9" alt="E13 " seat-code="1E13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E14"
                                                    seat-group="grNum9" alt="E14 " seat-code="1E14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E15"
                                                    seat-group="grNum9" alt="E15 " seat-code="1E15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E16"
                                                    seat-group="grNum9" alt="E16 " seat-code="1E16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 19.9016px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E17"
                                                    seat-group="grNum9" alt="E17 " seat-code="1E17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 19.9016px;"  
                                                    class="sel  p0" block-code="p0" data-seat="E18" seat-group="grNum10"
                                                    alt="E18 " seat-code="1E18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 19.9016px;"  
                                                    class="sel  p0" block-code="p0" data-seat="E19" seat-group="grNum10"
                                                    alt="E19 " seat-code="1E19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 19.9016px;"  
                                                    class="sel  p0" block-code="p0" data-seat="E20" seat-group="grNum10"
                                                    alt="E20 " seat-code="1E20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 19.9016px;"  
                                                    class="sel  p0" block-code="p0" data-seat="E21" seat-group="grNum10"
                                                    alt="E21 " seat-code="1E21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F4"
                                                    seat-group="grNum11" alt="F4 " seat-code="1F04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F5"
                                                    seat-group="grNum11" alt="F5 " seat-code="1F05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F6"
                                                    seat-group="grNum11" alt="F6 " seat-code="1F06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F7"
                                                    seat-group="grNum11" alt="F7 " seat-code="1F07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F8"
                                                    seat-group="grNum11" alt="F8 " seat-code="1F08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F9"
                                                    seat-group="grNum11" alt="F9 " seat-code="1F09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F10"
                                                    seat-group="grNum11" alt="F10 " seat-code="1F10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F11"
                                                    seat-group="grNum11" alt="F11 " seat-code="1F11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F12"
                                                    seat-group="grNum11" alt="F12 " seat-code="1F12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F13"
                                                    seat-group="grNum11" alt="F13 " seat-code="1F13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F14"
                                                    seat-group="grNum11" alt="F14 " seat-code="1F14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F15"
                                                    seat-group="grNum11" alt="F15 " seat-code="1F15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F16"
                                                    seat-group="grNum11" alt="F16 " seat-code="1F16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 24.877px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F17"
                                                    seat-group="grNum11" alt="F17 " seat-code="1F17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 24.877px;"   class="sel  p0"
                                                    block-code="p0" data-seat="F18" seat-group="grNum12" alt="F18 "
                                                    seat-code="1F18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 24.877px;"   class="sel  p0"
                                                    block-code="p0" data-seat="F19" seat-group="grNum12" alt="F19 "
                                                    seat-code="1F19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 24.877px;"   class="sel  p0"
                                                    block-code="p0" data-seat="F20" seat-group="grNum12" alt="F20 "
                                                    seat-code="1F20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 24.877px;"   class="sel  p0"
                                                    block-code="p0" data-seat="F21" seat-group="grNum12" alt="F21 "
                                                    seat-code="1F21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G4"
                                                    seat-group="grNum13" alt="G4  예매완료좌석" seat-code="1G04"> <span
                                                        class="sweet_spot f1 completed">4</span></a><a
                                                    style="left: 36px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G5"
                                                    seat-group="grNum13" alt="G5  예매완료좌석" seat-code="1G05"> <span
                                                        class="sweet_spot f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G6"
                                                    seat-group="grNum13" alt="G6 " seat-code="1G06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G7"
                                                    seat-group="grNum13" alt="G7 " seat-code="1G07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G8"
                                                    seat-group="grNum13" alt="G8 " seat-code="1G08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G9"
                                                    seat-group="grNum13" alt="G9 " seat-code="1G09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G10"
                                                    seat-group="grNum13" alt="G10  예매완료좌석" seat-code="1G10"> <span
                                                        class="sweet_spot f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G11"
                                                    seat-group="grNum13" alt="G11  예매완료좌석" seat-code="1G11"> <span
                                                        class="sweet_spot f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G12"
                                                    seat-group="grNum13" alt="G12 " seat-code="1G12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G13"
                                                    seat-group="grNum13" alt="G13 " seat-code="1G13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G14"
                                                    seat-group="grNum13" alt="G14 " seat-code="1G14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G15"
                                                    seat-group="grNum13" alt="G15 " seat-code="1G15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G16"
                                                    seat-group="grNum13" alt="G16 " seat-code="1G16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 29.8525px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G17"
                                                    seat-group="grNum13" alt="G17 " seat-code="1G17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 29.8525px;"  
                                                    class="sel  p0" block-code="p0" data-seat="G18" seat-group="grNum14"
                                                    alt="G18 " seat-code="1G18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 29.8525px;"  
                                                    class="sel  p0" block-code="p0" data-seat="G19" seat-group="grNum14"
                                                    alt="G19 " seat-code="1G19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 29.8525px;"  
                                                    class="sel  p0" block-code="p0" data-seat="G20" seat-group="grNum14"
                                                    alt="G20 " seat-code="1G20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 29.8525px;"  
                                                    class="sel  p0" block-code="p0" data-seat="G21" seat-group="grNum14"
                                                    alt="G21 " seat-code="1G21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H4"
                                                    seat-group="grNum15" alt="H4  예매완료좌석" seat-code="1H04"> <span
                                                        class="sweet_spot f1 completed">4</span></a><a
                                                    style="left: 36px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H5"
                                                    seat-group="grNum15" alt="H5  예매완료좌석" seat-code="1H05"> <span
                                                        class="sweet_spot f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H6"
                                                    seat-group="grNum15" alt="H6 " seat-code="1H06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H7"
                                                    seat-group="grNum15" alt="H7 " seat-code="1H07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H8"
                                                    seat-group="grNum15" alt="H8 " seat-code="1H08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H9"
                                                    seat-group="grNum15" alt="H9 " seat-code="1H09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H10"
                                                    seat-group="grNum15" alt="H10  예매완료좌석" seat-code="1H10"> <span
                                                        class="sweet_spot f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H11"
                                                    seat-group="grNum15" alt="H11  예매완료좌석" seat-code="1H11"> <span
                                                        class="sweet_spot f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H12"
                                                    seat-group="grNum15" alt="H12 " seat-code="1H12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H13"
                                                    seat-group="grNum15" alt="H13 " seat-code="1H13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H14"
                                                    seat-group="grNum15" alt="H14 " seat-code="1H14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H15"
                                                    seat-group="grNum15" alt="H15 " seat-code="1H15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H16"
                                                    seat-group="grNum15" alt="H16 " seat-code="1H16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 34.8279px;"  
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H17"
                                                    seat-group="grNum15" alt="H17 " seat-code="1H17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 34.8279px;"  
                                                    class="sel  p0" block-code="p0" data-seat="H18" seat-group="grNum16"
                                                    alt="H18 " seat-code="1H18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 34.8279px;"  
                                                    class="sel  p0" block-code="p0" data-seat="H19" seat-group="grNum16"
                                                    alt="H19 " seat-code="1H19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 34.8279px;"  
                                                    class="sel  p0" block-code="p0" data-seat="H20" seat-group="grNum16"
                                                    alt="H20 " seat-code="1H20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 34.8279px;"  
                                                    class="sel  p0" block-code="p0" data-seat="H21" seat-group="grNum16"
                                                    alt="H21 " seat-code="1H21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 39.8033px;"   class="sel  p0"
                                                    block-code="p0" data-seat="I1" seat-group="grNum17" alt="I1 "
                                                    seat-code="1I01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I2"
                                                    seat-group="grNum17" alt="I2  예매완료좌석" seat-code="1I02"> <span
                                                        class="f2 completed">2</span></a><a
                                                    style="left: 14.8085px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I3"
                                                    seat-group="grNum17" alt="I3  예매완료좌석" seat-code="1I03"> <span
                                                        class="f2 completed">3</span></a><a
                                                    style="left: 28.5957px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I4" seat-group="grNum18"
                                                    alt="I4 " seat-code="1I04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 39.8033px;"   class="sel  p0"
                                                    block-code="p0" data-seat="I5" seat-group="grNum18" alt="I5 "
                                                    seat-code="1I05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I6" seat-group="grNum18"
                                                    alt="I6 " seat-code="1I06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I7" seat-group="grNum18"
                                                    alt="I7 " seat-code="1I07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I8" seat-group="grNum18"
                                                    alt="I8 " seat-code="1I08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 39.8033px;"   class="sel  p0"
                                                    block-code="p0" data-seat="I9" seat-group="grNum18" alt="I9 "
                                                    seat-code="1I09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I10" seat-group="grNum18"
                                                    alt="I10 " seat-code="1I10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I11" seat-group="grNum18"
                                                    alt="I11 " seat-code="1I11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I12" seat-group="grNum18"
                                                    alt="I12 " seat-code="1I12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 39.8033px;"   class="sel  p0"
                                                    block-code="p0" data-seat="I13" seat-group="grNum18" alt="I13 "
                                                    seat-code="1I13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I14" seat-group="grNum18"
                                                    alt="I14 " seat-code="1I14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I15" seat-group="grNum18"
                                                    alt="I15 " seat-code="1I15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I16"
                                                    seat-group="grNum18" alt="I16  예매완료좌석" seat-code="1I16"> <span
                                                        class="f2 completed">16</span></a><a
                                                    style="left: 124.851px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I17"
                                                    seat-group="grNum18" alt="I17  예매완료좌석" seat-code="1I17"> <span
                                                        class="f2 completed">17</span></a><a
                                                    style="left: 138.638px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I18"
                                                    seat-group="grNum19" alt="I18  예매완료좌석" seat-code="1I18"> <span
                                                        class="f2 completed">18</span></a><a
                                                    style="left: 146.043px; top: 39.8033px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="I19"
                                                    seat-group="grNum19" alt="I19  예매완료좌석" seat-code="1I19"> <span
                                                        class="f2 completed">19</span></a><a
                                                    style="left: 153.447px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I20" seat-group="grNum19"
                                                    alt="I20 " seat-code="1I20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 39.8033px;"  
                                                    class="sel  p0" block-code="p0" data-seat="I21" seat-group="grNum19"
                                                    alt="I21 " seat-code="1I21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 44.7787px;"   class="sel  p0"
                                                    block-code="p0" data-seat="J1" seat-group="grNum20" alt="J1 "
                                                    seat-code="1J01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 44.7787px;"   class="sel  p0"
                                                    block-code="p0" data-seat="J2" seat-group="grNum20" alt="J2 "
                                                    seat-code="1J02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J3" seat-group="grNum20"
                                                    alt="J3 " seat-code="1J03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J4" seat-group="grNum21"
                                                    alt="J4 " seat-code="1J04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 44.7787px;"   class="sel  p0"
                                                    block-code="p0" data-seat="J5" seat-group="grNum21" alt="J5 "
                                                    seat-code="1J05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J6" seat-group="grNum21"
                                                    alt="J6 " seat-code="1J06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J7" seat-group="grNum21"
                                                    alt="J7 " seat-code="1J07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J8" seat-group="grNum21"
                                                    alt="J8 " seat-code="1J08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 44.7787px;"   class="sel  p0"
                                                    block-code="p0" data-seat="J9" seat-group="grNum21" alt="J9 "
                                                    seat-code="1J09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J10"
                                                    seat-group="grNum21" alt="J10  예매완료좌석" seat-code="1J10"> <span
                                                        class="f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J11"
                                                    seat-group="grNum21" alt="J11  예매완료좌석" seat-code="1J11"> <span
                                                        class="f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J12" seat-group="grNum21"
                                                    alt="J12 " seat-code="1J12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J13"
                                                    seat-group="grNum21" alt="J13  예매완료좌석" seat-code="1J13"> <span
                                                        class="f2 completed">13</span></a><a
                                                    style="left: 102.638px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J14"
                                                    seat-group="grNum21" alt="J14  예매완료좌석" seat-code="1J14"> <span
                                                        class="f2 completed">14</span></a><a
                                                    style="left: 110.043px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J15"
                                                    seat-group="grNum21" alt="J15  예매완료좌석" seat-code="1J15"> <span
                                                        class="f2 completed">15</span></a><a
                                                    style="left: 117.447px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J16"
                                                    seat-group="grNum21" alt="J16  예매완료좌석" seat-code="1J16"> <span
                                                        class="f2 completed">16</span></a><a
                                                    style="left: 124.851px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J17"
                                                    seat-group="grNum21" alt="J17  예매완료좌석" seat-code="1J17"> <span
                                                        class="f2 completed">17</span></a><a
                                                    style="left: 138.638px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J18"
                                                    seat-group="grNum22" alt="J18  예매완료좌석" seat-code="1J18"> <span
                                                        class="f2 completed">18</span></a><a
                                                    style="left: 146.043px; top: 44.7787px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="J19"
                                                    seat-group="grNum22" alt="J19  예매완료좌석" seat-code="1J19"> <span
                                                        class="f2 completed">19</span></a><a
                                                    style="left: 153.447px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J20" seat-group="grNum22"
                                                    alt="J20 " seat-code="1J20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 44.7787px;"  
                                                    class="sel  p0" block-code="p0" data-seat="J21" seat-group="grNum22"
                                                    alt="J21 " seat-code="1J21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 49.7541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="K1" seat-group="grNum23" alt="K1 "
                                                    seat-code="1K01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 49.7541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="K2" seat-group="grNum23" alt="K2 "
                                                    seat-code="1K02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K3" seat-group="grNum23"
                                                    alt="K3 " seat-code="1K03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K4" seat-group="grNum24"
                                                    alt="K4 " seat-code="1K04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 49.7541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="K5" seat-group="grNum24" alt="K5 "
                                                    seat-code="1K05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K6" seat-group="grNum24"
                                                    alt="K6 " seat-code="1K06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K7" seat-group="grNum24"
                                                    alt="K7 " seat-code="1K07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K8" seat-group="grNum24"
                                                    alt="K8 " seat-code="1K08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 49.7541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="K9" seat-group="grNum24" alt="K9 "
                                                    seat-code="1K09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 49.7541px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="K10"
                                                    seat-group="grNum24" alt="K10  예매완료좌석" seat-code="1K10"> <span
                                                        class="f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 49.7541px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="K11"
                                                    seat-group="grNum24" alt="K11  예매완료좌석" seat-code="1K11"> <span
                                                        class="f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K12" seat-group="grNum24"
                                                    alt="K12 " seat-code="1K12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 49.7541px;"   class="sel  p0"
                                                    block-code="p0" data-seat="K13" seat-group="grNum24" alt="K13 "
                                                    seat-code="1K13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K14" seat-group="grNum24"
                                                    alt="K14 " seat-code="1K14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K15" seat-group="grNum24"
                                                    alt="K15 " seat-code="1K15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K16" seat-group="grNum24"
                                                    alt="K16 " seat-code="1K16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K17" seat-group="grNum24"
                                                    alt="K17 " seat-code="1K17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K18" seat-group="grNum25"
                                                    alt="K18 " seat-code="1K18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K19" seat-group="grNum25"
                                                    alt="K19 " seat-code="1K19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K20" seat-group="grNum25"
                                                    alt="K20 " seat-code="1K20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 49.7541px;"  
                                                    class="sel  p0" block-code="p0" data-seat="K21" seat-group="grNum25"
                                                    alt="K21 " seat-code="1K21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 54.7295px;"   class="sel  p0"
                                                    block-code="p0" data-seat="L1" seat-group="grNum26" alt="L1 "
                                                    seat-code="1L01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 54.7295px;"   class="sel  p0"
                                                    block-code="p0" data-seat="L2" seat-group="grNum26" alt="L2 "
                                                    seat-code="1L02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L3" seat-group="grNum26"
                                                    alt="L3 " seat-code="1L03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 54.7295px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="L4"
                                                    seat-group="grNum27" alt="L4  예매완료좌석" seat-code="1L04"> <span
                                                        class="f2 completed">4</span></a><a
                                                    style="left: 36px; top: 54.7295px;"  
                                                    class="sel  p0 completed" block-code="p0" data-seat="L5"
                                                    seat-group="grNum27" alt="L5  예매완료좌석" seat-code="1L05"> <span
                                                        class="f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L6" seat-group="grNum27"
                                                    alt="L6 " seat-code="1L06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L7" seat-group="grNum27"
                                                    alt="L7 " seat-code="1L07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L8" seat-group="grNum27"
                                                    alt="L8 " seat-code="1L08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 54.7295px;"   class="sel  p0"
                                                    block-code="p0" data-seat="L9" seat-group="grNum27" alt="L9 "
                                                    seat-code="1L09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L10" seat-group="grNum27"
                                                    alt="L10 " seat-code="1L10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L11" seat-group="grNum27"
                                                    alt="L11 " seat-code="1L11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L12" seat-group="grNum27"
                                                    alt="L12 " seat-code="1L12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 54.7295px;"   class="sel  p0"
                                                    block-code="p0" data-seat="L13" seat-group="grNum27" alt="L13 "
                                                    seat-code="1L13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L14" seat-group="grNum27"
                                                    alt="L14 " seat-code="1L14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L15" seat-group="grNum27"
                                                    alt="L15 " seat-code="1L15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L16" seat-group="grNum27"
                                                    alt="L16 " seat-code="1L16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L17" seat-group="grNum27"
                                                    alt="L17 " seat-code="1L17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L18" seat-group="grNum28"
                                                    alt="L18 " seat-code="1L18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L19" seat-group="grNum28"
                                                    alt="L19 " seat-code="1L19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L20" seat-group="grNum28"
                                                    alt="L20 " seat-code="1L20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 54.7295px;"  
                                                    class="sel  p0" block-code="p0" data-seat="L21" seat-group="grNum28"
                                                    alt="L21 " seat-code="1L21"> <span class=" f2">21</span></a></div>
                                        </div>
                                    </div>
                                    <!-- 미니맵 끝-->

                                </div>
                                <!-- //개발영역 -->

                            </div>
                        </div>
                    </div>

                    <!-- 선택한 영화의 적정 관람가 안내 시작 , mAge 가 1,2,3,all  임 -->
                    <div class="group_btm" id="stepOnePopupContentsMsg">
                        <div class="txt_notice gr_all" v-if="selectedMovieTime.mAge=='all'">
                            <p class="tit">
                                <span class="ic_grade gr_all">전체 관람가</span>본 영화는 <strong>전체관람가</strong> 영화입니다.
                            </p>
                        </div>
                        <div class="txt_notice gr_12" v-if="selectedMovieTime.mAge==1">
                            <p class="tit"><span class="ic_grade gr_12">만 12세 이상 관람가</span>본 영화는 <strong>만 12세 이상 관람가</strong> 영화입니다.</p>
                            <p class="txt">만 12세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인 보호자의 동반하에<br>관람이 가능합니다. 연령 확인 불가 시 입장이
                                제한될 수 있습니다.</p>
                        </div>
                        <div class="txt_notice gr_15" v-if="selectedMovieTime.mAge==2">
                            <p class="tit"><span class="ic_grade gr_15">만 15세 이상 관람가</span>본 영화는 <strong>만 15세 이상 관람가</strong> 영화입니다.</p><p class="txt">만 15세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인 보호자의 동반하에<br>관람이 가능합니다. 연령 확인 불가 시 입장이 제한될 수 있습니다.
                            </p>
                        </div>
                        <div class="txt_notice gr_18" v-if="selectedMovieTime.mAge==3">
                            <p class="tit"><span class="ic_grade gr_18">만 18세 이상 관람가</span>본 영화는 <strong>만 18세 이상 관람가</strong> 영화입니다.</p><p class="txt"> 연령 확인 불가 시 입장이 제한될 수 있습니다.
                            </p>
                        </div>
                    </div>
                    <!-- 선택한 영화의 적정 관람가 안내 끝 -->

                </div>
                <div class="btn_btm_wrap" id="stepOnePopupContentsButton">
                    <a class="btn_col2 ty5"   @click="closeScreenLayer">취소</a>
                    <a class="btn_col1 ty5"   >인원/좌석 선택</a></div>
            </div>
        </div>
        </div>
        <!-- 좌석 미니맵 끝 -->


        

    </div>
</template>

<script>
/* eslint-disable */
export default {
    mounted() {


        // 캐러셀 초기화 실행 , jquery 사용
        $(".owl-stage").owlCarousel({
            autoplay: false, // 자동으로 이미지가 돌아가게 할 것인지
            smartSpeed: 500, // 이미지 변경속도
            nav: true,  // 메뉴
            items: 8, // 초기화면에 표시할 이미지 개수
            loop: false  // 마지막 사진이 오면 처음 사진으로 돌아가게 할 것인지
        });

        this.setTime();
    },
    data() {
        return {
            ScreeningList: [ //상영중인 데이터 목록
                {
                    "mcumulativeAudience": 3202020, // 해당 영화 관람객 수
                    "mposter": null, // 포스터 BLOB형태로 저장되지만, 현재 DB에 없어서 null출력
                    "audiencesRate": 9.5, // 관객들이 내린 평점 평균 (평점/관객수)
                    "rank": 1, // 현재 상영중인 영화들을 기준으로, 관람객수로 내린 영화의 순위
                    "mcriticsRate": 7.0, // 평론가 평점
                    "mTitle": "아바타 : 물의 길", // 영화 제목
                    "ticketingPer": 46.21, // 전체영화대비 관람객수 비율
                    "mAge": 12 // 상영등급
                },
                {
                    "mcumulativeAudience": 2952297,
                    "mposter": null,
                    "audiencesRate": 9.7,
                    "rank": 2,
                    "mcriticsRate": 8.1,
                    "mTitle": "올빼미",
                    "ticketingPer": 42.61,
                    "mAge": 15
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이 사랑이 사라진다 해",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤,  해도",
                    "ticketingPer": 5.47,
                    "mAge": "12"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": " 사랑이 사라진다 해도",
                    "ticketingPer": 5.47,
                    "mAge": "15"
                },{
                    "mcumulativeAudience": 3202020, // 해당 영화 관람객 수
                    "mposter": null, // 포스터 BLOB형태로 저장되지만, 현재 DB에 없어서 null출력
                    "audiencesRate": 9.5, // 관객들이 내린 평점 평균 (평점/관객수)
                    "rank": 1, // 현재 상영중인 영화들을 기준으로, 관람객수로 내린 영화의 순위
                    "mcriticsRate": 7.0, // 평론가 평점
                    "mTitle": "아바타 : 물의 ", // 영화 제목
                    "ticketingPer": 46.21, // 전체영화대비 관람객수 비율
                    "mAge": 12 // 상영등급
                },
                {
                    "mcumulativeAudience": 2952297,
                    "mposter": null,
                    "audiencesRate": 9.7,
                    "rank": 2,
                    "mcriticsRate": 8.1,
                    "mTitle": "올빼",
                    "ticketingPer": 42.61,
                    "mAge": 15
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이 사랑이 사라진다",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이 사랑이 사라",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤",
                    "ticketingPer": 5.47,
                    "mAge": "12"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": " 사랑이 사라진",
                    "ticketingPer": 5.47,
                    "mAge": "15"
                },{
                    "mcumulativeAudience": 3202020, // 해당 영화 관람객 수
                    "mposter": null, // 포스터 BLOB형태로 저장되지만, 현재 DB에 없어서 null출력
                    "audiencesRate": 9.5, // 관객들이 내린 평점 평균 (평점/관객수)
                    "rank": 1, // 현재 상영중인 영화들을 기준으로, 관람객수로 내린 영화의 순위
                    "mcriticsRate": 7.0, // 평론가 평점
                    "mTitle": "아바타 : 물", // 영화 제목
                    "ticketingPer": 46.21, // 전체영화대비 관람객수 비율
                    "mAge": 12 // 상영등급
                },
                {
                    "mcumulativeAudience": 2952297,
                    "mposter": null,
                    "audiencesRate": 9.7,
                    "rank": 2,
                    "mcriticsRate": 8.1,
                    "mTitle": "올",
                    "ticketingPer": 42.61,
                    "mAge": 15
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이 사랑",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘 밤, 세계에서 이",
                    "ticketingPer": 5.47,
                    "mAge": "all"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": "오늘",
                    "ticketingPer": 5.47,
                    "mAge": "12"
                },
                {
                    "mcumulativeAudience": 378702,
                    "mposter": null,
                    "audiencesRate": 9.2,
                    "rank": 3,
                    "mcriticsRate": 8.5,
                    "mTitle": " 다 해도",
                    "ticketingPer": 5.47,
                    "mAge": "15"
                },
            ]
            ,
            selectTheater: {},  // 지역 선택
            themaOfMovie: {},   // 영화 선택

            // 전체극장
            theater: [{ "cinemaName": "서울", }, { "cinemaName": "부산" }, { "cinemaName": "인천" }, { "cinemaName": "대구" }, { "cinemaName": "울산" }, { "cinemaName": "거제" }],

            // 현재 시간
            nowDate: "",
            yy: "",
            mm: "",
            dd: "",

            // 2D 극장 객체
            thName2D: [
                { "thId": 1, "mTitle": "아바타 : 물의 길", "mAge": 1, "thType": "2D", "thDate": 221222, "cineTime":"09:30" , "totalSeat": 140 , "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "12:30", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "15:00", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "18:30", "totalSeat": 140, "leftSeat": 113 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "20:00", "totalSeat": 140, "leftSeat": 14 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 120 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 0 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 120 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 0 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 1 , "thType": "2D", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 120 },

            ],

            // 2D4K 극장 객체
            thName2D4K: [
                { "thId": 1, "mTitle": "아바타 : 물의 길", "mAge": 2, "thType": "2D4K", "thDate": 221222, "cineTime":"09:30" , "totalSeat": 140 , "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 2 , "thType": "2D4K", "thDate": 221222 , "cineTime": "12:30", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 2 , "thType": "2D4K", "thDate": 221222 , "cineTime": "15:00", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 2 , "thType": "2D4K", "thDate": 221222 , "cineTime": "18:30", "totalSeat": 140, "leftSeat": 0 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 2 , "thType": "2D4K", "thDate": 221222 , "cineTime": "20:00", "totalSeat": 140, "leftSeat": 14 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 2 , "thType": "2D4K", "thDate": 221222 , "cineTime": "22:30", "totalSeat": 140, "leftSeat": 120 },

            ],

            // 3D 극장 객체
            thName3D: [
                { "thId": 1, "mTitle": "아바타 : 물의 길", "mAge": 3, "thType": "3D", "thDate": 221222, "cineTime":"09:30" , "totalSeat": 140 , "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 3 , "thType": "3D", "thDate": 221222 , "cineTime": "12:30", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 3 , "thType": "3D", "thDate": 221222 , "cineTime": "15:00", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": 3 , "thType": "3D", "thDate": 221222 , "cineTime": "18:30", "totalSeat": 140, "leftSeat": 0 },

            ],

            // 4D3D 극장 객체
            thName4D3D: [
                { "thId": 1, "mTitle": "아바타 : 물의 길", "mAge": "all", "thType": "4D3D", "thDate": 221222, "cineTime":"09:30" , "totalSeat": 140 , "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": "all" , "thType": "4D3D", "thDate": 221222 , "cineTime": "12:30", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": "all" , "thType": "4D3D", "thDate": 221222 , "cineTime": "15:00", "totalSeat": 140, "leftSeat": 114 },
            { "thId": 1 , "mTitle": "아바타 : 물의 길", "mAge": "all" , "thType": "4D3D", "thDate": 221222 , "cineTime": "18:30", "totalSeat": 140, "leftSeat": 113 },

            ],

            // seatPopup 띄우는 객체
            seatPopup:false,

            // 선택된 영화시간 객체
            selectedMovieTime:{},

        }
    },
    methods: {
        getMovie(data) {
            this.themaOfMovie = data;
            console.log(data.mTitle);
        },
        getTheater(data) {
            this.selectTheater = data;
            console.log(data.cinemaName);

        },
        setTime() {
            let myDate = new Date()
            this.yy = myDate.getFullYear()
            this.mm = myDate.getMonth() + 1
            this.dd = myDate.getDate()
            this.nowDate = this.yy + '-' + this.mm + '-' + this.dd
            this.dayOfWeek = this.week[myDate.getDate()]

        },

        // 영화 시간 선택 실행 함수
        selectMovieTime(data){
            this.selectedMovieTime=data;
            console.log(this.selectedMovieTime);
            this.seatPopup=true;
        },
        closeScreenLayer(){
            this.seatPopup=false;
        }

    }

}
</script>

<style scoped >

.owl-dots {
    display: none;
}
.time_select_wrap ul.list_time li.disabled > a {
    pointer-events: none;
    cursor: default;
    
}
.wrap_reserve {
    overflow: hidden;
    position: relative;
    width: 1280px;
    height: 870px;
    margin: 0 auto;
    background-color: #FFF;
}


.wrap_reserve .section_step_con.active {
    display: block;
    overflow: inherit;
    position: relative;
    width: 1202px;
    height: 100%;
    margin-left: 78px;
}

#contents.contents_reserve {
    padding-bottom: 70px;
    background-color: #444;
}

#contents.contents_full {
    width: 100%;
}

#contents {
    margin: 0 auto;
    padding: 50px 0 0 0;
}

div {
    display: block;
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

body,
textarea {
    line-height: 1.1;
    letter-spacing: -0.03em;
}

.wrap_reserve .section_step_con .article.article_cinema {
    width: 351px;
    border-bottom: 1px solid #DDD;
}

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul>div>li.depth1.active>a {
    color: #FF243E;
    background: #FFF url("@/assets/images/icon/check.png") no-repeat 300px center;
    font-weight: bold;
}

.movie_select_wrap ul>li.active {
    border: 2px solid #000;
    background-color: #FFF;
}

.wrap_reserve .section_step_con .article .group_top {
    overflow: hidden;
    position: relative;
    height: 55px;
    line-height: 55px;
    padding-top: 15px;
    border-right: 1px solid #222;
    text-align: center;
    background-color: #000;
}

.wrap_reserve .section_step_con .article .group_top .tit {
    font-size: 18px;
    color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6,
address,
caption,
em,
th {
    font-style: normal;
    font-weight: normal;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner {
    overflow: hidden;
    height: 815px;
    border-right: 1px solid #ddd;
}


ul,
ol {
    list-style: none;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style:none;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer>li.active>.tab_tit {
    height: 61px;
}

.tab_wrap.outer>li.active>.tab_tit {
    border-bottom: 2px solid #111;
    color: #000;
}

.tab_wrap.outer>li>.tab_tit {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #CCC;
    font-size: 15px;
    color: #7F7F7F;
}

.tab_wrap>li>.tab_tit {
    border: none;
}

button {
    border: 1px solid #DDD;
    cursor: pointer;
    background-color: #fff;
}

button {
    appearance: auto;
    writing-mode: horizontal-tb !important;

    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonborder;
    border-image: initial;
}

.tab_wrap>li.active>.tab_con {
    overflow: inherit;
    position: relative;
    width: auto;
    height: auto;
}

.tab_wrap>li>.tab_con {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 0;
}

.wrap_reserve .section_step_con {
    overflow: hidden;
    position: absolute;
    height: 0;
}

.hidden {
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
}

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

h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}


ul,
ol {
    list-style: none;
}

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap {
    background-color: #F5F5F5;
}

.cinema_select_wrap {
    position: relative;
    height: 100%;
    background-color: #FFF;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul,
.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul .depth2 .mCustomScrollbar {
    height: 753px;
}

.mCustomScrollbar.mCS_no_scrollbar,
.mCustomScrollbar.mCS_touch_action {
    -ms-touch-action: auto;
    touch-action: auto;
}

.mCustomScrollbar {
    -ms-touch-action: pinch-zoom;
    touch-action: pinch-zoom;
}

.cinema_select_wrap>ul .depth2 {
    display: none;
    position: absolute;
    left: 175px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #F5F5F5;
}

.cinema_select_wrap>ul {
    min-height: 90px;
    height: 100%;
}

ul ul {
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
}


.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul li {
    padding: 2px;
    border-bottom: none;
}

.cinema_select_wrap>ul li {
    border-bottom: 1px solid #EBEBEB;
}

.cinema_select_wrap>ul>div>li.depth1>a {
    display: block;
    position: relative;
    width: 345px;
    box-sizing: border-box;
    padding: 10px 16px;
    font-size: 13px;
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

.cinema_select_wrap>ul>div>li.depth1>a em {
    font-size: 10px;
    color: #666;
}


em {
    font-style: italic;
}


.wrap_reserve .section_step_tit {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 78px;
}

.wrap_reserve .section_step_tit ul {
    height: 100%;
}

.wrap_reserve .section_step_tit ul li.active {
    border-color: #FF243E;
    border-bottom-color: #666;
    background-color: #FF243E;
}

.wrap_reserve .section_step_tit ul li {
    position: relative;
    height: 25%;
    box-sizing: border-box;
    border: 1px solid #666;
    border-top: none;
    background-color: #FFF;
    z-index: 10;
}

.wrap_reserve .section_step_tit ul li.active>a {
    color: #FFF;
}


.wrap_reserve .section_step_tit ul li>a>strong span {
    font-family: 'Roboto';
    font-size: 13px;
}

.wrap_reserve .section_step_tit ul li.active>a>strong {
    font-size: 15px;
}

.wrap_reserve .section_step_tit ul li>a>strong {
    display: block;
    line-height: 1.5;
    padding-top: 80px;
    font-size: 13px;
    text-align: center;
}

strong {
    font-weight: bold;
}

.wrap_reserve .section_step_tit ul li.active>a .bx_con {
    background-color: #FF243E;
}

.wrap_reserve .section_step_tit ul li>a .bx_con {
    display: none;
    position: absolute;
    z-index: 1;
    left: 77px;
    top: -1px;
    bottom: 0;
    width: 172px;
    padding-left: 20px;
    border-top: 1px solid #666;
    background-color: #333;
}

.wrap_reserve .section_step_tit ul li>a .bx_con dl {
    margin-top: 52px;
}

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


.wrap_reserve .section_step_tit ul li>a .bx_con dl dt {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
}

dt {
    display: block;
}

.wrap_reserve .section_step_tit ul li>a .bx_con dl dd {
    margin-bottom: 17px;
}


.wrap_reserve .section_step_tit ul li>a {
    display: block;
    height: 100%;
    color: #666;
}


.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer {
    padding-top: 61px;
}


.tab_wrap.outer {
    padding-top: 80px;
}




.tab_wrap>li>.tab_tit {
    position: absolute;
    top: 0;
}


input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}


button>* {
    position: relative;
}



.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul .depth2 {
    background-color: #FFF;
}

.cinema_select_wrap>ul>div>li.depth1.active .depth2 {
    display: block;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul,
.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul .depth2 .mCustomScrollbar {
    height: 753px;
}
.time_select_wrap ul.list_hall:after {
    content: "";
    display: block;
    clear: both;
}

.time_select_wrap {
    margin-top: 20px;
}

.time_select_wrap ul.list_hall {
    margin-bottom: 13px;
}


.time_select_wrap ul.list_hall li {
    display: block;
    position: relative;
    float: left;
    margin-left: 6px;
    padding-left: 6px;
    font-size: 13px;
}

.mCustomScrollBox {
    position: relative;
    overflow: hidden;
    height: 100%;
    max-width: 100%;
    outline: none;
    direction: ltr;
}

.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
    margin-right: 0;
}

.mCSB_container {
    overflow: hidden;
    width: auto;
    height: auto;
}

.cinema_select_wrap .bx_notice {
    clear: both;
    margin-top: 100px;
    padding: 0 19px;
    text-align: center;
}

.cinema_select_wrap .bx_notice .txt {
    line-height: 1.5;
    margin-bottom: 14px;
    font-size: 13px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.btn_col1.rnd,
.btn_col2.rnd,
.btn_col3.rnd,
.btn_col4.rnd,
.btn_col5.rnd,
.btn_col6.rnd,
.btn_col7.rnd,
.btn_col8.rnd,
.btn_col9.rnd,
.btn_col10.rnd {
    border-radius: 52px;
}

.btn_col1.ty3,
.btn_col2.ty3,
.btn_col3.ty3,
.btn_col4.ty3,
.btn_col5.ty3,
.btn_col6.ty3,
.btn_col7.ty3,
.btn_col8.ty3,
.btn_col9.ty3,
.btn_col10.ty3 {
    height: 28px;
    line-height: 26px;
    padding: 0 14px;
}

.btn_col3 {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #000000;
    font-size: 14px;
    color: #000000 !important;
    text-align: center;
    vertical-align: middle;
    background-color: #ffffff;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}

.cinema_select_wrap li.active>a:before {
    content: "선택";
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    text-indent: -9999em;
}

.cinema_select_wrap>ul .depth2 ul li a {
    display: table-cell;
    /* display: block; */
    overflow: hidden;
    padding: 10px 16px;
    font-size: 13px;
    vertical-align: middle;
}

.mCSB_outside+.mCS-minimal.mCSB_scrollTools_vertical,
.mCSB_outside+.mCS-minimal-dark.mCSB_scrollTools_vertical {
    right: 0;
    margin: 12px 0;
}

.mCS-autoHide>.mCustomScrollBox>.mCSB_scrollTools,
.mCS-autoHide>.mCustomScrollBox~.mCSB_scrollTools {
    opacity: 0;
    filter: "alpha(opacity=0)";
    -ms-filter: "alpha(opacity=0)";
}

.mCSB_outside+.mCSB_scrollTools {
    right: -26px;
}

.mCSB_scrollTools {
    opacity: 0.75;
    filter: "alpha(opacity=75)";
    -ms-filter: "alpha(opacity=75)";
}

.mCSB_scrollTools,
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_buttonUp,
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonLeft,
.mCSB_scrollTools .mCSB_buttonRight {
    -webkit-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
    -moz-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
    -o-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
    transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
}

.mCSB_scrollTools {
    position: absolute;
    width: 16px;
    height: auto;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
}

.mCSB_scrollTools .mCSB_draggerContainer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: auto;
}

.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger {
    height: 50px;
}

.mCSB_scrollTools .mCSB_dragger {
    cursor: pointer;
    width: 100%;
    height: 30px;
    z-index: 1;
}

.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.2);
    filter: "alpha(opacity=20)";
    -ms-filter: "alpha(opacity=20)";
}


.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    position: relative;
    width: 4px;
    height: 100%;
    margin: 0 auto;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    text-align: center;
}

.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.75);
    filter: "alpha(opacity=75)";
    -ms-filter: "alpha(opacity=75)";
}

.mCSB_scrollTools .mCSB_draggerRail {
    width: 2px;
    height: 100%;
    margin: 0 auto;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
}


.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer>li>.tab_tit {
    height: 61px;
}



.article_cinema.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar .wrap_nav_underline {
    position: absolute;
    top: 61px;
    left: 50%;
    margin-left: -175.5px;
    width: 351px;
    height: 2px;
    margin-top: -2px;
    border: 0px solid #f00;
}

.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar .wrap_nav_underline {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -490px;
    width: 980px;
    height: 2px;
    margin-top: -2px;
    border: 0px solid #f00;
}

.article_cinema.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar>li:nth-child(2).active~.wrap_nav_underline .nav_underline {
    left: 175.5px;
}

.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar>li:nth-child(2).active~.wrap_nav_underline .nav_underline {
    left: 490px;
}

.article_cinema.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar .nav_underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 175.5px;
    height: 2px;
    background: #111;
    transition: all .3s ease-in-out;
}

.area__movingbar.litype2 .tab_wrap.outer.actionmovingbar .nav_underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 490px;
    height: 2px;
    background: #111;
    transition: all .3s ease-in-out;
}

.wrap_reserve .section_step_con .article.article_movie {
    width: 351px;
    background-color: #F8F8F8;
}


h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.wrap_reserve .section_step_con .article.article_movie>.inner {
    overflow: hidden;
    height: 815px;
    border-right: 1px solid #DDD;
}

.wrap_reserve .section_step_con .article.article_movie .list_filter {
    overflow: hidden;
    position: relative;
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #DDD;
}

.wrap_reserve .section_step_con .article.article_movie .list_filter select {
    width: 180px;
    height: 30px;
    line-height: 29px;
    margin-top: 15px;
    padding-left: 10px;
}

select {
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border: 1px solid #DDD;
    background: #fff url("@/assets/images/icon/arr_dw_13.png");
    background-repeat: no-repeat;
    background-position: right 6px top 50%;
    height: 40px;
    line-height: 40px;
    padding: 0 35px 0 18px;
    font-size: 14px;
    box-sizing: border-box;
}


option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}


.bx_btn_view {
    position: absolute;
    right: 18px;
    top: 20px;
}

.bx_btn_view ul li {
    float: left;
    margin-left: 12px;
}

.bx_btn_view .btn_view_txt.active {
    background-image: url("@/assets/images/icon/btn_list_view_txt_on.png");
}

.bx_btn_view .btn_view_txt {
    width: 20px;
    height: 20px;
    border: none;
    text-indent: -9999em;
    background: url("@/assets/images/icon/btn_list_view_txt.png") no-repeat center center;
}

.wrap_reserve .section_step_con .article.article_time {
    width: 500px;
}

.wrap_reserve .section_step_con .article {
    position: relative;
    float: left;
    height: 100%;
    box-sizing: border-box;
    background-color: #FFF;
}

.wrap_reserve .section_step_con .article.article_movie>.inner .mCustomScrollbar {
    height: 754px;
}

.wrap_reserve .section_step_con .article.article_movie .inner .mCSB_container {
    padding-bottom: 30px;
}


.movie_select_wrap.list ul>li .bx_thm {
    display: none;
}


img {
    border: none;
    vertical-align: top;
}

.movie_select_wrap ul>li .group_infor {
    float: left;
}


.movie_select_wrap.list ul>li .group_infor .bx_tit .ic_grade {
    position: absolute;
    left: 20px;
    top: 12px;
}

.movie_select_wrap ul>li .group_infor .bx_tit .ic_grade {
    margin-right: 5px;
}


.ic_grade {
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    border-radius: 50%;
    font-size: 0;
    text-align: center;
    vertical-align: middle;
}


.ic_grade.gr_all:before,
.ic_grade.gr_12:before,
.ic_grade.gr_15:before,
.ic_grade.gr_18:before,
.ic_grade.gr_non:before,
.ic_grade:before {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 3px;
}


.ic_grade:before {
    margin-left: -1px;
    font-size: 13px;
    font-weight: bold;
    color: #FFF;
    white-space: nowrap;
}

.movie_select_wrap.list ul>li .group_infor .bx_tit .tit {
    display: block;
    overflow: hidden;
    width: 250px;
    padding-left: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_select_wrap ul>li .group_infor .bx_tit .tit {
    font-size: 15px;
    vertical-align: middle;
}

.txt_ic_score.ty1 em {
    width: 10px;
    height: 10px;
    margin: -2px 3px 0 0;
    /* background: url("@/assets/images/icon/star_10.png") no-repeat 0 0; */
}

.txt_ic_score em {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-indent: -9999em;
    /* background: url("@/assets/images/icon/star_10.png") no-repeat 0 0; */
}

.txt_ic_score {
    display: inline-block;
    vertical-align: middle;
}

.movie_select_wrap ul>li>a:after {
    content: "";
    display: block;
    clear: both;
}

.movie_select_wrap ul>li {
    box-sizing: border-box;
    border: 2px solid transparent;
}

.mCustomScrollbar>.mCustomScrollBox>.mCSB_scrollTools.mCSB_scrollTools_onDrag,
.mCustomScrollbar>.mCustomScrollBox~.mCSB_scrollTools.mCSB_scrollTools_onDrag,
.mCustomScrollBox:hover>.mCSB_scrollTools,
.mCustomScrollBox:hover~.mCSB_scrollTools,
.mCS-autoHide:hover>.mCustomScrollBox>.mCSB_scrollTools,
.mCS-autoHide:hover>.mCustomScrollBox~.mCSB_scrollTools {
    opacity: 1;
    filter: "alpha(opacity=100)";
    -ms-filter: "alpha(opacity=100)";
}

.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger {
    height: 50px;
}


.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.5);
    filter: "alpha(opacity=50)";
    -ms-filter: "alpha(opacity=50)";
}


.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.9);
    filter: "alpha(opacity=90)";
    -ms-filter: "alpha(opacity=90)";
}




.date_select_wrap {
    height: 75px;
    margin: 22px 20px 10px;
}

.date_select_wrap .slide_reserve_date {
    padding: 0 20px;
}

.slide_wrap {
    position: relative;
}

.owl-carousel.owl-loaded {
    display: block;
}

.owl-carousel {
    position: relative;
    display: block;
    width: auto;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
}

.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0px, 0px, 0px);
}



.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
    touch-action: manipulation;
    -moz-backface-visibility: hidden;
}

.owl-carousel.owl-drag .owl-item {
    touch-action: pan-y;
    user-select: none;
}

.owl-carousel .owl-item {
    position: relative;
    float: left;
    display: block;
    min-height: 1px;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
}

.owl-carousel .owl-wrapper,
.owl-carousel .owl-item {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
}

.date_select_wrap .month {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 10px;
}

.date_select_wrap .date {
    display: block;
    position: relative;
    padding-top: 20px;
}

.date_select_wrap .date label {
    display: block;
    cursor: pointer;
}

label {
    cursor: default;
}

.date_select_wrap .date label input[type="radio"] {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
}

input[type="radio"],
input[type="checkbox"] {
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    border: none 0;
}

.date_select_wrap .date label input[type="radio"]:checked+strong {
    font-weight: bold;
    color: #fff;
    background: #000;
}

.date_select_wrap .date label strong {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    border-radius: 50%;
    font-family: 'Roboto';
    font-size: 15px;
    text-align: center;
}

.date_select_wrap .date label em {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
}



input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 0px 5px;
    padding: initial;
    border: initial;
}

input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}


.owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}

.owl-carousel .owl-nav {
    position: static;
    right: auto;
}

.owl-carousel .owl-nav {
    top: 50%;
    height: 19px;
    margin-top: -10px;
}

.owl-carousel .owl-dots,
.owl-carousel .owl-nav {
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
}

.owl-carousel .owl-nav .owl-prev.disabled,
.owl-carousel .owl-nav .owl-next.disabled {
    opacity: .35;
    pointer-events: none;
}



.owl-carousel .owl-nav .owl-prev {
    opacity: .6;
    position: absolute;
    top: 50%;
    left: -15px;
    width: 25px;
    height: 39px;
    margin-top: -10px;
    background: url("@/assets/images/icon/arr_lf_11.png") no-repeat center center;
}

/* 
.owl-carousel .owl-nav .owl-prev {
    left: -15px;
    background-image: url('@/assets/images/icon/arr_lf_11.png');
} */

.owl-next {
    opacity: .6;
    position: absolute;
    right: -20px;
    top: 50%;
    width: 25px;
    height: 39px;
    margin-top: -10px;
    background: url("@/assets/images/icon/arr_rg_11.png") no-repeat center center;
}

/* 
.owl-carousel .owl-nav .owl-next {
    right: 5px;
    background-image: url('@/assets/images/icon/arr_rg_11.png');
} */

.owl-carousel .owl-nav .disabled {
    opacity: .5;
    cursor: default;
}

.owl-carousel .owl-nav [class*=owl-] {
    position: absolute;
    width: 11px;
    height: 19px;
    z-index: 10;
    cursor: pointer;
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
}

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.owl-carousel .owl-dots,
.owl-carousel .owl-nav {
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
}


.owl-carousel .owl-nav [class*=owl-] span {
    font-size: 0;
    text-indent: -9999em;
}

.owl-carousel .owl-nav .owl-prev.disabled,
.owl-carousel .owl-nav .owl-next.disabled {
    opacity: .35;
    pointer-events: none;
}

.owl-carousel .owl-nav button.owl-prev,
.owl-carousel .owl-nav button.owl-next,
.owl-carousel button.owl-dot {
    background-color: transparent;
    color: inherit;
    border: none;
    padding: 0 !important;
    font: inherit;
}

.owl-carousel .owl-nav [class*=owl-] {
    position: absolute;
    width: 11px;
    height: 19px;
    z-index: 10;
    cursor: pointer;
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
}

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


.slide_reserve_date .owl-nav .owl-next,
.slide_reserve_date_wide .owl-nav .owl-next {
    right: -20px;
}


.wrap_reserve .section_step_con .article.article_time.area__movingbar.litype6>.inner .tab_wrap.outer {
    width: 500px;
}


.tab_wrap {
    position: relative;
}

.tab_wrap.outer.sml>li>.tab_tit {
    font-size: 13px;
}



.tab_wrap>li>.tab_tit span {
    vertical-align: top;
    white-space: nowrap;
}


.tab_wrap>li>.tab_con.ty5 {
    margin-top: -30px;
}


.wrap_reserve .section_step_con .article.article_time>.inner .mCustomScrollbar {
    height: 658px;
    padding: 0 20px;
}



.wrap_reserve .section_step_con .article.article_time>.inner .mCSB_container {
    padding-bottom: 30px;
}


.group_time_select {
    margin-top: 30px;
}

.time_select_tit {
    display: flex;
    align-items: center;
    font-size: 15px;
}

.ic_grade.gr_12 {
    background-color: transparent;
}

.time_select_tit .ic_grade {
    margin-right: 5px;
}

.time_select_tit {
    display: flex;
    align-items: center;
    font-size: 15px;
}


.time_select_tit {
    display: flex;
    align-items: center;
    font-size: 15px;
}



ul,
ol {
    list-style: none;
}

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


.time_select_wrap ul.list_hall li:first-child {
    margin-left: 0;
    padding-left: 0;
}


.time_select_wrap ul.list_hall li:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    height: 9px;
    /* border-left: 0px solid #DDD; */
}


.time_select_wrap .txt_infor {
    margin-bottom: 8px;
    color: #666;
}

/* 시간선택 첫번째 버튼의 위치가 틀어져 있어 적용하지 않음 */
/* .time_select_wrap ul.list_time li:nth-child(4n+1) {
    margin-left: 0;
} */

.time_select_wrap ul.list_time li {
    float: left;
    width: 29%;
    margin: 0 0 11px 2%;
}


dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.time_select_wrap ul.list_time li>a dl dt {
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
}



.time_select_wrap ul.list_time li>a dl dd.time strong {
    display: block;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
}



.time_select_wrap ul.list_time li>a dl dd.seat strong {
    color: #427652;
}

.time_select_wrap ul.list_time li>a dl dd.seat {
    font-family: 'Roboto';
    font-size: 11px;
    color: #666;
    margin-top:4px;
}


body {
    overflow-y: scroll;
}



.time_select_wrap ul.list_time li>a {
    display: block;
    position: relative;
    height: 58px;
    padding: 8px 14px 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    cursor: pointer;
    background: #f8f8f8;
}


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

.time_select_wrap ul.list_time li>a dl .tooltip {
    display: none;
    position: absolute;
    left: 50%;
    top: -41px;
    height: 32px;
    line-height: 34px;
    margin-left: -38px;
    padding: 0 8px;
    border-radius: 4px;
    font-family: 'Roboto';
    font-size: 13px;
    color: #FFF;
    white-space: nowrap;
    background-color: #333;
}


.time_select_wrap ul.list_time li>a dl dd.hall {
    position: absolute;
    right: 15px;
    bottom: 5px;
    font-size: 11px;
}

.time_select_wrap ul.list_time:after {
    content: "";
    display: block;
    clear: both;
}

.movie_select_wrap ul>li.active>a:before {
    content: "선택";
    position: absolute;
    right: 19px;
    top: 18px;
    width: 18px;
    height: 14px;
    text-indent: -9999em;
    background: url("@/assets/images/icon/check.png") no-repeat 0 0;
}

.movie_select_wrap.list ul>li>a {
    padding: 15px 20px;
}

.movie_select_wrap.list ul>li .group_infor .bx_tit .tit {
    display: block;
    overflow: hidden;
    width: 250px;
    padding-left: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_select_wrap.list ul>li .group_infor dl {
    display: none;
}

.movie_select_wrap ul>li>a:after {
    content: "";
    display: block;
    clear: both;
}

.time_select_wrap ul.list_time li.near>a dl dd.full strong {
    color: #F24A6A;
    font-size: small;
    vertical-align: super;
    margin-right:60px;
}

/* button  추가함 */
.time_select_wrap ul.list_time li.near>button dl dd.full strong {
    color: #F24A6A;
    font-size: small;
    vertical-align: super;
}

.time_select_wrap ul.list_time li>a .txt_ntc {
    position: absolute;
    width: 1px;
    height: 1px;
    text-indent: -9999em;
}

.movie_select_wrap ul>li {
    box-sizing: border-box;
    border: 2px solid transparent;
}

.movie_select_wrap ul>li>a {
    display: block;
    position: relative;
    box-sizing: border-box;
}

.ic_grade.gr_15:before {
    background: #dd7430 url("@/assets/images/common/grade_15.png") 0 0 no-repeat;
    background-size: 100%;
}

.ic_grade.gr_all:before {
    background: #229c56 url("@/assets/images/common/grade_all.png") 0 0 no-repeat;
    background-size: 100%;
}

.ic_grade.gr_12:before {
    background: #e9b630 url("@/assets/images/common/grade_12.png") 0 0 no-repeat;
    background-size: 100%;
}



/*  seatPopup 영화시간 선택후 팝업되는 페이지의 css */


.layer_wrap.active.layer_reserve01_sum2 {
    width: 500px;
}

.layer_wrap.layer_reserve {
    box-sizing: border-box;
    border-radius: 0;
    border: 1px solid #666;
    background-color: #FFF;
}

.layer_wrap.active {
    display: block;
    position: fixed;
    z-index: 100;
    height: auto;
    border-radius: 10px;
    background-color: #FFF;
}
.hidden {
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
}
.layer_wrap {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    width: 0px;
    height: 0px;
    border: none;
}

.layer_wrap.layer_reserve .layer_header {
    border-bottom: 1px solid #666;
    color: #FFF;
    background-color: #666;
}

.layer_wrap .layer_header {
    position: relative;
    height: 54px;
    line-height: 50px;
    border-bottom: 1px solid #CCC;
    color: #FFF;
    text-align: center;
}
.layer_wrap .layer_contents {
    padding: 30px 25px;
}

.layer_wrap.layer_reserve .layer_header strong {
    font-size: 18px;
}

strong {
    font-weight: bold;
}

.layer_wrap.layer_reserve .layer_header .btn_close {
    background-image: url("@/assets/images/icon/close_19_wht.png");
}

.layer_wrap .layer_header .btn_close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 19px;
    height: 19px;
    border: none;
    text-indent: -9999em;
    background: transparent url("@/assets/images/icon/close_19_wht.png") no-repeat 0 0;
    outline-color: black;
}

.seat_infor_sum {
    text-align: center;
}
dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.btn_btm_wrap a, .btn_btm_wrap button {
    margin: 0 4px;
    min-width: 160px;
    /* padding: 0 !important; */
}

.seat_infor_sum .group_top dl dt {
    display: inline-block;
    font-size: 16px;
}

.seat_infor_sum .group_top dl dd strong {
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: bold;
}

.seat_infor_sum .group_con {
    padding: 20px 0;
}

.screen_preview_box .smallScreen {
    width: 100%;
    height: 140px;
    position: relative;
    top: 0;
    left: 0;
    background: #fff;
    padding: 0;
}

.screen_preview_box .smallScreen .title_screen1 {
    position: relative;
    z-index: 1;
    color: #bdbdbd;
    letter-spacing: 5px;
    background: none;
}

.smallScreen .title_screen1 {
    display: block;
    text-align: center;
}

.screen_preview_box .minimap {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
}

.screen_preview_box .smallScreen .floor_bx {
    position: relative;
    margin: 10px 0;
    padding: 5px 0;
}

.screen_preview_box .smallScreen .floor_bx .floor_tit {
    background: #fff;
    color: #000;
    font-size: 12px;
    font-family: 'Roboto', "Noto Sans KR";
    text-align: right;
}

element.style {
    width: 78.0968px;
    height: 48.9384px;
}

.smallScreen .floor_bx .seat_area {
    position: relative;
    margin: 5px auto 0;
}

element.style {
    left: 0px;
    top: 0px;
}

.smallScreen .floor_bx .seat_area .sel {
    position: absolute;
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

.screen_preview_box .smallScreen .floor_bx .seat_area .sel>span {
    background: #000 none !important;
}

.smallScreen .floor_bx .seat_area .sel>span {
    overflow: hidden;
    display: block;
    width: 4px;
    height: 3px;
    background: #fff;
    line-height: 0;
    font-size: 0;
    text-indent: -7000000em;
    border-radius: 1px 1px 0 0;
}

.txt_notice {
    padding: 18px 0 26px;
    text-align: center;
}

body, input, button, select, textarea {
    font-family: "Noto Sans KR", "Roboto", "dotum", "sans-serif";
    font-size: 12px;
    color: #000;
}
.dim, .dim2, .dimMulti {
    position: fixed;
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
}


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

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.ic_grade.gr_all:before, .ic_grade.gr_12:before, .ic_grade.gr_15:before, .ic_grade.gr_18:before, .ic_grade.gr_non:before, .ic_grade:before {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 3px;
}
.ic_grade:before {
    margin-left: -1px;
    font-weight: bold;
    color: #FFF;
    white-space: nowrap;
}
.ic_grade.gr_all:before {
    font-size: 11px;
}


.ic_grade.gr_12:before {
    background: #e9b630 url("@/assets/images/common/grade_12.png") 0 0 no-repeat;
    background-size: 100%;
}
.ic_grade.gr_15:before {
    background: #e98930 url("@/assets/images/common/grade_15.png") 0 0 no-repeat;
    background-size: 100%;
}
.ic_grade.gr_18:before {
    background: #e93030 url("@/assets/images/common/grade_18.png") 0 0 no-repeat;
    background-size: 100%;
}
.ic_grade.gr_all:before {
    background: #229c56 url("@/assets/images/common/grade_all.png") 0 0 no-repeat;
    background-size: 100%;
}

.seat_infor_sum .group_btm .txt_notice.gr_12 strong {
    border-bottom: 1px solid #e9b630;
    color: #e9b630;
}
.seat_infor_sum .group_btm .txt_notice.gr_15 strong {
    border-bottom: 1px solid #e98930;
    color: #e98930;
}
.seat_infor_sum .group_btm .txt_notice.gr_18 strong {
    border-bottom: 1px solid #e93030;
    color: #e93030;
}
.seat_infor_sum .group_btm .txt_notice.gr_all strong {
    border-bottom: 1px solid #229c56;
    color: #229c56;
}
.ic_grade.gr_all {
    background-color: transparent;
}
.ic_grade.gr_12 {
    background-color: transparent;
}
.ic_grade.gr_15 {
    background-color: transparent;
}
.ic_grade.gr_18 {
    background-color: transparent;
}
.seat_infor_sum .group_btm .txt_notice .tit {
    margin-bottom: 5px;
    font-size: 13px;
    color: #111;
}
.ic_grade {
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-size: 0;
    text-align: center;
    vertical-align: middle;
}
.seat_infor_sum .group_btm .txt_notice .tit .ic_grade {
    margin-right: 5px;
}

.seat_infor_sum .group_btm .txt_notice .txt {
    line-height: 1.4;
    font-size: 11px;
    color: #666;
    letter-spacing: -0.5px;
}

.layer_wrap .btn_btm_wrap {
    margin: 30px 0 20px;
}

.btn_btm_wrap {
    margin: 60px 0;
    text-align: center;
}

.btn_col1.ty5,
.btn_col2.ty5,
.btn_col3.ty5,
.btn_col4.ty5,
.btn_col5.ty5,
.btn_col6.ty5,
.btn_col7.ty5,
.btn_col8.ty5,
.btn_col9.ty5,
.btn_col10.ty5 {
    height: 40px;
    line-height: 38px;
    padding: 0 18px;
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

.btn_col1 {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #FF243E;
    font-size: 14px;
    color: #ffffff !important;
    text-align: center;
    vertical-align: middle;
    background-color: #FF243E;
}

.screen_preview_box .smallScreen .floor_bx .seat_area .sel > span.completed {
    background: #c2c2c2 !important;
}

</style>