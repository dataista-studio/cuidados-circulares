export const getParagraphText = ( country ) => {
    return country === 'México'
        ? "La brecha de género del perfil feminizado de los cuidadores se repite en todos los segmentos etáreos. Las mujeres cuidan más en todos los ciclos de nuestra vida."
        : "La brecha de género en el cuidado se traduce en una pobreza de tiempo permanente, las mujeres dedican más tiempo a cuidar en todos los ciclos de nuestra vida y eso se repite en toda la región.";
}

export const getEnglishName = ( country ) => {
    return country === 'México'
        ? "Mexico"
        : (
            country === 'Chile'
                ? "Chile"
                : "Dominican Rep." 
        )
}

export const getChartTitle = ( country ) => {
    return country === 'México'
        ? "Cantidad de personas cuidadoras principales por rango etáreo, según sexo."
        : (
            country === 'Chile'
                ? "Horas diarias dedicadas al trabajo de cuidados no remunerados."
                : "Promedio de horas semanales dedicadas al trabajo no remunerado." 
        )
}

export const getChartSource = ( country ) => {
    return country === 'México'
        ? "Fuente: Enasic, 2022"
        : (
            country === 'Chile'
                ? "Fuente: Enut, 2023"
                : "Fuente: Enhogar, 2021" 
        )
}

export const getChartVariable = ( country ) => {
    return country === 'México'
        ? "Cuidadores principales"
        : (
            country === 'Chile'
                ? "Horas diarias"
                : "Horas semanales" 
        )
}