enum MembrosDaFamilia {
  Pai = 1,
  Mãe,
  IrmãoMaisVelho,
  IrmãoDoMeio,
  IrmãMaisNova,
  FilhoMaisVelho,
  FilhoMaisNovo,
}

// Exemplo de uso:
const meuParente: MembrosDaFamilia = MembrosDaFamilia.Mãe;
console.log(`O número correspondente à Mãe é: ${meuParente}`); // Saída: O número correspondente à Mãe é: 2
