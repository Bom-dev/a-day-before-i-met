import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import src from "../images/met.jpg"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const img = {
    width: "200px"
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
        <div>
            <img src={props.deptWorks.primaryImage === "" ? src : props.deptWorks.primaryImage} alt="#" style={img} />
            <h1>{props.deptWorks.title}</h1>
            <h3>{props.deptWorks.artistDisplayName}</h3>
            <button onClick={handleClick}>{props.faves.includes(props.deptWorks.objectID) ? <LibraryAddCheckIcon /> : <LibraryAddIcon />}</button>
        </div>
    )
} 


export default DeptDetail