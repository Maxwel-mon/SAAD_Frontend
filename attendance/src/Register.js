import { useState } from "react";
import axios from  'axios';

const Register = () => {
 const [email, setEmail] = useState('');
 const [name, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [confirmpassword, setConfirmPassword] = useState('');
 const [role, setRole] = useState('Tutor');


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email, username: name, password, confirmpassword, role};

// databse code  // sends name , role and password to datatabase //
// NOTE name has to be unique 
   const dbuser={ name, password,role};
   const dbtojson = JSON.stringify(dbuser)
   console.log (dbtojson);
   const version2 = JSON.parse(dbtojson);
   console.log( version2);
axios.post('http://localhost:5000/user/add', version2).then(res => console.log(res.data));  // registers user to the databse
 
// end of databse code 

/* 
  implement logic where if registration is succesfull 
  i get redirected to login page 

*/




/* 
fetch('http://localhost:8000/NewUsers', {
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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
        onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password:</label>
        <input 
        type="password" 
        id="myInput"
        value={confirmpassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}>
          <option value="Tutor">Tutor</option>
          <option value="Student">Student</option>
        </select>

        <div className="registerButton">
        <button>Register</button>
        </div>
      </form>
    </div>
  );
}
 
export default Register;