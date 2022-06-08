import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const listing = {
    display: "flex",
    justifyContent: "center",
    gap: "10px 30px",
    width: "100%",
    margin: "10px",
    flexFlow: "row wrap"
}

const Dept = (props) => {

    let deptList = props.allDept.map((item, index) => {
        return (
            <Link to={"/department/" + item.departmentId} key={index} >
                <Button variant="contained">
                    <h3 id={item.departmentId}>
                        {item.displayName}
                    </h3>
                </Button>
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