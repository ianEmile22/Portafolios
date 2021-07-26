var prueba = document.getElementById("prueba");
var prueba2 = document.getElementById("prueba2");
var prueba3 = document.getElementById("prueba3");

var cuadrado = document.getElementById("cuadrado");
var cuadrado2 = document.getElementById("cuadrado2");
var cuadrado3 = document.getElementById("cuadrado3");

document.querySelectorAll('.modal-container img').forEach(el=>{
    el.addEventListener('click', function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add('active');
    })
})

document.querySelectorAll(".modal-container").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active")
        
    })

})


/*#region Animacion paginas*/ 

prueba.addEventListener("click", () => {
    prueba.classList.add('agregar');
    prueba2.classList.remove('agregar');
    prueba3.classList.remove('agregar');
    cuadrado.classList.add('agregarCuadrado');
    cuadrado2.classList.remove('agregarCuadrado');
    cuadrado3.classList.remove('agregarCuadrado');

})

prueba2.addEventListener("click", () => {
    prueba.classList.remove('agregar');
    prueba2.classList.add('agregar');
    prueba3.classList.remove('agregar');
    cuadrado.classList.remove('agregarCuadrado');
    cuadrado2.classList.add('agregarCuadrado');
    cuadrado3.classList.remove('agregarCuadrado');
})

prueba3.addEventListener("click", () => {
    prueba.classList.remove('agregar');
    prueba2.classList.remove('agregar');
    prueba3.classList.add('agregar');
    cuadrado.classList.remove('agregarCuadrado');
    cuadrado2.classList.remove('agregarCuadrado');
    cuadrado3.classList.add('agregarCuadrado');
})

/*#endregion*/

(function(){

var actualizarHora = function(){
    var fecha = new Date(),
    horas = fecha.getHours(),
    minutos = fecha.getMinutes(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    year = fecha.getFullYear(),
    ampm = fecha.ampm;

    var pHora = document.getElementById('hora');
    var pMinutos = document.getElementById('minutos');
    var pDiaSemana = document.getElementById('diaSemana');
    var pDia = document.getElementById('dia');
    var pMes = document.getElementById('mes');
    var pYear = document.getElementById('year');
    var pampm = document.getElementById('ampm');

    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',]

    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',]
    pMes.textContent = meses[mes];
    pYear.textContent = year;

if(horas >= 12){
    horas = horas -12;
    ampm = 'PM';
}
else{
    ampm = 'AM';
}

if(horas == 0){
    horas =12;
}

if(minutos < 10){
    minutos = "0" + minutos
}

    pHora.textContent = horas;
    pMinutos.textContent = minutos;
    pampm.textContent = ampm;
};

actualizarHora();
var intervalo = setInterval(actualizarHora, 1000);

}());


