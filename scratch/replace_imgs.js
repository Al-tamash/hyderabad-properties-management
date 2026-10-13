const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('import Image from "next/image";')) {
  content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
}

// Replace avatars with explicit dimensions
content = content.replace(
  /<img src="\/images\/flat\.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-\[var\(--color-primary\)\] object-cover z-30 relative" \/>/g,
  '<Image src="/images/flat.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-30 relative" />'
);
content = content.replace(
  /<img src="\/images\/apartment\.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-\[var\(--color-primary\)\] object-cover z-20 relative" \/>/g,
  '<Image src="/images/apartment.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-20 relative" />'
);
content = content.replace(
  /<img src="\/images\/villa\.jpg" alt="Property" className="w-10 h-10 rounded-full border-2 border-\[var\(--color-primary\)\] object-cover z-10 relative" \/>/g,
  '<Image src="/images/villa.jpg" alt="Property" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[var(--color-primary)] object-cover z-10 relative" />'
);

// Replace the rest with Image fill
content = content.replace(/<img /g, '<Image fill ');

fs.writeFileSync(path, content);
console.log('Done replacing images in page.tsx');
