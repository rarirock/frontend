<template>
    <div>
        <div >
            <div  id="contents" class="contents_full contents_reserve">
                <div  class="wrap_reserve">
                    <h2  class="hidden">예매하기</h2>
                    <div  class="section_step_tit">
                        <ul >
                            <li  class="active step01"><a 
                                    href="#reserveStep01"><strong  class="tit"><span
                                            >01</span><br >상영시간</strong>
                                    <div  class="bx_con">
                                        <dl >
                                            <dt >선택한 영화 제목</dt>
                                            <dd >아바타: 물의 길</dd>
                                            <dt >선택한 상영관</dt>
                                            <dd >노원 7관</dd>
                                            <dt >선택한 상영 날짜</dt>
                                            <dd >2022-12-20(화)</dd>
                                            <dt >선택한 시간</dt>
                                            <dd >16:45~20:07</dd>
                                        </dl>
                                    </div>
                                </a></li>
                            <li  class="disabled"><a 
                                    style="cursor: default;"><strong  class="tit"><span
                                            >02</span><br >인원/좌석</strong></a></li>
                            <li  class="disabled"><a 
                                    style="cursor: default;"><strong  class="tit"><span
                                            >03</span><br >결제</strong></a></li>
                            <li  class="disabled"><a 
                                    style="cursor: default;"><strong  class="tit"><span
                                            >04</span><br >결제완료</strong></a></li>
                        </ul>
                    </div>
                    <div  id="reserveStep01" class="section_step_con step01 active">
                        <h3  class="hidden">상영시간</h3>
                        <div  class="article article_cinema area__movingbar litype2">
                            <div  class="group_top">
                                <h4  class="tit">노원</h4>
                            </div>
                            <div  class="inner">
                                <ul  class="tab_wrap outer actionmovingbar">
                                    <li  class="active"><button  type="button"
                                            class="tab_tit" style="width: 50%; left: 0%;"><span
                                                >전체</span></button>
                                        <div  class="tab_con">
                                            <h5  class="hidden">전체</h5>
                                            <div  class="cinema_select_wrap cinemaSelect basicCinema">
                                                <ul >
                                                    <li  class="depth1"><a 
                                                            href="#none">MY 영화관<em >(0)</em></a>
                                                        <div  class="depth2">
                                                            <div  data-mcs-theme="minimal-dark"
                                                                class="mCustomScrollbar _mCS_10 mCS-autoHide mCS_no_scrollbar"
                                                                style="position: relative; overflow: visible;">
                                                                <div  id="mCSB_10" tabindex="0"
                                                                    class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                                    style="max-height: 753px;">
                                                                    <div  id="mCSB_10_container"
                                                                        dir="ltr"
                                                                        class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                                                        style="position: relative; top: 0px; left: 0px;">
                                                                        <div  class="bx_notice">
                                                                            <p  class="txt">로그인 후 이용해
                                                                                주세요.</p><a 
                                                                                href="https://www.lottecinema.co.kr/NLCHS/Member/Login?hidUrlReferrer=https%3A%2F%2Fwww.lottecinema.co.kr%2FNLCHS%2FTicketing"
                                                                                class="btn_col3 ty3 rnd">로그인</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div  id="mCSB_10_scrollbar_vertical"
                                                                    class="mCSB_scrollTools mCSB_10_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                                                    style="display: none;">
                                                                    <div 
                                                                        class="mCSB_draggerContainer">
                                                                        <div 
                                                                            id="mCSB_10_dragger_vertical"
                                                                            class="mCSB_dragger"
                                                                            style="position: absolute; min-height: 50px; top: 0px;">
                                                                            <div 
                                                                                class="mCSB_dragger_bar"
                                                                                style="line-height: 50px;"></div>
                                                                        </div>
                                                                        <div 
                                                                            class="mCSB_draggerRail"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li  class="depth1 active"><a 
                                                            href="#none">서울</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">경기/인천</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">충청/대전</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">전라/광주</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">경북/대구</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">경남/부산/울산</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">강원</a></li>
                                                    <li  class="depth1"><a 
                                                            href="#none">제주</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li  class="wrap_nav_underline"><span 
                                            class="nav_underline"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div  class="article article_movie">
                            <div  class="group_top">
                                <h4  class="tit movie_name">아바타: 물의 길</h4>
                            </div>
                            <div  class="inner">
                                <div  class="list_filter"><select 
                                        title="영화 정렬 방법 선택">
                                        <option  value="A">예매순</option>
                                        <option  value="B">관객순</option>
                                        <option  value="C">평점순</option>
                                        <option  value="D">예정작</option>
                                    </select>
                                    <div  class="bx_btn_view">
                                    </div>
                                </div>
                                <div  class="movie_select_wrap list movieSelect">
                                    <div  data-mcs-theme="minimal-dark"
                                        class="mCustomScrollbar movieScroll _mCS_9 mCS-autoHide"
                                        style="position: relative; overflow: visible;">
                                        <div  id="mCSB_9" tabindex="0"
                                            class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                            style="max-height: none;">
                                            <div  id="mCSB_9_container" dir="ltr"
                                                class="mCSB_container" style="position: relative; top: 0px; left: 0px;">
                                                <ul >
                                                    <li  class="active"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >1</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">아바타: 물의 길</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >80.0%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.5</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.14</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                        <!-- <li  class="active"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >1</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/18755_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">아바타: 물의 길</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >80.0%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.5</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.14</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li> -->
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >2</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19224_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">영웅</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >12.3%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.21</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li ><a  href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >3</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19162_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_15">15세
                                                                        관람가</span><strong 
                                                                        class="tit">올빼미</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >1.7%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.7</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.11.23</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li ><a  href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >4</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19256_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">오늘 밤, 세계에서 이 사랑이 사라진다 해도</strong>
                                                                </div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >1.2%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.2</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.11.30</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li ><a  href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >5</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19300_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">신비아파트 극장판 차원도깨비와 7개의 세계</strong>
                                                                </div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.9%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.8</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.14</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >6</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19330_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_15">15세
                                                                        관람가</span><strong 
                                                                        class="tit">젠틀맨</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.3%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.28</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >7</strong></span><img
                                                                    
                                                                    src="https://www.lottecinema.co.kr/LCHS/Image/Thum/ticket_no_image01.gif"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">[대관]</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.3%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2050.01.01</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li ><a  href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >8</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19239_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">극장판 뽀로로와 친구들: 바이러스를 없애줘!</strong>
                                                                </div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.2%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.6</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.01</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >9</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19230_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">탄생</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.2%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.1</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.11.30</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >10</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19262_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">핑크퐁 시네마 콘서트 2: 원더스타 콘서트 대작전</strong>
                                                                </div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.1%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.21</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >11</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19325_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">눈의 여왕5: 스노우 프린세스와 미러랜드의 비밀</strong>
                                                                </div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.1%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.22</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >12</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202212/19290_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_all">0세
                                                                        관람가</span><strong 
                                                                        class="tit">스페이스 키드: 우주에서 살아남기</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.1%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >9.4</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.12.07</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >13</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202210/18983_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_15">15세
                                                                        관람가</span><strong 
                                                                        class="tit">에브리씽 에브리웨어 올 앳 원스</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.0%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >8.7</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.10.12</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >14</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202301/19328_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_15">15세
                                                                        관람가</span><strong 
                                                                        class="tit">3000년의 기다림</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.0%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >0.0</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2023.01.04</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                    <li  class="disabled"><a 
                                                            href="#none">
                                                            <div  class="bx_thm"><span
                                                                     class="rank"><span
                                                                        
                                                                        class="hidden">순위</span><strong
                                                                        >15</strong></span><img
                                                                    
                                                                    src="https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202211/19073_101_1.jpg"
                                                                    alt="포스터" class="mCS_img_loaded"></div>
                                                            <div  class="group_infor">
                                                                <div  class="bx_tit"><span
                                                                         class="ic_grade gr_12">12세
                                                                        관람가</span><strong 
                                                                        class="tit">원피스 필름 레드</strong></div>
                                                                <dl >
                                                                    <dt >예매율</dt>
                                                                    <dd ><strong
                                                                            >0.0%</strong></dd>
                                                                    <dt  class="side"><span
                                                                            
                                                                            class="txt_ic_score ty1"><em
                                                                                >평점</em></span></dt>
                                                                    <dd ><span 
                                                                            class="txt_ic_score ty1"><strong
                                                                                >8.9</strong></span>
                                                                    </dd>
                                                                    <dt >개봉일</dt>
                                                                    <dd >2022.11.30</dd>
                                                                    <dt  class="side day">d -day</dt>
                                                                    <dd ><strong 
                                                                            class="expired"></strong></dd>
                                                                </dl>
                                                            </div>
                                                        </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <div  id="mCSB_9_scrollbar_vertical"
                                            class="mCSB_scrollTools mCSB_9_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                            style="display: block;">
                                            <div  class="mCSB_draggerContainer">
                                                <div  id="mCSB_9_dragger_vertical"
                                                    class="mCSB_dragger"
                                                    style="position: absolute; min-height: 50px; display: block; height: 315px; max-height: 720px; top: 0px;">
                                                    <div  class="mCSB_dragger_bar"
                                                        style="line-height: 50px;"></div>
                                                </div>
                                                <div  class="mCSB_draggerRail"></div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  class="article article_time area__movingbar litype6">
                            <div  class="group_top">
                                <h4  class="tit">2022-12-20(화)</h4>
                            </div>
                            <div  class="inner">
                                <div  class="date_select_wrap dateReserveWrap">
                                    <div  class="slide_wrap slide_reserve_date">
                                        <ul  class="owl-carousel owl-loaded owl-drag">
                                            <div  class="owl-stage-outer">
                                                <div  class="owl-carousel owl-stage"
                                                    style="transform: translate3d(0px, 0px, 0px); transition: all 0.4s ease 0s; width: 735px;">
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><strong 
                                                                class="month">12월</strong><span 
                                                                class="date"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-20" data-isplaydate="Y"
                                                                        data-playweek="오늘" checked="checked"><strong
                                                                        >20</strong><em
                                                                        >오늘</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-21" data-isplaydate="Y"
                                                                        data-playweek="수"><strong
                                                                        >21</strong><em
                                                                        >수</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-22" data-isplaydate="Y"
                                                                        data-playweek="목"><strong
                                                                        >22</strong><em
                                                                        >목</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-23" data-isplaydate="Y"
                                                                        data-playweek="금"><strong
                                                                        >23</strong><em
                                                                        >금</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date sat"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-24" data-isplaydate="Y"
                                                                        data-playweek="토"><strong
                                                                        >24</strong><em
                                                                        >토</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date sun"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="Y"
                                                                        data-playdate="2022-12-25" data-isplaydate="Y"
                                                                        data-playweek="일"><strong
                                                                        >25</strong><em
                                                                        >일</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2022-12-26" data-isplaydate="Y"
                                                                        data-playweek="월"><strong
                                                                        >26</strong><em
                                                                        >월</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item active"
                                                        style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2022-12-27" data-isplaydate="Y"
                                                                        data-playweek="화"><strong
                                                                        >27</strong><em
                                                                        >화</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2022-12-28" data-isplaydate="Y"
                                                                        data-playweek="수"><strong
                                                                        >28</strong><em
                                                                        >수</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2022-12-29" data-isplaydate="Y"
                                                                        data-playweek="목"><strong
                                                                        >29</strong><em
                                                                        >목</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2022-12-30" data-isplaydate="Y"
                                                                        data-playweek="금"><strong
                                                                        >30</strong><em
                                                                        >금</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date sat disabled"><label
                                                                    ><input 
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2022-12-31"
                                                                        data-isplaydate="Y" data-playweek="토"><strong
                                                                        >31</strong><em
                                                                        >토</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><strong 
                                                                class="month">1월</strong><span 
                                                                class="date sun disabled"><label
                                                                    ><input 
                                                                        type="radio" name="radioDate1"
                                                                        data-displayyn="N" data-playdate="2023-01-01"
                                                                        data-isplaydate="Y" data-playweek="일"><strong
                                                                        >1</strong><em
                                                                        >일</em></label></span></li>
                                                    </div>
                                                    <div  class="owl-item" style="width: 52.5px;">
                                                        <li  class="item"><span 
                                                                class="date disabled"><label ><input
                                                                         type="radio"
                                                                        name="radioDate1" data-displayyn="N"
                                                                        data-playdate="2023-01-02" data-isplaydate="N"
                                                                        data-playweek="월"><strong
                                                                        >2</strong><em
                                                                        >월</em></label></span></li>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div  class="owl-nav"><button 
                                                    type="button" role="presentation" class="owl-prev disabled"><span
                                                        
                                                        aria-label="Previous">‹</span></button><button
                                                     type="button" role="presentation"
                                                    class="owl-next"><span 
                                                        aria-label="Next">›</span></button></div>
                                            <div  class="owl-dots disabled"></div> --> 
                                        </ul>
                                    </div>
                                </div>
                                <ul  class="tab_wrap outer sml actionmovingbar">
                                    <li  class="active"><button  type="button"
                                            class="tab_tit" style="width: 16.6667%; left: 0%;"><span
                                                ></span></button>
                                        <div  class="tab_con ty5">
                                            <div  data-mcs-theme="minimal-dark"
                                                class="timeScroll mCustomScrollbar _mCS_73 mCS-autoHide"
                                                style="position: relative; overflow: visible;">
                                                <div  id="mCSB_73" tabindex="0"
                                                    class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                                    style="max-height: none;">
                                                    <div  id="mCSB_73_container" dir="ltr"
                                                        class="mCSB_container"
                                                        style="position: relative; top: 0px; left: 0px;">
                                                        <div  class="group_time_select">
                                                            <div  class="time_select_tit"><span
                                                                    
                                                                    class="ic_grade gr_12">12</span><strong
                                                                    >아바타: 물의 길</strong></div>
                                                            <div  class="time_select_wrap timeSelect">
                                                                <ul  class="list_hall">
                                                                    <li >4D3D</li>
                                                                    <li >수퍼 4D</li>
                                                                </ul>
                                                                <ul  class="list_time">
                                                                    <li  class="near"><a
                                                                             role="button"
                                                                            href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >13:05</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 16:27</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >5</strong> /
                                                                                    93 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li  class="near active"><a
                                                                             role="button"
                                                                            href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >16:45</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 20:07</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >4</strong> /
                                                                                    93 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li  class="full disabled"><a
                                                                             role="button"
                                                                            href="#none"><span 
                                                                                class="txt_ntc">매진</span>
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >20:25</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 23:47</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >매진</strong>
                                                                                </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">7관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                </ul>
                                                            </div>
                                                            <div  class="time_select_wrap timeSelect">
                                                                <ul  class="list_hall">
                                                                    <li >2D</li>
                                                                </ul>
                                                                <ul  class="list_time">
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >11:35</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 14:57</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >208</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">2관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >12:10</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 15:32</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >209</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">1관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >14:05</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 17:27</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >182</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">9관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >15:15</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 18:37</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >212</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">2관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >15:50</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 19:12</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >203</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">1관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >17:45</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 21:07</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >251</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">9관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >18:55</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 22:17</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >182</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">2관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >19:40</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 23:02</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >118</strong>
                                                                                    / 129 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">3관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >21:25</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 24:47</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >255</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">9관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >22:35</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 25:57</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >215</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">1관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >23:00</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 26:22</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >224</strong>
                                                                                    / 227 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">2관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                </ul>
                                                            </div>
                                                            <div  class="time_select_wrap timeSelect">
                                                                <ul  class="list_hall">
                                                                    <li >3D</li>
                                                                </ul>
                                                                <ul  class="list_time">
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >11:00</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 14:22</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >235</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">5관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >13:25</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 16:47</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >242</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">4관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >14:40</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 18:02</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >234</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">5관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >17:05</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 20:27</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >249</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">4관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >18:20</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 21:42</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >246</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">5관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >20:45</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 24:07</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >244</strong>
                                                                                    / 261 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">4관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >22:00</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 25:22</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >254</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">5관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                </ul>
                                                            </div>
                                                            <div  class="time_select_wrap timeSelect">
                                                                <ul  class="list_hall">
                                                                    <li >2D</li>
                                                                    <li >4K</li>
                                                                </ul>
                                                                <ul  class="list_time">
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >12:45</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 16:07</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >173</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">8관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >16:25</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 19:47</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >200</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">8관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
                                                                    <li ><a 
                                                                            role="button" href="#none">
                                                                            <dl >
                                                                                <dt >상영시간</dt>
                                                                                <dd  class="time">
                                                                                    <strong
                                                                                        >20:05</strong>
                                                                                    <div 
                                                                                        class="tooltip">종료 23:27</div>
                                                                                </dd>
                                                                                <dt >잔여석</dt>
                                                                                <dd  class="seat">
                                                                                    <strong
                                                                                        >209</strong>
                                                                                    / 256 </dd>
                                                                                <dt >상영관</dt>
                                                                                <dd  class="hall">8관
                                                                                </dd>
                                                                            </dl>
                                                                        </a></li>
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
                                    <li ><span  type="button" class="tab_tit"
                                            style="width: 83%; left: 16.6667%;"></span>
                                        
                                    </li>
                                    <li  class="wrap_nav_underline"><span 
                                            class="nav_underline"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    mounted() {
  // 캐러셀 초기화 실행 , jquery 사용
  $(".owl-stage").owlCarousel({
    autoplay: false, // 자동으로 이미지가 돌아가게 할 것인지
    smartSpeed:500, // 이미지 변경속도
    nav: true,  // 메뉴
    items:9, // 초기화면에 표시할 이미지 개수
    loop:false  // 마지막 사진이 오면 처음 사진으로 돌아가게 할 것인지
  });
},

}
</script>

