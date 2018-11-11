import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.css'
import StudentsList from "./components/StudentsList/StudentsList";
import EdiStudentDetails from "./components/EditStudentDetails/EditStudentDetails";

import './App.css';
import { listStudents } from "./repository/studentsReposotory";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: listStudents(),
            showEdit: false
        };


    }

    render() {

        const toggleEdit = () => {
            let toEdit = this.state.showEdit;
            this.setState({ showEdit: !toEdit })
        }
        let button = "";

        if (this.state.showEdit) {
            button = < EdiStudentDetails />;
        } else {

        }
        return (
            <div className="container">
                <h3>Laboratoriska 1</h3>

                {button}

                <div className="row">

                    <StudentsList students={this.state.students} edit={toggleEdit} />

                </div>
            </div>
        );
    }
}

export default App;
