export default function LegendItem({ fill, stroke, text }) {
    const size = 12;
    const width = size + 4;
    return (
        <div>
            <svg className="inline mr-[12px]" width={width} height={width}>
                <circle r={size/2} cx={width/2} cy={width/2} stroke={stroke} fill={fill} strokeWidth={1}/>
            </svg>
            <span className="text-[20px] text-negro font-serif leading-[20px] font-normal">
                {text}
            </span>
        </div>
    )
};