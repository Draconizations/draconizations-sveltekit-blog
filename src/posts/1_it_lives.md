---
title: IT LIVES!
path: 2022-07-08-it-lives
date: '2022-07-08'
tags:
    - meta
---

After two hours of intense pain, I FINALLY managed to get the site online. Now writing blog posts should be easy, I hope.

Just to give you all a taste of my struggles, as well as some tips to get sveltekit working with the `gh-pages` npm module, I'll lay out some details below:

- don't forget the .nojekyll file. It breaks a lot of stuff
- don't try to change the build directory to `./build`, even though that is the default, it breaks even more stuff somehow (aka leaves the build directory empty other than the favicon).
- don't forget the CNAME file as well, unless you want to manually edit that in every time you publish your website.
- and finally, CHECK what you're publishing before you publish it, I had to delete the `gh-pages` branch because I pushed my file system paths, including my deadname, on there multiple times!

But, oh well, I managed to get here. Future blog posts on the way!