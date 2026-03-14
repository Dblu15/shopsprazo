const fs = require('fs');
const files = ['src/styles/style.css', 'src/styles/demo-2.css', 'src/styles/remixicon.css'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        content = content.replace(/\.\.\/fonts\//g, '/fonts/');
        content = content.replace(/\.\.\/images\//g, '/images/');
        fs.writeFileSync(f, content);
        console.log('Fixed ' + f);
    }
});
