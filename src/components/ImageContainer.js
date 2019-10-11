import React from "react";

function ImageContainer(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 justify-content-center text-center flex-wrap d-flex">
                    {props.children}
                </div>
            </div>
            <br/>
        </>
    );
};

export default ImageContainer;

