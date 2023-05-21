const { loadFile } = require('./loadFile');
const { countChars } = require('./counChars');

const [char, file ] = process.argv.splice(2);
if (!char) {
    console.error(
        'ERROR: you must provide a character as an argument'
    );
    process.exit(1);
}

const main = async () => {
    const fileText = loadFile(file);
    const count = await countChars(char, fileText);
    console.log('we found ${count} ${char} in the file');
}

main();