// Array com as perguntas
const questions = [
  "O que aparendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
];

// Função que faz as perguntas
const ask = ( index = 0 ) =>  {
  process.stdout.write('\n' + questions[index] + '\n > ')
} 
ask();

// Função que exibe as respostas
const answers = [];
process.stdin.on('data', data =>{
  answers.push( data.toString().trim());
  if (answers.length < questions.length){
    ask(answers.length);
  } else {
    //console.log(answers);
    process.exit();
  } 
})

process.on('exit', () => {
  console.log(`
    Olá,
    O que você aprendeu hoje foi:
      > ${answers[0]}
    O que que te aborreceu, e poderia fazer para melhorar foi:
      > ${answers[1]}
    O que te deixou feliz hoje foi:
      > ${answers[2]}
    Você ajudou ${answers[3]} pessoas hoje!!!

  `);
})