//Aqui ele apenas mostra o horario atual com base na sua localização.
console.log(new Date());
//Colocando o "0" ele pega a primeira data que o javascript usa de referência
console.log(new Date(0));

// Exibe o número de milisegundos desde a criação da referência.
console.log(new Date().getTime());

// Define uma data com ano, mês (0 - 11), dia.
console.log(new Date(2025, 5, 10));

// Define ano, mês (0-11) e dia e hora, minuto e segundo.
console.log(new Date(2025, 5, 10, 12, 20, 0));

// Definindo data e hora com string.
console.log(new Date("2025-06-10T12:23:00"));

// Definindo data e hora com string também.
console.log(new Date("June 10, 2025 12:24:00"));
