import Title from "./seccionV/Title";
import Paragraph from "./seccionV/Paragraph";

const title = "La brecha de cuidados es crónica";
const paragraphText = "La brecha de género del perfil feminizado de los cuidadores se repite en todos los segmentos etáreos. Las mujeres cuidan más en todos los ciclos de nuestra vida.";

export default function SeccionV() {
    return (
        <div className="w-screen h-screen bg-crema ">
            <div className="max-w-[1080px] flex flex-col mx-auto h-screen">
                <div className="w-[48%] h-screen">
                    <Title title={title} />
                    <Paragraph paragraph={paragraphText} />
                </div>
                <div className="w-[48%] h-screen">
                    <Title title={"La brecha de cuidados es crónica"} />
                </div>
            </div>
        </div>
    )
};