import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

const img = {
    width: "200px"
}

const DeptDetail = (props) => {

    const chosenDept = props.chosenDept

    useEffect(() => {
        props.getInfo(chosenDept)
    }, [])

    const handleClick = (e) => {
        e.stopPropagation()
        props.onFaveToggle(props.deptWorks.objectID)
    }

    return (
        <div>
            <h1>{props.deptWorks.title}</h1>
            <img src={props.deptWorks.primaryImage} alt="#" style={img} />
            <button onClick={handleClick}>{props.faves.includes(props.deptWorks.objectID) ? "Unpick" : "Pick"}</button>
        </div>
    )
} 


export default DeptDetail