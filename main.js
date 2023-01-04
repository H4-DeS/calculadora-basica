const teclaNum = document.querySelectorAll("#tecla_num");
const teclaOp = document.querySelectorAll("#tecla_op");
const display = document.querySelector("#display");
const teclaCalcula = document.querySelector("#tecla_calcula");
let acumulador = 0;
let operacao;
let resultado;

teclaNum.forEach(function(e){
  e.addEventListener('click', () => {	
   	display.innerHTML +=  parseInt(e.attributes.valor.value);
  });
});

teclaCalcula.onclick = calcula;

teclaOp.forEach(function(e){
  e.addEventListener('click', () => {	
	acumulador = parseInt(display.innerHTML);
 	display.innerHTML = "";
	operacao = e.attributes.op.value;
	
  });
});


function calcula() {
	if(operacao == "+"){
		resultado = soma(acumulador, parseInt(display.innerHTML));
	}

	if(operacao == "-"){
		resultado = subtrai(acumulador, parseInt(display.innerHTML));
	}

	if(operacao == "*"){
		resultado = mult(acumulador, parseInt(display.innerHTML));
	}

	if(operacao == "/"){
		resultado = div(acumulador, parseInt(display.innerHTML));
	}
	
	if(operacao == "pwr"){
		resultado = pwr(acumulador);
	}

	if(operacao == "sqr"){
		resultado = sqr(acumulador);
	}
		
	display.innerHTML = resultado;
	
		
}

function soma(x, y) {
	return (x + y)
}

function subtrai(x, y) {
	return (x - y)
}

function mult(x, y) {
	return (x*y)
}

function div(x, y) {
	return (x/y)
}

function pwr(x) {
	return Math.pow(x, 2)
}

function sqr(x) {
	return Math.sqrt(x)
}