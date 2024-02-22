//cadastro do aluno que estao com tudo certo
let alunocerto = {
    nome:"Luca Aroeira Crivelaro",
    idade:"17",
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06","2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra:"22002200",
}
//cadastro do aluno que esta errado
let alunoerrado = {
    nome:"Brenda Gomes Dias",
    idade:"12",
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presenca: ["2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-09", "2022-01-10"],
    ra: "22002201",
}
//validacao aluno
function validaraluno(aluno){
    //validacao nome
    function validarnome (aluno){
        const nomeminimo = aluno.nome.length
        if(nomeminimo < 10){
            return console.log("Nome inválido")
        }
        return true
    }
    //validacao idade
    function validaridade (aluno){
        const idademinima = aluno.idade
        if(idademinima < 14){
            return console.log("Idade Inválida")
        }
        return true
    }
    //validacao materia
    function validarmateria (aluno){
        const materias = aluno.cursando.length
        if(materias < 3){
            return console.log("Numero de materias invalidas")
        }
        return true
    }
    //validacao presenca
    function validarpresenca (aluno){
        const presencaminima = aluno.presenca.length
        if(presencaminima < 2){
        return console.log("Presenças insuficientes")
        }
        return true
    }
    //validacao ra
    function validarra(aluno){
        const raminimo = aluno.ra.length
        if(raminimo < 7){
        return console.log("RA incorreto")
        }
        return true 
    }
    return console.log(aluno)
}
