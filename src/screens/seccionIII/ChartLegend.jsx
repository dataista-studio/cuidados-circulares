import LegendItem from "../seccionV/LegendItem";
import { verde, naranjo } from "../../utils/colors";
import LegendClock from "./LegendClock";


export default function ChartLegend() {
    return (
        <div className="mt-[20px] mb-[50px]">
            <LegendClock />
            <LegendItem fill={verde} stroke={verde} text={"Mujeres"} size={24} />
            <LegendItem fill={naranjo} stroke={naranjo} text={"Hombres"} size={24} />
        </div>
    )
}