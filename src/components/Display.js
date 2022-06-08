import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import src from "../images/met.jpg"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Button from '@mui/material/Button';

const img = {
    width: "200px"
}

const box = {
    color: "navy",
    padding: "15px",
    margin: "20px",
    border: "1px solid navy",
}

const Display = (props) => {
    const {id} = useParams()

    useEffect(() => {
        props.getInfo(id)
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
            <h3>{props.deptWorks.artistDisplayName}</h3>
            <p>More info: Click <a href={props.deptWorks.objectURL}>here</a></p>
            <Button variant="outlined" onClick={handleClick}>{props.faves.includes(props.deptWorks.objectID) ? <LibraryAddCheckIcon /> : <LibraryAddIcon />}</Button>
        </div>
    )
}

export default Display