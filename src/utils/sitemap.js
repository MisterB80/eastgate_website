// src/utils/sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function generateSitemap() {
    const domain = 'https://www.eastgatedigital.co.uk';
    const token = process.env.PUBLIC_STORYBLOK_TOKEN;
    const version = 'published';

    const response = await fetch(`https://api.storyblok.com/v1/cdn/stories?version=${version}&token=${token}`);
    const { stories } = await response.json();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    stories.forEach((story) => {
        let url = story.full_slug === 'home' ? domain : `${domain}/${story.full_slug}`;

        xml += `  <url>\n`;
        xml += `    <loc>${url}</loc>\n`;
        xml += `    <lastmod>${new Date(story.published_at).toISOString()}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.5</priority>\n`;
        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    // Write the sitemap to the ./public directory
    const sitemapPath = path.join(__dirname, '..', '..', 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);

    console.log('Sitemap generated successfully!');
}

// Conditionally run the function if this script is executed directly
if (process.argv[1] && process.argv[1] === fileURLToPath(import.meta.url)) {
    generateSitemap().catch(console.error);
}
