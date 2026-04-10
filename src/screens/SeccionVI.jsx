import { useState } from "react";

import Title from "./seccionVI/Title";
import Paragraph from "./seccionVI/Paragraph";
import ChartText from "./seccionVI/ChartText";
import Axis from "./seccionVI/Axis";
import Babies from "./seccionVI/Babies";
import Oldies from "./seccionVI/Oldies";

export default function SeccionVI() {
    const countries = ["México", "República Dominicana", "Chile"];

    const title = "Los datos muestran una superposición de roles de cuidado en etapas críticas";
    const paragraphText = "En Chile 9,5% mujeres de >65 años cuidan a personas de su mismo rango etáreo.";
    const chartTitle = "Horas dedicadas al cuidado en una semana, según sexo y país";
    
    const chartSource = "Fuentes: INEGI, 2025 (México), Panorama estadístico, 2024 (República Dominicana), Observatorio Social, 2024 (Chile)";

    const [index, setIndex] = useState(0);
    const selectedCountry = countries[index];

    const chartText = selectedCountry === 'México'
        ? "En México las mujeres le dedican 8 horas más a la semana al cuidado que los hombres."
        : (
            selectedCountry === 'Chile'
            ? "En Chile las mujeres le dedican 14 horas más a la semana al cuidado que los hombres."
            : "En Rep. Dominicana las mujeres le dedican 14 horas más a la semana al cuidado que los hombres."
        );

    const increaseIndex = () => {
        if (index === countries.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const decreaseIndex = () => {
        if (index === 0) {
            setIndex(countries.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="w-screen h-screen bg-crema">
            <div className="flex flex-col relative h-full max-w-[1080px] mx-auto">
                <div className="w-full flex flex-row mx-auto h-[60%] pt-[43px] gap-10 relative">
                    <div className="w-[66%] h-[100%]">
                        <Title title={title} />
                    </div>
                    <div className="w-[33%] h-[100%]">
                        <Paragraph paragraph={paragraphText} />
                    </div>
                    
                </div>
                <div className="h-[20%] w-[100%] flex justify-between">
                    <Babies />
                    <Oldies />
                </div>
                <div className="h-[20%] w-[100%]">
                    <Axis step={0} />
                </div>
            </div>
        </div>
    )
};