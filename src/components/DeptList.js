import React from "react";
import { Link } from "react-router-dom";

const listing = {
    display: "flex",
    justifyContent: "center",
    gap: "5px 20px",
    margin: "20px",
    padding: "15px",    
    flexFlow: "row wrap",
    color: "#1D2D44",
    border: "1px solid #1D2D44",
}

const box = {
    backgroundColor: "#748CAB",
    color: "#fff",
    padding: "15px",
    margin: "20px",
    width: "20%",
}

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <Link to={"/department/" + item.departmentId} key={index} style={box} className="deptList">
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