import MexicoChart from "./MexicoChart";
import RDChart from "./RDChart";
import ChileChart from "./ChileChart";

export default function Chart({ country }) {
    return (
        <div className="">
            {country === 'México' ? <MexicoChart /> : country === 'Chile' ? <ChileChart /> : <RDChart />}
        </div>
    );
}