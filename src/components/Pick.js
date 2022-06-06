import React from "react";

const Pick = (props) => {
    
    if (props.faves) {

        props.faves.map((item) => {
            props.getFaves(item)
        })

        console.log(props.favesDetail)

        return (
            <div>
                this is working
            </div>
        )
    }
}

export default Pick