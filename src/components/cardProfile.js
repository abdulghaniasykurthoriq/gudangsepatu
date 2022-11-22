import React from 'react'
import agat from '../assets/agat.jpeg'
import niko from '../assets/niko.jpg'
import oji from '../assets/oji.jpeg'

function CardProfile({imageSrc,name,text,}) {
  
    if(imageSrc == 1){
        return (
            <>
            <div class="card" style={{width: "18rem", margin:'10px',}}>
                <img class="card-img-top" src={niko} style={{height:'14rem'}}  alt="Card"/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </>
          )
    }else if(imageSrc == 2){
        return (
            <>
            <div class="card" style={{width: "18rem", margin:'10px'}}>
                <img class="card-img-top" src={agat} style={{height:'14rem'}}  alt="Card"/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </>
          )
    }else{
        return (
            <>
            <div class="card" style={{width: "18rem", margin:'10px'}}>
                <img class="card-img-top" src={oji}style={{height:'14rem'}} alt="Card"/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </>
          )
    }
  
}

export default CardProfile