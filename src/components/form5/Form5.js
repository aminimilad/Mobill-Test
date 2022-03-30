import React from 'react'
import './Form5.css';
import SwipeableEdgeDrawer from './SqimpeableDrawer';

export default function Form5(props) {
    return (
        <div id="Form5">
            <div class="form1c">
                <div id="Zon" class="zon">
                    <div id="Head" class="head">
                        <div class="headrow">
                            <div class="h1-custom">Bekräftelse</div>
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
                    <SwipeableEdgeDrawer>

                    </SwipeableEdgeDrawer>
                </div>
                {props.children}
            </div>
        </div>
    )
}
