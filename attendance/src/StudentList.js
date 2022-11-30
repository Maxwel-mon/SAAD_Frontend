import {Link} from 'react-router-dom';

const StudentList = ({ students, attendance, handleDelete}) => {
    return (
      <div className="student-list">
        {students.map(student => (
          <div className="student-preview" key={student.id} >
            <h2>{ student.name }</h2>
            <h3>{ student.attendance }</h3>
            <button onClick={() => handleDelete(student.id)}>remove studenet</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default StudentList;