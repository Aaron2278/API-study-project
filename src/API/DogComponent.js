import React, { useState } from 'react';
import '../DogComponent.css'; // Create DogComponent.css for dog-related styles

const DogComponent = () => {
  const [dogImage, setDogImage] = useState(null);

  const getRandomDog = () => {
    fetch('https://random.dog/woof.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.url.includes('.mp4')) {
          getRandomDog();
        } else {
          setDogImage(data.url);
        }
      });
  };
  return (
    <div className="result">
      <button onClick={getRandomDog}>Get Dog</button>
      <div>
        {dogImage ? <img src={dogImage} alt="dog" /> : <p>Random Dog Placeholder</p>}
      </div>
    </div>
  );
};

export default DogComponent;