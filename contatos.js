const contatos = [
  {
    nome: "João Silva",
    telefone: "11999999999",
    email: "joao.silva@email.com"
  },
  {
    nome: "Maria Souza",
    telefone: "21988888888",
    email: "maria.souza@email.com"
  },
  {
    nome: "Pedro Santos",
    telefone: "31977777777",
    email: "pedro.santos@email.com"
  }
];

//push
contatos.push({
  nome: "Maisie Haley",
  telefone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

//exibir
console.log(contatos);

//primeiro contato
const primeiroContato = contatos[0];
console.log(`${primeiroContato.nome} / ${primeiroContato.telefone} / ${primeiroContato.email}`);

// último contato
const ultimoContato = contatos[contatos.length - 1];
console.log(`${ultimoContato.nome} / ${ultimoContato.telefone} / ${ultimoContato.email}`);