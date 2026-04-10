import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands1({progress}) {
  return (
    <>
        <div> 
            <img
                    src="./src/assets/img/big_hand_l.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute left-0 top-[70%] -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                    src="./src/assets/img/big_hand_r.png"
                    alt=""
                    className="h-[237.3px] w-[619.71px] absolute right-0 top-[70%] -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "right" })} translateY(-50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_l.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[60%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_r.png"
                    alt=""
                    className="w-[221.41px] h-[490.74px] absolute bottom-0 right-[30%] "
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src="./src/assets/img/small_hand_l.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 left-[43.5%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src="./src/assets/img/small_hand_r.png" alt="" className="w-[82px] h-[277px] absolute bottom-0 right-[43.5%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />


        </div>
    </>
  )
}
