/*1
 function verificarMaiorOuIgual(num1, num2) {
    if(num1 >= num2){
        console.log("é maior ou igual")
    }
    else {
        console.log("é menor")
    }
}
 verificarMaiorOuIgual(5, 3); 
 verificarMaiorOuIgual(2, 7); 
 verificarMaiorOuIgual(4, 4); */

 /*2
  function calcularDiasDeVida(idade) {
    if (idade < 0) {
      return "Erro: A idade não pode ser negativa.";
    }
  
    var dias = idade * 365;
    return dias;
  }
  
  var idade = 30;
  var diasDeVida = calcularDiasDeVida(idade);
  console.log(diasDeVida); */
  
 /*3
  function obterMes(numero) {
    var meses = [
      "Janeiro", "Fevereiro", "Março", "Abril",
      "Maio", "Junho", "Julho", "Agosto",
      "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    if (numero < 1 || numero > 12) {
      return "Erro: Número inválido. Insira um número de 1 a 12.";
    }
  
    return meses[numero - 1];
  }
  
  var numero = 2;
  var mes = obterMes(numero);
  console.log(mes);*/
  
 /*4
  function inverterValor(parametro) {
    if (typeof parametro === "boolean") {
      return !parametro;
    } else if (typeof parametro === "number") {
      return -parametro;
    } else {
      return "Booleano ou Número esperados, mas o parâmetro é do tipo " + typeof parametro;
    }
  }
  
  console.log(inverterValor(true));  
  console.log(inverterValor(false));  
  console.log(inverterValor(1));     
  console.log(inverterValor(5));      
  console.log(inverterValor("teste"));  */

  /*5
   function multiplicacaoSemOperador(a, b) {
    if (a < 0 || b < 0) {
      return "Erro: Os números devem ser não negativos.";
    }
  
    var resultado = 0;
  
    for (var i = 0; i < b; i++) {
      resultado += a;
    }
  
    return resultado;
  }
  
  var num1 = 5;
  var num2 = 3;
  var resultado = multiplicacaoSemOperador(num1, num2);
  console.log(resultado); */
  
  /*6
   function repetir(elemento, quantidade) {
    var arrayRepetido = [];
  
    for (var i = 0; i < quantidade; i++) {
      arrayRepetido.push(elemento);
    }
  
    return arrayRepetido;
  }
  
  console.log(repetir("teste", 2));  
  console.log(repetir(4, 3)); */
  
  /*7
   function filtro(array) {
    var numeros = array.filter(function(elemento) {
      return typeof elemento === 'number';
    });
  
    return numeros;
  }
  
  console.log(filtro(["Js", 2, "hoje", 4, 5, 7, "teste"])); 
  console.log(filtro(["teste", "tentativa"])); */             
  
  /*8
  function somarNumeros(array) {
    var soma = 0;
  
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        soma += array[i];
      }
    }
  
    return soma;
  }
  
  var numeros = [2, 4, 6, 8, 10];
  var resultado = somarNumeros(numeros);
  console.log(resultado); */
  
 /*9
  function segundoMaiorNumero(array) {
    if (array.length < 2) {
      return "Erro: O array deve ter pelo menos dois números.";
    }
  
    var maior = -Infinity;
    var segundoMaior = -Infinity;
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior;
        maior = array[i];
      } else if (array[i] > segundoMaior && array[i] < maior) {
        segundoMaior = array[i];
      }
    }
  
    return segundoMaior;
  }
  
  var numeros = [5, 10, 2, 8, 3];
  var segundoMaior = segundoMaiorNumero(numeros);
  console.log(segundoMaior); */

  /*10
   function melhoresAlunos(estudantes) {
    var melhorMedia = -Infinity;
    var alunoMelhorMedia = '';
  
    for (var aluno in estudantes) {
      var notas = estudantes[aluno];
      var soma = notas.reduce(function (total, nota) {
        return total + nota;
      }, 0);
  
      var media = soma / notas.length;
  
      if (media > melhorMedia) {
        melhorMedia = media;
        alunoMelhorMedia = aluno;
      }
    }
  
    return {
      nome: alunoMelhorMedia,
      media: melhorMedia
    };
  }
  
  var estudantes = {
    Augusto: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
  };
  var melhorAluno = melhoresAlunos(estudantes);
  console.log(melhorAluno); */  