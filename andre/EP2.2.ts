
  enum CursosGraduacao {
    DesenvolvimentoDeSoftwareMultiplataforma = 1,
    MeioAmbienteERecursosHídricos,
    Geoprocessamento,
  }

  for (let curso in CursosGraduacao) {
    if (isNaN(Number(curso))) {
      continue;
    }
    const cursoNumero = Number(curso);
    console.log(`Curso ${cursoNumero}: ${CursosGraduacao[cursoNumero]}`);
  }