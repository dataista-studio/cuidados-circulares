import ButtonArrow from "../ui/ButtonArrow"



export default function Portada() {
    return (
        <div className="w-screen h-screen bg-verde-medio flex items-center justify-center">
    
        <div className="flex flex-col items-center justify-center gap-24 text-center">
            
            <p className="text-[216px] text-salmon">Cuidados</p>

            <img 
            src="./src/assets/img/hands.png" 
            alt="" 
            className="h-[227px] w-[223px]" 
            />

            <p className="text-[216px] text-salmon">Circulares</p>

            <p className="text-verde-claro text-[32px] text-center max-w-[900px]">
                Mujeres que cuidan mientras necesitan ser cuidadas en América Latina y el Caribe.
            </p>

        </div>

    </div>
    )
};