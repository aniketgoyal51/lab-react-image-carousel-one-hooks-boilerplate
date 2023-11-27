import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    let [count,setcount] = useState(0)
      
    let increase=()=>{
        if(count<2){
            setcount(count= count+1)
        }else if(count>=2){
            setcount(count=0)
        }
    }
    
    let decrease=()=>{
        if(count>0){
            setcount(count= count-1)
        }else if(count<=0){
            setcount(count=2)
        }
    }
    
        return(
            <>
                <div className="Container">
                    <div className="leftbutton" onClick={decrease}>
                        <ArrowBackIosIcon/>
                    </div>
                    <img src={images[count].img} alt="" />
                    <div className="rightbutton" onClick={increase}>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
                <div className="caption">
                    <h3>{images[count].subtitle}</h3>
                </div>
            </>
        )
      }

export default Carousel;