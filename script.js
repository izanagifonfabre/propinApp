function update(){
   let tarifa = Number(document.getElementById("tuTarifa").value); 
   let porcentajePropina = document.getElementById("inputPropina").value; 
   let division = document.getElementById("divisionInput").value; 
   let valorPropina = tarifa * (porcentajePropina / 100);
   let propinaCadaUno = valorPropina / division
   let nuevoTotalIndividual = (tarifa + propinaCadaUno) / division;
   document.getElementById("porcentajePropina").innerHTML = porcentajePropina + "%";
   document.getElementById("valorPropina").innerHTML = valorPropina;
   document.getElementById("totalConPropina").innerHTML = tarifa + valorPropina;
   document.getElementById("cantidadPersonas").innerHTML = division;
   document.getElementById("tarifaDividida").innerHTML = nuevoTotalIndividual;
   document.getElementById("propinaDividida").innerHTML = propinaCadaUno;
}

let app = document.getElementById("app");
app.addEventListener('input', update);