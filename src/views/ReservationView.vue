<template>



    <div>

        <!-- 상단 메뉴  -->
        <NavBlack></NavBlack>

        <!-- 상영시간 영화 선택 -->
        <div v-if="show">
        <div id="contents" class="contents_full contents_reserve">
            <div class="wrap_reserve">
                <h2 class="hidden">예매하기</h2>
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
                <div id="reserveStep01" class="section_step_con step01 active">
                    <h3 class="hidden">상영시간</h3>
                    <div class="article article_cinema area__movingbar litype2">
                        <div class="group_top">
                            <h4 class="tit">노원</h4>
                        </div>
                        <div class="inner">
                            <ul class="tab_wrap outer actionmovingbar">
                                <li class="active"><button type="button" class="tab_tit"
                                        style="width: 50%; left: 0%;"><span>전체</span></button>
                                    <div class="tab_con">
                                        <h5 class="hidden">전체</h5>
                                        <div class="cinema_select_wrap cinemaSelect basicCinema">
                                            <ul>
                                                <li class="depth1"><a href="#none">MY 영화관<em>(0)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_10 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_10"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_10_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <div class="bx_notice">
                                                                        <p class="txt">로그인 후 이용해 주세요.</p><a
                                                                            href="https://www.lottecinema.co.kr/NLCHS/Member/Login?hidUrlReferrer=https%3A%2F%2Fwww.lottecinema.co.kr%2FNLCHS%2FTicketing"
                                                                            class="btn_col3 ty3 rnd">로그인</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_10_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_10_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_10_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1 active"><a href="#none">서울<em>(23)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_1 mCS-autoHide"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_1"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: none;" tabindex="0">
                                                                <div id="mCSB_1_container" class="mCSB_container"
                                                                    style="position: relative; top: -127px; left: 0px;"
                                                                    dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">가산디지털</a></li>
                                                                        <li class=""><a href="#none">가양</a></li>
                                                                        <li class=""><a href="#none">강동</a></li>
                                                                        <li class=""><a href="#none">건대입구</a></li>
                                                                        <li class=""><a href="#none">김포공항</a></li>
                                                                        <li class="active"><a href="#none">노원</a></li>
                                                                        <li class=""><a href="#none">도곡</a></li>
                                                                        <li class=""><a href="#none">독산</a></li>
                                                                        <li class=""><a href="#none">브로드웨이(신사)</a></li>
                                                                        <li class=""><a href="#none">서울대입구</a></li>
                                                                        <li class=""><a href="#none">수락산</a></li>
                                                                        <li class=""><a href="#none">수유</a></li>
                                                                        <li class=""><a href="#none">신도림</a></li>
                                                                        <li class=""><a href="#none">신림</a></li>
                                                                        <li class=""><a href="#none">에비뉴엘(명동)</a></li>
                                                                        <li class=""><a href="#none">영등포</a></li>
                                                                        <li class=""><a href="#none">용산</a></li>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">은평(롯데몰)</a></li>
                                                                        <li class=""><a href="#none">중랑</a></li>
                                                                        <li class=""><a href="#none">청량리</a></li>
                                                                        <li class=""><a href="#none">합정</a></li>
                                                                        <li class=""><a href="#none">홍대입구</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_1_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: block;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_1_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; display: block; height: 624px; max-height: 719px; top: 105px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">경기/인천<em>(47)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_2 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_2"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_2_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">광교아울렛</a></li>
                                                                        <li class=""><a href="#none">광명(광명사거리)</a></li>
                                                                        <li class=""><a href="#none">광명아울렛</a></li>
                                                                        <li class=""><a href="#none">광주터미널</a></li>
                                                                        <li class=""><a href="#none">구리아울렛</a></li>
                                                                        <li class=""><a href="#none">동탄</a></li>
                                                                        <li class=""><a href="#none">라페스타</a></li>
                                                                        <li class=""><a href="#none">마석</a></li>
                                                                        <li class=""><a href="#none">별내</a></li>
                                                                        <li class=""><a href="#none">병점</a></li>
                                                                        <li class=""><a href="#none">부천(신중동역)</a></li>
                                                                        <li class=""><a href="#none">부천역</a></li>
                                                                        <li class=""><a href="#none">부평</a></li>
                                                                        <li class=""><a href="#none">부평갈산</a></li>
                                                                        <li class=""><a href="#none">부평역사</a></li>
                                                                        <li class=""><a href="#none">북수원(천천동)</a></li>
                                                                        <li class=""><a href="#none">산본피트인</a></li>
                                                                        <li class=""><a href="#none">서수원</a></li>
                                                                        <li class=""><a href="#none">성남중앙(신흥역)</a></li>
                                                                        <li class=""><a href="#none">센트럴락</a></li>
                                                                        <li class=""><a href="#none">송탄</a></li>
                                                                        <li class=""><a href="#none">수원(수원역)</a></li>
                                                                        <li class=""><a href="#none">수지</a></li>
                                                                        <li class=""><a href="#none">시화(정왕역)</a></li>
                                                                        <li class=""><a href="#none">시흥장현</a></li>
                                                                        <li class=""><a href="#none">안산</a></li>
                                                                        <li class=""><a href="#none">안산고잔</a></li>
                                                                        <li class=""><a href="#none">안성</a></li>
                                                                        <li class=""><a href="#none">안양(안양역)</a></li>
                                                                        <li class=""><a href="#none">안양일번가</a></li>
                                                                        <li class="disabled"><a href="#none">양주고읍</a>
                                                                        </li>
                                                                        <li class=""><a href="#none">영종하늘도시</a></li>
                                                                        <li class=""><a href="#none">오산(원동)</a></li>
                                                                        <li class=""><a href="#none">용인기흥</a></li>
                                                                        <li class=""><a href="#none">용인역북</a></li>
                                                                        <li class=""><a href="#none">위례</a></li>
                                                                        <li class=""><a href="#none">의정부민락</a></li>
                                                                        <li class=""><a href="#none">인덕원</a></li>
                                                                        <li class=""><a href="#none">인천아시아드</a></li>
                                                                        <li class=""><a href="#none">인천터미널</a></li>
                                                                        <li class=""><a href="#none">주엽</a></li>
                                                                        <li class=""><a href="#none">진접</a></li>
                                                                        <li class=""><a href="#none">파주운정</a></li>
                                                                        <li class=""><a href="#none">판교(창조경제밸리)</a></li>
                                                                        <li class=""><a href="#none">평촌(범계역)</a></li>
                                                                        <li class=""><a href="#none">평택비전(뉴코아)</a></li>
                                                                        <li class=""><a href="#none">하남미사</a></li>
                                                                        <li class=""><a href="#none">향남</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_2_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_2_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">충청/대전<em>(11)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_3 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_3"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_3_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">당진</a></li>
                                                                        <li class=""><a href="#none">대전(백화점)</a></li>
                                                                        <li class=""><a href="#none">대전관저</a></li>
                                                                        <li class=""><a href="#none">대전둔산(월평동)</a></li>
                                                                        <li class=""><a href="#none">대전센트럴</a></li>
                                                                        <li class=""><a href="#none">서산</a></li>
                                                                        <li class=""><a href="#none">서청주(아울렛)</a></li>
                                                                        <li class=""><a href="#none">아산터미널</a></li>
                                                                        <li class=""><a href="#none">천안불당</a></li>
                                                                        <li class="disabled"><a href="#none">천안청당</a>
                                                                        </li>
                                                                        <li class=""><a href="#none">청주용암</a></li>
                                                                        <li class=""><a href="#none">충주(모다아울렛)</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_3_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_3_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">전라/광주<em>(10)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_4 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_4"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_4_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">광주(백화점)</a></li>
                                                                        <li class=""><a href="#none">광주광산</a></li>
                                                                        <li class=""><a href="#none">군산나운</a></li>
                                                                        <li class=""><a href="#none">군산몰</a></li>
                                                                        <li class=""><a href="#none">수완(아울렛)</a></li>
                                                                        <li class=""><a href="#none">익산모현</a></li>
                                                                        <li class=""><a href="#none">전주(백화점)</a></li>
                                                                        <li class=""><a href="#none">전주송천</a></li>
                                                                        <li class=""><a href="#none">전주평화</a></li>
                                                                        <li class=""><a href="#none">충장로</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_4_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_4_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_4_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">경북/대구<em>(17)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_5 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_5"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_5_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">경주</a></li>
                                                                        <li class=""><a href="#none">경주황성</a></li>
                                                                        <li class=""><a href="#none">구미공단</a></li>
                                                                        <li class=""><a href="#none">대구광장</a></li>
                                                                        <li class=""><a href="#none">대구율하</a></li>
                                                                        <li class=""><a href="#none">대구현풍</a></li>
                                                                        <li class=""><a href="#none">동성로</a></li>
                                                                        <li class=""><a href="#none">상인</a></li>
                                                                        <li class=""><a href="#none">상주</a></li>
                                                                        <li class=""><a href="#none">성서</a></li>
                                                                        <li class=""><a href="#none">영주</a></li>
                                                                        <li class=""><a href="#none">영천</a></li>
                                                                        <li class=""><a href="#none">포항</a></li>
                                                                        <li class=""><a href="#none">프리미엄구미센트럴</a></li>
                                                                        <li class=""><a href="#none">프리미엄만경</a></li>
                                                                        <li class=""><a href="#none">프리미엄안동</a></li>
                                                                        <li class=""><a href="#none">프리미엄칠곡</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_5_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_5_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_5_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">경남/부산/울산<em>(24)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_6 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_6"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_6_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">거창</a></li>
                                                                        <li class=""><a href="#none">광복</a></li>
                                                                        <li class=""><a href="#none">김해부원</a></li>
                                                                        <li class=""><a href="#none">김해아울렛(장유)</a></li>
                                                                        <li class=""><a href="#none">대영</a></li>
                                                                        <li class=""><a href="#none">동래</a></li>
                                                                        <li class=""><a href="#none">동부산아울렛</a></li>
                                                                        <li class=""><a href="#none">마산(합성동)</a></li>
                                                                        <li class=""><a href="#none">부산명지</a></li>
                                                                        <li class=""><a href="#none">부산본점</a></li>
                                                                        <li class=""><a href="#none">사천</a></li>
                                                                        <li class=""><a href="#none">서면(전포동)</a></li>
                                                                        <li class=""><a href="#none">센텀시티</a></li>
                                                                        <li class=""><a href="#none">양산물금</a></li>
                                                                        <li class=""><a href="#none">엠비씨네(진주)</a></li>
                                                                        <li class=""><a href="#none">오투(부산대)</a></li>
                                                                        <li class=""><a href="#none">울산(백화점)</a></li>
                                                                        <li class=""><a href="#none">울산성남</a></li>
                                                                        <li class=""><a href="#none">진주혁신(롯데몰)</a></li>
                                                                        <li class=""><a href="#none">진해</a></li>
                                                                        <li class=""><a href="#none">창원</a></li>
                                                                        <li class=""><a href="#none">통영</a></li>
                                                                        <li class=""><a href="#none">프리미엄경남대</a></li>
                                                                        <li class=""><a href="#none">프리미엄해운대(장산역)</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_6_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_6_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_6_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">강원<em>(5)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_7 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_7"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_7_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">남원주</a></li>
                                                                        <li class=""><a href="#none">동해</a></li>
                                                                        <li class=""><a href="#none">속초</a></li>
                                                                        <li class=""><a href="#none">원주무실</a></li>
                                                                        <li class=""><a href="#none">춘천</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_7_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_7_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_7_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">제주<em>(4)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar basicCinemaScroll _mCS_8 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_8"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_8_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">서귀포</a></li>
                                                                        <li class=""><a href="#none">제주삼화지구</a></li>
                                                                        <li class=""><a href="#none">제주아라</a></li>
                                                                        <li class=""><a href="#none">제주연동<span
                                                                                    class="txt_rnd_new">신규오픈</span></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_8_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_8_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_8_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><button type="button" class="tab_tit"
                                        style="width: 50%; left: 50%;"><span>스페셜관</span></button>
                                    <div class="tab_con">
                                        <h5 class="hidden">전체</h5>
                                        <div class="cinema_select_wrap cinemaSelect">
                                            <ul>
                                                <li class="depth1 active"><a href="#none">샤롯데<em>(11)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_11 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_11"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: none;" tabindex="0">
                                                                <div id="mCSB_11_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">동탄</a></li>
                                                                        <li class=""><a href="#none">건대입구</a></li>
                                                                        <li class=""><a href="#none">에비뉴엘(명동)</a></li>
                                                                        <li class=""><a href="#none">김포공항</a></li>
                                                                        <li class=""><a href="#none">안산</a></li>
                                                                        <li class=""><a href="#none">평촌(범계역)</a></li>
                                                                        <li class=""><a href="#none">광주(백화점)</a></li>
                                                                        <li class=""><a href="#none">동성로</a></li>
                                                                        <li class=""><a href="#none">광복</a></li>
                                                                        <li class=""><a href="#none">센텀시티</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_11_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_11_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_11_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; height: 0px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">수퍼플렉스<em>(10)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_12 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_12"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_12_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">원주무실</a></li>
                                                                        <li class=""><a href="#none">수지</a></li>
                                                                        <li class=""><a href="#none">파주운정</a></li>
                                                                        <li class=""><a href="#none">은평(롯데몰)</a></li>
                                                                        <li class=""><a href="#none">청주용암</a></li>
                                                                        <li class=""><a href="#none">광명아울렛</a></li>
                                                                        <li class=""><a href="#none">상인</a></li>
                                                                        <li class=""><a href="#none">광복</a></li>
                                                                        <li class=""><a href="#none">수원(수원역)</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_12_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_12_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_12_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">수퍼 S<em>(4)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_13 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_13"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_13_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">건대입구</a></li>
                                                                        <li class=""><a href="#none">천안불당</a></li>
                                                                        <li class=""><a href="#none">센텀시티</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_13_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_13_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_13_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">수퍼 4D<em>(10)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_14 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_14"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_14_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">가산디지털</a></li>
                                                                        <li class=""><a href="#none">광복</a></li>
                                                                        <li class=""><a href="#none">김포공항</a></li>
                                                                        <li class=""><a href="#none">노원</a></li>
                                                                        <li class=""><a href="#none">서청주(아울렛)</a></li>
                                                                        <li class=""><a href="#none">수완(아울렛)</a></li>
                                                                        <li class=""><a href="#none">수원(수원역)</a></li>
                                                                        <li class=""><a href="#none">울산(백화점)</a></li>
                                                                        <li class="disabled"><a href="#none">청량리</a>
                                                                        </li>
                                                                        <li class=""><a href="#none">평촌(범계역)</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_14_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_14_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_14_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">컬러리움<em>(1)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_15 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_15"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_15_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">수원(수원역)</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_15_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_15_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_15_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">씨네컴포트(리클라이너)<em>(19)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_16 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_16"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_16_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class="disabled"><a
                                                                                href="#none">신대방(구로디지털역)</a></li>
                                                                        <li class=""><a href="#none">제주연동<span
                                                                                    class="txt_rnd_new">신규오픈</span></a>
                                                                        </li>
                                                                        <li class=""><a href="#none">당진</a></li>
                                                                        <li class=""><a href="#none">대전센트럴</a></li>
                                                                        <li class=""><a href="#none">대전관저</a></li>
                                                                        <li class=""><a href="#none">부평갈산</a></li>
                                                                        <li class=""><a href="#none">시흥장현</a></li>
                                                                        <li class=""><a href="#none">천안불당</a></li>
                                                                        <li class=""><a href="#none">전주송천</a></li>
                                                                        <li class="disabled"><a href="#none">동탄</a></li>
                                                                        <li class=""><a href="#none">판교(창조경제밸리)</a></li>
                                                                        <li class=""><a href="#none">춘천</a></li>
                                                                        <li class=""><a href="#none">중랑</a></li>
                                                                        <li class=""><a href="#none">사천</a></li>
                                                                        <li class=""><a href="#none">제주삼화지구</a></li>
                                                                        <li class=""><a href="#none">제주아라</a></li>
                                                                        <li class=""><a href="#none">용인역북</a></li>
                                                                        <li class=""><a href="#none">성남중앙(신흥역)</a></li>
                                                                        <li class=""><a href="#none">수지</a></li>
                                                                        <li class=""><a href="#none">원주무실</a></li>
                                                                        <li class=""><a href="#none">영주</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_16_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_16_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_16_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">씨네패밀리<em>(1)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_17 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_17"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_17_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_17_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_17_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_17_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="depth1"><a href="#none">씨네커플<em>(28)</em></a>
                                                    <div class="depth2">
                                                        <div class="mCustomScrollbar _mCS_18 mCS-autoHide mCS_no_scrollbar"
                                                            data-mcs-theme="minimal-dark"
                                                            style="position: relative; overflow: visible;">
                                                            <div id="mCSB_18"
                                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                style="max-height: 753px;" tabindex="0">
                                                                <div id="mCSB_18_container"
                                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                                    <ul>
                                                                        <li class=""><a href="#none">시흥장현</a></li>
                                                                        <li class=""><a href="#none">사천</a></li>
                                                                        <li class=""><a href="#none">도곡</a></li>
                                                                        <li class=""><a href="#none">홍대입구</a></li>
                                                                        <li class=""><a href="#none">부평역사</a></li>
                                                                        <li class=""><a href="#none">수원(수원역)</a></li>
                                                                        <li class=""><a href="#none">북수원(천천동)</a></li>
                                                                        <li class=""><a href="#none">대전관저</a></li>
                                                                        <li class=""><a href="#none">원주무실</a></li>
                                                                        <li class=""><a href="#none">은평(롯데몰)</a></li>
                                                                        <li class=""><a href="#none">대영</a></li>
                                                                        <li class=""><a href="#none">파주운정</a></li>
                                                                        <li class=""><a href="#none">인천아시아드</a></li>
                                                                        <li class=""><a href="#none">향남</a></li>
                                                                        <li class=""><a href="#none">인천터미널</a></li>
                                                                        <li class=""><a href="#none">청주용암</a></li>
                                                                        <li class=""><a href="#none">군산나운</a></li>
                                                                        <li class=""><a href="#none">제주삼화지구</a></li>
                                                                        <li class=""><a href="#none">의정부민락</a></li>
                                                                        <li class=""><a href="#none">진주혁신(롯데몰)</a></li>
                                                                        <li class=""><a href="#none">합정</a></li>
                                                                        <li class=""><a href="#none">오투(부산대)</a></li>
                                                                        <li class=""><a href="#none">상인</a></li>
                                                                        <li class=""><a href="#none">서산</a></li>
                                                                        <li class=""><a href="#none">월드타워</a></li>
                                                                        <li class=""><a href="#none">광복</a></li>
                                                                        <li class=""><a href="#none">부산본점</a></li>
                                                                        <li class=""><a href="#none">충장로</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div id="mCSB_18_scrollbar_vertical"
                                                                class="mCSB_scrollTools mCSB_18_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                style="display: none;">
                                                                <div class="mCSB_draggerContainer">
                                                                    <div id="mCSB_18_dragger_vertical"
                                                                        class="mCSB_dragger"
                                                                        style="position: absolute; min-height: 50px; top: 0px;">
                                                                        <div class="mCSB_dragger_bar"
                                                                            style="line-height: 50px;"></div>
                                                                    </div>
                                                                    <div class="mCSB_draggerRail"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="article article_movie">
                        <div class="group_top">
                            <h4 class="tit movie_name">아바타: 물의 길</h4>
                        </div>
                        <div class="inner">
                            <div class="list_filter"><select title="영화 정렬 방법 선택">
                                    <option value="A">예매순</option>
                                    <option value="B">관객순</option>
                                    <option value="C">평점순</option>
                                    <option value="D">예정작</option>
                                </select>
                                <div class="bx_btn_view"><span class="hidden">목록 보기 방식</span>
                                    <ul>
                                        <li><button type="button" class="btn_view_txt viewTxt active">텍스트형</button></li>
                                        <li><button type="button" class="btn_view_thm viewThm">썸네일형</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="movie_select_wrap list movieSelect">
                                <div class="mCustomScrollbar movieScroll _mCS_9 mCS-autoHide"
                                    data-mcs-theme="minimal-dark" style="position: relative; overflow: visible;">
                                    <div id="mCSB_9"
                                        class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                        tabindex="0" style="max-height: none;">
                                        <div id="mCSB_9_container" class="mCSB_container"
                                            style="position: relative; top: 0px; left: 0px;" dir="ltr">
                                            <ul>
                                                <li class=" active"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>1</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">아바타: 물의 길</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>80.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.5</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.14</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>2</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19224_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">영웅</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>12.3%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.21</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>3</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19162_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">올빼미</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>1.7%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.7</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.23</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>4</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19256_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">오늘 밤, 세계에서 이 사랑이 사라진다
                                                                    해도</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>1.2%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.2</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.30</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>5</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19300_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">신비아파트 극장판 차원도깨비와 7개의
                                                                    세계</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.9%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.8</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.14</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>6</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19330_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">젠틀맨</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.3%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.28</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>7</strong></span><img
                                                                src="https://www.lottecinema.co.kr/LCHS/Image/Thum/ticket_no_image01.gif"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">[대관]</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.3%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2050.01.01</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>8</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19239_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">극장판 뽀로로와 친구들: 바이러스를
                                                                    없애줘!</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.2%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.6</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.01</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>9</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19230_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">탄생</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.2%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.1</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.30</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>10</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19262_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">핑크퐁 시네마 콘서트 2: 원더스타
                                                                    콘서트 대작전</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.1%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.21</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>11</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19325_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">눈의 여왕5: 스노우 프린세스와
                                                                    미러랜드의 비밀</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.1%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.22</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>12</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19290_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">스페이스 키드: 우주에서
                                                                    살아남기</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.1%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.4</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.07</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>13</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202210/18983_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">에브리씽 에브리웨어 올 앳
                                                                    원스</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.7</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.10.12</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>14</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202301/19328_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">3000년의 기다림</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2023.01.04</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>15</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19073_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">원피스 필름 레드</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.9</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.30</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>16</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19294_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">페르시아어 수업</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.6</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.15</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>17</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202206/18651_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">헤어질 결심</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.3</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.06.29</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>18</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19217_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_all">0세
                                                                    관람가</span><strong class="tit">스트레인지 월드</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.2</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.23</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>19</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19443_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">드라이브 마이 카</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.22</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>20</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19288_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">라 비 앙 로즈</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.7</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.14</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>21</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19216_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">압꾸정</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.2</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.30</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>22</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19263_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">지옥의 화원</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.1</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.15</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>23</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19372_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">코르사주</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.21</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>24</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19326_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">가가린</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.22</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>25</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19314_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_12">12세
                                                                    관람가</span><strong class="tit">견왕: 이누오</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.08</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>26</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19245_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">그 겨울, 나는</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.7</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.30</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>27</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19279_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">나나</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.6</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.15</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class=""><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>28</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19293_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">뮤직 by SIA</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.3</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.15</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>29</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19322_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">므이 : 저주,돌아오다</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>7.1</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.07</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>30</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19182_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">파이어버드</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.8</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.11.17</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>31</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19377_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">팬픽에서 연애까지</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>0.0</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.22</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>32</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19164_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">프레이 포 더 데블</strong>
                                                            </div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.1</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.12.07</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>33</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202210/19011_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_18">18세
                                                                    관람가</span><strong class="tit">스마일</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>8.5</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.10.06</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                                <li class="disabled"><a href="#none">
                                                        <div class="bx_thm"><span class="rank"><span
                                                                    class="hidden">순위</span><strong>34</strong></span><img
                                                                src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202210/19009_101_1.jpg"
                                                                alt="포스터" class="mCS_img_loaded"></div>
                                                        <div class="group_infor">
                                                            <div class="bx_tit"><span class="ic_grade gr_15">15세
                                                                    관람가</span><strong class="tit">자백</strong></div>
                                                            <dl>
                                                                <dt>예매율</dt>
                                                                <dd><strong>0.0%</strong></dd>
                                                                <dt class="side"><span
                                                                        class="txt_ic_score ty1"><em>평점</em></span></dt>
                                                                <dd><span
                                                                        class="txt_ic_score ty1"><strong>9.3</strong></span>
                                                                </dd>
                                                                <dt>개봉일</dt>
                                                                <dd>2022.10.26</dd>
                                                                <dt class="side day">d -day</dt>
                                                                <dd><strong class="expired"></strong></dd>
                                                            </dl>
                                                        </div>
                                                    </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="mCSB_9_scrollbar_vertical"
                                        class="mCSB_scrollTools mCSB_9_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                        style="display: block;">
                                        <div class="mCSB_draggerContainer">
                                            <div id="mCSB_9_dragger_vertical" class="mCSB_dragger"
                                                style="position: absolute; min-height: 50px; display: block; height: 315px; max-height: 720px; top: 0px;">
                                                <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                            </div>
                                            <div class="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="article article_time area__movingbar litype6">
                        <div class="group_top">
                            <h4 class="tit">2022-12-20(화)</h4>
                        </div>
                        <div class="inner">
                            <div class="date_select_wrap dateReserveWrap">
                                <div class="slide_wrap slide_reserve_date">
                                    <ul class="owl-carousel owl-loaded owl-drag">
                                        <div class="owl-stage-outer">
                                            <div class="owl-stage"
                                                style="transform: translate3d(0px, 0px, 0px); transition: all 0.4s ease 0s; width: 735px;">
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><strong class="month">12월</strong><span
                                                            class="date"><label><input type="radio" name="radioDate1"
                                                                    data-displayyn="Y" data-playdate="2022-12-20"
                                                                    data-isplaydate="Y" data-playweek="오늘"
                                                                    checked=""><strong>20</strong><em>오늘</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="Y"
                                                                    data-playdate="2022-12-21" data-isplaydate="Y"
                                                                    data-playweek="수"><strong>21</strong><em>수</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="Y"
                                                                    data-playdate="2022-12-22" data-isplaydate="Y"
                                                                    data-playweek="목"><strong>22</strong><em>목</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="Y"
                                                                    data-playdate="2022-12-23" data-isplaydate="Y"
                                                                    data-playweek="금"><strong>23</strong><em>금</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date sat"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="Y"
                                                                    data-playdate="2022-12-24" data-isplaydate="Y"
                                                                    data-playweek="토"><strong>24</strong><em>토</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date sun"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="Y"
                                                                    data-playdate="2022-12-25" data-isplaydate="Y"
                                                                    data-playweek="일"><strong>25</strong><em>일</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-26" data-isplaydate="Y"
                                                                    data-playweek="월"><strong>26</strong><em>월</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item active" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-27" data-isplaydate="Y"
                                                                    data-playweek="화"><strong>27</strong><em>화</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-28" data-isplaydate="Y"
                                                                    data-playweek="수"><strong>28</strong><em>수</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-29" data-isplaydate="Y"
                                                                    data-playweek="목"><strong>29</strong><em>목</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-30" data-isplaydate="Y"
                                                                    data-playweek="금"><strong>30</strong><em>금</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><span class="date sat disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2022-12-31" data-isplaydate="Y"
                                                                    data-playweek="토"><strong>31</strong><em>토</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><strong class="month">1월</strong><span
                                                            class="date sun disabled"><label><input type="radio"
                                                                    name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2023-01-01" data-isplaydate="Y"
                                                                    data-playweek="일"><strong>1</strong><em>일</em></label></span>
                                                    </li>
                                                </div>
                                                <div class="owl-item" style="width: 52.5px;">
                                                    <li class="item"><span class="date disabled"><label><input
                                                                    type="radio" name="radioDate1" data-displayyn="N"
                                                                    data-playdate="2023-01-02" data-isplaydate="N"
                                                                    data-playweek="월"><strong>2</strong><em>월</em></label></span>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav"><button type="button" role="presentation"
                                                class="owl-prev disabled"><span
                                                    aria-label="Previous">‹</span></button><button type="button"
                                                role="presentation" class="owl-next"><span
                                                    aria-label="Next">›</span></button></div>
                                        <div class="owl-dots disabled"></div>
                                    </ul>
                                </div>
                            </div>
                            <ul class="tab_wrap outer sml actionmovingbar">
                                <li class="active"><button type="button" class="tab_tit"
                                        style="width: 16.6667%; left: 0%;"><span>전체</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">전체</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_73 mCS-autoHide"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_73"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_73_container" class="mCSB_container"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="group_time_select">
                                                        <div class="time_select_tit"><span
                                                                class="ic_grade gr_12">12</span><strong>아바타: 물의
                                                                길</strong></div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>4D3D</li>
                                                                <li>수퍼 4D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class="near"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>13:05</strong>
                                                                                <div class="tooltip">종료 16:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>5</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="near active"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>16:45</strong>
                                                                                <div class="tooltip">종료 20:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>4</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="full disabled"><a role="button"
                                                                        href="#none"><span class="txt_ntc">매진</span>
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:25</strong>
                                                                                <div class="tooltip">종료 23:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>매진</strong></dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>11:35</strong>
                                                                                <div class="tooltip">종료 14:57</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>208</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>12:10</strong>
                                                                                <div class="tooltip">종료 15:32</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>209</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>14:05</strong>
                                                                                <div class="tooltip">종료 17:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>182</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>15:15</strong>
                                                                                <div class="tooltip">종료 18:37</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>212</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>15:50</strong>
                                                                                <div class="tooltip">종료 19:12</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>203</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>17:45</strong>
                                                                                <div class="tooltip">종료 21:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>251</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>18:55</strong>
                                                                                <div class="tooltip">종료 22:17</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>182</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>19:40</strong>
                                                                                <div class="tooltip">종료 23:02</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>118</strong> / 129
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">3관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>21:25</strong>
                                                                                <div class="tooltip">종료 24:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>255</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:35</strong>
                                                                                <div class="tooltip">종료 25:57</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>215</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>23:00</strong>
                                                                                <div class="tooltip">종료 26:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>224</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>3D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>11:00</strong>
                                                                                <div class="tooltip">종료 14:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>235</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>13:25</strong>
                                                                                <div class="tooltip">종료 16:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>242</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>14:40</strong>
                                                                                <div class="tooltip">종료 18:02</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>234</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>17:05</strong>
                                                                                <div class="tooltip">종료 20:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>249</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>18:20</strong>
                                                                                <div class="tooltip">종료 21:42</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>246</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:45</strong>
                                                                                <div class="tooltip">종료 24:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>244</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:00</strong>
                                                                                <div class="tooltip">종료 25:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>254</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                                <li>4K</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>12:45</strong>
                                                                                <div class="tooltip">종료 16:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>173</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>16:25</strong>
                                                                                <div class="tooltip">종료 19:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>200</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:05</strong>
                                                                                <div class="tooltip">종료 23:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>209</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_73_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_73_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: block;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_73_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; display: block; height: 633px; max-height: 624px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class=""><button type="button" class="tab_tit"
                                        style="width: 16.6667%; left: 16.6667%;"><span>스페셜관</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">스페셜관</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_74 mCS-autoHide mCS_no_scrollbar"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_74"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_74_container"
                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="group_time_select">
                                                        <div class="time_select_tit"><span
                                                                class="ic_grade gr_12">12</span><strong>아바타: 물의
                                                                길</strong></div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>4D3D</li>
                                                                <li>수퍼 4D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class="near"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>13:05</strong>
                                                                                <div class="tooltip">종료 16:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>5</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="near"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>16:45</strong>
                                                                                <div class="tooltip">종료 20:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>4</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="full disabled"><a role="button"
                                                                        href="#none"><span class="txt_ntc">매진</span>
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:25</strong>
                                                                                <div class="tooltip">종료 23:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>매진</strong></dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_74_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_74_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: none;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_74_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; height: 0px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><button type="button" class="tab_tit"
                                        style="width: 16.6667%; left: 33.3333%;"><span>Atmos</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">Atmos</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_75 mCS-autoHide mCS_no_scrollbar"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_75"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_75_container"
                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="bx_notice">
                                                        <p>조회 가능한 상영시간이 없습니다.</p>
                                                        <p>조건을 변경해주세요.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_75_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_75_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: none;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_75_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; height: 0px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><button type="button" class="tab_tit" style="width: 16.6667%; left: 50%;"><span>13시
                                            이후</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">13시 이후</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_76 mCS-autoHide"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_76"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_76_container" class="mCSB_container"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="group_time_select">
                                                        <div class="time_select_tit"><span
                                                                class="ic_grade gr_12">12</span><strong>아바타: 물의
                                                                길</strong></div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>4D3D</li>
                                                                <li>수퍼 4D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class="near"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>13:05</strong>
                                                                                <div class="tooltip">종료 16:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>5</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="near"><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>16:45</strong>
                                                                                <div class="tooltip">종료 20:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>4</strong> / 93
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class="full disabled"><a role="button"
                                                                        href="#none"><span class="txt_ntc">매진</span>
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:25</strong>
                                                                                <div class="tooltip">종료 23:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>매진</strong></dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>14:05</strong>
                                                                                <div class="tooltip">종료 17:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>182</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>15:15</strong>
                                                                                <div class="tooltip">종료 18:37</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>212</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>15:50</strong>
                                                                                <div class="tooltip">종료 19:12</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>203</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>17:45</strong>
                                                                                <div class="tooltip">종료 21:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>251</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>18:55</strong>
                                                                                <div class="tooltip">종료 22:17</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>182</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>19:40</strong>
                                                                                <div class="tooltip">종료 23:02</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>118</strong> / 129
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">3관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>21:25</strong>
                                                                                <div class="tooltip">종료 24:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>255</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:35</strong>
                                                                                <div class="tooltip">종료 25:57</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>215</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>23:00</strong>
                                                                                <div class="tooltip">종료 26:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>224</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>3D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>13:25</strong>
                                                                                <div class="tooltip">종료 16:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>242</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>14:40</strong>
                                                                                <div class="tooltip">종료 18:02</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>234</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>17:05</strong>
                                                                                <div class="tooltip">종료 20:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>249</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>18:20</strong>
                                                                                <div class="tooltip">종료 21:42</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>246</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:45</strong>
                                                                                <div class="tooltip">종료 24:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>244</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:00</strong>
                                                                                <div class="tooltip">종료 25:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>254</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                                <li>4K</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>16:25</strong>
                                                                                <div class="tooltip">종료 19:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>200</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:05</strong>
                                                                                <div class="tooltip">종료 23:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>209</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_76_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_76_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: block;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_76_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; display: block; height: 633px; max-height: 624px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><button type="button" class="tab_tit"
                                        style="width: 16.6667%; left: 66.6667%;"><span>19시 이후</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">19시 이후</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_77 mCS-autoHide mCS_no_scrollbar"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_77"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_77_container"
                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="group_time_select">
                                                        <div class="time_select_tit"><span
                                                                class="ic_grade gr_12">12</span><strong>아바타: 물의
                                                                길</strong></div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>4D3D</li>
                                                                <li>수퍼 4D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class="full disabled"><a role="button"
                                                                        href="#none"><span class="txt_ntc">매진</span>
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:25</strong>
                                                                                <div class="tooltip">종료 23:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>매진</strong></dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">7관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>19:40</strong>
                                                                                <div class="tooltip">종료 23:02</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>118</strong> / 129
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">3관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>21:25</strong>
                                                                                <div class="tooltip">종료 24:47</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>255</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">9관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:35</strong>
                                                                                <div class="tooltip">종료 25:57</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>215</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">1관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>23:00</strong>
                                                                                <div class="tooltip">종료 26:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>224</strong> / 227
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">2관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>3D</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:45</strong>
                                                                                <div class="tooltip">종료 24:07</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>244</strong> / 261
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">4관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>22:00</strong>
                                                                                <div class="tooltip">종료 25:22</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>254</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">5관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="time_select_wrap timeSelect">
                                                            <ul class="list_hall">
                                                                <li>2D</li>
                                                                <li>4K</li>
                                                            </ul>
                                                            <ul class="list_time">
                                                                <li class=""><a role="button" href="#none">
                                                                        <dl>
                                                                            <dt>상영시간</dt>
                                                                            <dd class="time"><strong>20:05</strong>
                                                                                <div class="tooltip">종료 23:27</div>
                                                                            </dd>
                                                                            <dt>잔여석</dt>
                                                                            <dd class="seat"><strong>209</strong> / 256
                                                                            </dd>
                                                                            <dt>상영관</dt>
                                                                            <dd class="hall">8관</dd>
                                                                        </dl>
                                                                    </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_77_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_77_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: none;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_77_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; height: 0px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><button type="button" class="tab_tit"
                                        style="width: 16.6667%; left: 83.3333%;"><span>심야</span></button>
                                    <div class="tab_con ty5">
                                        <h5 class="hidden">심야</h5>
                                        <div class="timeScroll mCustomScrollbar _mCS_78 mCS-autoHide mCS_no_scrollbar"
                                            data-mcs-theme="minimal-dark"
                                            style="position: relative; overflow: visible;">
                                            <div id="mCSB_78"
                                                class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                style="max-height: none;" tabindex="0">
                                                <div id="mCSB_78_container"
                                                    class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                    style="position:relative; top:0; left:0;" dir="ltr">
                                                    <div class="bx_notice">
                                                        <p>조회 가능한 상영시간이 없습니다.</p>
                                                        <p>조건을 변경해주세요.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="mCSB_78_scrollbar_vertical"
                                                class="mCSB_scrollTools mCSB_78_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                style="display: none;">
                                                <div class="mCSB_draggerContainer">
                                                    <div id="mCSB_78_dragger_vertical" class="mCSB_dragger"
                                                        style="position: absolute; min-height: 50px; height: 0px; top: 0px;">
                                                        <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
                                                    </div>
                                                    <div class="mCSB_draggerRail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="wrap_nav_underline"><span class="nav_underline"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- pop up 팝업 좌석 , seat -->
        <div>
        <!-- <SeatPopup ></SeatPopup> -->
        </div>

        
    </div>

    <!-- 좌석 예약 페이지 -->
    <div v-if="show">
        <SeatResevation></SeatResevation>

    </div>

    <!-- 결제 페이지 -->
    <div>
        <PaymentView></PaymentView>


    </div>
    


    </div>
</template>

<script>
import NavBlack from '@/components/NavBlack.vue'
// import SeatPopup from '@/components/SeatPopup.vue'
import SeatResevation from '@/components/reservation/SeatReservation.vue'
import PaymentView from '@/components/reservation/PaymentView.vue'


export default {
    components: {
        NavBlack,
        // SeatPopup,
        SeatResevation,
        PaymentView,
    },
    mounted() {

    },
    data() {
        return {
            show:false,
        }
    },

}
</script>

<style >

@import url("@/assets/css/reservation.css");

</style>