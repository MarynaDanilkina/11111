import { useState, useEffect } from "react";

function useClientWindowWidth(): number | undefined {
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return width;
}

export default useClientWindowWidth;
