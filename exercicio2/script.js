/* let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

if(){

}else{
	
} */

const estudante = (idade, ensinoM, facul) =>{
    if (idade >= 18){
        console.log("A pessoa é maior de idade")
    }else if (idade < 18){
        console.log("A pessoa é menor de idade")
    }
    
    if (ensinoM === true){
        console.log("A pessoa terminou o ensino medio")
    }else{
        console.log("A pessoa não terminou o ensino medio")
    }
    
    if (facul === false){
        console.log("A pessoa não esta cursando alguma faculdade")
    }else{
        console.log("A pessoa esta cursando alguma faculdade")
    }
}

estudante(23, true, false)