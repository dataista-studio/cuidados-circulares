import { useState } from "react";

import Title from "./seccionIII/Title";
import Paragraph from "./seccionIII/Paragraph";
import ChartText from "./seccionIII/ChartText";
import ChartTitle from "./seccionV/ChartTitle";
import ChartSource from "./seccionV/ChartSource";
import ChartLegend from "./seccionIII/ChartLegend";
import CountryRow from "./seccionIII/CountryRow";
import ButtonArrow from "../ui/ButtonArrow";
import { crema } from "../utils/colors";

export default function SeccionIII() {
    const countries = ["México", "República Dominicana", "Chile"];

    const title = "El tiempo no se reparte igual";
    const paragraphText = "Cuidar implica invertir tiempo en ello. Todas las personas contamos con solo 24 horas durante un día para realizar nuestras tareas. De ellas, las mujeres de Latinoamérica y El Caribe, destinan el doble o triple más de tiempo al cuidado que los hombres.";
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
        <div className="w-screen h-screen bg-verde-oscuro">
            <div className="flex flex-col relative h-full">
                <div className="max-w-[1080px] flex flex-row mx-auto h-[250px] pt-[43px] gap-10 relative">
                    <div className="w-[50%] h-[100%]">
                        <Title title={title} />
                    </div>
                    <div className="w-[50%] h-[100%]">
                        <Paragraph paragraph={paragraphText} />
                    </div>
                    
                </div>
                <div className="max-w-[1080px] mx-auto text-black flex flex-row gap-10">
                    <div className="h-[calc(100vh-350px)] w-[80%] bg-blanco relative flex flex-row gap-4 ml-[-40px] px-[40px] py-[20px]">
                        <div className="w-[40%] h-full">
                            <ChartTitle chartTitle={chartTitle} />
                            <ChartLegend />
                            <ChartSource chartSource={chartSource} />
                        </div>
                        <div className="w-[60%] bg-[#FDF7EF] h-full px-[20px]">
                            {countries.map((country, i) => {
                                return (
                                    <CountryRow country={country} key={i}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-[20%] self-center">
                        <ChartText charText={chartText} />
                    </div>
                </div>
                <div className="absolute bottom-[30px] left-[50%] -translate-x-1/2 flex flex-row gap-4">
                    <ButtonArrow fill={crema} direction="left" onclick={decreaseIndex}/>
                    <ButtonArrow fill={crema} direction="right" onclick={increaseIndex}/>
                </div>
            </div>
        </div>
    )
};