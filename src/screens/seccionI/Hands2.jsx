import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands2({progress}) {
  return (
    <>
        <div> 
            <img
                    src="./src/assets/img/big_hand_l.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                    src="./src/assets/img/big_hand_r.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_l.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 left-[20%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_r.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[20%] "
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src="./src/assets/img/small_hand_l_transparent.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 left-[35%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src="./src/assets/img/small_hand_r_transparent.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 right-[35%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />

            <div className='w-[275px] h-[275px] flex items-center justify-center rounded-full absolute bottom-0 right-[35%] bg-[radial-gradient(146.74%_146.73%_at_50%_50%,_#FA9500_0%,_#D9D9D9_100%)]' style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}>
                <p className='w-max-[154px text-[50px] text-center text-blanco'>Cuidados Directos</p>
            </div>

        </div>
    </>
  )
}
