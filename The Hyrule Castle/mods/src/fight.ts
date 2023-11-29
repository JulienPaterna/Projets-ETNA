// const read = require("readline-sync");
// import Character from "./Character";
// import { player, x_boss} from "./hyrule_castle";
// import { green, magenta, red, orange, reset, displayOpponentHp, displayPlayerHp} from "./display";
// import { player_attack, enemy_attack } from "./attack";
// import { escape, halfdamage } from "./better_combat_options";

// let coins = 12;
// let consoleClear: number = 0;
// let hasEscape: boolean = true;

// export function fightEnemy(enemy: Character, enemy_hp_max: number, floor: number) {
//   let color: string;
//   color = red;
//   enemy.hp = enemy_hp_max;
//   const noescape_FE: boolean | undefined = fight(enemy, color, enemy_hp_max, floor);
//   if (player.hp > 0) {
//     const continue_game: string = read.question("\nPress ENTER to start\n");
//     if (continue_game === "") {
//       console.clear();
//     }
//   }
//   return noescape_FE;
// }

// export function fightBoss(boss: Character, boss_hp_max: number, floor: number) {
//   let color: string;
//   color = magenta;
//   fight(boss, color, boss_hp_max, floor);
//   if (player.hp > 0) {
//     if (hasEscape) {
//     console.log(
//       `\n<<<<<<    Congratulations!!    >>>>>>`);
//       if (x_boss === 0) {
//         console.log(`<<<<<<    😎You win against the Final Boss!!😎    >>>>>>
// <<<<<<          GAME OVER          >>>>>>\n\n`);
//         player.hp = 0;
//       }
//     } else {
//       console.log(`\n>>>>  and you loose!!😅 ..... you can't escape from a boss!!😂😂\n
// <<<<<<        💀💀GAME OVER💀💀         >>>>>>\n\n`);
//     player.hp = 0;
//     }
//   }
// }
// export function fight(opponent: Character, color: string, opponent_hp_max: number, floor: number) {
//   let attack: number = 1;
//   while (player.hp > 0 && opponent.hp > 0) {
//     console.log(`\n${orange}Attack number ${attack}${reset}`);
//     const answer: undefined | string = player_attack(opponent);
//     if (answer) {
//       // si answer réponse valide
//       if (consoleClear % 2 === 0) { 
//         console.clear();
//       }
//       if (player.hp > 0 && opponent.hp > 0) {
//         if (answer === "attack" || answer === "1") {
//           displayOpponentHp(opponent, opponent_hp_max, color);
//         }
//         if (answer === "heal" || answer === "2") {
//           console.log("\nYour heal ==>");
//           displayPlayerHp(player);
//         }
//         if (answer === "escape" || answer === "3") {
//           const player_hp_escape = escape(player.hp);
//           displayPlayerHp(player);
//           opponent.hp = 0;
//           hasEscape = false;
//         }
//       }
//       if (opponent.hp > 0 && answer != "3" && answer != "escape") {
//         if (answer === "protect" || answer === "4") {
//           halfdamage(opponent);
//           displayPlayerHp(player);
//         }
//         else {
//           enemy_attack(opponent);
//           if (player.hp > 0 && opponent.hp > 0) {
//             console.log(`\nAttack of ${color}${opponent.name}${reset} ==>`);
//             displayPlayerHp(player);
//           }    
//         }
//       }
//       if (answer != "3" && answer != "escape") {
//         attack++;
//       }
//       consoleClear++;
//     }  
//   }  
//   if (player.hp <= 0) {
//     console.log(`You loose......!
// See you soon!!😉\n`);
//     return true;
//   } else if (player.hp > 0 && opponent.hp <= 0 && hasEscape === true) {
//     console.log(`\n${green}You win${reset} your fight against ${color}${opponent.name}${reset}!!\n`);
//     displayPlayerHp(player);
//     coins++;
//     console.log(`You have ${coins} coins!`);
//     return true;
//   } else if (opponent.hp === 0 && hasEscape === false && floor != 0) {
//     console.log(">>>>  you back to the previous floor");
//     return hasEscape;
//   } else { //si floor === 0
//     return false;
//   }
// }

