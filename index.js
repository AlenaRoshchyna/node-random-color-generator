import chalk from 'chalk';
import randomColor from 'randomcolor';

randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const blockColor = randomColor();

const warning = chalk.hex(blockColor);

console.log(
  warning(`###############################
###############################
###############################
#####                     #####
#####       ${blockColor}       #####
#####                     #####
###############################
###############################
###############################`),
);
