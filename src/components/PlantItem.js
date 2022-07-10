import '../styles/PlantItem.css';
import PlantCare from './PlantCare.js';

function handleClick(event) {
  // console.log(event)
  alert(`Cette plante s'appelle ${event.target.alt}`);
}

function PlantItem({ price, name, cover, light, water }) {
  return (
    <div>
      <li className="lmj-plant-item">
        <span className="lmj-plant-item-price">{price}€</span>

        <img className="lmj-plant-item-cover" src={cover} alt={`${name}`} onClick={handleClick} />

        {name}

        <div>
          <PlantCare careType="water" careScale={water} />
          <PlantCare careType="light" careScale={light} />
        </div>
      </li>
    </div>
  );
}

export default PlantItem;
