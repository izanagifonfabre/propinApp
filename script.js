function update(){
   let tarifa = document.getElementById("tuTarifa").value; 
   let porcentajePropina = document.getElementById("inputPropina").value; 
   let division = document.getElementById("divisionInput").value; 
   console.log(tarifa, porcentajePropina, division)
}

let app = document.getElementById("app");
app.addEventListener('input', update);