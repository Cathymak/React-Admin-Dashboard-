import React from 'react';
import Card from '../Card/Card';
import { CardsData } from '../Data/Data'; //here we are destructuring the Data. js file to only get the CardsData array from it.

const Cards = () => {
  return (
    <div className="Cards">
      // This is how to call the array of data from the data.js file specifically for the data that
      will fill the Dashboard cards. The array is called Map, which is used to. //CardsD is my array
      that i have estracted from the Data. js and I have extractd the 3 objects that are wihtin that
      array through the map array method.
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}  
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
