import { useEffect, useRef, useState } from "react";

import { getTransform } from "./seccionI/Utils";
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


    

    return (

        <>
            <div ref={sectionRef} className="w-screen h-[100vh] bg-verde-claro relative overflow-hidden">

                <p className="text-[91px] text-blanco max-w-[336px] sticky top-20">
                    Tipos de cuidado
                </p>

                <img
                    src="./src/assets/img/big_hand_l.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                    }}
                />

                <img
                    src="./src/assets/img/big_hand_r.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

                <img
                    src="./src/assets/img/medium_hand_l.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[60%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

                <img
                    src="./src/assets/img/medium_hand_r.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[30%] "
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

                <img src="./src/assets/img/small_hand_l.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 left-[42.5%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                <img src="./src/assets/img/small_hand_r.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 right-[42.5%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />

            </div>

        </>
    );
}