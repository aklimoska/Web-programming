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
            showEdit: false,
            index: null
        };

        console.log(this.state.students);


    }

    render() {

        const toggleEdit = (passedIndex) => {
            let toEdit = this.state.showEdit;
            this.setState({ showEdit: !toEdit })
            this.setState({ index: passedIndex });
        }
        const applyData = (newStudent) => {

            const oldStudents = this.state.students;
            oldStudents[this.state.index] = newStudent;

            this.setState({ students: oldStudents })

            this.setState({ showEdit: false })
        }


        let button = "";

        if (this.state.showEdit) {
            button = < EdiStudentDetails apply={applyData} selectedStudent={this.state.students[this.state.index]} />;
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
