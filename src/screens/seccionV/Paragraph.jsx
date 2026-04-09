export default function Paragraph({ paragraph }) {
    return (
        <p className="text-[30px] text-verde-oscuro font-serif leading-[29px] font-normal">
            <sup>{paragraph}</sup>
        </p>
    )
};