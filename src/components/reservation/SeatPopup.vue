<template>
    <div>
        <div id="layerReserveStep01" class="layer_wrap layer_reserve layer_reserve01_sum2 active" tabindex="0"
            style="left: 50%; top: 50%; margin-top: -256.5px; margin-left: -250px;">
            <div class="layer_header">
                <h4 class="hidden">예매 내용 확인 팝업</h4>
                <div id="stepOnePopupHeaderScreen"><strong>12:45~16:07(1관)</strong></div>
                <button type="button" class="btn_close" onclick="closeScreenLayer()">팝업 닫기</button>
            </div>
            <div class="layer_contents">
                <div class="seat_infor_sum">
                    <div class="group_top" id="stepOnePopupContentsSeatCount">
                        <dl>
                            <dt>잔여좌석</dt>
                            <dd><strong>200</strong>/227</dd>
                        </dl>
                    </div>
                    <div class="group_con screen_preview_box">
                        <div class="screen_preview_con">
                            <div class="screen_info cineCont">
                                <!-- 개발영역 -->
                                <div class="smallScreen">
                                    <span class="title_screen1">SCREEN</span>
                                    <!-- 미니맵 -->
                                    <div class="minimap" id="stepOnePopupMiniMap">
                                        <div class="floor_bx seatSet1"> <span class="floor_tit"
                                                style="display: none;">10F</span>
                                            <div class="seat_area" style="width: 166.851px; height: 58.7295px;"><a
                                                    style="left: 28.5957px; top: 0px;" href="#none"
                                                    class="sel handicapped p0" block-code="p0" data-seat="A4"
                                                    seat-group="grNum1" alt="A4 장애인 발받침석" seat-code="1A04"> <span
                                                        class="handicapped f1">4</span></a><a
                                                    style="left: 36px; top: 0px;" href="#none"
                                                    class="sel handicapped p0" block-code="p0" data-seat="A5"
                                                    seat-group="grNum1" alt="A5 장애인 발받침석" seat-code="1A05"> <span
                                                        class="handicapped f2">5</span></a><a
                                                    style="left: 43.4043px; top: 0px;" href="#none"
                                                    class="sel handicapped p0" block-code="p0" data-seat="A6"
                                                    seat-group="grNum1" alt="A6 장애인 발받침석" seat-code="1A06"> <span
                                                        class="handicapped f2">6</span></a><a
                                                    style="left: 50.8085px; top: 0px;" href="#none"
                                                    class="sel handicapped p0" block-code="p0" data-seat="A7"
                                                    seat-group="grNum1" alt="A7 장애인 발받침석" seat-code="1A07"> <span
                                                        class="handicapped f2">7</span></a><a
                                                    style="left: 65.617px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A9"
                                                    seat-group="grNum1" alt="A9 발받침석" seat-code="1A09"> <span
                                                        class="foot_seat f2">9</span></a><a
                                                    style="left: 73.0213px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A10"
                                                    seat-group="grNum1" alt="A10 발받침석" seat-code="1A10"> <span
                                                        class="foot_seat f2">10</span></a><a
                                                    style="left: 80.4255px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A11"
                                                    seat-group="grNum1" alt="A11 발받침석" seat-code="1A11"> <span
                                                        class="foot_seat f2">11</span></a><a
                                                    style="left: 87.8298px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A12"
                                                    seat-group="grNum1" alt="A12 발받침석" seat-code="1A12"> <span
                                                        class="foot_seat f2">12</span></a><a
                                                    style="left: 95.234px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A13"
                                                    seat-group="grNum1" alt="A13 발받침석" seat-code="1A13"> <span
                                                        class="foot_seat f2">13</span></a><a
                                                    style="left: 102.638px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A14"
                                                    seat-group="grNum1" alt="A14 발받침석" seat-code="1A14"> <span
                                                        class="foot_seat f2">14</span></a><a
                                                    style="left: 110.043px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A15"
                                                    seat-group="grNum1" alt="A15 발받침석" seat-code="1A15"> <span
                                                        class="foot_seat f2">15</span></a><a
                                                    style="left: 117.447px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A16"
                                                    seat-group="grNum1" alt="A16 발받침석" seat-code="1A16"> <span
                                                        class="foot_seat f2">16</span></a><a
                                                    style="left: 124.851px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A17"
                                                    seat-group="grNum1" alt="A17 발받침석" seat-code="1A17"> <span
                                                        class="foot_seat f2">17</span></a><a
                                                    style="left: 138.638px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A18"
                                                    seat-group="grNum2" alt="A18 발받침석" seat-code="1A18"> <span
                                                        class="foot_seat f2">18</span></a><a
                                                    style="left: 146.043px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A19"
                                                    seat-group="grNum2" alt="A19 발받침석" seat-code="1A19"> <span
                                                        class="foot_seat f2">19</span></a><a
                                                    style="left: 153.447px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A20"
                                                    seat-group="grNum2" alt="A20 발받침석" seat-code="1A20"> <span
                                                        class="foot_seat f2">20</span></a><a
                                                    style="left: 160.851px; top: 0px;" href="#none"
                                                    class="sel foot_seat p0" block-code="p0" data-seat="A21"
                                                    seat-group="grNum2" alt="A21 발받침석" seat-code="1A21"> <span
                                                        class="foot_seat f2">21</span></a><a
                                                    style="left: 28.5957px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B4" seat-group="grNum3"
                                                    alt="B4 " seat-code="1B04"> <span class=" f1">4</span></a><a
                                                    style="left: 36px; top: 4.97541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="B5" seat-group="grNum3" alt="B5 "
                                                    seat-code="1B05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B6" seat-group="grNum3"
                                                    alt="B6 " seat-code="1B06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B7" seat-group="grNum3"
                                                    alt="B7 " seat-code="1B07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B8" seat-group="grNum3"
                                                    alt="B8 " seat-code="1B08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 4.97541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="B9" seat-group="grNum3" alt="B9 "
                                                    seat-code="1B09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B10" seat-group="grNum3"
                                                    alt="B10 " seat-code="1B10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B11" seat-group="grNum3"
                                                    alt="B11 " seat-code="1B11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B12" seat-group="grNum3"
                                                    alt="B12 " seat-code="1B12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 4.97541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="B13" seat-group="grNum3" alt="B13 "
                                                    seat-code="1B13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B14" seat-group="grNum3"
                                                    alt="B14 " seat-code="1B14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B15" seat-group="grNum3"
                                                    alt="B15 " seat-code="1B15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B16" seat-group="grNum3"
                                                    alt="B16 " seat-code="1B16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B17" seat-group="grNum3"
                                                    alt="B17 " seat-code="1B17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B18" seat-group="grNum4"
                                                    alt="B18 " seat-code="1B18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B19" seat-group="grNum4"
                                                    alt="B19 " seat-code="1B19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B20" seat-group="grNum4"
                                                    alt="B20 " seat-code="1B20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 4.97541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="B21" seat-group="grNum4"
                                                    alt="B21 " seat-code="1B21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C4" seat-group="grNum5"
                                                    alt="C4 " seat-code="1C04"> <span class=" f1">4</span></a><a
                                                    style="left: 36px; top: 9.95082px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="C5" seat-group="grNum5" alt="C5 "
                                                    seat-code="1C05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C6" seat-group="grNum5"
                                                    alt="C6 " seat-code="1C06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C7" seat-group="grNum5"
                                                    alt="C7 " seat-code="1C07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C8" seat-group="grNum5"
                                                    alt="C8 " seat-code="1C08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 9.95082px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="C9" seat-group="grNum5" alt="C9 "
                                                    seat-code="1C09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C10" seat-group="grNum5"
                                                    alt="C10 " seat-code="1C10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C11" seat-group="grNum5"
                                                    alt="C11 " seat-code="1C11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C12" seat-group="grNum5"
                                                    alt="C12 " seat-code="1C12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 9.95082px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="C13" seat-group="grNum5" alt="C13 "
                                                    seat-code="1C13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C14" seat-group="grNum5"
                                                    alt="C14 " seat-code="1C14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C15" seat-group="grNum5"
                                                    alt="C15 " seat-code="1C15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C16" seat-group="grNum5"
                                                    alt="C16 " seat-code="1C16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C17" seat-group="grNum5"
                                                    alt="C17 " seat-code="1C17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C18" seat-group="grNum6"
                                                    alt="C18 " seat-code="1C18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C19" seat-group="grNum6"
                                                    alt="C19 " seat-code="1C19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C20" seat-group="grNum6"
                                                    alt="C20 " seat-code="1C20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 9.95082px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="C21" seat-group="grNum6"
                                                    alt="C21 " seat-code="1C21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D4"
                                                    seat-group="grNum7" alt="D4 " seat-code="1D04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D5"
                                                    seat-group="grNum7" alt="D5 " seat-code="1D05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D6"
                                                    seat-group="grNum7" alt="D6 " seat-code="1D06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D7"
                                                    seat-group="grNum7" alt="D7 " seat-code="1D07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D8"
                                                    seat-group="grNum7" alt="D8 " seat-code="1D08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D9"
                                                    seat-group="grNum7" alt="D9 " seat-code="1D09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D10"
                                                    seat-group="grNum7" alt="D10 " seat-code="1D10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D11"
                                                    seat-group="grNum7" alt="D11 " seat-code="1D11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D12"
                                                    seat-group="grNum7" alt="D12 " seat-code="1D12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D13"
                                                    seat-group="grNum7" alt="D13 " seat-code="1D13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D14"
                                                    seat-group="grNum7" alt="D14 " seat-code="1D14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D15"
                                                    seat-group="grNum7" alt="D15 " seat-code="1D15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D16"
                                                    seat-group="grNum7" alt="D16 " seat-code="1D16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 14.9262px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="D17"
                                                    seat-group="grNum7" alt="D17 " seat-code="1D17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 14.9262px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="D18" seat-group="grNum8"
                                                    alt="D18 " seat-code="1D18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 14.9262px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="D19" seat-group="grNum8"
                                                    alt="D19 " seat-code="1D19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 14.9262px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="D20" seat-group="grNum8"
                                                    alt="D20 " seat-code="1D20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 14.9262px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="D21" seat-group="grNum8"
                                                    alt="D21 " seat-code="1D21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E4"
                                                    seat-group="grNum9" alt="E4 " seat-code="1E04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E5"
                                                    seat-group="grNum9" alt="E5 " seat-code="1E05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E6"
                                                    seat-group="grNum9" alt="E6 " seat-code="1E06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E7"
                                                    seat-group="grNum9" alt="E7 " seat-code="1E07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E8"
                                                    seat-group="grNum9" alt="E8 " seat-code="1E08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E9"
                                                    seat-group="grNum9" alt="E9 " seat-code="1E09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E10"
                                                    seat-group="grNum9" alt="E10 " seat-code="1E10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E11"
                                                    seat-group="grNum9" alt="E11 " seat-code="1E11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E12"
                                                    seat-group="grNum9" alt="E12 " seat-code="1E12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E13"
                                                    seat-group="grNum9" alt="E13 " seat-code="1E13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E14"
                                                    seat-group="grNum9" alt="E14 " seat-code="1E14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E15"
                                                    seat-group="grNum9" alt="E15 " seat-code="1E15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E16"
                                                    seat-group="grNum9" alt="E16 " seat-code="1E16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 19.9016px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="E17"
                                                    seat-group="grNum9" alt="E17 " seat-code="1E17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 19.9016px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="E18" seat-group="grNum10"
                                                    alt="E18 " seat-code="1E18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 19.9016px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="E19" seat-group="grNum10"
                                                    alt="E19 " seat-code="1E19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 19.9016px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="E20" seat-group="grNum10"
                                                    alt="E20 " seat-code="1E20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 19.9016px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="E21" seat-group="grNum10"
                                                    alt="E21 " seat-code="1E21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F4"
                                                    seat-group="grNum11" alt="F4 " seat-code="1F04"> <span
                                                        class=" sweet_spot f1">4</span></a><a
                                                    style="left: 36px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F5"
                                                    seat-group="grNum11" alt="F5 " seat-code="1F05"> <span
                                                        class=" sweet_spot f2">5</span></a><a
                                                    style="left: 43.4043px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F6"
                                                    seat-group="grNum11" alt="F6 " seat-code="1F06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F7"
                                                    seat-group="grNum11" alt="F7 " seat-code="1F07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F8"
                                                    seat-group="grNum11" alt="F8 " seat-code="1F08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F9"
                                                    seat-group="grNum11" alt="F9 " seat-code="1F09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F10"
                                                    seat-group="grNum11" alt="F10 " seat-code="1F10"> <span
                                                        class=" sweet_spot f2">10</span></a><a
                                                    style="left: 80.4255px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F11"
                                                    seat-group="grNum11" alt="F11 " seat-code="1F11"> <span
                                                        class=" sweet_spot f2">11</span></a><a
                                                    style="left: 87.8298px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F12"
                                                    seat-group="grNum11" alt="F12 " seat-code="1F12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F13"
                                                    seat-group="grNum11" alt="F13 " seat-code="1F13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F14"
                                                    seat-group="grNum11" alt="F14 " seat-code="1F14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F15"
                                                    seat-group="grNum11" alt="F15 " seat-code="1F15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F16"
                                                    seat-group="grNum11" alt="F16 " seat-code="1F16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 24.877px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="F17"
                                                    seat-group="grNum11" alt="F17 " seat-code="1F17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 24.877px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="F18" seat-group="grNum12" alt="F18 "
                                                    seat-code="1F18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 24.877px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="F19" seat-group="grNum12" alt="F19 "
                                                    seat-code="1F19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 24.877px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="F20" seat-group="grNum12" alt="F20 "
                                                    seat-code="1F20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 24.877px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="F21" seat-group="grNum12" alt="F21 "
                                                    seat-code="1F21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G4"
                                                    seat-group="grNum13" alt="G4  예매완료좌석" seat-code="1G04"> <span
                                                        class="sweet_spot f1 completed">4</span></a><a
                                                    style="left: 36px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G5"
                                                    seat-group="grNum13" alt="G5  예매완료좌석" seat-code="1G05"> <span
                                                        class="sweet_spot f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G6"
                                                    seat-group="grNum13" alt="G6 " seat-code="1G06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G7"
                                                    seat-group="grNum13" alt="G7 " seat-code="1G07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G8"
                                                    seat-group="grNum13" alt="G8 " seat-code="1G08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G9"
                                                    seat-group="grNum13" alt="G9 " seat-code="1G09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G10"
                                                    seat-group="grNum13" alt="G10  예매완료좌석" seat-code="1G10"> <span
                                                        class="sweet_spot f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="G11"
                                                    seat-group="grNum13" alt="G11  예매완료좌석" seat-code="1G11"> <span
                                                        class="sweet_spot f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G12"
                                                    seat-group="grNum13" alt="G12 " seat-code="1G12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G13"
                                                    seat-group="grNum13" alt="G13 " seat-code="1G13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G14"
                                                    seat-group="grNum13" alt="G14 " seat-code="1G14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G15"
                                                    seat-group="grNum13" alt="G15 " seat-code="1G15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G16"
                                                    seat-group="grNum13" alt="G16 " seat-code="1G16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 29.8525px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="G17"
                                                    seat-group="grNum13" alt="G17 " seat-code="1G17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 29.8525px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="G18" seat-group="grNum14"
                                                    alt="G18 " seat-code="1G18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 29.8525px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="G19" seat-group="grNum14"
                                                    alt="G19 " seat-code="1G19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 29.8525px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="G20" seat-group="grNum14"
                                                    alt="G20 " seat-code="1G20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 29.8525px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="G21" seat-group="grNum14"
                                                    alt="G21 " seat-code="1G21"> <span class=" f2">21</span></a><a
                                                    style="left: 28.5957px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H4"
                                                    seat-group="grNum15" alt="H4  예매완료좌석" seat-code="1H04"> <span
                                                        class="sweet_spot f1 completed">4</span></a><a
                                                    style="left: 36px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H5"
                                                    seat-group="grNum15" alt="H5  예매완료좌석" seat-code="1H05"> <span
                                                        class="sweet_spot f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H6"
                                                    seat-group="grNum15" alt="H6 " seat-code="1H06"> <span
                                                        class=" sweet_spot f2">6</span></a><a
                                                    style="left: 50.8085px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H7"
                                                    seat-group="grNum15" alt="H7 " seat-code="1H07"> <span
                                                        class=" sweet_spot f2">7</span></a><a
                                                    style="left: 58.2128px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H8"
                                                    seat-group="grNum15" alt="H8 " seat-code="1H08"> <span
                                                        class=" sweet_spot f2">8</span></a><a
                                                    style="left: 65.617px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H9"
                                                    seat-group="grNum15" alt="H9 " seat-code="1H09"> <span
                                                        class=" sweet_spot f2">9</span></a><a
                                                    style="left: 73.0213px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H10"
                                                    seat-group="grNum15" alt="H10  예매완료좌석" seat-code="1H10"> <span
                                                        class="sweet_spot f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0 completed" block-code="p0" data-seat="H11"
                                                    seat-group="grNum15" alt="H11  예매완료좌석" seat-code="1H11"> <span
                                                        class="sweet_spot f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H12"
                                                    seat-group="grNum15" alt="H12 " seat-code="1H12"> <span
                                                        class=" sweet_spot f2">12</span></a><a
                                                    style="left: 95.234px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H13"
                                                    seat-group="grNum15" alt="H13 " seat-code="1H13"> <span
                                                        class=" sweet_spot f2">13</span></a><a
                                                    style="left: 102.638px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H14"
                                                    seat-group="grNum15" alt="H14 " seat-code="1H14"> <span
                                                        class=" sweet_spot f2">14</span></a><a
                                                    style="left: 110.043px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H15"
                                                    seat-group="grNum15" alt="H15 " seat-code="1H15"> <span
                                                        class=" sweet_spot f2">15</span></a><a
                                                    style="left: 117.447px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H16"
                                                    seat-group="grNum15" alt="H16 " seat-code="1H16"> <span
                                                        class=" sweet_spot f2">16</span></a><a
                                                    style="left: 124.851px; top: 34.8279px;" href="#none"
                                                    class="sel  sweet_spot p0" block-code="p0" data-seat="H17"
                                                    seat-group="grNum15" alt="H17 " seat-code="1H17"> <span
                                                        class=" sweet_spot f2">17</span></a><a
                                                    style="left: 138.638px; top: 34.8279px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="H18" seat-group="grNum16"
                                                    alt="H18 " seat-code="1H18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 34.8279px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="H19" seat-group="grNum16"
                                                    alt="H19 " seat-code="1H19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 34.8279px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="H20" seat-group="grNum16"
                                                    alt="H20 " seat-code="1H20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 34.8279px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="H21" seat-group="grNum16"
                                                    alt="H21 " seat-code="1H21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 39.8033px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="I1" seat-group="grNum17" alt="I1 "
                                                    seat-code="1I01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I2"
                                                    seat-group="grNum17" alt="I2  예매완료좌석" seat-code="1I02"> <span
                                                        class="f2 completed">2</span></a><a
                                                    style="left: 14.8085px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I3"
                                                    seat-group="grNum17" alt="I3  예매완료좌석" seat-code="1I03"> <span
                                                        class="f2 completed">3</span></a><a
                                                    style="left: 28.5957px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I4" seat-group="grNum18"
                                                    alt="I4 " seat-code="1I04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 39.8033px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="I5" seat-group="grNum18" alt="I5 "
                                                    seat-code="1I05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I6" seat-group="grNum18"
                                                    alt="I6 " seat-code="1I06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I7" seat-group="grNum18"
                                                    alt="I7 " seat-code="1I07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I8" seat-group="grNum18"
                                                    alt="I8 " seat-code="1I08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 39.8033px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="I9" seat-group="grNum18" alt="I9 "
                                                    seat-code="1I09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I10" seat-group="grNum18"
                                                    alt="I10 " seat-code="1I10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I11" seat-group="grNum18"
                                                    alt="I11 " seat-code="1I11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I12" seat-group="grNum18"
                                                    alt="I12 " seat-code="1I12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 39.8033px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="I13" seat-group="grNum18" alt="I13 "
                                                    seat-code="1I13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I14" seat-group="grNum18"
                                                    alt="I14 " seat-code="1I14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I15" seat-group="grNum18"
                                                    alt="I15 " seat-code="1I15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I16"
                                                    seat-group="grNum18" alt="I16  예매완료좌석" seat-code="1I16"> <span
                                                        class="f2 completed">16</span></a><a
                                                    style="left: 124.851px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I17"
                                                    seat-group="grNum18" alt="I17  예매완료좌석" seat-code="1I17"> <span
                                                        class="f2 completed">17</span></a><a
                                                    style="left: 138.638px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I18"
                                                    seat-group="grNum19" alt="I18  예매완료좌석" seat-code="1I18"> <span
                                                        class="f2 completed">18</span></a><a
                                                    style="left: 146.043px; top: 39.8033px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="I19"
                                                    seat-group="grNum19" alt="I19  예매완료좌석" seat-code="1I19"> <span
                                                        class="f2 completed">19</span></a><a
                                                    style="left: 153.447px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I20" seat-group="grNum19"
                                                    alt="I20 " seat-code="1I20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 39.8033px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="I21" seat-group="grNum19"
                                                    alt="I21 " seat-code="1I21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 44.7787px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="J1" seat-group="grNum20" alt="J1 "
                                                    seat-code="1J01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 44.7787px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="J2" seat-group="grNum20" alt="J2 "
                                                    seat-code="1J02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J3" seat-group="grNum20"
                                                    alt="J3 " seat-code="1J03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J4" seat-group="grNum21"
                                                    alt="J4 " seat-code="1J04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 44.7787px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="J5" seat-group="grNum21" alt="J5 "
                                                    seat-code="1J05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J6" seat-group="grNum21"
                                                    alt="J6 " seat-code="1J06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J7" seat-group="grNum21"
                                                    alt="J7 " seat-code="1J07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J8" seat-group="grNum21"
                                                    alt="J8 " seat-code="1J08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 44.7787px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="J9" seat-group="grNum21" alt="J9 "
                                                    seat-code="1J09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J10"
                                                    seat-group="grNum21" alt="J10  예매완료좌석" seat-code="1J10"> <span
                                                        class="f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J11"
                                                    seat-group="grNum21" alt="J11  예매완료좌석" seat-code="1J11"> <span
                                                        class="f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J12" seat-group="grNum21"
                                                    alt="J12 " seat-code="1J12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J13"
                                                    seat-group="grNum21" alt="J13  예매완료좌석" seat-code="1J13"> <span
                                                        class="f2 completed">13</span></a><a
                                                    style="left: 102.638px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J14"
                                                    seat-group="grNum21" alt="J14  예매완료좌석" seat-code="1J14"> <span
                                                        class="f2 completed">14</span></a><a
                                                    style="left: 110.043px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J15"
                                                    seat-group="grNum21" alt="J15  예매완료좌석" seat-code="1J15"> <span
                                                        class="f2 completed">15</span></a><a
                                                    style="left: 117.447px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J16"
                                                    seat-group="grNum21" alt="J16  예매완료좌석" seat-code="1J16"> <span
                                                        class="f2 completed">16</span></a><a
                                                    style="left: 124.851px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J17"
                                                    seat-group="grNum21" alt="J17  예매완료좌석" seat-code="1J17"> <span
                                                        class="f2 completed">17</span></a><a
                                                    style="left: 138.638px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J18"
                                                    seat-group="grNum22" alt="J18  예매완료좌석" seat-code="1J18"> <span
                                                        class="f2 completed">18</span></a><a
                                                    style="left: 146.043px; top: 44.7787px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="J19"
                                                    seat-group="grNum22" alt="J19  예매완료좌석" seat-code="1J19"> <span
                                                        class="f2 completed">19</span></a><a
                                                    style="left: 153.447px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J20" seat-group="grNum22"
                                                    alt="J20 " seat-code="1J20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 44.7787px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="J21" seat-group="grNum22"
                                                    alt="J21 " seat-code="1J21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 49.7541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="K1" seat-group="grNum23" alt="K1 "
                                                    seat-code="1K01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 49.7541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="K2" seat-group="grNum23" alt="K2 "
                                                    seat-code="1K02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K3" seat-group="grNum23"
                                                    alt="K3 " seat-code="1K03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K4" seat-group="grNum24"
                                                    alt="K4 " seat-code="1K04"> <span class=" f2">4</span></a><a
                                                    style="left: 36px; top: 49.7541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="K5" seat-group="grNum24" alt="K5 "
                                                    seat-code="1K05"> <span class=" f2">5</span></a><a
                                                    style="left: 43.4043px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K6" seat-group="grNum24"
                                                    alt="K6 " seat-code="1K06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K7" seat-group="grNum24"
                                                    alt="K7 " seat-code="1K07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K8" seat-group="grNum24"
                                                    alt="K8 " seat-code="1K08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 49.7541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="K9" seat-group="grNum24" alt="K9 "
                                                    seat-code="1K09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 49.7541px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="K10"
                                                    seat-group="grNum24" alt="K10  예매완료좌석" seat-code="1K10"> <span
                                                        class="f2 completed">10</span></a><a
                                                    style="left: 80.4255px; top: 49.7541px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="K11"
                                                    seat-group="grNum24" alt="K11  예매완료좌석" seat-code="1K11"> <span
                                                        class="f2 completed">11</span></a><a
                                                    style="left: 87.8298px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K12" seat-group="grNum24"
                                                    alt="K12 " seat-code="1K12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 49.7541px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="K13" seat-group="grNum24" alt="K13 "
                                                    seat-code="1K13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K14" seat-group="grNum24"
                                                    alt="K14 " seat-code="1K14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K15" seat-group="grNum24"
                                                    alt="K15 " seat-code="1K15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K16" seat-group="grNum24"
                                                    alt="K16 " seat-code="1K16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K17" seat-group="grNum24"
                                                    alt="K17 " seat-code="1K17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K18" seat-group="grNum25"
                                                    alt="K18 " seat-code="1K18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K19" seat-group="grNum25"
                                                    alt="K19 " seat-code="1K19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K20" seat-group="grNum25"
                                                    alt="K20 " seat-code="1K20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 49.7541px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="K21" seat-group="grNum25"
                                                    alt="K21 " seat-code="1K21"> <span class=" f2">21</span></a><a
                                                    style="left: 0px; top: 54.7295px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="L1" seat-group="grNum26" alt="L1 "
                                                    seat-code="1L01"> <span class=" f1">1</span></a><a
                                                    style="left: 7.4043px; top: 54.7295px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="L2" seat-group="grNum26" alt="L2 "
                                                    seat-code="1L02"> <span class=" f2">2</span></a><a
                                                    style="left: 14.8085px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L3" seat-group="grNum26"
                                                    alt="L3 " seat-code="1L03"> <span class=" f2">3</span></a><a
                                                    style="left: 28.5957px; top: 54.7295px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="L4"
                                                    seat-group="grNum27" alt="L4  예매완료좌석" seat-code="1L04"> <span
                                                        class="f2 completed">4</span></a><a
                                                    style="left: 36px; top: 54.7295px;" href="#none"
                                                    class="sel  p0 completed" block-code="p0" data-seat="L5"
                                                    seat-group="grNum27" alt="L5  예매완료좌석" seat-code="1L05"> <span
                                                        class="f2 completed">5</span></a><a
                                                    style="left: 43.4043px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L6" seat-group="grNum27"
                                                    alt="L6 " seat-code="1L06"> <span class=" f2">6</span></a><a
                                                    style="left: 50.8085px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L7" seat-group="grNum27"
                                                    alt="L7 " seat-code="1L07"> <span class=" f2">7</span></a><a
                                                    style="left: 58.2128px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L8" seat-group="grNum27"
                                                    alt="L8 " seat-code="1L08"> <span class=" f2">8</span></a><a
                                                    style="left: 65.617px; top: 54.7295px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="L9" seat-group="grNum27" alt="L9 "
                                                    seat-code="1L09"> <span class=" f2">9</span></a><a
                                                    style="left: 73.0213px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L10" seat-group="grNum27"
                                                    alt="L10 " seat-code="1L10"> <span class=" f2">10</span></a><a
                                                    style="left: 80.4255px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L11" seat-group="grNum27"
                                                    alt="L11 " seat-code="1L11"> <span class=" f2">11</span></a><a
                                                    style="left: 87.8298px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L12" seat-group="grNum27"
                                                    alt="L12 " seat-code="1L12"> <span class=" f2">12</span></a><a
                                                    style="left: 95.234px; top: 54.7295px;" href="#none" class="sel  p0"
                                                    block-code="p0" data-seat="L13" seat-group="grNum27" alt="L13 "
                                                    seat-code="1L13"> <span class=" f2">13</span></a><a
                                                    style="left: 102.638px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L14" seat-group="grNum27"
                                                    alt="L14 " seat-code="1L14"> <span class=" f2">14</span></a><a
                                                    style="left: 110.043px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L15" seat-group="grNum27"
                                                    alt="L15 " seat-code="1L15"> <span class=" f2">15</span></a><a
                                                    style="left: 117.447px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L16" seat-group="grNum27"
                                                    alt="L16 " seat-code="1L16"> <span class=" f2">16</span></a><a
                                                    style="left: 124.851px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L17" seat-group="grNum27"
                                                    alt="L17 " seat-code="1L17"> <span class=" f2">17</span></a><a
                                                    style="left: 138.638px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L18" seat-group="grNum28"
                                                    alt="L18 " seat-code="1L18"> <span class=" f2">18</span></a><a
                                                    style="left: 146.043px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L19" seat-group="grNum28"
                                                    alt="L19 " seat-code="1L19"> <span class=" f2">19</span></a><a
                                                    style="left: 153.447px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L20" seat-group="grNum28"
                                                    alt="L20 " seat-code="1L20"> <span class=" f2">20</span></a><a
                                                    style="left: 160.851px; top: 54.7295px;" href="#none"
                                                    class="sel  p0" block-code="p0" data-seat="L21" seat-group="grNum28"
                                                    alt="L21 " seat-code="1L21"> <span class=" f2">21</span></a></div>
                                        </div>
                                    </div>
                                    <!-- //미니맵 -->
                                </div>
                                <!-- //개발영역 -->
                            </div>
                        </div>
                    </div>
                    <div class="group_btm" id="stepOnePopupContentsMsg">
                        <div class="txt_notice gr_12">
                            <p class="tit"><span class="ic_grade gr_12">만 12세 이상 관람가</span>본 영화는 <strong>만 12세 이상
                                    관람가</strong> 영화입니다.</p>
                            <p class="txt">만 12세 미만의 고객님(영, 유아 포함)은 반드시 부모님 또는 성인 보호자의 동반하에<br>관람이 가능합니다. 연령 확인 불가 시 입장이
                                제한될 수 있습니다.</p>
                        </div>
                    </div>
                </div>
                <div class="btn_btm_wrap" id="stepOnePopupContentsButton"><a class="btn_col2 ty5" href="#none">취소</a><a
                        class="btn_col1 ty5" href="#none">인원/좌석 선택</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped >
element.style {
    left: 50%;
    top: 50%;
    margin-top: -295.5px;
    margin-left: -250px;
}

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
    line-height: 58px;
    border-bottom: 1px solid #CCC;
    color: #FFF;
    text-align: center;
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

.seat_infor_sum .group_btm .txt_notice .tit {
    margin-bottom: 5px;
    font-size: 13px;
    color: #111;
    line-height: 1.3;
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

.ic_grade.gr_12:before {
    background: #e9b630 url("@/assets/images/common/grade_12.png") 0 0 no-repeat;
    background-size: 100%;
}

.seat_infor_sum .group_btm .txt_notice.gr_12 strong {
    border-bottom: 1px solid #e9b630;
    color: #e9b630;
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
</style>