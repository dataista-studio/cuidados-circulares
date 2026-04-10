export default function Cierre() {
    return (
        <div  className="h-screen w-screen bg-verde-medio flex  flex-col justify-center items-center gap-12">

            <div className="relative">

                <p className="text-[50px] text-salmon">Cuidados <br/>Circulares </p>

                <img src="./src/assets/img/arrow_down.png" alt="" className="absolute top-[-5%] right-[32%] w-[388px] h-[111px]"/>

                <img src="./src/assets/img/arrow_up.png" alt="" className="absolute bottom-[-5%] right-[35%] w-[388px] h-[111px]"/>

            </div>
            
            <div className="flex flex-col text-blanco max-w-[714px] gap-20">
                <p className="text-30-px">
                    Que esta realidad siga siendo invisible no es un accidente: es el resultado de no medir, 
                    no desagregar, no nombrar. Como muestra esta misma infografía, los datos disponibles son 
                    aún parciales y no alcanzan a todos los territorios de la región. Esa ausencia no es neutral: 
                    es en sí misma una forma de invisibilización. Contar con datos desagregados por sexo, edad y 
                    territorio es la condición mínima para que las políticas públicas puedan intervenir donde más 
                    se necesita, y para que el derecho humano al cuidado deje de ser una promesa.
                </p>

                <p className="text-30-px">
                    Esta visualización es un llamado a mirar las cifras en detalle, porque lo que no se mide no existe. 
                    Lo que se nombra, se puede transformar.
                </p>
            </div>

            <div className="flex items-center text-blanco gap-5">
                <p>Diseñado y desarrollado por</p>
                <img src="./src/assets/img/logo_dataista.png" alt="" className="aw-[112px] h-[39px]"/>
            </div>

            
            
        </div>
    )
};