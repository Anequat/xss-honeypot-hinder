# xss-honeypot-hinder
This script scans a target domain and checks for:      Custom 403 Forbidden or 404 Not Found pages that might leak internal info (like directory names or admin panels)      Suspicious responses — for example, if a restricted or missing page returns a 200 OK instead of an error      Signs of soft-blocked paths or weak access control
