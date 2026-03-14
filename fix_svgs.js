const fs = require('fs');

try {
    const html = fs.readFileSync('../sprazo-full-site/offer.html', 'utf8');
    
    const blocks = html.split('<div class="sp-service-image">').slice(1, 5);
    const svgs = blocks.map(b => {
        let svgStr = b.substring(b.indexOf('<svg'), b.indexOf('</svg>') + 6);
        svgStr = svgStr.replace(/class=/g, 'className=')
                       .replace(/xml:space="preserve"/g, '')
                       .replace(/xmlns:xlink="[^"]*"/g, '')
                       .replace(/style="[^"]*"/g, '')
                       .replace(/enable-background/g, '')
                       .replace(/data-original/g, 'dataOriginal');
        return svgStr;
    });

    if (svgs.length !== 4) {
        throw new Error(`Found ${svgs.length} SVGs instead of 4.`);
    }

    const replaceSvgs = (filePath) => {
        let code = fs.readFileSync(filePath, 'utf8');
        let index = 0;
        code = code.replace(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 51\d 51\d" width="512" height="512">[\s\S]*?<\/svg>/g, (match) => {
            if (index < 4) {
                return svgs[index++];
            }
            return match;
        });
        fs.writeFileSync(filePath, code);
        console.log(`Updated ${filePath}`);
    };

    replaceSvgs('./src/components/offer/OfferServices.jsx');
    replaceSvgs('./src/components/home/fashion/FashionServices.jsx');
    console.log("Successfully extracted and replaced all 4 SVGs!");
} catch (e) {
    console.error("Error:", e);
}
