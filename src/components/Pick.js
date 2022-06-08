import React from "react";

const listing = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "5px",
    width: "100%",
    margin: "10px",
}

const box = {
    color: "navy",
    border: "1px solid navy",
    padding: "10px",
    margin: "10px",
    width: "20%",
}

const Pick = (props) => {

        const details = props.favesDetail.map((detail) => {
            return (
                <div key={detail.objectID} style={box}>
                    <h3>{detail.title}</h3>
                </div>
            )
        })

        return (
            <div style={listing}>
                {details}
            </div>
        )
}

export default Pick