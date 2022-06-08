import React from "react";
import { Link } from "react-router-dom";
import src from "../images/met4.jpg"

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

const img = {
    width: "100%"
}

const box = {
    backgroundColor: "#1D2D44",
    color: "#f0ebd8",
    padding: "15px",
    margin: "20px",
    width: "20%",
}

const textBox = {
    color: "#1D2D44",
    padding: "15px",
    margin: "20px",
    border: "1px solid #1D2D44",
}
  

const Pick = (props) => {

    if (props.faves.length > 0) {
        const details = props.favesDetail.map((detail) => {
            return (
                <Link to={"/display/" + detail.objectID} key={detail.objectID} style={box} className="pickedList">
                    <h3>{detail.title}</h3>
                    <h5>{detail.artistDisplayName}</h5>
                </Link>
            )
        })
        return (
            <div style={listing}>
                {details}
            </div>
        )
    } else {
        return (
            <div style={textBox}>
                <img src={src} alt="#" style={img} />
                <h2>No Picked Artwork Yet</h2>
                <p>Select your favorite artwork!</p>
            </div>
        )
    }
}

export default Pick