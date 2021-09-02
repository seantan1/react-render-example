const Cat = ({ mouse }) => {
    return (
        <img
            src="/cat.png"
            alt="cat"
            style={{ position: "absolute", left: mouse.x, top: mouse.y }}
        />
    );
};

export default Cat;