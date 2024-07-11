// objeto {}
const atividade = {
  // propriedade+valor
  nome: "Almoço",
  // data no formato americano
  data: new Date("2024-07-08 10:00"),
  finalizada: false,
};

// lista, array, vetor []
let atividades = [
  atividade,
  {
    nome: "Academia em grupo",
    data: new Date("2024-07-09 12:00"),
    finalizada: false,
  },
  {
    nome: "Gaming session",
    data: new Date("2024-07-09 16:00"),
    finalizada: true,
  },
];

// criando função - arrow function - sequência de código
const criarItemDeAtividade = (atividade) => {
  // lógica
  let input = '<input type="checkbox" ';
  // condicional
  if (atividade.finalizada) {
    input += "checked";
  }
  input += " />";
  //   alert(input)
  // interpolação usando ${objeto.atributo}
  return `<div>
              ${input}
              <span>${atividade.nome}</span>
              <time>${atividade.data}</time>
          </div>`;
};

// Processamento e apresentação de dados
// Pegando elemento section e atribuindo à variável
const section = document.querySelector("section");

// estrutura de repetição
for (let atividade of atividades) {
  // Manipulando/Trabalhando com o HTML - objeto section
  // encurtador de concatenação "+=" = "o mesmo concatena com a mesma coisa"
  section.innerHTML += criarItemDeAtividade(atividade);
}
