import React from 'react';

const StudentItem = (props) => {

    // let activity = props.task.activity.map((el, index) => {
    //     return <div className="col-12 text-muted text-sm-left" key={index}>
    //         {el.studentName}  {el.studentSurname}
    //         <hr/>
    //     </div>
    // });
    console.log(props);

    return(

        <div className="row">


                <div className="col-md-6">
                    {props.student.studentName}
                </div>
                <div className="col-md-6">
                    {props.student.studentSurname}
                </div>
        </div>
    )
};

export default StudentItem;