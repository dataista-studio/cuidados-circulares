import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands4({progress}) {
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

            <div className='w-[1181px] h-[1181px] flex items-center justify-center rounded-full absolute z-0 bottom-0 right-[-11%] bg-[radial-gradient(146.74%_146.73%_at_50%_50%,_#BBBD8D_0%,_#7C6A0A_100%)]' style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}>
                <p className='w-max-[154px text-[50px] text-center text-blanco'>Gestión Mental</p>
            </div>

            <div className='w-[380px] h-[321px] flex justify-center items-center bg-[url(./src/assets/img/dark_green_rectangle.png)] bg-cover bg-no-repeat absolute left-[42.5%] top-[30%]'>
                
                <p className='text-center max-w-[307px] text-verde-oscuro text-[22px]'>
                    Abarca las tareas de coordinación, planificación y supervisión. Aunque implican un tiempo difuso, pueden suponer una fuerte carga mental y emocional (organizar una alimentación equilibrada, recordar que alguien tiene alergia al huevo, saber que falta leche).
                </p>
                
            </div>

        </div>
    </>
  )
}
