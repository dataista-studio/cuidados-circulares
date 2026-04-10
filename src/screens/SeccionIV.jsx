
import { useScrollProgress } from "./seccionII/Utils"
import { useEffect, useRef, useState } from "react";

export default function SeccionIV() {

    const sectionRef = useRef(null);
    const progress = useScrollProgress(sectionRef);


    const start = 0.5;
    const end = 1;

    let adjusted = (progress - start) / (end - start);
    adjusted = Math.max(0, Math.min(1, adjusted));

    const translateX = -adjusted * 100;



    return (
        
        <div ref={sectionRef} className="h-[200vh] relative">

            <div className="sticky top-0 h-screen bg-salmon overflow-hidden">

                <div className="flex ml-85 mt-20">
                    <p className="text-[91px] text-naranjo max-w-[506px] font-heading leading-[1.1]">
                        Tipos de cuidado, distintas cargas.
                    </p>

                    <div className="max-w-[607px] font-serif">
                        <p className="text-burdeo">El caso de México, según ENASIC (2022), ilustra una tendencia que se repite en la región: <span className="font-bold"> mientras los hombres asumen labores más puntuales y externas, las mujeres concentran las tareas más continuas e íntimas. </span> </p>

                        <p className="text-burdeo mt-10">Si bien en ambos casos la principal forma de cuidado es estar al pendiente o acompañar a la persona, las diferencias aparecen en lo que viene después.</p>
                    </div>
                </div>

                

                <div className="absolute top-[60%] left-0 w-[200%]" style={{
                            transform: `translateX(${translateX}%)`
                        }}>

                    <div className="flex absolute top-[-52%] left-[10%] gap-52 font-serif text-burdeo text-[22px]" >

                        <div className="p-5 bg-blanco flex flex-col gap-5 text-center h-[210px] items-center justify-center w-[1100px]">
                            <p> <span className="text-verde font-bold">Las mujeres</span> asumen con mayor frecuencia las tareas más constantes y exigentes del día a día: alimentar, asistir en la higiene personal, como bañarse, vestirse o ir al baño, y administrar medicamentos o monitorear el estado de salud.</p>

                            <p className="mt-10 font-bold">Son labores que requieren presencia continua, cercanía física y una alta carga emocional.</p>
                        </div>

                        <div className="p-5 bg-blanco flex flex-col gap-5 text-center h-[210px] items-center justify-center w-[1100px]">
                            <p>En cambio, en <span className="text-naranjo font-bold">los hombres</span> el cuidado se expresa principalmente en acciones como acompañar a salir, ayudar en los desplazamientos dentro del hogar o encargarse de traslados a consultas médicas. </p>

                            <p className="mt-10 font-bold">Son tareas importantes, pero generalmente acotadas en el tiempo y ligadas a momentos específicos.</p>
                        </div>

                    </div>

                    <img
                        src="./src/assets/img/photo_slider.png"
                        alt=""
                        className="w-full h-[400px] object-cover object-left"
                        
                    />
                </div>

            </div>
        </div>
    )
};