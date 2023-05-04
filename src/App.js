// import logo from './logo.svg';
// import './App.css';
// import Change from './GetOTP';

// function App() {
//   return (
   
//     <div>
//       <>{Change}</>
//       <h1>hi</h1>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";


function App() {

  const [number, setNumber] = useState("");


  const postRequest = () => {
      fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile: String(number) }),
      })
          .then((res) => {
              // Handle response
              res.json()
              console.log(res);
          }).then((el) => { console.log(el) })
          .catch((err) => {
              // Handle errors
              console.log(err);
          });
  };

  const handleChange = (e) => {
      if (number.length < 10) {
          setNumber(e.target.value);
          //alert("hii")
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

export default App;