import MexicoChart from "./MexicoChart";
import RDChart from "./RDChart";
import ChileChart from "./ChileChart";

export default function Chart({ country }) {
    return (
        <div className={`absolute bottom-[40px] left-[${country === 'Chile' ? '190px' : '220px'}]`}>
            {country === 'México' ? <MexicoChart /> : country === 'Chile' ? <ChileChart /> : <RDChart />}
        </div>
    );
}