<style scoped >
.owl-dots {
    display:none;
}
.wrap_reserve {
    overflow: hidden;
    position: relative;
    width: 1280px;
    height: 870px;
    margin: 0 auto;
    background-color: #FFF;
}

.wrap_reserve .section_step_tit {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 78px;
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

.wrap_reserve .section_step_con .article {
    position: relative;
    float: left;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
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
    overflow: fidden;
    height: 815px;
    border-right: 1px solid #ddd;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer {
    padding-top: 61px;
}

.tab_wrap {
    position: relative;
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

input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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

li {
    display: list-item;
    text-align: -webkit-match-parent;
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

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul li {
    padding: 2px;
    border-bottom: none;
}

.cinema_select_wrap>ul li {
    border-bottom: 1px solid #EBEBEB;
}

.cinema_select_wrap>ul>li.depth1>a {
    display: block;
    position: relative;
    width: 175px;
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

.cinema_select_wrap>ul>li.depth1>a em {
    font-size: 10px;
    color: #666;
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

em {
    font-style: italic;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
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

.wrap_reserve .section_step_tit ul li>a {
    display: block;
    height: 100%;
    color: #666;
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

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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

dd {
    display: block;
    margin-inline-start: 40px;
}

.wrap_reserve .section_step_tit ul li>a {
    display: block;
    height: 100%;
    color: #666;
}

element.style {
    cursor: default;
    position: relative;
    overflow: visible;
    width: 50%;
    top: 0;
    left: 0;
    max-height: 753px;
    position: absolute;
    min-height: 50px;
    display: block;
    height: 624px;
    max-height: 719px;
    line-height: 50px;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer {
    padding-top: 61px;
}

.tab_wrap {
    position: relative;
}

.tab_wrap.outer {
    padding-top: 80px;
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

.tab_wrap>li>.tab_tit {
    position: absolute;
    top: 0;
}

button {
    border: 1px solid #DDD;
    cursor: pointer;
    background-color: #fff;
}

input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.tab_wrap>li>.tab_tit span {
    vertical-align: top;
    white-space: nowrap;
}

button>* {
    position: relative;
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

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap {
    background-color: #F5F5F5;
}

.cinema_select_wrap {
    position: relative;
    height: 100%;
    background-color: #FFF;
}

.cinema_select_wrap>ul li {
    border-bottom: 1px solid #EBEBEB;
}

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul>li.depth1.active>a {
    background: #FFF no-repeat 150px 2px;
    /* url("../../Content/images/icon/check.png") */
}

.wrap_reserve .section_step_con .article.article_cinema .cinema_select_wrap>ul .depth2 {
    background-color: #FFF;
}

.cinema_select_wrap>ul>li.depth1.active .depth2 {
    display: block;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul,
.wrap_reserve .section_step_con .article.article_cinema>.inner .cinema_select_wrap>ul .depth2 .mCustomScrollbar {
    height: 753px;
}

.time_select_wrap {
    margin-top: 20px;
}

.time_select_wrap ul.list_hall {
    margin-bottom: 5px;
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
    text-decoration: underline;
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

element.style {
    width: 50%;
    left: 50%;
}

.wrap_reserve .section_step_con .article.article_cinema>.inner .tab_wrap.outer>li>.tab_tit {
    height: 61px;
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

input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.tab_wrap>li>.tab_con {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 0;
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

.wrap_reserve .section_step_con .article {
    position: relative;
    float: left;
    height: 100%;
    box-sizing: border-box;
    background-color: #FFF;
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

input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}

.wrap_reserve .section_step_con .article.article_movie .list_filter select {
    width: 180px;
    height: 30px;
    line-height: 29px;
    margin-top: 15px;
    padding-left: 10px;
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

.mCSB_container {
    overflow: hidden;
    width: auto;
    height: auto;
}

.movie_select_wrap.list ul>li .bx_thm {
    display: none;
}

strong {
    font-weight: bold;
}

img {
    border: none;
    vertical-align: top;
}

.movie_select_wrap ul>li .group_infor {
    float: left;
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

.movie_select_wrap.list ul>li .group_infor .bx_tit .ic_grade {
    position: absolute;
    left: 20px;
    top: 12px;
}

.movie_select_wrap ul>li .group_infor .bx_tit .ic_grade {
    margin-right: 5px;
}

.ic_grade.gr_12 {
    background-color: transparent;
}

.ic_grade.gr_12 {
    background-color: #4DD6FF;
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

.mCSB_scrollTools .mCSB_dragger {
    cursor: pointer;
    width: 100%;
    height: 30px;
    z-index: 1;
}

.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.5);
    filter: "alpha(opacity=50)";
    -ms-filter: "alpha(opacity=50)";
}

.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.2);
    filter: "alpha(opacity=20)";
    -ms-filter: "alpha(opacity=20)";
}

.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.9);
    filter: "alpha(opacity=90)";
    -ms-filter: "alpha(opacity=90)";
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

element.style {
    transform: translate3d(0px, 0px, 0px);
    transition: all 0.2s ease 0s;
    width: 735px;
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


input,
select,
button {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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

.date_select_wrap .date label {
    display: block;
    cursor: pointer;
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

.tab_wrap.outer {
    padding-top: 80px;
}

.tab_wrap {
    position: relative;
}

.tab_wrap.outer.sml>li>.tab_tit {
    font-size: 13px;
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

.tab_wrap>li>.tab_tit {
    position: absolute;
    top: 0;
}

.tab_wrap>li>.tab_tit span {
    vertical-align: top;
    white-space: nowrap;
}

.tab_wrap>li.active>.tab_con {
    overflow: inherit;
    position: relative;
    width: auto;
    height: auto;
}

.tab_wrap>li>.tab_con.ty5 {
    margin-top: -30px;
}

.tab_wrap>li>.tab_con {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 0;
}

.wrap_reserve .section_step_con .article.article_time>.inner .mCustomScrollbar {
    height: 658px;
    padding: 0 20px;
}

.mCustomScrollbar.mCS_no_scrollbar,
.mCustomScrollbar.mCS_touch_action {
    -ms-touch-action: auto;
    touch-action: auto;
}

.mCustomScrollbar {
    touch-action: pinch-zoom;
}

.mCustomScrollBox {
    position: relative;
    overflow: hidden;
    height: 100%;
    max-width: 100%;
    outline: none;
    direction: ltr;
}

.wrap_reserve .section_step_con .article.article_time>.inner .mCSB_container {
    padding-bottom: 30px;
}

.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
    margin-right: 0;
}

.mCSB_container {
    overflow: hidden;
    width: auto;
    height: auto;
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

.ic_grade.gr_12 {
    background-color: #4DD6FF;
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

.time_select_tit {
    display: flex;
    align-items: center;
    font-size: 15px;
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

.time_select_tit {
    display: flex;
    align-items: center;
    font-size: 15px;
}

.time_select_wrap {
    margin-top: 20px;
}

.time_select_wrap ul.list_hall {
    margin-bottom: 5px;
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

ul ul {
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

.time_select_wrap ul.list_hall li:first-child {
    margin-left: 0;
    padding-left: 0;
}

.time_select_wrap ul.list_hall li {
    display: block;
    position: relative;
    float: left;
    margin-left: 6px;
    padding-left: 6px;
    font-size: 13px;
}

.time_select_wrap ul.list_hall li:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    height: 9px;
    border-left: 1px solid #DDD;
}

.time_select_wrap ul.list_hall:after {
    content: "";
    display: block;
    clear: both;
}

.time_select_wrap .txt_infor {
    margin-bottom: 8px;
    color: #666;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.time_select_wrap ul.list_time li:nth-child(4n+1) {
    margin-left: 0;
}

.time_select_wrap ul.list_time li {
    float: left;
    width: 23.5%;
    margin: 0 0 11px 2%;
}

.time_select_wrap ul.list_time li>a {
    display: block;
    position: relative;
    height: 33px;
    padding: 8px 14px 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    cursor: pointer;
    background: #f8f8f8;
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(248, 248, 248, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#f8f8f8", GradientType=0);
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

.time_select_wrap ul.list_time li>a dl dd.time {
    margin-bottom: 5px;
    font-family: 'Roboto';
    font-size: 11px;
}

dd {
    display: block;
    margin-inline-start: 40px;
}

.time_select_wrap ul.list_time li>a dl dd.time strong {
    display: block;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
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

.time_select_wrap ul.list_time li>a dl dd.seat {
    font-family: 'Roboto';
    font-size: 11px;
    color: #666;
}

.time_select_wrap ul.list_time li>a dl dd.seat strong {
    color: #427652;
}

.time_select_wrap ul.list_time li>a dl dd.seat {
    font-family: 'Roboto';
    font-size: 11px;
    color: #666;
}

body {
    overflow-y: scroll;
}

.time_select_wrap ul.list_time li:nth-child(4n+1) {
    margin-left: 0;
}

.time_select_wrap ul.list_time li {
    float: left;
    width: 23.5%;
    margin: 0 0 11px 2%;
}

.time_select_wrap ul.list_time li>a {
    display: block;
    position: relative;
    height: 50px;
    padding: 8px 14px 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    cursor: pointer;
    background: #f8f8f8;
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

.time_select_wrap ul.list_time li>a dl dd.time {
    margin-bottom: 5px;
    font-family: 'Roboto';
    font-size: 11px;
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

.time_select_wrap ul.list_time li>a dl dd.seat {
    font-family: 'Roboto';
    font-size: 11px;
    color: #666;
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

.time_select_wrap ul.list_time li.full>a dl dd.seat strong {
    color: #F24A6A;
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
</style>