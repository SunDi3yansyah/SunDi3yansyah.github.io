---
layout: post
title: "Cara Membuat Halaman di Github"
date: 2014-09-12 00:12:22 +0700
comments: true
categories: [github]
description: Cara Membuat Halaman di Github. Pada kesempatan kali ini saya akan membahas sedikit tentang GitHub Pages
keywords: Cara Membuat Halaman di Github, GitHub Pages, username github, buat halaman di github, hosting github, create github pages
---
{% img center http://www.wakanda.org/sites/default/files/blog/blog-github.png github %}

Pada kesempatan kali ini saya akan membahas sedikit tentang GitHub Pages. Anda pernah melihat halaman web atau blog orang dengan URL seperti ini `username.github.io`? ooohhh... pasti sering lihat kan kalau suka nongkrong di Google, {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a. Seperti blog saya ini sebelumnya adalah `sundi3yansyah.github.io` Yah itu yang akan nanti saya bahas. Sebelumnya saya pernah membuat tutorial tentang [Cara Membuat Repository Baru Di Github](http://sundi3yansyah.com/article/2014/08/27/cara-membuat-repository-baru-di-github/) dan [Cara Install Octopress](http://sundi3yansyah.com/article/2014/07/02/cara-install-octopress/) ya semua itu adalah hasil commiting repository ke github. Tetapi disini akan saya jelaskan secara General. Seperti yang di jelaskan di GitHub Pages
<!-- more -->
{% blockquote GitHub Pages https://pages.github.com/ GitHub %}
Websites for you and your projects.
Hosted directly from your GitHub repository. Just edit, push, and your changes are live.
Roll vanilla, or generate a site for your project to quickly get started.
You get one site per GitHub account and organization, 
and unlimited project sites. Ready? Let’s get started.
{% endblockquote %}

Paham? Oke... jadi maksudnya adalah kita bisa membuat sebuah repository yang nantinya akan menjadi sebuah halaman website baik menggunakan Akun maupun Organisasi dengan semau kita, kapan kita akan mengcommitnya dan mengnyuntingnya ataupun menghapusnya selayaknya hosting dengan sumber code terbuka (Open Source).

Sebelum ke tutorialnya mari kita bahas dulu apa saja yang menjadi fitur utama disini.

#### Blogging with Jekyll
{% blockquote GitHub Pages https://help.github.com/articles/using-jekyll-with-pages Blogging with Jekyll %}
Using Jekyll, you can blog using beautiful Markdown syntax, and without having to deal with any databases. Learn how to set up Jekyll.
{% endblockquote %}

Ngerti kgk...? Jadi disini kita bisa membuat halaman web kita dengan Jekyll yang di rancang dengan bahasa Ruby, disini kita bisa menggunakan syntax Markdown kemudian dari syntax markdown tersebut akan di generate menjadi halaman static HTML.

#### Custom URLs
{% blockquote GitHub Pages https://help.github.com/articles/setting-up-a-custom-domain-with-pages Custom URLs %}
Want to use your own custom domain for a GitHub Pages site? Just create a file named CNAME and include your URL. Read more.
{% endblockquote %}

Ngerti kgk...? Jadi kita bisa membuat website di github page dengan kostum domain kita sendiri yang tadinya `username.github.io` menjadi `domain.com`.

#### Guides
{% blockquote GiHub Pages https://help.github.com/categories/20/articles Guides %}
Learn how to create custom 404 pages, use submodules, and learn more about GitHub Pages.
{% endblockquote %}

Ngerti kgk...? Secara default page 404 GitHub Page kita sudah di atur dengan GitHub tetapi disini kita bisa membuat kostum halaman 404 dengan keingin kita sendiri.

**Mari kita mulai...**

### 1. Buat Repositori Baru (User or organization site)

[https://github.com/new](https://github.com/new) Beri nama `username.github.io` misalnya `SunDi3yansyah.github.io` isi bagian **Description (optional)** sesuka kalian kemudian klik tombol **Create repository**, kalau sudah kita biarkan saja silakan baca Step selanjutnya.

{% img center http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12010619_zps7ce8405f.png Cara Membuat Halaman di Github Step 1 %}

### ?. Git Sistem Operasi yang digunakan (What git client are you using?)
Disini saya akan menjelaskan untuk di Platform Sistem Operasi Linux, bagaimana cara install Git di Linux?

*   [Versi Official](http://git-scm.com/download/linux)
*   [Cara Install/Upgrade Versi Git Core Terbaru di Ubuntu](http://sundi3yansyah.com/article/2014/07/03/cara-install-slash-upgrade-versi-git-core-terbaru/)

{% img [left:right] http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12012345_zps2fb6b58a.png Cara Membuat Halaman di Github Step git OS %}

### 2. Masuk Terminal (Clone the repository)

> Buat direktori baru, terserah mau dimana saja direktorinya.

{% codeblock root@sundi3yansyah %}
git clone https://github.com/username/username.github.io
{% endcodeblock %}

Ganti `username` dengan username kalian, misalnya

{% codeblock root@sundi3yansyah %}
git clone https://github.com/sundi3yansyah/sundi3yansyah.github.io
{% endcodeblock %}

{% img center http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12011837_zps019998cc.png Cara Membuat Halaman di Github Step 2 %}

### 3. Masuk ke direktori yang baru saja di Clone

{% codeblock root@sundi3yansyah %}
cd username.github.io
{% endcodeblock %}

Buat contoh halaman index

{% codeblock root@sundi3yansyah %}
echo "Hello World" > index.html
{% endcodeblock %}

`Hello World` bisa anda ganti dengan apa saja.

{% img center http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12012436_zps341502fc.png Cara Membuat Halaman di Github Step 3 %}

### 4. Publish ke Github (Push it)

{% codeblock root@sundi3yansyah %}
git add --all
{% endcodeblock %}

**NEXT**

{% codeblock root@sundi3yansyah %}
git commit -m "Initial commit"
{% endcodeblock %}

**NEXT**

{% codeblock root@sundi3yansyah %}
git push
{% endcodeblock %}

{% img center http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12012456_zps77906b00.png Cara Membuat Halaman di Github Step 4 %}

### 5. Selesai (…and you're done!)

> Sekarang arahkan ke browser favorite kalian (Chromium/Firefox) ke [http://username.github.io](http://username.github.io)

{% img center http://i1183.photobucket.com/albums/x469/adiemuse/Screenshotfrom2014-09-12012512_zpsb7a03a5d.png Cara Membuat Halaman di Github Step 5 %}

**Note: Jika tidak muncul (404) mungkin anda harus menunggu beberapa menit untuk menerima resolv DNS internet kalian ke Server GitHub**

> Oke... sekian postingan kali ini dari saya, nantikan postingan mengenai **Custom URLs** dan **Guides 404 Pages**