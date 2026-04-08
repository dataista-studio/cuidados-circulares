export default function Portada() {
    return (
        <div className="w-screen h-screen bg-verde-medio flex flex-col gap-24 text-center items-center justify-center">
            <h1 className="text-[216px] text-salmon">Cuidados</h1>

            <img 
                src="./src/assets/img/hands.png" 
                alt="" 
                className="h-[227px] w-[223px]" 
            />

            <h1 className="text-[216px] text-salmon">Circulares</h1>

            <p className="text-verde-claro text-[32px] text-center max-w-[900px]">
                Mujeres que cuidan mientras necesitan ser cuidadas en América Latina y el Caribe.
            </p>
        </div>
    )
};