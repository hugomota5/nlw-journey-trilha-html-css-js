// object {}
const atividade = {
  // propriedade+valor
  nome: "Almoço",
  // colocar data formato americano
  data: new Date("2024-07-08 10:00"),
  finalizada: false,
};

// lista, array, vetor []
let atividades = [
  atividade,
  {
    nome: "Acedemia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gamming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
  },
];
// criando função - arrow function - sequencia de código
const criarItemDeAtividade = (atividade) => {
  // lógica
  let input = '<input type="checkbox" ';
  // condicional
  if (atividade.finalizada) {
    input += "checked";
  }
  input += " />";
  //   alert(input)
  // troca usando ${objeto.atributo} *interpolação
  return `<div>
            ${input}
            <span>${atividade.nome}</span>
            <time>${atividade.data}</time>
        </div>`;
};
// Processamento e apresentação de dados
// Pegando elemento section e atribuindo a variável
const section = document.querySelector("section");
// estrutura de repetição
for (let atividade of atividades) {
  // Manipulando/Trabalhando com o HTML - objeto section
  // encurtador de contatenação "+=" = "o mesmo concatena com a mesma coisa"
  section.innerHTML += criarItemDeAtividade(atividade);
}
