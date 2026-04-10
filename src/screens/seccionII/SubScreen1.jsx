import { useEffect, useRef, useState } from "react";

import { getTransform, useScrollProgress, getOpacity, getStep, getStepProgress} from "./Utils";

import Hands1 from "./Hands1";
import Hands2 from "./Hands2";
import Hands3 from "./Hands3";
import Hands4 from "./Hands4";
export default function SubScreen1() {


    const sectionRef = useRef(null);
    
    const rawProgress = useScrollProgress(sectionRef);

    const startOffset = 0.1;
    const endOffset = 0.9;

    const adjustedProgress = Math.min(
        Math.max((rawProgress - startOffset) / (endOffset - startOffset), 0),
        1
    );

    const step = getStep(adjustedProgress, 4);
    const stepProgress = getStepProgress(adjustedProgress, 4);

    return (
        <div ref={sectionRef} className="h-[420vh] relative">

            <div className="sticky top-0 h-screen bg-verde-claro overflow-hidden">
                <div className="absolute mt-20 ml-85">

                    <p className="text-[91px] text-blanco font-heading leading-[93px] max-w-[336px]">
                        Tipos de cuidado <br/>
                    </p>

                    <p className="text-[20px] font-serif text-blanco">(ONU Mujeres, 2018)</p>
                </div>
                

                {step === 0 && <Hands1 progress={stepProgress} />}
                {step === 1 && <Hands2 progress={stepProgress} />}
                {step === 2 && <Hands3 progress={stepProgress} />}
                {step === 3 && <Hands4 progress={stepProgress} />}


            </div>
        </div>
    );
}