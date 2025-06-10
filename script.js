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

let date = new Date("2025-06-10T12:27:00");

// Dia da semana contando de 0 à 6 (domingo é 0)
console.log(date.getDay());
// Dias da semana: 0 Domingo, 1 Segunda, 2 Terça etc...

// Dia do mês
console.log(date.getDate());
// Dias do mês também conta a partir do 0.

// Mês (0-11)
console.log(date.getMonth() + 1);

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());

let date2 = new Date("June 10, 2025 12:34:00");

// Modificar o ano.
date2.setFullYear(2030);

// Modificar o mês
date2.setMonth(10);

// Modificar o dia
date2.setDate(20);

// Modificar a hora
date2.setHours(20);

// Modificar o minuto
date2.setMinutes(15);

// Modificar o segundo
date2.setSeconds(10);

console.log(date2);
