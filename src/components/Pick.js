import React, { useState } from "react";

const Pick = (props) => {

        useState(() => {
            if (props.faves.length > props.favesDetail.length) {
            props.faves.map((item) => {
                props.getFaves(item)
            })
        }
        }, [])

        const details = props.favesDetail.map((detail) => {
            return (
                <div>
                    <h1>{detail.title}</h1>
                </div>
            )
        })

        console.log(props.favesDetail)

        return (
            <div>
                {details}
            </div>
        )
}

export default Pick