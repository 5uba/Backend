
import { lazy, Suspense, useState } from "react";
import Home from "./Home";

const About = lazy(() => import("./About"));

const TaskEight = () => {

    const [showAbout, setShowAbout] = useState(false);

    return (
        <div>

            <h1>Lazy Loading Example - Task 8</h1>

            {!showAbout && <Home />}

            <button onClick={() => setShowAbout(true)}>
                Show About
            </button>

            {showAbout && (
                <Suspense fallback={<h2>Loading...</h2>}>
                    <About />
                </Suspense>
            )}

        </div>
    );
};

export default TaskEight;
