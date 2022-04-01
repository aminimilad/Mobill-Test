import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "./Timer.jsx";

function StopWatch() {
    const [isActive, setIsActive] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };


    return (

    
        <div id="Head" class="headf4">
            <div class="h1-custom">Pågående laddning</div>
            <div class="headrow" style={{height:'30px'}}>
                
            </div>
            <Timer time={time} />
   
        </div>
        
        
            
        







        
    );
}

export default StopWatch;