import { useState } from 'react';


const BibleVerse = () => {
const [verse, setVerse] = useState('');


const generateVerse = () => {

  fetch(`https://www.abibliadigital.com.br/api/verses/nvi/random`)
    .then(response => response.json()) 
    .then(data => setVerse(`${data.book.name} ${data.chapter}:${data.number}: ${data.text}`));
};

return (
    <div>
      <span className='generate-verse' onClick={generateVerse}>Clique aqui e gere um versículo da Bíblia</span>
      <p className='bible-verse'>{verse}</p>
    </div>
  );
  };


export default BibleVerse;