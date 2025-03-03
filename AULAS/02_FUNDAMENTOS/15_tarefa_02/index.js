const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome?",
    },
    {
      name: "idade",
      message: "Qual a sua idade?",
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
        throw new Error('O nome e a idade são obrigatórios!')
    }
    console.log(
      chalk.bgYellow.black(`Nome: ${answers.nome}, Idade: ${answers.idade}`)
    );
  })
  .catch((err) => console.log(chalk.bgRed.white(err)));
