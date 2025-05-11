// Formatação do Horário:

function time_stamp() {
  const display_time = document.getElementById("display-time");
  var current_time = new Date();

  // Função do Javascript para pegar o tempo
  var hours = current_time.getHours();
  var minutes = current_time.getMinutes();

  const time_meridiem = hours >= 12 ? " PM" : " AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Meia-noite o 0 se torna 12

  // Se minutos forem menor que 10, adiciona um 0. Se não, apenas mostrar
  const format_minutes = minutes < 10 ? "0" + minutes : minutes;

  // Formatação para mostrar o horário
  const formatted_time = hours + ":" + format_minutes + time_meridiem;
  display_time.textContent = formatted_time;
}

// Chamar a função para rodar o Time Stamp a cada segundo
setInterval(time_stamp, 1000);
time_stamp();


// Formatação da Data:
	
const display_date = document.getElementById("display-date");
var current_date = new Date();

// Funções do Javascript para pegar as datas
const days = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thusday, ", "Friday, ", "Saturday, "];
var weekday = days[current_date.getDay()]; // Pegar o dia da semana e formatar de acordo com o array de dias
var today = current_date.getDate();
var date_month = current_date.toLocaleString("default", {month: "long"}); // Pegar o mês por extenso

// Função para pegar o ordinal (primeiro, segundo, terceiro ou dias)
function get_ordinal(today) {
  if (today > 3 && today < 21) return "th";
  switch (today % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

// Formatação para mostrar a data
const formatted_date = weekday + today + get_ordinal(today) + " " + date_month;
display_date.textContent = formatted_date;


// Shortcuts Diferenciados:

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "Y") {
    event.preventDefault();
    window.location = "https://youtube.com";
  } else if (event.ctrlKey && event.key === "I") {
    event.preventDefault();
    window.location = "https://www.instagram.com/";
  } else if (event.ctrlKey && event.key === "Z") {
    event.preventDefault();
    window.location = "https://web.whatsapp.com/";
  }
});


// API para o Clima:
//
//
