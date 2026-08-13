
import logoDataista from "../assets/img/logo_dataista.png"
import logoDataAccion from "../assets/img/logo_dataaccion.png"

export default function Credits() {
    return (
        <div  className="h-screen w-screen bg-verde-oscuro flex  flex-col justify-center items-center gap-12 font-serif">

            <div className="flex items-center text-blanco gap-5">
                <p className="text-[29px]">Este proyecto fue diseñado y desarrollado por</p>
                <a href="https://www.dataista.studio" target="_blank">
                    <img src={logoDataista} alt="" className="w-[112px] h-[39px]"/>
                </a>
            </div>

            <div className="flex items-center text-blanco gap-5">
                <p className="text-[29px]">Para</p>
                <img src={logoDataAccion} alt="" className="w-[208px] h-[53px]"/>
            </div>

 
            <div  className="text-[22px] text-verde-claro flex flex-col gap-2">

                <h4 className="font-bold">Datos</h4>

                <a className="underline" href="https://www.inegi.org.mx/contenidos/programas/enasic/2022/doc/enasic_2022_presentacion.pdf">Encuesta Nacional sobre Uso del Tiempo (ENASIC), INEGI (2022).</a>

                <a className="underline"  href="https://observatorio.ministeriodesarrollosocial.gob.cl/storage/docs/cuidados/Informe_de_Cuidados-2024.pdf">Informe de cuidados, Observatorio Social. Ministerio de Desarrollo Social y Familia (2024).</a>

                <a className="underline"  href="https://lac.unwomen.org/sites/default/files/Field%20Office%20Americas/Documentos/Publicaciones/2018/11/Estudio%20cuidados/2a%20UNW%20Estudio%20Cuidados-compressed.pdf">Informe “Reconocer, redistribuir y reducir el trabajo de cuidados”, ONU Mujeres (2018).</a>

                <a className="underline"  href="https://www.one.gob.do/media/xlldcplu/panorama-estad%C3%ADstico-116.pdf">Panorama estadístico, Oficina Nacional de Estadística (2024).</a>
                
                <a className="underline"  href="https://oig.cepal.org/sites/default/files/2025-11/original_folleto-repositorio-uso-del-tiempo_04-11-2025.pdf">Repositorio uso del tiempo, Observatorio de Igualdad de Género. CEPAL, ONU Mujeres (2025).</a>
                
            </div>

            <div  className="text-[22px] text-verde-claro flex flex-col gap-2">

                <h4 className="font-bold">Imágenes</h4>

                <div className="grid grid-cols-2 gap-18">

                    <div className="flex flex-col underline">
                        <a href="https://www.pexels.com/es-es/foto/mujer-cama-sentado-habitacion-18459195/">Foto de Jsme MILA de Pexels</a>
                        <a href="https://www.pexels.com/es-es/foto/pecovatelka-chese-seniorku-29354078/">Foto 2 de Jsme MILA de Pexels</a>
                        <a href="https://unsplash.com/es/fotos/un-primer-plano-de-manos-temblando-lDCm3Aw3m0I">Foto de Loume Visser de Unsplash</a>
                        <a href="https://unsplash.com/es/fotos/fotografia-de-enfoque-selectivo-de-mujer-alimentando-bebe-9x3jGcu3qQ0">Foto de Tanaphong Toochinda de Unsplash</a>
                        <a href="https://unsplash.com/es/fotos/foto-en-escala-de-grises-de-la-alimentacion-del-bebe-y1j60Ifj5-M">Foto de Kelly Sikkema de Unsplash</a>
                        <a href="https://www.pexels.com/es-es/foto/calle-nina-acera-nino-13793678/">Foto de Cevahir Babashli de Pexels</a>
                    </div>

                    <div className="flex flex-col underline">
                        <a href="https://www.pexels.com/es-es/foto/naturaleza-amor-mujer-nina-7698667/">Foto de Meruyert Gonullu de Pexels</a>
                        <a href="https://www.pexels.com/photo/medicines-and-pill-organizer-on-the-table-8088903/">Foto de Yaroslav Shuraev de Pexels</a>
                        <a href="https://www.pexels.com/es-es/foto/gente-coche-vehiculo-mayor-6647024/">Foto de RDNE Stock project de Pexels</a>
                        <a href="https://www.pexels.com/photo/person-in-shirt-walking-with-wheelchair-in-park-17214805/">Foto de David Brown de Pexels</a>
                        <a href="https://www.pexels.com/es-es/foto/cama-mayor-tercera-edad-senior-8088595/">Foto de Yaroslav Shuraev de Pexels</a>

                    </div>

                </div>
                
            </div>
            

        </div>
    )
}