const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Bruna', nota: 7 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Lucas', nota: 6 },
    { nome: 'Barbara', nota: 4 },
    { nome: 'Ana Clara', nota: 4 },
    { nome: 'Laura', nota: 10 },
    { nome: 'Levi', nota: 10 },
    { nome: 'Iole', nota: 9 },
    { nome: 'Jairo', nota: 0 },
    { nome: 'Luiza', nota: 0 },
    { nome: 'Marcos', nota: 7 },
    { nome: 'Amanda', nota: 6 },
    { nome: 'Juares', nota: 7 },
    { nome: 'Claudia', nota: 8 },
    { nome: 'Moises', nota: 4 },
    { nome: 'Bianca', nota: 6 },
    { nome: 'Junior', nota: 8 },
    { nome: 'Camila', nota: 9 },
];

const filtrarAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

const filtrarReprovados = alunos => alunos.filter(aluno => aluno.nota < 6);

const calcularPorcentagens = alunos => {
    const total = alunos.length;
    const aprovados = filtrarAprovados(alunos).length;
    const reprovados = filtrarReprovados(alunos).length;

    return {
        aprovados: ((aprovados / total) * 100).toFixed(2) + '%',
        reprovados: ((reprovados / total) * 100).toFixed(2) + '%'
    };
};

const aprovados = filtrarAprovados(alunos);
const reprovados = filtrarReprovados(alunos);
const porcentagens = calcularPorcentagens(alunos);

console.log('Alunos Aprovados:', aprovados);
console.log('Alunos Reprovados:', reprovados);
console.log('Porcentagens:', porcentagens);