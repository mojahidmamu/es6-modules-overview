import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddCard }) => {
  const { name, img, price, quantity, ratings } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle: {name} </h3>
      <img src={img} alt="" />
      <p>Price: ${price} </p>
      <p>Quantity: {quantity} </p>
      <p>Ratings: {ratings} </p>
      <button onClick={() => handleAddCard(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.prototype = {
  bottle: PropTypes.object.isRequired,
  handleAddCard: PropTypes.func.isRequired,
};

export default Bottle;
