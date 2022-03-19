import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import './index.css';
import Sdata from './Sdata';

const cardData = (val) => {
    return(
      <Card 
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    )
}

ReactDOM.render(
  <>
  <h1 className="heading"> Netflix Favourites </h1>
  {Sdata.map(cardData)}
  </>
  ,
  document.getElementById('root')
);