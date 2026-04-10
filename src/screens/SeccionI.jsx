
export default function SeccionI() {
    

    return (

        
        <div  className="h-screen w-screen bg-verde-claro flex justify-center items-start relative">
            
            <img className="w-[553px] h-[563px] left-0 bottom-0 absolute" alt="" src="./src/assets/img/intro_textures_left.png" />

            <img className="w-[553px] h-[563px] right-0 top-0 absolute" alt="" src="./src/assets/img/intro_textures_right.png" />

            <div className="flex flex-col  text-blanco max-w-[530px] gap-20 mt-20">
                
                <p className="text-[91px] max-w-[336px]">
                    ¿Qué son los cuidados?
                </p>

                <p className="text-30-px">
                    Según la organización de naciones unidas “los cuidados son las actividades que regeneran diaria y 
                    generacionalmente el bienestar físico y emocional de las personas. 
                    Incluye las tareas cotidianas de gestión y sostenimiento de la vida, 
                    como el mantenimiento de los espacios y bienes domésticos, el cuidado de los cuerpos, 
                    la educación y formación de las personas, el mantenimiento de las relaciones sociales o el 
                    apoyo psicológico a los miembros de la familia”.
                </p>

                <p className="text-30-px">
                    Las políticas de cuidado reconocen que toda persona tiene simultáneamente el derecho a recibir 
                    cuidado y la capacidad de entregarlo a lo largo de su vida.
                </p>
            </div>

            <div className="flex items-center justify-center gap-10 relative">

                <p className="text-[50px] text-white">Cuidar</p>

                <img src="./src/assets/img/arrow_down.png" alt="" className="absolute top-[-5%] right-[32%] w-[388px] h-[111px]"/>

                    <img src="./src/assets/img/arrow_up.png" alt="" className="absolute bottom-[-5%] right-[35%] w-[388px] h-[111px]"/>
                <img 
                    src="./src/assets/img/hands.png" 
                    alt="" 
                    className="h-[271px] w-[267px]" 
                />
    
                <p className="text-[50px] text-white">Ser cuidado</p>

            </div>
            
        </div>
        
    );
}