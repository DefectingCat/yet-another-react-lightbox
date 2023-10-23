import * as React from "react";

const usePortrait = () => {
    // Detect is in force portrait mode.
    // If is true, swip clientx and clienty
    const portrait = React.useRef(window.matchMedia("(orientation: portrait)"));
    const isPortrait = React.useRef(portrait.current.matches);
    React.useEffect(() => {
        const handleRotate = (e: MediaQueryListEvent) => {
            isPortrait.current = e.matches;
        };
        portrait.current.addEventListener("change", handleRotate);
        const p = portrait.current;
        return () => {
            p.removeEventListener("change", handleRotate);
        };
    }, []);

    return {
        isPortrait: isPortrait.current,
    };
};

export default usePortrait;
