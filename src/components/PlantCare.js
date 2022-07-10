import '../styles/PlantCare.css';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function PlantCare({ careType, careScale }) {
  const range = [1, 2, 3];

  const careValue = careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  const actionNeed = careType === 'water' ? "d'arrosage" : 'de lumière';

  const actionScale = careScale === 1 ? 'peu' : careScale === 2 ? 'modérément' : 'beaucoup';

  function plantCareInfo() {
    alert(`Cette plante requiert ${actionScale} ${actionNeed}`);
  }

  return (
    <div className="lmj-plantcare" onClick={plantCareInfo}>
      {
        range.map((rangeElem) =>
          careScale >= rangeElem ? (
            <span key={rangeElem.toString()}>{careValue}</span>
          ) : null
        )
      }
    </div>
  );
}

export default PlantCare;

// le code en-dessous marche aussi
// function Care( props ) {
//     console.log(props)
//     const range = [1, 2, 3];
//     const careType = props.careType === "light" ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

//     return(
//         <div>
//             {
//                 range.map(
//                     (rangeElem) => props.careScale >= rangeElem ? <span key={rangeElem.toString()}>{careType}</span> : null
//                 )
//             }
//         </div>
//     )
// }
