'use strict';

module.exports = (args) => {
  if (args.length === 0) {
      console.log(`no arguments provided`);
  } else if (args[0] === 'add') {
    return {action: args[0], toy: args[1], child: args[2], status: 0};
  } else if (args[0] === 'remove') {
    return {action: args[0], toy: args[1], chile: args[2]};
  } else {
      console.log('unexpected argument');
  }
};