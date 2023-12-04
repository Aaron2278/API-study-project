/* import React, { useState } from 'react';
import '../CatComponent.css'; // Create CatComponent.css for cat-related styles

const CatComponent = () => {
  const [catImage, setCatImage] = useState(null);

  const getRandomCat = () => {
    fetch('https://aws.random.cat/meow')
      .then((res) => res.json())
      .then((data) => {
        setCatImage(data.file);
      });
  };

  return (
    <div className="result">
      <button onClick={getRandomCat}>Get Cat</button>
      <div>
        {catImage ? <img src={catImage} alt="cat" /> : <p>Random Cat Placeholder</p>}
      </div>
    </div>
  );
};

export default CatComponent;

*/