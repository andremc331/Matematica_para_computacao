enum CursosGraduacao {
    DesenvolvimentoDeSoftwareMultiplataforma = "Desenvolvimento de Software Multiplataforma",
    MeioAmbienteERecursosHídricos = "Meio Ambiente e Recursos Hídricos",
    Geoprocessamento = "Geoprocessamento",
  }
  
  // Exemplo de uso:
  const meuCurso: CursosGraduacao = CursosGraduacao.DesenvolvimentoDeSoftwareMultiplataforma;
  console.log(meuCurso); // Saída: Desenvolvimento de Software Multiplataforma


  AnáliseEDesenvolvimentoDeSistemas = 1,
  GestãoDaTecnologiaDaInformação,
  EngenhariaDaComputação,
  Logística,
  ProduçãoIndustrial,
  ManufaturaAvançada,
  Marketing,
  GestãoEmpresarial
}

// Exemplo de uso:
const meuCurso: CursosGraduacao = CursosGraduacao.AnáliseEDesenvolvimentoDeSistemas;
console.log(`Curso selecionado: ${meuCurso} - ${CursosGraduacao[meuCurso]}`);
// Saída: Curso selecionado: 1 - AnáliseEDesenvolvimentoDeSistemas
