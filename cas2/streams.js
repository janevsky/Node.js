const fs = require('fs');
const writableStream = fs.createWriteStream('./output.txt');
const readableStream = fs.createReadStream('./output.txt', 'utf-8');

/**
 * 3 types of streams:
 * 1. Writable streams
 * 2. Readable streams
 * 3. Duplex
 * 
 */

writableStream.write('Boban e tuka, a vie ste tamu.');

readableStream.on('data', chunk => {
  console.log(chunk);
})