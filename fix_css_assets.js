const fs = require('fs');
const path = require('path');

// Fix CSS files
const cssDir = 'C:/Users/thaibao/Documents/crawlerwebsite/sprazo-nextjs/src/styles';
fs.readdirSync(cssDir).forEach(file => {
    if (file.endsWith('.css')) {
        const filepath = path.join(cssDir, file);
        let c = fs.readFileSync(filepath, 'utf8');
        let original = c;

        c = c.replace(/\.\.\/fonts\//g, '/fonts/');
        c = c.replace(/\.\.\/images\//g, '/images/');
        c = c.replace(/:last-child\(\)/g, ':last-child');

        if (c !== original) {
            fs.writeFileSync(filepath, c);
            console.log('Fixed CSS assets/syntax in', filepath);
        }
    }
});
