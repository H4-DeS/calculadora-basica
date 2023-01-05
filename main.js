const teclaNum = document.querySelectorAll("#tecla_num");
const teclaOp = document.querySelectorAll("#tecla_op");
const display = document.querySelector("#display");
const teclaCalcula = document.querySelector("#tecla_calcula");
const teclaOp2 = document.querySelectorAll("#tecla_op2");

let acumulador = 0;
let operacao;
let resultado;

teclaCalcula.onclick = calcula;

teclaOp2.forEach(function(e){
		e.addEventListener('click', () => {	
			acumulador = parseFloat(display.innerHTML);
		//	display.innerHTML = "";
			operacao = e.attributes.op.value;
			calcula();
		});
	});
	

teclaNum.forEach(function(e){
  e.addEventListener('click', () => {	
  	if (e.attributes.valor.value == '.')
   		display.innerHTML +=  (e.attributes.valor.value);
   	else
   		display.innerHTML +=  parseFloat(e.attributes.valor.value);
  });
});

teclaOp.forEach(function(e){
  e.addEventListener('click', () => {	
		acumulador = parseFloat(display.innerHTML);
	  display.innerHTML = "";
		operacao = e.attributes.op.value;
		});
});


function calcula() {
	if(operacao == "+"){
		resultado = soma(acumulador, parseFloat(display.innerHTML));
	}

	if(operacao == "-"){
		resultado = subtrai(acumulador, parseFloat(display.innerHTML));
	}

	if(operacao == "*"){
		resultado = mult(acumulador, parseFloat(display.innerHTML));
	}

	if(operacao == "/"){
		resultado = div(acumulador, parseFloat(display.innerHTML));
	}
	
	if(operacao == "pow"){
		resultado = pow(acumulador);
	}

	if(operacao == "sqrt"){
		resultado = sqrt(acumulador);
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

function pow(x) {
	return Math.pow(x, 2)
}

function sqrt(x) {
	return Math.sqrt(x)
}