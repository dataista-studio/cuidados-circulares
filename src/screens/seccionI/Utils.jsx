import { useEffect, useState } from "react";


export const getTransform = ({
    progress,
    direction = "left",
    distance = 100
}) => {
    const movement =
        progress < 0.5
            ? progress * 2
            : (1 - progress) * 2;

    const value = -distance + movement * distance;

    switch (direction) {
        case "left":
            return `translateX(${value}%)`;

        case "right":
            return `translateX(${-value}%)`;

        case "bottom":
            return `translateY(${-value}%)`;

        case "top":
            return `translateY(${value}%)`;

        default:
            return "";
    }
};

export const useScrollProgress = (ref) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = ref.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let scrollProgress =
                (windowHeight - rect.top) / (windowHeight + rect.height);

            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ref]);

    return progress;
};

export const getOpacity = (progress) => {
    const opacity =
        progress < 0.5
            ? progress * 2        
            : (1 - progress) * 2; 

    return Math.max(0, Math.min(1, opacity));
};

export const getStep = (progress, steps) => {
    const stepSize = 1 / steps;
    return Math.min(
        steps - 1,
        Math.floor(progress / stepSize)
    );
};

export const getStepProgress = (progress, steps) => {
    const stepSize = 1 / steps;
    const stepIndex = Math.floor(progress / stepSize);

    const start = stepIndex * stepSize;
    const end = start + stepSize;

    const localProgress = (progress - start) / stepSize;

    return Math.max(0, Math.min(1, localProgress));
};