import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './homeCard.css'
import ClockHome from "./clock";




export function FirstHome(){
    return(
        <>
        <div className="firstHomeMain">
        <div className="home-container mb-2 d-block  ms-5">
                    <div className="mainCARD card">
                        <ClockHome/>
                        <div className="card-body">
                            <h5 className="mainCardTit card-title text-center">Let's start tracking!</h5>
                            <p className="mainCardTxt card-text text-secondary  text-center">One Moment at a Time - Track, Manage, Succeed!</p>

                                <div className="mainSECONDARY text-secondary d-flex justify-content-center gap-3 mt-5">
                                    <FontAwesomeIcon icon={faPhone} style={{color: "#1BA098",}} />
                                    <FontAwesomeIcon icon={faApple} style={{color: "#1BA098",}} />
                                    <FontAwesomeIcon icon={faChrome} style={{color: "#1BA098",}}  />
                                    <FontAwesomeIcon icon={faWindows} style={{color: "#1BA098",}} />
                                </div>
                        </div>
                    </div>
                </div>
      </div>

        </>
    );
}