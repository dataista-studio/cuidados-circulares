import { burdeo } from "../../utils/colors";
import { scaleLinear } from "d3-scale";

export default function Axis({ step }) {

    const ticks = [0, 15, 65, 85];
    const tickLines = [15, 65]
    const maxAge = 85;
    const height = 80;
    const yBase = 35;

    const xScale = scaleLinear().domain([0,85]).range([2.5, 97.5]);

    return (
        <svg width={"100%"} height={height} key="axis">
            <defs>
                <marker 
                    id='left-arrow'
                    markerWidth="11" 
                    markerHeight="29" 
                    viewBox="0 0 11 29" 
                    refY="14.5"
                >
                    <path d="M9.48991 0.0384654C9.78841 7.76469 6.00397 14.1836 1.03711 14.3755" fill={'none'} stroke="#5D202E" strokeWidth="2"/>
                    <path d="M0.0384834 14.4131C5.00534 14.2212 9.27376 20.329 9.57227 28.0552" fill={'none'} stroke="#5D202E" strokeWidth="2"/>
                </marker>
                <marker 
                    id='right-arrow'
                    markerWidth="11" 
                    markerHeight="29"
                    viewBox="0 0 11 29" 
                    refY="14"
                    refX="10"
                >
                    <path d="M10.5338 13.9893C5.56692 14.1812 1.2985 8.07339 1 0.347168" stroke="#5D202E" strokeWidth="2" fill={'none'}/>
                    <path d="M1.08236 28.3639C0.783852 20.6377 4.5683 14.2188 9.53516 14.0269" stroke="#5D202E" strokeWidth="2" fill={'none'}/>
                </marker>

            </defs>
            <line 
                x1={`${xScale(0)}%`} 
                x2={`${xScale(85)}%`} 
                y1={yBase} 
                y2={yBase}     
                stroke={burdeo} 
                strokeWidth={2} 
                markerStart={"url(#left-arrow)"}
                markerEnd={"url(#right-arrow)"}
            />
            {tickLines.map((tickLine, i) => {
                const xPos = `${xScale(tickLine)}%`;
                return (
                    <line
                        key={`tick-line-${i}`}
                        x1={xPos}
                        x2={xPos}
                        y1={yBase}
                        y2={yBase + 10}
                        stroke={burdeo} 
                        strokeWidth={2} 
                    />
                )
            })}

            {ticks.map((tick, i) => {
                const xPos = `${xScale(tick)}%`;
                return (
                    <text
                        key={`tick-text-${i}`}
                        x={xPos}
                        y={yBase + 28}
                        textAnchor="middle"
                        className="font-serif text-burdeo text-[18px] font-[500]"
                    >
                        {tick}
                    </text>
                )
            })}
        </svg>
    )
};