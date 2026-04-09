import { useEffect, useRef, useState } from "react";

import { getTransform, useScrollProgress, getOpacity, getStep, getStepProgress} from "./Utils";

import Hands1 from "./Hands1";
import Hands2 from "./Hands2";

export default function SubScreen1() {

    const sectionRef = useRef(null);
    const progress = useScrollProgress(sectionRef);

    const step = getStep(progress, 3);

    const stepProgress = getStepProgress(progress, 3);

    return (
        <div ref={sectionRef} className="h-[300vh] relative">

            <div className="sticky top-0 h-screen bg-verde-claro overflow-hidden">

                <p className="text-[91px] text-blanco max-w-[336px] absolute top-20">
                    Tipos de cuidado
                </p>

                {step === 0 && <Hands1 progress={stepProgress} />}
                {step === 1 && <Hands2 progress={stepProgress} />}
                {step === 2 && <Hands1 progress={stepProgress} />}

            </div>
        </div>
    );
}