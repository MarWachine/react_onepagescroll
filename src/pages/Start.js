import React from 'react';
import arrowDown from '../img/arrow.png'


function Start(props) {
    /*
     * TO DO:
     * useEffect für arrow fading
     * Ankerpunkte / ScrollPos
     * 
     */

    return (
        <>
            <div id="divBG"></div>
            <div className="section" id="start">
                <h2>Start</h2>
                <p className="pCenter">
                    scrolling
                </p>
                <img id="arrowDown" src={arrowDown} alt="arrow to bottom" />
            </div>
        </>
    );
}

export default Start;