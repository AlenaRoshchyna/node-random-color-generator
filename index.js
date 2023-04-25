import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];

// console.log(chalk.hex('#123456')('our text'));

if (hue && luminosity) {
  const blockColor = randomColor({
    luminosity: luminosity,
    hue: hue,
  });
  const generateRandomCol = chalk.hex(blockColor);
  console.log(
    generateRandomCol(`###############################
###############################
###############################
#####                     #####
#####       ${blockColor}       #####
#####                     #####
###############################
###############################
###############################`),
  );
} else if (hue) {
  const blockColor = randomColor({
    count: 1,
    hue: hue,
  });
  const generateRandomCol = chalk.hex(blockColor);
  console.log(
    generateRandomCol(`###############################
###############################
###############################
#####                     #####
#####       ${blockColor}       #####
#####                     #####
###############################
###############################
###############################`),
  );
} else {
  const blockColor = randomColor();
  const generateRandomCol = chalk.hex(blockColor);
  console.log(
    generateRandomCol(`###############################
###############################
###############################
#####                     #####
#####       ${blockColor}       #####
#####                     #####
###############################
###############################
###############################`),
  );
}
