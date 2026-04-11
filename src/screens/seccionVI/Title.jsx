export default function Title({ title, colorTitle }) {
    return (
        <h2 className={`text-[91px] text-${colorTitle} font-heading leading-[93px] font-normal mb-[27px]`}>
            {title}
        </h2>
    )
};