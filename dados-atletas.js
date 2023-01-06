


class Atleta {
    constructor(nome,idade, peso,altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso= peso;
        this.altura= altura;
        this.notas= notas
    }

    obtemNomeAtleta(){
        return this.nome ;
    }
obtemIdadeAtleta(){
        return this.idade;
    }
obtemPesoAtleta(){
        return  this.peso;
    }
  
  obtemAlturaAtleta(){
        return  this.altura;
    }

obtemNotasAtleta(){
        return  this.notas.toString();
    }
obtemCategoria(){
        return calculaCategoria(this.idade);
    }
obtemIMC(){
        return calculaIMC(this.peso, this.altura) ;
    }
obtemMediaValida(){
      return calculaMediaValida(this.notas)
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


function calculaMediaValida(notas){
  let n2 = 0
  notas = notas.slice(1,4)
  notas.forEach(function(v1){

 return n2 = n2+v1
  });
  n2 = n2 / notas.length
return n2
}

function calculaIMC(peso, altura){
  altura = altura * altura
  return peso / altura

}

function calculaCategoria(idade){
  if (idade >= 9 && idade <= 30){
          if (idade >= 16){
              return "Adulto";
          }
         else if (idade >= 14){
              return "Intermediário";
          }
          else if (idade >= 12){
              return "Juvenil";
          }
          else if (idade <= 11){
              return "Infantil";
          }
        } else {
          return "Sem categoria";
        }
}

console.log("Nome: "+atleta.obtemNomeAtleta());
console.log("Idade: "+atleta.obtemIdadeAtleta());
console.log("Peso: "+atleta.obtemPesoAtleta());
console.log("Altura: "+atleta.obtemAlturaAtleta());
console.log("Notas: "+atleta.obtemNotasAtleta());
console.log("Categoria: "+atleta.obtemCategoria());
console.log("IMC: "+atleta.obtemIMC());
console.log("Média válida: "+atleta.obtemMediaValida());