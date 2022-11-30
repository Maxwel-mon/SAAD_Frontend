import { useEffect, useState } from "react";
import StudentList from './StudentList'
import axios from 'axios';
const ManualRegister = () => {
  const [students, setStudents] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newStudents= students.filter(student => student.id !== id);
    setStudents(newStudents);
  }
 


  //  get the list of availabel students 
    
  axios.get('http://localhost:5000/student/').then(res=> console.log(res.data)) //  logs to the console
  //  after creating a tutorial 
  axios.post('http://localhost:5000/tutorial/add').then(res=> console.log(res.data))
  
// find a tutorial
axios.get('http://localhost:5000/tutorial/find').then(res=> console.log(res.data))

//  add students to that tutorial that were present 

axios.post('http://localhost:5000/tutorial/update').then(res=> console.log(res.data))




  useEffect(() => {
    fetch('http://localhost:8000/students')
    .then(res => {
      if(!res.ok){
        throw Error('could not get data')
      }
        return res.json();
      })
    .then(data => {
      setStudents(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      setError(err.message);
    })
  }, [])
  
  return (
    <div className="ManualRegister">
        <a href="/AddStudent"><button id='Add'>Add new student</button></a>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {students && <StudentList students={students} handleDelete={handleDelete}/>}
    </div>
  );
}
   
export default ManualRegister;  