import React from "react";
import { Link } from "react-router-dom";

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <Link to={"/department/" + item.departmentId} key={index}>
            <div id={item.departmentId}>
                <h3>{item.displayName}</h3>
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