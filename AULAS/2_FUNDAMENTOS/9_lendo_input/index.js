const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferida? ", (language) => {
  if (language === 'HTML') {
    console.log("Isso nem é linguagem!");
  } else {
    console.log(`Linguagem preferida: ${language}`);
  }
  readline.close();
});
