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