// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
  
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    alunosDaEscola.push({
        nome:nome,
        notas:[],
        cursos:[],
        faltas:0
    })
    console.log("Aluno adicionado com sucesso")
}

function consoleLogAluno(value){
    console.log("-".repeat(20))
    console.log("Nome do Aluno: " + value.nome)
    console.log("Notas do aluno: " + value.notas)
    console.log("Cursos cadastrados:")
    if(value.cursos.length >0){
        value.cursos.forEach((curso)=>{
            console.log("       "+"-".repeat(20))
            console.log("       Nome do curso: " + curso.nomeDoCurso)
            console.log("       Matricula: " + curso.dataMatricula)
            console.log("       "+"-".repeat(20))
        })
    }else{
        console.log("       Nenhum cadastrado")
    }
    console.log("Faltas: " + value.faltas)
    console.log("-".repeat(20))


}

function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    alunosDaEscola.forEach((value)=>{
        ConsoleLogAluno(value)
    })
}

function buscarAluno(nome){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    let procurado = alunosDaEscola.find(a=>a.nome==nome)
    if(procurado!=undefined){
        console.log("Aluno encontrado!")
        
    }else{
        console.log("Aluno não encontrado!")
    }
    return procurado

}

function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    if (aluno != undefined){
        aluno.cursos.push({
            nomeDoCurso:curso,
            dataMatricula: new Date()
        })
        console.log("Matricula efetuada com sucesso!")
        ConsoleLogAluno(aluno)
    }else{
        console.log("Aluno não cadastrado!")
    }

}

function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

   if (aluno != undefined && aluno.cursos.length >0){
        aluno.faltas = aluno.faltas +1
        console.log("Falta aplicada com sucesso!")
        ConsoleLogAluno(aluno)
    }else if(aluno == undefined){
        console.log("Aluno não cadastrado")
    }else if(aluno.cursos.length == 0){ 
        console.log("Aluno não cadastrado em nenhum curso!")
    }
}

function aplicarNota(aluno,nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   if (aluno != undefined && aluno.cursos.length >0){
        aluno.notas.push(nota)
        console.log("Nota adicionada com sucesso!")
        ConsoleLogAluno(aluno)
    }else if(aluno == undefined){
        console.log("Aluno não cadastrado")
    }else if(aluno.cursos.length == 0){ 
        console.log("Aluno não cadastrado em nenhum curso!")
    }

}



function aprovarAluno(aluno){
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
   if (aluno != undefined && aluno.cursos.length >0){
        let MediaAluno = aluno.notas.reduce((nota,sum)=>nota+sum)/aluno.notas.length
        if (MediaAluno > 7 && aluno.faltas<=3){
            console.log("Aluno "+aluno.nome+" APROVADO com média "+MediaAluno+" e "+aluno.faltas+" faltas!")
        }else{
            console.log("Aluno "+aluno.nome+" REPROVADO com média "+MediaAluno+" e "+aluno.faltas+" faltas!")
        }
        
    }else if(aluno == undefined){
        console.log("Aluno não cadastrado")
    }else if(aluno.cursos.length == 0){ 
        console.log("Aluno não cadastrado em nenhum curso!")
    }

}
   