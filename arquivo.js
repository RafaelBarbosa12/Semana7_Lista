var matrizA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrizB = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
var matrizResultado = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        for(var k = 0; k < 3; k++){
            matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}

console.log(matrizResultado);
