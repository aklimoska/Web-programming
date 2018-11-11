import React, { Component } from 'react';


class EditStudentDetails extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.selectedStudent);

    }
    render() {
        let newStudent = {
            studentName: '',
            studentSurname: '',
            index: '',
            program: ''
        }


        return (
            <div className="row">
                <div className="col-2"><label htmlFor="name">Name: </label><input type="text" name="name" id="name" />
                </div>
                <div className="col-2"><label htmlFor="surname" >Surname: </label><input type="text" name="surname" id="surname" /></div>
                <div className="col-2"><label htmlFor="index">Index: </label><input type="text" name="index" id="index" /></div>
                <div className="col-2"><label htmlFor="nasoka">Nasoka: </label><input type="text" name="nasoka" id="nasoka" /></div>

                <div className="col-1"> <button onClick={() => this.props.apply(newStudent)}> <i className="fa fa-paper-plane"></i> </button> </div>


            </div >
        );
    }
}


export default EditStudentDetails;
