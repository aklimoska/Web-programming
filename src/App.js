import React, { Component } from 'react';
import StudentsList from "./components/StudentsList/StudentsList";
import './App.css';
import {listStudents} from "./repository/studentsReposotory";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: listStudents()
        };
    }
  render() {
    return (
        <div className="container">
            <h3>Laboratoriska 1</h3>

            <div className="row">

                <StudentsList students={this.state.students}/>

            </div>
        </div>
    );
  }
}

export default App;
