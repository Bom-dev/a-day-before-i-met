import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import src from "../images/met.jpg"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Button from '@mui/material/Button';

const img = {
    width: "300px"
}

const box = {
    color: "#1D2D44",
    padding: "15px",
    margin: "20px",
    border: "1px solid #1D2D44",
}

const DeptDetail = (props) => {

    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`)
        .then(
            (r) => {
            const objIDs = r.data.objectIDs
            const ran1 = objIDs[Math.floor(Math.random() * objIDs.length)]
            props.getInfo(ran1)
        })
        .catch(e => {
        console.log(e)
        })
    }, [])

    const handleClick = (e) => {
        e.stopPropagation()
        props.onFaveToggle(props.deptWorks.objectID)
        props.getFaves(props.deptWorks.objectID)
    }

    return (
        <div style={box}>
            <img src={props.deptWorks.primaryImage === "" ? src : props.deptWorks.primaryImage} alt="#" style={img} />
            <h1>{props.deptWorks.title}</h1>
            <h2>{props.deptWorks.artistDisplayName}</h2>
            <h4>{props.deptWorks.objectDate}, {props.deptWorks.culture}</h4>
            <p>More info: Click <a href={props.deptWorks.objectURL}>here</a></p>
            <Button variant="outlined" onClick={handleClick}>{props.faves.includes(props.deptWorks.objectID) ? <LibraryAddCheckIcon /> : <LibraryAddIcon />}</Button>
        </div>
    )
} 


export default DeptDetail