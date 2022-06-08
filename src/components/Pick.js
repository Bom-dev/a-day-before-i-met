import React from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
// import src from "../images/met.jpg"

const listing = {
    display: "flex",
    justifyContent: "center",
    gap: "10px 30px",
    width: "100%",
    margin: "10px",
    flexFlow: "row wrap"
}

const Pick = (props) => {

        const details = props.favesDetail.map((detail) => {
            return (
                <Link to={"/display/" + detail.objectID} key={detail.objectID} >
                    <Button variant="outlined">
                        <h3>{detail.title}</h3>
                        <h5>{detail.artistDisplayName}</h5>
                    </Button>
                </Link>
            )
        })

        return (
            <div style={listing}>
                {details}
            </div>
        )
}

export default Pick