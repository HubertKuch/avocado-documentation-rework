import React from "react";

export default function Feature({ title, description }) {
    return (
        <div className={"feature"}>
            <h1>
                {title}
            </h1>
            <span>
                {description}
            </span>
        </div>
    );
}