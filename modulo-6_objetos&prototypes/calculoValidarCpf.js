//041.031.691-17

//Pegar o primeiro Dígito
/* 
1º -> Multiplicar cada numero por uma sequencia decrescente de 10 a 2
2º -> Somar o resultado das multiplicações e obter o total
3º -> Jogar na formula "11 - (total % 11)" para obter o primeiro digito
Obs.: Se numero for maior que 9 considere como 0

    0x  4x  1x  0x  3x  1x  6x  9x  1x  
    10   9   8   7   6   5   4   3   2
    0   36   8   0  18   5  24  27   2 = Total = 120
    console.log(11 - (120 % 11));
    11 - (120 % 11) = 1 (Primeiro Dígito)
*/

//Pegar o Segundo Dígito -> Realizar os mesmos passos só que com os 9 numeros mais o dígito
/* 
1º -> Multiplicar cada numero por uma sequencia decrescente de 11 a 2
2º -> Somar o resultado das multiplicações e obter o total
3º -> Jogar na formula "11 - (total % 11)" para obter o primeiro digito
Obs.: Se numero for maior que 9 considere como 0

    0x  4x  1x  0x  3x  1x  6x  9x  1x  1x
    11  10   9   8   7   6   5   4   3   2
    0   40   9   0  21   6  30  36   3   2 = Total = 147
    console.log(11 - (147 % 11));
    11 - (147 % 11) = 7 (Segundo Dígito)
*/

// Comprar CPF Dígitado com o CPF de número e dígitos gerados