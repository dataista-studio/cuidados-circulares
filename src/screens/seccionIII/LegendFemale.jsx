import LegendLabel from "./LegendLabel"

export default function LegendFemale() {
    return (
        <div className="ml-[8px]">
            <svg className="inline" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="17.9814" y="23.344" width="9.9986" height="1.55318" transform="rotate(88.3664 17.9814 23.344)" fill="#E8E5E1"/>
                <rect x="19.8349" y="31.7268" width="4.75662" height="1.55318" transform="rotate(178.366 19.8349 31.7268)" fill="#E8E5E1"/>
                <circle cx="17.0675" cy="16.4924" r="11.6152" transform="rotate(133.366 17.0675 16.4924)" fill="#959848"/>
            </svg>
            <LegendLabel label={"Mujeres"} />
        </div>
    )
};