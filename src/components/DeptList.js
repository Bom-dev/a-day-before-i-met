import React from "react";
import { Link } from "react-router-dom";

const listing = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "5px",
    width: "100%",
    margin: "10px",
}

const box = {
    color: "navy",
    border: "1px solid navy",
    padding: "10px",
    margin: "10px",
    width: "20%",
}

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <Link to={"/department/" + item.departmentId} key={index} style={box} >
            <div>
                <h3 id={item.departmentId}>
                    {item.displayName}
                </h3>
            </div>
            </Link>
        )
    })

    return (
        <div style={listing}>
            {deptList}
        </div>
    )
}

export default Dept