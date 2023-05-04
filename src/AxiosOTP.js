import React, { useState } from 'react';
import axios from 'axios';

function Axiosotp() {
    const [number, setNumber] = useState("");

    const postRequest = () => {
        axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
            mobile: String(number),
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => {
                console.log({ data: response.data });
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        if (number.length < 10) {
            setNumber(e.target.value);
        } else {
            alert("Please enter correct number");
        }
    };

    return (
        <div>
            <input type="number" value={number} onChange={handleChange} />
            <pre />
            <button className='btn' onClick={postRequest}>Get OTP</button>
        </div>
    );
}

export default Axiosotp;
