import React, { useState, useEffect } from 'react';
//useState to store current dog img url
//useEffect to fetch a new dog img on the initial page load

const App = () => {
    const [DogImage, setDogImage] = useState('');

//func fetchDogImage uses fetch to make a req. to dog API

    const fetchDogImage = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
    };

    useEffect(() => {
        fetchDogImage();
    }, []);


//useEffect with an empty dependency arr[] to run only on the initial page load.

    return (
        <div>
            <img src={DogImage} alt="dog" />
        </div>
    );
};

export default App;
