const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
    console.log(`Hi ${answer}, how you doing today?`);

    rl.question("What's an activity you like doing? ", (answer) => {
      console.log(`I usually ${answer} on the weekends with my fiends`);
    
      rl.question("What do you listen to while doing that? ", (answer) => {
        console.log(`I usually listen to ${answer} in the morning.`);
      
        rl.question("Which meal is your favourite \(eg: dinner, brunch, etc.\)", (answer) => {
          console.log(`I love ${answer} because I can always eat a lot during that time.`);
        
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`I love to watch ${answer} since I was little.`);
          
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`My superpower is ${answer}.`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});


// rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

