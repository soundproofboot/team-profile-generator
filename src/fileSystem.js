const fs = require('fs');
const html = require('./html');

const file = {

    async createHTML() {
        let htmlString = await html.buildPage();
        fs.writeFile('./dist/index.html', htmlString, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    }
}

module.exports = file;