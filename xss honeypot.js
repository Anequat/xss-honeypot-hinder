const axios = require('axios');

// Replace this with the target domain
const target = process.argv[2];

if (!target) {
    console.log("Usage: node simple-honeypot.js https://example.com");
    process.exit(1);
}

const paths = [
    '/admin',
    '/secret',
    '/hidden',
    '/private',
    '/config',
    '/dashboard',
    '/notfound12345',
];

(async () => {
    for (const path of paths) {
        const url = target + path;
        try {
            const response = await axios.get(url, { validateStatus: () => true });

            const code = response.status;
            const body = response.data.toString().slice(0, 200); // first 200 chars

            // Simple detection
            if (code === 200 && path.includes('notfound')) {
                console.log(`[!] ${url} returned 200 on likely missing path`);
            } else if (code === 403 && /admin|forbidden|access/i.test(body)) {
                console.log(`[!] ${url} has custom 403 page`);
            } else if (code === 404 && /directory|server|internal/i.test(body)) {
                console.log(`[!] ${url} has custom 404 page`);
            } else {
                console.log(`[OK] ${url} -> ${code}`);
            }
        } catch (err) {
            console.log(`[ERROR] ${url}: ${err.message}`);
        }
    }
})();
