import './SeasonDisplay.css'
import React from "react";


const SeasonConfig = {
    Winter : {
        text: 'Ohh! Its chilly',
        icon: 'snowflake'
    },
    Summer :  {
        text: 'Lets go and hit the beach',
        icon: 'sun'
    },

}


const getSeason = (lat, month) => {
    
    if( month >2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'

    } else {
        return lat > 0 ? 'Winter' : 'Summer'

    }

}


const SeasonDisplay = (props) => {

   const season = getSeason(props.lat, new Date().getMonth)
   const text = SeasonConfig[season].text
   const icon = SeasonConfig[season].icon

    console.log(season)
    return (
       <div className={icon + ' season-display'}>
        <i className={icon + ' icon massive icon-left'} />
        <h1> 
        {text}</h1>
        <i className={icon + ' icon massive icon-right'} />
        </div>
        )
}

export default SeasonDisplay;
