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
    const [ policy, password ]  = line.split(':');

    // 3-5 p => pattern:  3-5, str: p
    const [ pattern, str ] = policy.split(' ');
   
    // 3-5 p: cpprxp => ^p{3,5}$
    const regex = `^${str}{${pattern.replace('-', ',')}}$`

    // Selects only the character I care about and joins them all together
    const newPattern = new RegExp(`${str}`, 'g');
    const foundPattern = password.match(newPattern)?.join('') || '';

    if (RegExp(regex).test(foundPattern)) {
      validPasswords += 1;
    }
  }

  return validPasswords;
}