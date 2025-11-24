//crear clase
class Moneda{
   constructor(m,d,nombre){
       this.monto=m;
       this.divisa=d;
       this.divisasNom=nombre;
       
   }
   //metodo calcular 
   calcularDivisa(){
       const importe=this.monto*this.divisa; 
       return importe.toFixed(2);
   }
   //metodo para mostrar resumen
   generarResumen(){
       const compra=this.calcularDivisa();
       return  `Ventanilla <br> Peso Mexicano: ${this.monto} <br> Divisa: ${this.divisasNom} <br> Monto que recibes: ${this.divisasNom} ${compra} <br> `;
   }
}
//Escuchador de eventos -formulario-
   document.getElementById('forma').addEventListener("submit", function(e){
    e.preventDefault(); //evitar que se recarge la pagina
   //obtener los datos del formulario
   const monto=parseFloat ( document.getElementById('monto').value);
   const divisa=parseFloat ( document.getElementById('divisa').value);
   const divisasNom=document.getElementById('divisa').selectedOptions[0].dataset.nombre;
   //Crear el obj, instanciar la clase
   const objMoneda = new Moneda(monto, divisa,divisasNom);
   //Mostrar resumen
   document.getElementById('resumen').innerHTML=objMoneda.generarResumen();
});