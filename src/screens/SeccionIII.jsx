import Title from "./seccionIII/Title";
import Paragraph from "./seccionIII/Paragraph";
import ChartText from "./seccionIII/ChartText";
import ChartTitle from "./seccionV/ChartTitle";
import ChartSource from "./seccionV/ChartSource";
import ChartLegend from "./seccionIII/ChartLegend";
import CountryRow from "./seccionIII/CountryRow";

export default function SeccionIII() {
    const countries = ["México", "República Dominicana", "Chile"];

    const title = "El tiempo no se reparte igual";
    const paragraphText = "Cuidar implica invertir tiempo en ello. Todas las personas contamos con solo 24 horas durante un día para realizar nuestras tareas. De ellas, las mujeres de Latinoamérica y El Caribe, destinan el doble o triple más de tiempo al cuidado que los hombres.";
    const chartText = "En México las mujeres le dedican 8 horas más a la semana al cuidado que los hombres.";
    const chartTitle = "Horas dedicadas al cuidado en una semana, según sexo y país";
    const chartSource = "Fuentes: INEGI, 2025 (México), Panorama estadístico, 2024 (República Dominicana), Observatorio Social, 2024 (Chile)";

    return (
        <div className="w-screen h-screen bg-verde-oscuro flex flex-col">
            <div className="max-w-[1080px] flex flex-row mx-auto h-[250px] pt-[43px] gap-10 relative">
                <div className="w-[50%] h-[100%]">
                    <Title title={title} />
                    
                    {/* <CountryTitle countryName={selectedCountry} />
                    <Globe
                        width={350}
                        countryName={englishName}
                        oceanColor={oceano5}
                        landColor={tierra5}
                        countryColor={pais5}
                    /> */}
                </div>
                <div className="w-[50%] h-[100%]">
                    {/* <div className="h-[90%] w-[140%] bg-blanco pt-[49px] relative"> */}
                    <Paragraph paragraph={paragraphText} />
                        {/* <div className="w-[247px] ml-[49px]">
                            <ChartTitle chartTitle={chartTitle} />
                            <ChartSource chartSource={chartSource} />
                            {selectedCountry === 'México' && <LegendItem fill={"none"} stroke={"#000"} text={"100 personas"} />}
                            <LegendItem fill={verde} stroke={verde} text={"Mujeres"} />
                            <LegendItem fill={naranjo} stroke={naranjo} text={"Hombres"} />
                        </div>
                        <ChartVariable chartVariable={chartVariable} />
                        <Chart country={selectedCountry} /> */}
                    {/* </div> */}
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
                        {countries.map(country => {
                            return (
                                <CountryRow country={country} />
                            )
                        })}
                    </div>
                </div>
                <div className="w-[20%] self-center">
                    <ChartText charText={chartText} />
                </div>
            </div>
        </div>
    )
};