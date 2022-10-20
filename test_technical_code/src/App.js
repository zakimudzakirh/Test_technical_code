import React, { useState } from 'react';
import './App.css';

function App() {

  const [angka, setAngka] = useState('');
  const [result, setResult] = useState();

  const hitSegitiga = async () => {
    try {
      const response = await fetch('http://192.168.167.44:5000/generate-segitiga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          angka: angka
        })
      })
      const resData = await response.json();
      setResult(resData);
    } catch(error) {
      console.log(error);
    }
  }

  const hitGanjil = async () => {
    try {
      const response = await fetch('http://192.168.167.44:5000/generate-ganjil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          angka: angka
        })
      })
      const resData = await response.json();
      setResult(resData);
    } catch(error) {
      console.log(error);
    }
  }

  const hitPrima = async () => {
    try {
      const response = await fetch('http://192.168.167.44:5000/generate-prima', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          angka: angka
        })
      })
      const resData = await response.json();
      setResult(resData);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div style={{marginTop: '20px', marginLeft: '20px'}}>
      <div style={{marginBottom: '10px'}}>
        <input 
          value={angka}
          onChange={e => setAngka(e.target.value)}
        />
      </div>
      <div>
        <button onClick={hitSegitiga}>Generate Segitiga</button>
        <button onClick={hitGanjil} style={{marginRight: '10px', marginLeft: '10px'}}>Generate Bilangan Ganjil</button>
        <button onClick={hitPrima}>Generate Bilangan Prima</button>
      </div>
      <div style={{marginTop: 100}}>
        <div style={{marginBottom: 10}}>RESULT:</div>
        <div dangerouslySetInnerHTML={{ __html: result?.result }} />
      </div>
    </div>
  );
}

export default App;
