const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const dir = 'c:\\Users\\thaibao\\Documents\\crawlerwebsite\\sprazo-full-site';
const files = [
    'about-us.html', 'cart.html', 'checkout.html', 'compare.html', 'contact-us.html', 
    'faq.html', 'forgot.html', 'index.html', 'index_1.html', 'login.html', 
    'offer.html', 'register.html', 'terms.html', 'track-order.html', 'wishlist.html'
];

files.forEach(file => {
    try {
        const filePath = path.join(dir, file);
        if (!fs.existsSync(filePath)) return;
        const html = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(html);
        
        console.log(`\n--- ${file} ---`);
        
        // Find main wrapper, typically sections are direct children of body or a main wrapper
        $('section').each((i, el) => {
            const className = $(el).attr('class');
            const id = $(el).attr('id');
            console.log(`Section: ${className ? '.' + className.replace(/\s+/g, '.') : ''} ${id ? '#' + id : ''}`);
        });
    } catch (e) {
        console.error(`Error reading ${file}: ${e.message}`);
    }
});
