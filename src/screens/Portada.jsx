export default function Portada() {
    return (
        <div className="w-screen h-screen bg-verde-medio flex items-center justify-center relative overflow-hidden">

            <div className="flex flex-col items-center text-center">

                <img
                    src="./src/assets/img/waves.png"
                    alt=""
                    className="h-[237px] w-[827px] object-contain z-50 absolute top-[17%] opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
                />

                <h1 className="text-[216px] leading-[93px] text-salmon font-heading opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
                    Cuidados
                </h1>

                <img
                    src="./src/assets/img/hands.png"
                    alt=""
                    className="h-[227px] w-[223px] z-10 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.4s]"
                />

                <h1 className="text-[216px] leading-[93px] text-salmon font-heading opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.6s]">
                    Circulares
                </h1>

                <p className="text-crema font-serif text-[32px] text-center max-w-[900px] mt-15 leading-[1.5] opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.8s]">
                    Mujeres que cuidan mientras necesitan ser cuidadas en <br />
                    América Latina y el Caribe.
                </p>

                <img
                    src="./src/assets/img/call to action.png"
                    alt=""
                    className="h-[100px] w-auto z-10 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:1s]"
                />

            </div>

            <style>
                {`
                    @keyframes fadeUp {
                        0% {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

        </div>
    )
}