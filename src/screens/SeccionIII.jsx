import { useState } from "react";

import Title from "./seccionIII/Title";
import Paragraph from "./seccionIII/Paragraph";
import ChartText from "./seccionIII/ChartText";
import HighlightedChartText from "./seccionIII/HighlightedChartText";
import ChartTitle from "./seccionV/ChartTitle";
import ChartSource from "./seccionV/ChartSource";
import ChartLegend from "./seccionIII/ChartLegend";
import CountryRow from "./seccionIII/CountryRow";
import ButtonArrow from "../ui/ButtonArrow";
import { crema } from "../utils/colors";
import lineHand3 from "../assets/img/line-hand-3.svg";
import lineHand4 from "../assets/img/line-hand-4.svg";

export default function SeccionIII() {
    const countries = ["México", "República Dominicana", "Chile"];

    const paragraphText = "Cuidar implica invertir tiempo en ello. Todas las personas contamos con solo 24 horas durante un día para realizar nuestras tareas. De ellas, las mujeres de Latinoamérica y El Caribe, destinan el doble o triple más de tiempo al cuidado que los hombres.";
    const chartTitle = "Horas dedicadas al cuidado en una semana, según sexo y país";
    
    const chartSource = "Fuentes: INEGI, 2025 (México), Panorama estadístico, 2024 (República Dominicana), Observatorio Social, 2024 (Chile)";

    const [index, setIndex] = useState(0);
    const selectedCountry = countries[index];

    const chartText1 = selectedCountry === 'México'
        ? "En México las mujeres le dedican"
        : (
            selectedCountry === 'Chile'
            ? "En Chile las mujeres le dedican"
            : "En Rep. Dominicana las mujeres le dedican"
        );
    
    const chartText2 = selectedCountry === 'México'
        ? "8 horas"
        : (
            selectedCountry === 'Chile'
            ? "14 horas"
            : "14 horas"
        );

    const chartText3 = selectedCountry === 'México'
        ? "más a la semana al cuidado que los hombres."
        : (
            selectedCountry === 'Chile'
            ? "más a la semana al cuidado que los hombres."
            : "más a la semana al cuidado que los hombres."
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
          <div className="max-w-[1080px] flex flex-row mx-auto h-[250px] pt-[43px] gap-10 relative items-center">
            <div className="w-[50%]">
              <h2 className="text-[91px] text-salmon font-heading leading-[93px] font-normal mb-[27px]">
                El tiempo{" "}
                <span className="relative">
                  <span>no</span>
                  <img
                    src={lineHand3}
                    alt=""
                    className="absolute left-0 top-[1.2rem] w-max h-[85px]"
                  />
                </span>{" "}<br></br>
                <span className="relative">
                  <span>se reparte igual</span>
                  <img
                    src={lineHand4}
                    alt=""
                    className="absolute w-full bottom-0"
                  />
                </span>
              </h2>
            </div>
            <div className="w-[50%]">
              <Paragraph paragraph={paragraphText} />
            </div>
          </div>
          <div className="max-w-[1080px] mx-auto text-black flex flex-row gap-4">
            <div className="h-[calc(100vh-350px)] w-[75%] bg-blanco relative flex flex-row gap-4 ml-[-40px] px-[40px] py-[20px]">
              <div className="w-[35%] h-full">
                <ChartTitle chartTitle={chartTitle} />
                <ChartLegend />
                <ChartSource chartSource={chartSource} />
              </div>
              <div className="w-[65%] bg-[#FDF7EF] h-full px-[20px]">
                {countries.map((country, i) => {
                  return <CountryRow country={country} key={i} />;
                })}
              </div>
            </div>
            <div className="w-[25%] self-center">
              <ChartText charText={chartText1} />
              <HighlightedChartText charText={chartText2} />
              <ChartText charText={chartText3} />
            </div>
          </div>
          <div className="absolute bottom-[30px] left-[50%] -translate-x-1/2 flex flex-row gap-4">
            <ButtonArrow
              fill={crema}
              direction="left"
              onclick={decreaseIndex}
            />
            <ButtonArrow
              fill={crema}
              direction="right"
              onclick={increaseIndex}
            />
          </div>
        </div>
      </div>
    );
};