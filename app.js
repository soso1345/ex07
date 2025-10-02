document.getElementById("saida").innerHTML = `
Multiplicacao do numero:
<input type="number" id="numero1"/> X
<input type="number" id="numero2"/> = <span id ="res"></span>
<button onclick="mult()">Multiplicar</button>

`;
function mult(){
    let n1= parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let resposta = n1*n2;
    document.getElementById("res").innerHTML = resposta;
}