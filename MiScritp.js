//crear clase
class IndiceMC{
   constructor(p,h){
       this.peso=p;
       this.altura=h;
   }
   //metodo calcular 
   procesoIMC(){
       const calculoIMC=this.peso/(this.altura*this.altura); 
       return calculoIMC.toFixed(2);
   }

   //metodo para clasificar
   clasificarIMC(){
       const imc = this.procesoIMC();
       if(imc < 18.5){
           return "Bajo de peso";
       } else if(imc >= 18.5 && imc < 25){
           return "Peso saludable";
       } else if(imc >= 25 && imc < 30){
           return "Sobrepeso";
       } else {
           return "Obesidad";
       }
   }
   //metodo para mostrar resumen
   reporte(){
       const tuIMC=this.procesoIMC();
       const clasificacion=this.clasificarIMC();
       return  `Reporte de salud IMC <br> Peso (Kg): ${this.peso} <br> Altura (M): ${this.altura} <br> IMC:${tuIMC} <br> Clasificacion: ${clasificacion} <br> `;
   }
}
//Escuchador de eventos -formulario-
   document.getElementById('imc').addEventListener("submit", function(e){
    e.preventDefault(); //evitar que se recarge la pagina
   //obtener los datos del formulario
   const peso=parseFloat ( document.getElementById('peso').value);
   const altura=parseFloat ( document.getElementById('altura').value);
   //Crear el obj, instanciar la clase
   const objIndiceMC = new IndiceMC(peso,altura);
   //Mostrar resumen
   document.getElementById('estatus').innerHTML=objIndiceMC.reporte();
});