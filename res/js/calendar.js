function calendar(){
  var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var date = new Date();

  var month = date.getMonth();
  var day = date.getDate();

  divMonth = document.getElementById('month');
  divDay = document.getElementById('day');

  formatedMont = months[month];

  console.log(formatedMont + " " + day);

  divMonth.innerHTML = formatedMont;
  divDay.innerHTML = day;
}
