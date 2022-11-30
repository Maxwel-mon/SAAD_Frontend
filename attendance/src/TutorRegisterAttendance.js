import {useState} from 'react';

const Tutorregister = () => {

    const [code, set] = useState('Code')
    const handleClick = (e) => {
        set((Math.round(Math.random()*10000)));
    }

    const handleSubmit = (e) => {
      const user = {code};
      fetch('http://localhost:8000/codes', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(() => {
        console.log('Student attendance has been recorded');
  })
    }

    return (
      <div className="Tutorregister">
            <h2>Code:</h2>
            <p>{code}</p>

            <button 
              onClick={handleClick}
              onChange={(e) => set(e.target.value)}
              >Generate Code</button>
            <p></p>
            <button 
              onClick={handleSubmit}
              onChange={(e) => set(e.target.value)}
              >Confirm code</button>
          </div>
    );
  }

  export default Tutorregister;