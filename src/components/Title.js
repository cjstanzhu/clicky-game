import React from "react";
// import "./style.css";

function Title(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{props.children}</h1>
                    <h3>Gotta Click'em All! Gotta Click'em All!~ 🎶</h3>
                </div>
            </div>
        </>
    );
};

export default Title;

