import React from "react";
import { useParams } from "react-router-dom";

const DeptDetail = (props) => {
    const {id} = useParams()
    console.log(props.chosenDept)


    return (
        <div>
            <h4>Detail is working</h4>
            {id}
        </div>
    )


    // if (id) {


    //     const index = id
    //     const dept = props.allDept[index]
    //     return (
    //         <div>
    //             <h3>{id}</h3>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h4>Detail is working</h4>
    //         </div>
    //     )
    // }
}

export default DeptDetail

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds={id}
// response.data.objectIDs => data
// data.length / random pick 10-20 / refresh button / click available using display.js
// possible to click pick button / possible to unclick pick button