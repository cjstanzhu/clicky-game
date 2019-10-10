import React from "react";
// import "./style.css";

function Score(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h4>{props.children}</h4>
                </div>
            </div>
            <hr/>
            <br/>
        </>
    );
};

export default Score;

