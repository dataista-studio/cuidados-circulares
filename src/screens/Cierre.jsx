export default function Cierre() {
    return (
        <div  className="h-screen w-screen bg-verde-medio flex  flex-col justify-center items-center gap-12">

            <div className="relative w-[400px]">

                <p className="text-[70px] text-salmon font-heading leading-[1.1] text-center">Cuidados<br/>Circulares </p>

                <img src="./src/assets/img/arrow_down.png" alt="" className="absolute top-[-40%] right-[-5%] w-full h-auto"/>

                <img src="./src/assets/img/arrow_up.png" alt="" className="absolute bottom-[-20%] right-[5%] w-full h-auto"/>

            </div>
            
            <div className="flex flex-col text-blanco max-w-[714px] gap-15 font-serif">
                <p className="text-[22px]">
                    Que esta realidad siga siendo invisible no es un accidente: es el resultado de no medir, 
                    no desagregar, no nombrar. Como muestra esta misma infografía, los datos disponibles son 
                    aún parciales y no alcanzan a todos los territorios de la región. Esa ausencia no es neutral: 
                    es en sí misma una forma de invisibilización. Contar con datos desagregados por sexo, edad y 
                    territorio es la condición mínima para que las políticas públicas puedan intervenir donde más 
                    se necesita, y para que el derecho humano al cuidado deje de ser una promesa.
                </p>

                <p className="text-[22px]">
                    Esta visualización es un llamado a mirar las cifras en detalle, <span className="font-bold">
                    porque lo que no se mide no existe. 
                    Lo que se nombra, se puede transformar.
                    </span>
                </p>
            </div>
            
        </div>
    )
};