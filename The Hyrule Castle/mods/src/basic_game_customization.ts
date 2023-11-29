//import Character from './Character';

export function mode(opponent: any, factor: number) {
  const notAllowed: string[] = ['id', 'name', 'rarity'];
  let i: number = 0;
  let original_values: number[] = [];
  let new_values: number[] = [];
  switch (factor) {
    case 1:
      console.log("\nMode \x1b[92mNormal\x1b[0m : your enemy statistics don't change");
      break;
    case 1.5:
      console.log("\nMode \x1b[33mDifficult\x1b[0m : ");
      break;
    case 2:
      console.log("\nMode \x1b[91mInsane\x1b[0m : ");
      break;
    default:
      console.log("\nWrong choice")
      break;
  }
  if (factor != 1) {
    for (let item in opponent) {
      if (!notAllowed.includes(item)) {
        let new_value = opponent[item];
        const original_value: number = opponent[item];
        original_values.push(original_value);
        new_value *= factor;
        opponent[item] = Math.floor(new_value);
        new_values.push(opponent[item]);
      }
    }
  }
  if (factor != 1) {
    console.log(`You choose to update your enemy!
Original HP : ${original_values[0]} ==> New HP : ${new_values[0]}
Original STR : ${original_values[2]} ==> New STR : ${new_values[2]}`);
  }
}