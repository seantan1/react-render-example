import React, {useState} from "react";
const Mouse = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0});

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
        console.log(position);
    };

    return (
        <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
            {props.render(position)}
        </div>
    );
};

export default Mouse;