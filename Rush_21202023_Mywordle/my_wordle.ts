const read = require("readline-sync");
import * as rl from "readline-sync";
import { getRandomWord } from "./lib";

function getInput(question: string) {
  const troov = getRandomWord();
  const troov_up = troov.toUpperCase();
  const split1 = troov_up.split("");
  // console.log(troov_up);
  let i: number = 1;
  const hints = [
    "Present at the exact same spot",
    "Present somewhere else in the word",
    "Absent from the word",
  ];
  while (i <= 6) {
    const guess = read.question(`Essai ${i} pour ${question}\n`);
    const guess_up = guess.toUpperCase();
    const split2 = guess.split("");
    // let guess_result = [];
    if (guess.length != 5 || guess != guess_up) {
      i = i;
    } else if (guess === troov_up) {
      console.log("Bravo vous avez gagné!!!");
      return;
    } else {
      i += 1;
      let n: number = 0;
      split2.forEach((element: any) => {
        if (split1.includes(element) === true) {
          if (element === split1[n]) {
            console.log(`\x1b[92m${element}\x1b[0m : ${hints[0]}`);
          } else {
            console.log(`\x1b[93m${element}\x1b[0m : ${hints[1]}`);
          }
        } else {
          console.log(`\x1b[91m${element}\x1b[0m : ${hints[2]}`);
        }
        n += 1;
      });
    }
  }
  console.log(
    `Désolé vous avez perdu. La réponse était "${troov_up}" Essayez à nouveau demain :)`
  );
}

getInput("trouver le mot");
