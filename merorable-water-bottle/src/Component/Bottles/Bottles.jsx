import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addTols } from "../../Utilities/Localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('bottle.json')
    .then(res =>res.json())
    .then(data =>setBottles(data))
  }, [])

  
  // handaling button
  const handleAddCard = bottle => {
    // different way of push
    const newCard = [...card, bottle];
    setCard(newCard)
    addTols
  }

  return (
    <div>
       <h2>Bottles Here: {bottles.length}  </h2>
       <h3>Card Add: {card.length} </h3>
       <div className="bottle-container">
       {
        bottles.map(bottle => 
        <Bottle key={bottle.id}
         bottle={bottle}
         handleAddCard={handleAddCard}
         ></Bottle>)
       }
       </div>
    </div>
  );
};

Card.PropTypes = {
  card: PropTypes.array.isRequired
}

export default Bottles;