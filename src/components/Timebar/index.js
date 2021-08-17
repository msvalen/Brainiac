import React, { useState, useEffect } from 'react';
import './style.css'

function Timebar({duration, endAction}) {
    var style = {
        '--duration': Math.floor(Number(duration)/1000)
    };
    
    useEffect(()=>{
        const timer = setTimeout(() => {
            endAction('Timeout called!');
          }, duration);
          return () => clearTimeout(timer);
    },[])
    return (
       
        <div className='timebar' style={style}>
            <div></div>
        </div>
    )

}
export default Timebar;

