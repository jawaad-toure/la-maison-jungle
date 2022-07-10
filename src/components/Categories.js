import '../styles/Categories.css';

function Categories({ activeCategory, setActiveCategory, plantsCategories }) {
  
  function setCurrentCategory(event) {
    setActiveCategory(event.target.value);
  }

  function resetCurrentCategories() {
    setActiveCategory('');
  }

  return (
    <div className="lmj-categories">
      <select className="lmj-categories-select"  value={activeCategory} onChange={setCurrentCategory} >
        <option value="">Sélectionnez une catégorie</option>
        {
          plantsCategories.map((category, index) => {
              return (
                <option key={`${category}_${index}`} value={category}>
                  {category}
                </option>
              );
            }
          )
        }
      </select>

      <button className="lmj-categories-btn-reinitialiser" onClick={resetCurrentCategories} >
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
