import fs from 'fs';  
import * as readline from 'readline';

export const PasswordPhilosophy = async (path: string) => {
  const rl = readline.createInterface({ 
    input: fs.createReadStream(`${__dirname}${path}`),
    output: process.stdout,
    terminal: false
  });

  let validPasswords = 0;
  
  for await (const line of rl) {
    // 3-5 p: cpprxp => policy: 3-5 p, password: cpprxp
    let [ policy, password ]  = line.split(':');

    // 3-5 p => pattern:  3-5, str: p
    const [ pattern, str ] = policy.split(' ');
   
    const [ x1, x2 ] = pattern.split('-');
    password = password.replace(' ', '');

    // Right index within the string
    const index1:number = parseInt(x1) - 1;
    const index2:number = parseInt(x2) - 1;

    if (((password[index1] === str) || (password[index2] === str)) && (password[index1] !== password[index2])) {
      validPasswords += 1;
    }
  }

  return validPasswords;
}