import React, {Component} from 'react';
import StudentItem from '../StudentItem/StudentItem';

class StudentsList extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        const students = this.getStudentsPage();
        console.log("Props: ", this.props.students)
        console.log("Students: ",students);
        return (
            <div className="col-md-12">
                {students}



            </div>
        );
    }

    getStudentsPage = (offset, nextPageOffset) => {
        return this.props.students
            .map((student, index) => {

                console.log("StudentItem: ", student)
                return <StudentItem key={index} student={student} index={index  } />
            });
            // the filter is after the map function, so that the index attribute in map function is not reset for each page
            // .filter((StudentItem, index) => {
            //     return index >= offset
            //         && index < nextPageOffset;
            // });
    };
}




export default StudentsList;