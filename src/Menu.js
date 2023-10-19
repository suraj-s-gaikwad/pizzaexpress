import React from "react";
import  pizza1 from './images/pizza1.png'
import  pizza2 from './images/pizza2.png'
import  pizza3 from './images/pizza3.png'
import  pizza4 from './images/pizza4.png'
import  pizza5 from './images/pizza5.png'
import  pizza6 from './images/pizza6.png'
import Card from "./Card";


const Prices = (props) => {
  return (
    <div className="Menu">
    <div className="prices">
      <div className="container">
        <div className="row">
      
<Card img={pizza1} price={150}/>
<Card img={pizza2} price={190}/>
<Card img={pizza3} price={130}/>
<Card img={pizza4} price={145} />
<Card img={pizza5} price={120}/>
<Card img={pizza6} price={270}/>

  
        </div>
      </div>
    </div>
    </div>
  );
};

export default Prices;