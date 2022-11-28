import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  // function sendData() {
  //   fetch("http://localhost:3001/register", {
  //     method: "POST",
  //     body: JSON.stringify(),
  //     headers: {

  //     }
  //   })
  // };

    function inputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="App">
      <div>
        <label>Quantity</label>
        <input type="text" name="quantity" onChange={inputChange}></input>
      </div>
      <div>
        <label>Product</label>
        <input  type="text" name="product" onChange={inputChange}></input>
      </div>
      <div>
        <label>User</label>
        <input  type="text" name="user" onChange={inputChange}></input>
      </div>
      <div>
        <button onClick={inputChange}>Submit</button>
      </div>
    </div>
  );
}

export default App;
