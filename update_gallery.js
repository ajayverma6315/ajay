const fs = require('fs');

let content = fs.readFileSync('src/data/projects.ts', 'utf8');

const newGallery = `gallery: [
        { url: '/a1.JPG', alt: 'Interior Design Project Image 1' },
        { url: '/a2.JPG', alt: 'Interior Design Project Image 2' },
        { url: '/a3.JPG', alt: 'Interior Design Project Image 3' },
        { url: '/a4.JPG', alt: 'Interior Design Project Image 4' },
        { url: '/b1.JPG', alt: 'Interior Design Project Image 5' },
        { url: '/b2.JPG', alt: 'Interior Design Project Image 6' },
        {
          url: '/pagespeed-desktop.jpg',
          alt: 'PageSpeed Insights Desktop Results'
        },
        {
          url: '/pagespeed-mobile.jpg',
          alt: 'PageSpeed Insights Mobile Results'
        }`;

content = content.replace(/gallery:\s*\[\s*\{\s*url:\s*'\/pagespeed-desktop\.jpg'/, newGallery);

fs.writeFileSync('src/data/projects.ts', content);
