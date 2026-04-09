import { useEffect, useRef, useState } from "react";

export default function SeccionI() {

    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
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
    }, []);


    const getTransform = ({ direction = "left", distance = 100 }) => {
        const movement =
            progress < 0.5
                ? progress * 2
                : (1 - progress) * 2;
    
        const value = -distance + movement * distance;
    
        switch (direction) {
            case "left":   // entra desde izquierda
                return `translateX(${value}%)`;
    
            case "right":  // entra desde derecha
                return `translateX(${-value}%)`;
    
            case "bottom": // entra desde abajo
                return `translateY(${-value}%)`;
    
            case "top":    // entra desde arriba
                return `translateY(${value}%)`;
    
            default:
                return "";
        }
    };

    return (
        <div ref={sectionRef} className="w-screen h-[100vh] bg-verde-claro relative overflow-hidden">

            <p className="text-[91px] text-blanco max-w-[336px] sticky top-20">
                Tipos de cuidado
            </p>

            <img
                src="./src/assets/img/big_hand_l.png"
                alt=""
                className="h-[237.3px] w-[619.71px] absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                    transform: `${getTransform({ direction: "left" })} translateY(-50%)`
                }}
            />

            <img
                src="./src/assets/img/big_hand_r.png"
                alt=""
                className="h-[237.3px] w-[619.71px] absolute right-0 top-1/2 -translate-y-1/2"
                style={{
                    transform: `${getTransform({ direction: "right" })} translateY(-50%)`
                }}
            />

            <img
                src="./src/assets/img/medium_hand_l.png"
                alt=""
                className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[60%]"
                style={{
                    transform: `${getTransform({ direction: "bottom", distance: 120 })} translateX(50%)`
                }}
            />

            <img
                src="./src/assets/img/medium_hand_r.png"
                alt=""
                className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[30%] "
                style={{
                    transform: `${getTransform({ direction: "bottom", distance: 120 })} translateX(-50%)`
                }}
            />

            <img src="./src/assets/img/small_hand_l.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 left-[42.5%]" 
                style={{
                    transform: `${getTransform({ direction: "bottom", distance: 120 })} translateX(50%)`
                }}
            />
            <img src="./src/assets/img/small_hand_r.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 right-[42.5%]" 
            
            style={{
                transform: `${getTransform({ direction: "bottom", distance: 120 })} translateX(-50%)`
            }}

            />

        </div>
    );
}