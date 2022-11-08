const escola =

    [{
        nome: 'Turma M1',
        aluno: [{
            nome: 'Gustavo',
            nota: 8.1
        }, {

            nome: 'Ana',
            nota: 9.3
        }]
    },

    {
        nome: 'Turma M2',
        aluno: [{
            nome: 'Gustavo',
            nota: 8.1
        }, {
            nome: 'Gustavo',
            nota: 8.1
        }]
    }]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.aluno.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)