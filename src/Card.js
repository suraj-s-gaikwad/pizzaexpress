import React from 'react'

export default function Card(props) {
  return (

<div className="col-4 c1">
            <div className="price">
              <div className="price__img">
                <img src={props.img  } alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Rs.{props.price}</p>
            </div>
          </div>    )
}
