import '../styles/ShoppingList.css';
import { useState } from 'react';
import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem.js';
import Categories from './Categories.js';

function ShoppingList({ setIsOpen, cart, updateCart }) {
  // avec reduce(), les categories de chaque plante ont été stockées dans un tableau nommé plantsCategories
  const plantsCategories = plantList.reduce(
    (categoriesList, currentPlant) => categoriesList.includes(currentPlant.category) ? categoriesList : categoriesList.concat(currentPlant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    setIsOpen(true);
    if (!currentPlantSaved) {
      updateCart([...cart, {name, price, amount: 1}]);
    } else {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1},
      ]);
    }
  }

  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="lmj-shopping-list">
      <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory} plantsCategories={plantsCategories} />

      <ul className="lmj-plant-list">
        {
          plantList.map((plant) => {
            return !activeCategory || activeCategory === plant.category ? (
              <div className="lmj-plant-card" key={plant.id}>
                <PlantItem price={plant.price} cover={plant.cover} name={plant.name} water={plant.water} light={plant.light} />

                <button className="lmj-plant-list-btn-ajouter" onClick={() => addToCart(plant.name, plant.price)} >
                  Ajouter
                </button>
              </div>
              ) : null;
            }
          )
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
