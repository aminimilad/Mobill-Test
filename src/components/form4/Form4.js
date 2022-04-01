import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../form4/Form4.css';
import StopWatch from '../../timer';



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";
export default function Form4({ opacity, ...props }) {
  return (
    <div id="Form4">
        <div class="form1c">   
        <div class="zoncont">
            
        <Swiper
    loop={true}
    pagination={{
        clickable: true,
    }}
    navigation={false}
    modules={[Navigation, Pagination]}
    className="mySwiper"
    style={{backgroundColor:'#d7d7d7', boxShadow:'0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%)', borderRadius:'10px', width:'100%'}}
>
    
    <SwiperSlide>   <StopWatch/></SwiperSlide>
    <SwiperSlide >
        
                <div id="Zon" class="zon">
                    <div id="Head" class="head">
                        <div class="headrow">
                            <div class="h1-custom">Pågående laddning</div>
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



         

    </SwiperSlide>
</Swiper>

            </div> {props.children}</div>
  
</div>
    
    
  );
}


