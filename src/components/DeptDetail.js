import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

const DeptDetail = (props) => {
    useEffect(() => {
        props.getInfo(props.chosenDept[1])
    }, [])    

    

    return (
        <div>
            <h1>{props.deptWorks.title}</h1>
            <img src={props.deptWorks.primaryImage} alt="#" />
        </div>
    )
} 


export default DeptDetail

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds={id}
// response.data.objectIDs => data
// data.length / random pick 10-20 / refresh button / click available using display.js
// possible to click pick button / possible to unclick pick button