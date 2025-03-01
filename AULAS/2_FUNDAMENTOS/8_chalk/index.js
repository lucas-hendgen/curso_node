const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabens! Voce esta aprovado!"));
} else {
  console.log(chalk.bgRed.black("REPROVADO!"));
}
