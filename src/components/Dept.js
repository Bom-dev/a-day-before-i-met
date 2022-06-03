import React from "react";

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <div key={index} id={item.departmentId}>
                <h3>{item.displayName}</h3>
            </div>
        )
    })


    return (
        <div>
            {deptList}
        </div>
    )
}

export default Dept