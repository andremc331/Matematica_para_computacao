export class Pessoa {
    nome: string;
    idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  export class Estudante extends Pessoa {
    registroAcademico: string;
    anoDeIngresso: number;
    semestreDeIngresso: number;
  
    constructor(nome: string, idade: number, registroAcademico: string, anoDeIngresso: number, semestreDeIngresso: number) {
      super(nome, idade);
      this.registroAcademico = registroAcademico;
      this.anoDeIngresso = anoDeIngresso;
      this.semestreDeIngresso = semestreDeIngresso;
    }
  }