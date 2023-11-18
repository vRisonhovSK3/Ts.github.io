var kwhmes = 0;
var posicao = 0;
var totalvalor = 0;
var totalvolts = 0;
var valorkwh = 0.92;
var tipo = [30];
var tempo = [30];
var volts = [30];

function registrar() {
	if(posicao < 30){
		posicao = posicao + 1;
		tipo[posicao] = document.getElementById("tipo").value;
		var aux = 0;
		var repete = 0;
		while(aux < posicao){
			aux = aux + 1;
			if(tipo[posicao] == tipo[aux]){
				repete = repete + 1;
			}
		}
		if(repete == 1){

			tempo[posicao] = document.getElementById("tempo").value;
			volts[posicao] = document.getElementById("volts").value;
			preco[posicao] = document.getElementById("preco").value;
			quantia[posicao] = document.getElementById("quantia").value;

			var tabelaRegistro = document.getElementById("tabelaRegistro");
			var linha = tabelaRegistro.insertRow(1)
			var coluna1 = linha.insertCell(0)
			var coluna2 = linha.insertCell(1)
			var coluna3 = linha.insertCell(2)
			coluna1.innerText = tipo[posicao];
			coluna2.innerText = volts[posicao] * quantia[posicao];
			coluna3.innerText = tempo[posicao];
			kwhmes = kwhmes + (volts[posicao] * tempo[posicao]);
			totalvalor = (kwhmes * valorkwh) * quantia[posicao];
			totalvolts = totalvolts + parseInt(volts[posicao]);
            totalvalor = totalvalor/1000
			document.getElementById("kwhmes").value = kwhmes;
			document.getElementById("totalvalor").value = totalvalor;
			document.getElementById("totalvolts").value = totalvolts;
		}else{
			alert ("nome ja usado");
		}
	}else{
		alert ("há um limite de 30 eletrônicos");
	}
}

function consultar() {
	var consultaeletro = document.getElementById("consultaeletro").value;
	var cont= 0;
	while(cont < posicao){
		cont = cont + 1;
		if(consultaeletro == tipo[cont]){
			var gasto = volts[cont] * tempo[cont];
			var custo = gasto * valorkwh;
			if(tipoconsulta == "Gasto"){
				document.getElementById("resultado").value = gasto;
			}else{
				if(tipoconsulta == "Custo"){
					document.getElementById("resultado").value = custo;
				}
			}
		}
	}
}