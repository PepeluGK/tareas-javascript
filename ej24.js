


function ordenarArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar los elementos si el actual es mayor que el siguiente
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const numeros = [34, 7, 23, 32, 5, 62, 78, 1];

const numerosOrdenados = ordenarArray(numeros);

console.log("Array ordenado: ", numerosOrdenados);