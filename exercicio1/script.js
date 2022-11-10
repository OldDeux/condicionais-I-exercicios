//Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

/* const num = 2

if (num % 2 === 0) {
    console.log("O número é par");
} */

const num = (num) => {
    if (num % 2 === 0) {
    return "o numero é par"
    }
}
console.log(num(4))
