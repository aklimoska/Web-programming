import React, { Component } from 'react';


class EditStudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row">
                <div className="col-2"><label for="name">Name: </label><input type="text" name="name" id="name" />
                </div>
                <div className="col-2"><label for="surname" >Surname: </label><input type="text" name="surname" id="surname" /></div>
                <div className="col-2"><label for="index">Index: </label><input type="text" name="index" id="index" /></div>
                <div className="col-2"><label for="nasoka">Nasoka: </label><input type="text" name="nasoka" id="nasoka" /></div>


            </div >
        );
    }
}


export default EditStudentDetails;
