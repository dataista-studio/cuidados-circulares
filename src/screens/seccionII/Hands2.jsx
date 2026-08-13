import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands2({progress}) {
  return (
    <>
        <div> 
            <img
                    src="./src/assets/img/big_hand_l_transparent_light.png"
                    alt=""
                    className="h-[355.95px] w-auto z-10 absolute left-0 top-[45%]"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                    src="./src/assets/img/big_hand_r_transparent_light.png"
                    alt=""
                    className="h-[427.14px] w-auto z-10 absolute right-0 top-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_l_transparent_light.png"
                    alt=""
                    className="w-auto h-[441.666px] z-10 absolute bottom-0 left-[12%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_r_transparent_light.png"
                    alt=""
                    className="w-auto h-[441.666px] z-10 absolute bottom-0 right-[12%] "
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src="./src/assets/img/small_hand_l_transparent.png" alt="" className="w-auto h-[277px] z-10 absolute bottom-0 left-[37.5%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src="./src/assets/img/small_hand_r_transparent.png" alt="" className="w-auto h-[277px] z-10 absolute bottom-0 right-[37.5%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                
                <div
                    className='w-[275px] h-[275px] flex items-center justify-center rounded-full'
                    style={{
                        transform: getTransform({ progress, direction: "bottom", distance: 120 }),
                        background: "radial-gradient(146.74% 146.73% at 50% 50%, #FA9500 0%, #D9D9D9 100%)"
                    }}
                >
                    <p className='max-w-[154px] text-[50px] text-center text-blanco font-heading leading-[1]'>
                        Cuidados<br/>Directos
                    </p>
                </div>

            </div>

            <div className="absolute left-1/2 top-[30%] -translate-x-1/2">

                <div
                    className='w-[359px] h-[321px] flex justify-center items-center 
                    bg-[url(./src/assets/img/orange_rectangle.png)] bg-cover bg-no-repeat'
                    style={{
                        transform: getTransform({ progress, direction: "bottom", distance: 80 }) // ajusta si quieres
                    }}
                >
                    <p className='text-center max-w-[307px] text-naranjo-claro text-[22px] font-serif'>
                        Aquellas tareas que implican la interacción de personas, como cambiar de ropa a un bebé, dar de comer a una persona anciana, acompañar a la pareja al centro de salud y hablar por teléfono con un familiar para saber cómo se encuentra.
                    </p>
                </div>

            </div>
        </div>
    </>
  )
}
