import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dog = () => {
    const [DogImage, setDogImage] = useState('');

   

    const fetchDogImage = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDogImage(response.data.message);
    };

    useEffect(() => {
        fetchDogImage();
    }, []);




    return (
        <div>
            <img src={DogImage} alt="dog" />
        </div>
    );
};

export default Dog;