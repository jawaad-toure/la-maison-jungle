import '../styles/Footer.css';
import { useState } from 'react';

function Footer() {
  const [inputValue, setInputValue] = useState('');

  function handleInput(event) {
    !event.target.value.includes('é') && !event.target.value.includes('è') && !event.target.value.includes('ù') && !event.target.value.includes('à') && setInputValue(event.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert( "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥" );
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>

      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>

      <div>
        <input type="text"  value={inputValue} onChange={handleInput} onBlur={handleBlur} placeholder="Entrez votre email ici !" />
        <button className="lmj-footer-send-btn">Envoyer</button>
      </div>
    </footer>
  );
}

export default Footer;
