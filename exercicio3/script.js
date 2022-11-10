let nacionalidade = prompt("Escreva aqui sua nacionalidade")

const nacioVerificação = () => {
    if(nacionalidade == "brasileira"){
        console.log("Nacionalidade : Brasileira")
    }else if (nacionalidade == "argentina"){
        console.log("Nacionalidade: Argentina")
    }else if (nacionalidade == "uruguaia"){
        console.log("Nacionalidade: Uruguaia")
    }else if (nacionalidade == "chilena"){
        console.log("Nacionalidade: Chilena")
    }else if (nacionalidade == "colombiana"){
        console.log("Nacionalidade: Colombiana")
    }else {
        console.log("Nacionalidade não encontrada")
    }
}

nacioVerificação(nacionalidade)