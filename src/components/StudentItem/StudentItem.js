import React from 'react';

const StudentItem = (props) => {

    // let activity = props.task.activity.map((el, index) => {
    //     return <div className="col-12 text-muted text-sm-left" key={index}>
    //         {el.studentName}  {el.studentSurname}
    //         <hr/>
    //     </div>
    // });



    // const getIndex = () => {
    //     console.log("ova se klika");
    //     this.props.edit;
    // }



    return (

        <div className="row">


            <div className="col-md-3">
                {props.student.studentName}
            </div>
            <div className="col-md-3">
                {props.student.studentSurname}
            </div>
            <div className="col-1"> <button onClick={() => props.edit(props.index)}> <i className="fa fa-edit"></i> </button> </div>

        </div>
    )
};

export default StudentItem;