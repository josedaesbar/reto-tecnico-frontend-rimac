export const formatNumber = (data: number) => {
  // Verificar si el número es mayor que 1000
  if (data > 1000) {
    // Convertir el número a una cadena y dividirlo en partes de tres dígitos
    let dataFormated = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return dataFormated
  } else {
    // Si el número es menor o igual a 1000, devolverlo como cadena directamente
    return data.toString()
  }
}
