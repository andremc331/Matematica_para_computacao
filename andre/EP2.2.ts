//Definição da Enumeração

  enum CursosGraduacao {
    DesenvolvimentoDeSoftwareMultiplataforma = 1,
    MeioAmbienteERecursosHídricos,
    Geoprocessamento,
  }

  for (let curso in CursosGraduacao) {
    if (isNaN(Number(curso))) {
      continue; // Pula as chaves que são números
    }
    const cursoNumero = Number(curso);
    console.log(`Curso ${cursoNumero}: ${CursosGraduacao[cursoNumero]}`);
  }