function formatMoney(value){
   value = Math.ceil(value * 100) / 100;
   value = value.toFixed(2);
   return "$" + value;
}
function formatoDivision(value){
   if (value === "1") return value + " persona"
   return value + " personas";
}
function update(){
   let tarifa = Number(document.getElementById("tuTarifa").value); 
   let porcentajePropina = document.getElementById("inputPropina").value; 
   let division = document.getElementById("divisionInput").value; 
   let valorPropina = tarifa * (porcentajePropina / 100);
   let propinaCadaUno = valorPropina / division;
   let nuevoTotalIndividual = (tarifa / division) + propinaCadaUno;
   document.getElementById("porcentajePropina").innerHTML = porcentajePropina + "%";
   document.getElementById("valorPropina").innerHTML = formatMoney(valorPropina);
   document.getElementById("totalConPropina").innerHTML = formatMoney(tarifa + valorPropina);
   document.getElementById("cantidadPersonas").innerHTML = formatoDivision(division);
   document.getElementById("tarifaDividida").innerHTML = formatMoney(nuevoTotalIndividual);
   document.getElementById("propinaDividida").innerHTML = formatMoney(propinaCadaUno);
}

let app = document.getElementById("app");
app.addEventListener('input', update);