import { oceano5, tierra5, pais5, verde, naranjo } from "../utils/colors";

import Title from "./seccionV/Title";
import Paragraph from "./seccionV/Paragraph";
import CountryTitle from "./seccionV/CountryTitle";
import Globe from "../components/Globe";
import ChartTitle from "./seccionV/ChartTitle";
import ChartSource from "./seccionV/ChartSource";
import LegendItem from "./seccionV/LegendItem";
import ChartVariable from "./seccionV/ChartVariable";
import Chart from "./seccionV/Chart";

const title = "La brecha de cuidados es crónica";
const paragraphText = "La brecha de género del perfil feminizado de los cuidadores se repite en todos los segmentos etáreos. Las mujeres cuidan más en todos los ciclos de nuestra vida.";
const selectedCountry = 'México';
const englishName = "Mexico";
const chartTitle = "Cantidad de personas cuidadoras principales por rango etáreo, según sexo.";
const chartSource = "Fuente: Enasic 2022";
const chartVariable = "Cuidadores principales"

export default function SeccionV() {
    return (
        <div className="w-screen h-screen bg-crema overflow-hidden">
            <div className="max-w-[1080px] flex flex-row mx-auto h-screen pt-[43px] gap-10 ">
                <div className="w-[48%] h-full">
                    <Title title={title} />
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
                <div className="w-[48%] h-screen">
                    <div className="h-[90%] w-[140%] bg-blanco pt-[49px] relative">
                        <div className="w-[247px] ml-[49px]">
                            <ChartTitle chartTitle={chartTitle} />
                            <ChartSource chartSource={chartSource} />
                            {selectedCountry === 'México' && <LegendItem fill={"none"} stroke={"#000"} text={"100 personas"} />}
                            <LegendItem fill={verde} stroke={verde} text={"Mujeres"} />
                            <LegendItem fill={naranjo} stroke={naranjo} text={"Hombres"} />
                        </div>
                        <ChartVariable chartVariable={chartVariable} />
                        <Chart country={selectedCountry} />
                    </div>
                </div>
            </div>
        </div>
    )
};