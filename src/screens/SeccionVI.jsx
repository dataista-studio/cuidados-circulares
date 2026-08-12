import { useState } from "react";

import Title from "./seccionVI/Title";
import Paragraph from "./seccionVI/Paragraph";
import HighlightedParagraph from "./seccionVI/HighlightedParagraph";
import ChartText from "./seccionVI/ChartText";
import Axis from "./seccionVI/Axis";
import Babies0 from "./seccionVI/Babies0";
import Babies2 from "./seccionVI/Babies2";
import Oldies0 from "./seccionVI/Oldies0";
import Oldies1 from "./seccionVI/Oldies1";
import ButtonArrow from "../ui/ButtonArrow";

import { getEnglishName} from "./seccionV/content";

import { oceano5, tierra5, pais5, verde, naranjo, verdeOscuro, burdeo } from "../utils/colors";

import Globe from "../components/Globe";

export default function SeccionVI() {
    const n = 2;
    const [index, setIndex] = useState(0);

    const title = index === 0
        ? "Personas receptoras del cuidado"
        : "Los datos muestran una superposición de roles de cuidado en etapas críticas";
    const colorTitle = index === 0
        ? "naranjo-claro"
        : "burdeo";
    const paragraphText1 = index === 0
        ? "" 
        : "En Chile";
    const paragraphText2 = index === 0
        ? ""
        : (
            index === 1
            ? "9,5%"
            : "14,5%*"
        );
    const paragraphText3 = index === 0
        ? ""
        : (
            index === 1
            ? "mujeres de >65 años cuidan a personas de su mismo rango etáreo."
            : "niñas y adolescentes cuidan a personas de entre 0 a 5 años."
        );
    const chartText = index === 0
        ? "Según la propuesta de la Corte Interamericana de Derechos Humanos, el tiempo, los recursos y las responsabilidades asociadas al cuidado dependen, entre otros factores, de las capacidades y la etapa vital en que se encuentra quien cuida. Por esto, se identifican dos segmentos demográficos con mayor necesidad de recibir cuidados y menos capacidades para otorgarlos: por una parte los menores de 15 años, y, por otra, los mayores de 65."
        : (
            index === 1
            ? "En Chile, para el segmento de los adultos mayores de 65, las cifras indican que 9,5% de las mujeres mayores de 65 años asume roles de cuidados sobre su mismo segmento etáreo. Esto es una reponsabilidad que puede afectar su propio bienestar, ya que, a medida de que avanza la edad, los cuidados que deben realizarse son cada vez mas demandantes."
            : "Y en el caso de las adolescentes, tenemos información parcial: los datos dicen que el 14,8% de mujeres de entre 12 y 24 años cuida a menores de 5 años. Dada la desagregación de los datos no podemos hacer un cálculo preciso* de cuántas niñas en período formativo de entre 12 y 15 años son cuidadoras, pero, aunque las cifras sean borrosas, sabemos que están allí."
        );

    const increaseIndex = () => {
        if (index === n) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const decreaseIndex = () => {
        if (index === 0) {
            setIndex(n)
        } else {
            setIndex(index - 1)
        }
    }

    return (
      <div className="w-screen h-screen bg-crema">
        <div className="flex flex-col relative h-full max-w-[1080px] mx-auto">
          <div className="w-full flex flex-row mx-auto h-[60%] pt-[43px] gap-10 relative">
            <div className="w-[66%] h-[100%]">
              <Title title={title} colorTitle={colorTitle} />
              <ChartText chartText={chartText} />
            </div>

            <div className="w-[33%] h-[100%] mt-[30px]">
              <Paragraph paragraph={paragraphText1} />
              <HighlightedParagraph paragraph={paragraphText2} />
              <Paragraph paragraph={paragraphText3} />
            </div>

            {index !== 0 && (
                <Globe
                width={180}
                countryName={getEnglishName("Chile")}
                oceanColor={oceano5}
                landColor={tierra5}
                countryColor={pais5}
                />
            )}

          </div>
          <div className="h-[126px] w-[100%] flex justify-between items-end mb-[-40px] mt-[50px]">
            {index === 0 && (
              <>
                <Babies0 opacity={1} />
                <Oldies0 opacity={1} />
              </>
            )}
            {index === 1 && (
              <>
                <Babies0 opacity={0.2} />
                <Oldies1 opacity={1} />
              </>
            )}
            {index === 2 && (
              <>
                <Babies2 opacity={1} />
                <Oldies0 opacity={0.2} />
              </>
            )}
          </div>
          <div className="h-[20%] w-[100%]">
            <Axis step={index} />
          </div>
          <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 flex flex-row gap-4">
            <ButtonArrow
              fill={burdeo}
              direction="left"
              onclick={decreaseIndex}
            />
            <ButtonArrow
              fill={burdeo}
              direction="right"
              onclick={increaseIndex}
            />
          </div>
        </div>
      </div>
    );
};