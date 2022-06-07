import React from "react";

const Pick = (props) => {

        const details = props.favesDetail.map((detail) => {
            return (
                <div key={detail.objectID}>
                    <h1>{detail.title}</h1>
                </div>
            )
        })

        return (
            <div>
                {details}
            </div>
        )
}

export default Pick