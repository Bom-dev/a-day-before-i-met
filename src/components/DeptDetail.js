import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const img = {
    width: "200px"
}

const DeptDetail = (props) => {

    const {id} = useParams

    useEffect(() => {
        props.getInfo(props.chosenDept)
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`)
        .then((r) => {
            const objIDs = r.data.objectIDs
            const ran1 = objIDs[Math.floor(Math.random() * objIDs.length)]
        
        this.setState({ 
            chosenDept: ran1
        });
        })
        .catch(e => {
        console.log(e)
        })
    }, [])

    const handleClick = (e) => {
        e.stopPropagation()
        props.onFaveToggle(props.deptWorks.objectID)
    }

    return (
        <div>
            <h1>{props.deptWorks.title}</h1>
            <img src={props.deptWorks.primaryImage} alt="#" style={img} /><br />
            <button onClick={handleClick}>{props.faves.includes(props.deptWorks.objectID) ? "Unpick" : "Pick"}</button>
        </div>
    )
} 


export default DeptDetail