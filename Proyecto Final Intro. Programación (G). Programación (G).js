function calcularSeguro(precioBase, edadAsegurado, edadConyuge, numeroHijos) {
    if (edadAsegurado < 18 || edadConyuge < 18) {
        console.log("La persona a asegurar debe ser mayor de edad.");
        return;
    }

    let recargoAsegurado = 0;
    let recargoConyuge = 0;
    let recargoHijos = 0;

    // Recargo por edad del asegurado
    if (edadAsegurado >= 18 && edadAsegurado <= 24) {
        recargoAsegurado = 0.10 * precioBase; // 10% de recargo
    } else if (edadAsegurado >= 25 && edadAsegurado <= 49) {
        recargoAsegurado = 0.20 * precioBase; // 20% de recargo
    } else if (edadAsegurado >= 50) {
        recargoAsegurado = 0.30 * precioBase; // 30% de recargo
    }

    // Recargo por edad del cónyuge
    if (edadConyuge >= 18 && edadConyuge <= 24) {
        recargoConyuge = 0.10 * precioBase; // 10% de recargo
    } else if (edadConyuge >= 25 && edadConyuge <= 49) {
        recargoConyuge = 0.20 * precioBase; // 20% de recargo
    } else if (edadConyuge >= 50) {
        recargoConyuge = 0.30 * precioBase; // 30% de recargo
    }

    // Recargo por número de hijos
    recargoHijos = numeroHijos * 0.20 * precioBase; // 20% por hijo

    // Cálculo del precio final
    let precioFinal = precioBase + recargoAsegurado + recargoConyuge + recargoHijos;

    console.log(`Precio base: Q.${precioBase}`);
    console.log(`Recargo por asegurado (edad ${edadAsegurado} años): Q.${recargoAsegurado}`);
    console.log(`Recargo por cónyuge (edad ${edadConyuge} años): Q.${recargoConyuge}`);
    console.log(`Recargo por hijos (${numeroHijos} hijos): Q.${recargoHijos}`);
    console.log(`Precio final del seguro: Q.${precioFinal}`);
}

// Ejemplo de uso:
let precioBase = 2000;
let edadAsegurado = 23;
let edadConyuge = 26;
let numeroHijos = 2;

calcularSeguro(precioBase, edadAsegurado, edadConyuge, numeroHijos);