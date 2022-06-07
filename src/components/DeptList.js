import React from "react";
import { Link } from "react-router-dom";

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <Link to={"/department/" + item.departmentId} 
                key={index} 
                onClick={props.handleDeptClick}>
            <div>
                <h3 id={item.departmentId}>
                    {item.displayName}
                </h3>
            </div>
            </Link>
        )
    })


    return (
        <div>
            {deptList}
        </div>
    )
}

export default Dept