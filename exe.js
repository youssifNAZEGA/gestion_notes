#!/usr/bin/env node
import { Command } from 'commander';
//const { Command } = require('commander');
const program = new Command();

program
  .name('youssif-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('youssif')
  // .description('Split a string into substrings and display as an array')
  .argument('<string>', "Niveau d'étude(L1, L2 ou L3)")
  // .option('--first', 'display just the first substring')
  // .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    // const limit = options.first ? 1 : undefined;
    //console.log(str.split(options.separator, limit));
    console.log("Bonjour "+str);
    //console.log(str);

  });

program.parse();