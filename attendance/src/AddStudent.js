import { useState } from "react";

const Create = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('100%');

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {name, attendance};

    fetch('http://localhost:8000/students', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      }).then(() => {
        console.log('Student attendance has been recorded');
  })
}

  return (
    <div className="newStudent">
      <h2>Add another student that is attending</h2>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label>Student Name: </label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
        <label>Attendance: </label>
        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        >
          <option value="100%">100%</option>
          <option value="75%">75%</option>
          <option value="50%">50%</option>
          <option value="25%">25%</option>
        </select>
        <p></p>
        <button>Add Student</button>
      </form>
    </div>
  );
}
 
export default Create;