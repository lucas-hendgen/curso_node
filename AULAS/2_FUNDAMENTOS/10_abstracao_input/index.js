const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "aluno",
      message: "Qual o nome do aluno?",
    },
    {
      name: "n1",
      message: "Qual a primeira nota?",
    },
    {
      name: "n2",
      message: "Qual a segunda nota?",
    },
    {
      name: "n3",
      message: "Qual a terceira nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const aluno = answers.aluno;
    let result;
    const media =
      (parseInt(answers.n1) + parseInt(answers.n2) + parseInt(answers.n3)) / 3;

    if (media >= 7) {
      result = chalk.green("APROVADO");
    } else {
      result = chalk.bgRed("REPROVADO");
    }

    console.log(`Aluno: ${aluno}, Média: ${media.toFixed(1)}, Situação: ${result}`);
  })
  .catch((err) => console.log(err));
