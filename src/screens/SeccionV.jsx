import Globe from "../components/Globe.jsx";
import { oceano5, tierra5, pais5 } from '../utils/colors.js';

export default function SeccionV() {
    return (
        <div>
            <Globe width={500} countryName={"Chile"} oceanColor={oceano5} landColor={tierra5} countryColor={pais5}/>
            <Globe width={500} countryName={"Dominican Rep."} oceanColor={oceano5} landColor={tierra5} countryColor={pais5}/>
            <Globe width={500} countryName={"Mexico"} oceanColor={oceano5} landColor={tierra5} countryColor={pais5}/>
        </div>
    )
};