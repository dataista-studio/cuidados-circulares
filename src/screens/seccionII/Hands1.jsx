import React from 'react'

import { getTransform, useScrollProgress, getOpacity } from "./Utils";

export default function Hands1({progress}) {
  return (
    <>
        <div> 
            <img
                    src="./src/assets/img/big_hand_l.png"
                    alt=""
                    className="h-[355.95px] w-auto absolute left-0 top-[70%] -translate-y-1/2"
                    style={{
                        transform: `${getTransform({  progress, direction: "left" })} translateY(-50%)`
                        
                    }}
                />

            <img
                src="./src/assets/img/big_hand_r.png"
                alt=""
                className="h-[355.95px] w-auto absolute right-0 top-[70%] -translate-y-1/2"
                style={{
                    transform: `${getTransform({ progress, direction: "right" })} translateY(-50%)`
                }}
            />

            <img
                    src="./src/assets/img/medium_hand_l.png"
                    alt=""
                    className="h-[426px] w-auto absolute bottom-0 right-[61.5%]"
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />

            <img
                    src="./src/assets/img/medium_hand_r.png"
                    alt=""
                    className="h-[426px] w-auto absolute bottom-0 right-[21.5%] "
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                    }}
                />

            <img src="./src/assets/img/small_hand_l.png" alt="" className="w-auto h-[261px] absolute bottom-0 left-[40.95%]" 
                    style={{
                        transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(50%)`
                    }}
                />
                
            <img src="./src/assets/img/small_hand_r.png" alt="" className="w-auto h-[261px] absolute bottom-0 right-[40.95%]" 

                style={{
                    transform: `${getTransform({ progress, direction: "bottom", distance: 120 })} translateX(-50%)`
                }}

                />


        </div>
    </>
  )
}
