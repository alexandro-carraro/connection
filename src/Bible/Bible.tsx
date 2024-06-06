import { useState } from 'react';

const BibleVerse = () => {
  const [verse, setVerse] = useState('');

  const generateVerse = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    fetch(`https://www.abibliadigital.com.br/api/verses/nvi/random`)
      .then(response => response.json()) 
      .then(data => setVerse(`${data.book.name} ${data.chapter}:${data.number}: ${data.text}`));
  };

  return (
    <div>
      <button className='generate-verse' onClick={generateVerse}>Clique aqui e gere um versículo da Bíblia</button>
      <p className='bible-verse'>{verse}</p>
    </div>
  );
};

export default BibleVerse;