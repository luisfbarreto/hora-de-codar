function ex1(){
    let nome_do_carro = "Fusca";
    alert("O nome do carro é " + nome_do_carro);
}

function ex2(){
    let nomeDoUsuario = prompt("Insira seu nome");
    alert("Olá, " + nomeDoUsuario );
}

function ex3(){
    let nomeDoUsuario = prompt("Insira seu nome:")  ;
    let idadeDoUsuario = parseInt(prompt("Insira sua idade:"));
    alert("Olá, " + nomeDoUsuario + ",sua idade é " + idadeDoUsuario + ".");
}

function ex4(){
// Funções para calcular a área de cada forma geométrica
function calcularAreaRetangulo(base, altura){
    return base * altura;
}

function calcularAreaQuadrado(lado){
    return lado * lado;
}

function calcularAreaLosango(dMaior, dMenor){
    return (dMaior * dMenor) / 2; 
}

function calcularAreaTrapezio(bMaior,bMenor, h){
    return ((bMaior + bMenor) * h ) / 2;
}

function calcularAreaParalelogramo(base, altura){
    return base * altura;
}

function calcularAreaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularAreaCirculo(raio){
    return 3.14159 * raio * raio;
}

// Solicitando os valores necessários ao usuário para cada forma geométrica
let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
let ladoQuadrado =  parseFloat(prompt("Digite o lado do quadrado:"));
let dMaiorLosango = parseFloat(prompt("Digite a diagonal maior do losango:"));
let dMenorLosango = parseFloat(prompt("Digite a diagonal menor do losango:"));
let bMaiorTrapezio = parseFloat(prompt("Digite a base maior do trapézio:"));
let bMenorTrapezio= parseFloat(prompt("Digite a base menor do trapézio:"));
let hTrapezio = parseFloat(prompt("Digite a altura do trapézio:"));
let baseParalelogramo = parseFloat(prompt("Digite a base do paralelogramo:"));
let alturaParalelogramo = parseFloat(prompt("Digite a altura do paralelogramo:"));
let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
let raioCirculo = parseFloat(prompt("Digite o raio do circulo:"));

//parseFloat(prompt("Digite a"));

// Calculando e exibindo as áreas correspondentes para cada forma geométrica
alert("Área do Retângulo: " + calcularAreaRetangulo(baseRetangulo, alturaRetangulo) +
"\nÁrea do Quadrado: " + calcularAreaQuadrado(ladoQuadrado) +
"\nÁrea do Losango: " + calcularAreaLosango(dMaiorLosango, dMenorLosango) +
"\nÁrea do Trapézio: " + calcularAreaTrapezio(bMaiorTrapezio, bMenorTrapezio, hTrapezio) +
"\nÁrea do Paralelogramo: " + calcularAreaParalelogramo(baseParalelogramo, alturaParalelogramo) +
"\nÁrea do Triângulo: " + calcularAreaTriangulo(baseTriangulo, alturaTriangulo) +
"\nÁrea do Circulo: " + calcularAreaCirculo(raioCirculo));
}