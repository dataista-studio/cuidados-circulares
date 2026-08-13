import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";


import bigHandL from "../../assets/img/big_hand_l_transparent_light.png";
import bigHandR from "../../assets/img/big_hand_r_transparent_light.png";
import mediumHandL from "../../assets/img/medium_hand_l_transparent.png";
import mediumHandR from "../../assets/img/medium_hand_r_transparent.png";
import smallHandL from "../../assets/img/small_hand_l_transparent_light.png";
import smallHandR from "../../assets/img/small_hand_r_transparent_light.png";
import darkGreenRectangle from "../../assets/img/dark_green_rectangle.png";

export default function Hands3({progress}) {
    
  return (
    <>
        <div> 
            <img
                    src={bigHandL}
                    alt=""
                    className="h-[355.95px] w-auto z-10 absolute left-0 top-[45%]"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                    src={bigHandR}
                    alt=""
                    className="h-[427.14px] w-auto z-10 absolute right-0 top-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

            <img
                    src={mediumHandL}
                    alt=""
                    className="w-auto h-[441.666px] z-10 absolute bottom-0 left-[12%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src={mediumHandR}
                    alt=""
                    className="w-auto h-[441.666px] z-10 absolute bottom-0 right-[12%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src={smallHandL} alt="" className="w-auto h-[277px] z-10 absolute bottom-0 left-[37.5%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src={smallHandR} alt="" className="w-auto h-[277px] z-10 absolute bottom-0 right-[37.5%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />

            <div className="absolute bottom-[-340px] left-1/2 -translate-x-1/2 z-0">
                
                <div
                    className='w-[740px] h-[740px] flex justify-center rounded-full'
                    style={{
                        transform: getTransform({ progress, direction: "bottom", distance: 80 }),
                        background: "radial-gradient(50% 50% at 50% 50%, #BBBD8D 0%, #7C6A0A 100%)"
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
                        src={darkGreenRectangle}
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
