// bibliotecas e códigos de terceiros
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format("DD"),
      semana: {
        curto: dayjs(data).format("ddd"),
        longo: dayjs(data).format("dddd"),
      },
    },
    mes: dayjs(data).format("MMMM"),
    hora: dayjs(data).format("HH:mm"),
  };
};

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
// atividades = [];
// criando função - arrow function - sequência de código
const criarItemDeAtividade = (atividade) => {
  // lógica
  let input = `
  <input 
  onchange="concluirAtividade(event)"
  value="${atividade.data}"
  type="checkbox" 
  `;
  // condicional
  if (atividade.finalizada) {
    input += "checked";
  }
  input += " />";
  //   alert(input)
  const formatar = formatador(atividade.data);
  // interpolação usando ${objeto.atributo}
  return `
  <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>
      ${formatar.dia.semana.longo}, 
      dia ${formatar.dia.numerico}
      de ${formatar.mes} 
      às ${formatar.hora}h </time>
  </div>
  `;
};
const atualizarListaDeAtividades = () => {
  // Processamento e apresentação de dados
  // Pegando elemento section e atribuindo à variável
  const section = document.querySelector("section");
  section.innerHTML = "";
  // verificar se a lista está vazia
  // ver se(if) tal coisa está ou não
  if (atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`;
    // função que encontra um return para a execução
    return;
  }
  // estrutura de repetição
  for (let atividade of atividades) {
    // Manipulando/Trabalhando com o HTML - objeto section
    // encurtador de concatenação "+=" = "o mesmo concatena com a mesma coisa"
    section.innerHTML += criarItemDeAtividade(atividade);
  }
};

atualizarListaDeAtividades();

const salvarAtividade = (event) => {
  event.preventDefault();
  const dadosDoFormulario = new FormData(event.target);

  const nome = dadosDoFormulario.get("atividade");
  const dia = dadosDoFormulario.get("dia");
  const hora = dadosDoFormulario.get("hora");
  const data = `${dia} ${hora}`;

  const novaAtividade = {
    nome,
    data,
    finalizada: false,
  };

  const atividadeExiste = atividades.find((atividade) => {
    return atividade.data == novaAtividade.data;
  });

  if (atividadeExiste) {
    return alert("Dia/Hora não disponível");
  }

  atividades = [novaAtividade, ...atividades];
  atualizarListaDeAtividades();
};

const criarDiasSelecao = () => {
  const dias = [
    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03",
  ];

  let diasSelecao = "";

  for (let dia of dias) {
    const formatar = formatador(dia);
    const diaFormatado = `
    ${formatar.dia.numerico} de 
    ${formatar.mes}
    `;
    diasSelecao += `
    <option value="${dia}">${diaFormatado}</option>
    `;
  }

  document.querySelector('select[name="dia"]').innerHTML = diasSelecao;
};
criarDiasSelecao();

const criarHorasSelecao = () => {
  let horasDisponiveis = "";

  for (let i = 6; i < 23; i++) {
    const hora = String(i).padStart(2, "0");
    horasDisponiveis += `
    <option value="${hora}:00">${hora}:00</option>`;
    horasDisponiveis += `
    <option value="${hora}:30">${hora}:30</option>`;
  }

  document.querySelector('select[name="hora"]').innerHTML = horasDisponiveis;
};
criarHorasSelecao();

const concluirAtividade = (event) => {
  const input = event.target;
  const dataDesteInput = input.value;

  const atividade = atividades.find((atividade) => {
    return atividade.data == dataDesteInput;
  });

  if (!atividade) {
    return;
  }

  atividade.finalizada = !atividade.finalizada;
};
