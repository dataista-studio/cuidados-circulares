import LegendClock from "./LegendClock";
import LegendMale from "./LegendMale";
import LegendFemale from "./LegendFemale";

export default function ChartLegend() {
    return (
        <div className="mt-[20px] mb-[50px] flex flex-col gap-2">
            <LegendClock />
            <LegendFemale />
            <LegendMale />
        </div>
    )
}