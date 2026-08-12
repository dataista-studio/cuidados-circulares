
import lineHand1 from "../assets/img/line-hand-1.svg";
import lineHand2 from "../assets/img/line-hand-2.svg";


export default function SeccionI() {
    

    return (

        
        <div className="h-screen w-screen bg-verde-claro flex justify-center items-start relative">
            
            <div className="flex flex-col  text-blanco max-w-[530px] gap-10 mt-20">
                
                <p className="text-[91px] max-w-[336px] font-heading leading-[1.1]">
                    ¿Qué son los cuidados?
                </p>

                <p className="text-[22px] text-white font-serif z-10">
                    Según la organización de naciones unidas “los cuidados son las actividades que regeneran diaria y 
                    generacionalmente el bienestar físico y emocional de las personas. 
                    Incluye las tareas cotidianas de gestión y sostenimiento de la vida, 
                    como el mantenimiento de los espacios y bienes domésticos, el cuidado de los cuerpos, 
                    la educación y formación de las personas, el mantenimiento de las relaciones sociales o el 
                    apoyo psicológico a los miembros de la familia”.
                </p>

                {/* <p className="text-[22px] text-white mt-2 font-serif relative z-10">
                    Las políticas de cuidado reconocen que <span className="font-bold">toda persona tiene simultáneamente 
                        <div class="relative">
                            <span>
                                el derecho a recibir cuidado y la capacidad de
                            </span>

                            <img
                                src={lineHand1}
                                alt=""
                                class="absolute left-0 -bottom-2 w-max"
                            />
                        </div>
                        entregarlo a lo largo de su vida</span>. 
                </p> */}

                <p className="text-[22px] text-white mt-2 font-serif relative z-10">
                    Las políticas de cuidado reconocen que{" "}
                    <span className="font-bold">
                        toda persona tiene simultáneamente{" "}
                        <span className="relative">
                            <span>
                                el derecho a recibir cuidado y la capacidad de
                            </span>

                            <img
                                src={lineHand1}
                                alt=""
                                className="absolute left-0 -bottom-[0.2rem] w-max"
                            />
                        </span>{" "}

                        <span className="relative">
                            <span>
                                entregarlo a lo largo de su vida.
                            </span>

                            <img
                                src={lineHand2}
                                alt=""
                                className="absolute left-0 -bottom-[0.5rem] w-max"
                            />
                        </span>
                    </span>
                </p>
            </div>

            <div className="flex items-center justify-center gap-10 relative mt-20">

                <p className="text-[50px] text-white font-heading">Cuidar</p>

                <img src="./src/assets/img/arrow_down.png" alt="" className="absolute top-[-5%] right-[25%] w-[388px] h-[111px]"/>

                    <img src="./src/assets/img/arrow_up.png" alt="" className="absolute bottom-[-5%] right-[25%] w-[388px] h-[111px]"/>
                <img 
                    src="./src/assets/img/hands.png" 
                    alt="" 
                    className="h-[271px] w-[267px]" 
                />
    
                <p className="text-[50px] text-white font-heading">Ser cuidado</p>

            </div>
            
        </div>
        
    );
}