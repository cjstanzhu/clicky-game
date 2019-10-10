import React from "react";
// import "./style.css";

function Title(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{props.children}</h1>
                </div>
            </div>
        </>
    );
};

export default Title;

