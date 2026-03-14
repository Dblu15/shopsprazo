const fs = require('fs');
const path = require('path');

function walk(dir) {
    let files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) walk(filepath);
        else if (filepath.endsWith('.js') || filepath.endsWith('.jsx')) {
            let c = fs.readFileSync(filepath, 'utf8');
            if (c.includes('javascript:void(0)')) {
                fs.writeFileSync(filepath, c.replace(/javascript:void\(0\)/g, '#!'));
                console.log('Fixed links in', filepath);
            }
        }
    });
}
walk('src');

// Copy CSS files
const sourceCssDir = 'C:/Users/thaibao/Documents/crawlerwebsite/sprazo-full-site/css';
const destCssDir = 'C:/Users/thaibao/Documents/crawlerwebsite/sprazo-nextjs/src/styles';

if (!fs.existsSync(destCssDir)) fs.mkdirSync(destCssDir, { recursive: true });

fs.readdirSync(sourceCssDir).forEach(file => {
    if (file.endsWith('.css')) {
        fs.copyFileSync(path.join(sourceCssDir, file), path.join(destCssDir, file));
        console.log('Copied', file);
    }
});
