const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Fix Hero Background
content = content.replace(
  /<img src="\/images\/villa\.jpg" className="w-full h-full object-cover" alt="Background" \/>/,
  '<Image fill src="/images/villa.jpg" className="object-cover z-0" alt="Background" priority sizes="100vw" />'
);
content = content.replace(
  /<div className="absolute inset-0 bg-black\/40"><\/div>/,
  '<div className="absolute inset-0 bg-black/40 z-10"></div>'
);

// Add sizes to all other Image fill
content = content.replace(
  /<Image fill (.*?) \/>/g,
  (match, p1) => {
    if (match.includes('sizes=')) return match; // Already has sizes
    return `<Image fill ${p1} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />`;
  }
);

fs.writeFileSync(path, content);
console.log('Done adding sizes to images in page.tsx');
