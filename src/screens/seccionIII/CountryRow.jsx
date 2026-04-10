import Globe from "../../components/Globe";
import { getEnglishName } from "../seccionV/content";
import { oceano3, tierra3, pais3 } from "../../utils/colors";
import Chart from "./Chart";

export default function CountryRow({ country }) {

    const englishName = getEnglishName(country);

    return (
        <div className="flex flex-row">
            <div className="relative">
                <Globe
                    width={140}
                    countryName={englishName}
                    oceanColor={oceano3}
                    landColor={tierra3}
                    countryColor={pais3}
                />
                <div className="absolute top-[70px] left-[50%] -translate-x-1/2 text-center">
                    {country}
                </div>
            </div>
            <Chart country={country} />
        </div>
    )
};