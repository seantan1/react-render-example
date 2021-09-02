import Mouse from "./Mouse";
import Cat from "./Cat";

const MouseTracker = () => {
    return (
        <div>
            <h1>Move the mouse around!</h1>
            {/*<Mouse/>*/}
            <Mouse render={(mouse) => <Cat mouse={mouse} />} />
        </div>
    );
};

export default MouseTracker;