const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const newData = data.replace(/React/ig, 'Angular');

const newData2 = newData.replace(/library/ig, 'framework');

fs.writeFileSync('README-Angular.md', newData);

fs.writeFileSync('README-Angular2.md', newData2);