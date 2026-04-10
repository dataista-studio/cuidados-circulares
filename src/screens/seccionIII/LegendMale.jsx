import LegendLabel from "./LegendLabel"

export default function LegendMale() {
    return (
        <div className="ml-[12px]">
            <svg className="inline mr-[6px]" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5703 5.06399L23.5703 1.06399M23.5703 1.06399L21.5703 1.06399M23.5703 1.06399L23.5703 3.06404" stroke="#E8E5E1" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12.1006" cy="12.1011" r="11.768" transform="rotate(-1.63361 12.1006 12.1011)" fill="#EB6424"/>
            </svg>
            <LegendLabel label={"Hombres"} />
        </div>
    )
};