import { useState } from "react";

import { oceano5, tierra5, pais5, verde, naranjo, verdeOscuro } from "../utils/colors";

import Title from "./seccionV/Title";
import Paragraph from "./seccionV/Paragraph";
import CountryTitle from "./seccionV/CountryTitle";
import Globe from "../components/Globe";
import ChartTitle from "./seccionV/ChartTitle";
import ChartSource from "./seccionV/ChartSource";
import LegendItem from "./seccionV/LegendItem";
import ChartVariable from "./seccionV/ChartVariable";
import Chart from "./seccionV/Chart";
import ButtonArrow from "../ui/ButtonArrow";
import lineHand5 from "../assets/img/line-hand-5.svg";

import { getChartSource, getChartTitle, getChartVariable, getEnglishName, getParagraphText } from "./seccionV/content";

export default function SeccionV() {
    const possibleCountries = ["México", "República Dominicana", "Chile"];

    const [index, setIndex] = useState(0);
    const selectedCountry = possibleCountries[index];

    const paragraphText = getParagraphText(selectedCountry);

    const englishName = getEnglishName(selectedCountry);
    const chartTitle = getChartTitle(selectedCountry);
    const chartSource = getChartSource(selectedCountry);
    const chartVariable = getChartVariable(selectedCountry);

    const increaseIndex = () => {
        if (index === possibleCountries.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const decreaseIndex = () => {
        if (index === 0) {
            setIndex(possibleCountries.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
      <div className="w-screen h-screen bg-crema overflow-hidden">
        <div className="max-w-[1080px] flex flex-row mx-auto h-screen pt-[43px] gap-10 relative">
          <div className="w-[50%] h-full">
            {/* <Title title={title} /> */}

            <h2 className="text-[91px] text-verde-oscuro font-heading leading-[93px] font-normal mb-[27px]">
              La brecha de cuidados es{" "}
              <span className="relative">
                <span>crónica</span>

                <img
                  src={lineHand5}
                  alt=""
                  className="absolute left-0 -bottom-[0.05rem] w-max"
                />
              </span>
            </h2>
            <Paragraph paragraph={paragraphText} />
            <CountryTitle countryName={selectedCountry} />
            <Globe
              width={350}
              countryName={englishName}
              oceanColor={oceano5}
              landColor={tierra5}
              countryColor={pais5}
            />
          </div>
          <div className="w-[50%] h-screen">
            <div className="h-[90%] w-[140%] bg-blanco pt-[49px] relative">
              <div className="w-[247px] ml-[49px]">
                <ChartTitle chartTitle={chartTitle} />
                <ChartSource chartSource={chartSource} />
                {selectedCountry === "México" && (
                  <LegendItem
                    fill={"none"}
                    stroke={"#000"}
                    text={"100.000 personas"}
                    size={12}
                  />
                )}
                <LegendItem
                  fill={verde}
                  stroke={verde}
                  text={"Mujeres"}
                  size={12}
                />
                <LegendItem
                  fill={naranjo}
                  stroke={naranjo}
                  text={"Hombres"}
                  size={12}
                />
              </div>
              <ChartVariable chartVariable={chartVariable} />
              <Chart country={selectedCountry} />
            </div>
          </div>
          <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 flex flex-row gap-4">
            <ButtonArrow
              fill={verdeOscuro}
              direction="left"
              onclick={decreaseIndex}
            />
            <ButtonArrow
              fill={verdeOscuro}
              direction="right"
              onclick={increaseIndex}
            />
          </div>
        </div>
      </div>
    );
};