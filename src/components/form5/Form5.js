import React from 'react'
import './Form5.css';
import SwipeableEdgeDrawer from './SqimpeableDrawer';
import DownloadFile from './downloadFile';
import DownloadIcon from '@mui/icons-material/Download';

export default function Form5(props) {
    return (
<div class="form1c"> 
        <div class="zoncont">
        <div className='title'>
            Laddning avslutad!
        </div >
        </div>
        <div className='kvittocontainer'>
        <div className='kvitto'>
                <div className='title-kvitto'>
                    Kvitto
                </div>
                <div className='asterik'>
                    **********************************
                    <div className='zon-info'>
                        101 - Burlöv Medborgarhuset
                    </div>
                    <div className='date'>
                        18 jan. 2022
                    </div>
                    <div class="time">
                        14:00 - 14:11 / 0h 11m
                    </div>
                    **********************************
                    <div class="price">
                        Belopp: 5kr (varav moms 1kr)
                    </div>
                    <div className='download' onClick={DownloadFile}>
                        <DownloadIcon style={{height:'35px', width:'35px'}}/>
                        Ladda ner kvitto
                    </div>

                </div>

            </div>
        </div>
        
        <SwipeableEdgeDrawer>

            </SwipeableEdgeDrawer>
</div>



    )
}
