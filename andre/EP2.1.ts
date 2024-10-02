//Definição

enum MembrosDaFamilia {
  Pai = 1,
  Mãe,
  Irmão,
  Irmã,
  Filho,
  Filha,
}

for (let membro in MembrosDaFamilia) {
  if (isNaN(Number(membro))) {
    continue; // Pula as chaves que são strings (nomes dos membros)
  }
  const membroNumero = Number(membro);
  console.log(`Membro ${membroNumero}: ${MembrosDaFamilia[membroNumero]}`);
}


//isNaN é usada para garantir que o código processe apenas os números associados à enumeração e não os nomes dos membros.

//O que é uma enum?

// A enum é uma maneira de definir um conjunto de valores constantes. 
// Em vez de trabalhar com valores como números ou strings diretamente, você cria identificadores com significados claros.
