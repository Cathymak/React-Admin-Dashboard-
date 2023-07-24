import React from "react";
import "./Cards.css"
import { Card } from "@mui/material";


const Cards=()=>{

return(

    <div className="Cards"> 

    

// This is how to call the array of data from the data.js file specifically for the data that will fill the Dashboard cards. 
    {CardsData.map((card, id)=> {

        return(


            <div className="parentContainer">



            <Card

            title={card.title}
            color={card.color}
            barValue={card.barValue}
            iconName={card.iconName}
            value={card.value}
            png={card.png}
            series={card.series}
            />


            </div>
        )
        })}
    

    
    
    
    </div>
)
}


export default Cards;
