import React from "react";
// import "./style.css";

function Score(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>{props.children}</h3>
                </div>
            </div>
        </>
    );
};

export default Score;

