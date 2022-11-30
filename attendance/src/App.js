//Here is where the react code is written.
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Register from './Register';

import Tutor from './Tutor';
import Student from './Student';

import Tutorregister from './TutorRegisterAttendance';
import ManualRegister from './ManualRegister';
import AddStudent from './AddStudent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/Tutor">
          <Tutor/>
        </Route>
        <Route path="/Student">
          <Student/>
        </Route>
        <Route path="/TutorRegisterAttendance">
          <Tutorregister/>
        </Route>
        <Route path="/ManualRegister">
          <ManualRegister/>
        </Route>
        <Route path="/AddStudent">
          <AddStudent/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//Instructions to start
//cd attendance/
//npm start

//New terminal
////npx json-server --watch attendance/data/db.json --port 8000