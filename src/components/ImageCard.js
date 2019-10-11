import React from "react";

function ImageCard(props) {
    return (
        <>
            <div className="card">
                <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)} />
        
            </div>
        </>
    );
};

export default ImageCard;

