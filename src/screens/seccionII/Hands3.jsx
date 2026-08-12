import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands3({progress}) {
    
  return (
    <>
        <div> 
            <img
                    src="./src/assets/img/big_hand_l_transparent_light.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                    src="./src/assets/img/big_hand_r_transparent_light.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_l_transparent.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] z-10 absolute bottom-0 left-[20%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_r_transparent.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] z-10 absolute bottom-0 right-[20%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src="./src/assets/img/small_hand_l_transparent_light.png" alt="" className="w-[82px] h-[277px] z-10 absolute bottom-0 left-[35%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src="./src/assets/img/small_hand_r_transparent_light.png" alt="" className="w-[82px] h-[277px] z-10 absolute bottom-0 right-[35%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />

            <div className="absolute bottom-[-340px] left-1/2 -translate-x-1/2 z-0">
                
                <div
                    className='w-[740px] h-[740px] flex justify-center rounded-full 
                    bg-[radial-gradient(146.74%_146.73%_at_50%_50%,_#BBBD8D_0%,_#7C6A0A_100%)]'
                    style={{
                        transform: getTransform({ progress, direction: "bottom", distance: 80 })
                    }}
                >
                    <p className='text-[50px] mt-20 text-center text-blanco font-heading leading-[1]'>
                        Cuidados<br></br>Indirectos
                    </p>
                </div>

            </div>

            <div className="absolute left-1/2 top-[30%] -translate-x-1/2">

                <div
                    className='relative w-[380px] h-[321px] flex justify-center items-center'
                    style={{
                        transform: getTransform({ progress, direction: "bottom", distance: 80 })
                    }}
                >
                    <img 
                        src="./src/assets/img/dark_green_rectangle.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                    />

                    <p className='relative text-center max-w-[307px] text-verde-oscuro font-serif text-[22px]'>
                        Aquellas tareas que establecen las condiciones materiales para hacer posibles los cuidados directos (lavar la ropa de alguien, hacer la comida).
                    </p>
                </div>

            </div>

        </div>
    </>
  )
}
