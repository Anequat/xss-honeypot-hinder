    Install the required library:

npm install axios

    Run the script with a target domain:

node simple-honeypot.js https://example.com

The script will test a few common sensitive paths like /admin, /config, /private, etc., and report anything odd.
🧠 What to Look For

You'll see results like:

[!] https://example.com/notfound12345 returned 200 on likely missing path
[!] https://example.com/admin has custom 403 page
[OK] https://example.com/hidden -> 404

These could point to:

    Misleading status codes

    Custom error pages leaking info

    Possible access control weaknesses

