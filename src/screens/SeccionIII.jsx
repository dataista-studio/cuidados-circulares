import Title from "./seccionIII/Title";
import Paragraph from "./seccionIII/Paragraph";

export default function SeccionIII() {
    const title = "El tiempo no se reparte igual";
    const paragraphText = "Cuidar implica invertir tiempo en ello. Todas las personas contamos con solo 24 horas durante un día para realizar nuestras tareas. De ellas, las mujeres de Latinoamérica y El Caribe, destinan el doble o triple más de tiempo al cuidado que los hombres.";

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
            <div className="text-black">
                Rest of webpage
            </div>
        </div>
    )
};