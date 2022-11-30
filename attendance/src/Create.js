import { useState } from "react";
import axios from 'axios';  //  databse 

const Create = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
 
   const handleSubmit = (e) => {
     e.preventDefault();
     const user = { name, password};

  //  DATABASE CODE 
 // gets user details from the databse given a username
 const dbuser ={ name }
 const dbtojson = JSON.stringify(dbuser)
   console.log (dbtojson);
   const version2 = JSON.parse(dbtojson);
   console.log( version2);
     
   var help = String;

   axios.get('http://localhost:5000/user/find', version2 ).then(res=> {
    help=res.data;
   console.log(res.data)}
   
   ) //  returns list of users in the databse
     
  console.log(JSON.stringify(help));

    
  // END OFF DATABSE CODE 


/** 
 *  IMPLEMENT LOGIC  if user exist check the role type and redirect to the user view relevant to the role type 
 * i.e if user is studentredirec to student view ++
 *   store the list of users in an array then loop throug to find 
 * 
*/

/*
     fetch('http://localhost:8000/LogIns', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(user)
       }).then(() => {
         console.log('Student attendance has been recorded');
   })
   */
 }

  return (
    <div className="create">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input 
        type="password" 
        id="myInput"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <a href="/Register" style={{
            color: "rgb(10, 111, 243)"
        }}>Click here to register<br></br><br></br></a>

        <button>Log in</button>
      </form>
    </div>
  );
}
 
export default Create;