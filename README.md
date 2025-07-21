A lightweight Node.js tool that helps you spot access control issues and sneaky misconfigurations on websites.
🔍 What It Does

This script scans a target domain and checks for:

    Custom 403 Forbidden or 404 Not Found pages that might leak internal info (like directory names or admin panels)

    Suspicious responses — for example, if a restricted or missing page returns a 200 OK instead of an error

    Signs of soft-blocked paths or weak access control

It’s a quick way to get a feel for how a site handles restricted content, especially useful during recon or bug bounty hunting.
