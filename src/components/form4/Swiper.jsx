import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Form4.css';
import StopWatch from '../../timer';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div id="Form4">
                        <div class="form1c">
                            <div id="Zon" class="zon">
                                <div id="Head" class="head">
                                    <div class="headrow">
                                        <div class="h1-custom">Påbörjad laddning</div>
                                    </div>

                                    <p class="ss">burlöv medborgarhuset</p>
                                </div>
                                <div class="spec">
                                    <div class="zonid">
                                        <span>zon id</span>
                                        <span class="a">101</span>
                                    </div>
                                    <div class="uttagid">
                                        <span>uttag</span>
                                        <span class="a">111</span>
                                    </div>
                                    <div class="pris">
                                        <span>PRIS/kWh</span>
                                        <span class="a">3kr</span>
                                    </div>

                                </div>
                                <div class="providerContainer">
                                    <div class="provider"></div>
                                </div>

                            </div>



                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>   <StopWatch /> </SwiperSlide>

            </Swiper>
        </>
    );
}
