---
layout: post
title: "Cara Membuat Custom 404 Pages di GitHub"
date: 2014-09-12 02:55:12 +0700
comments: true
categories: [github]
description: Cara Membuat Custom 404 Pages di GitHub
keywords: Cara Membuat Custom 404 Pages di GitHub, membuat page not found github, 404 page not found, github 404, 404 github pages, 
---
Berbagi ilmu itu indah, betul? Jos...{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a. Kesekian kalinya saya membuat postingan disini, mungkin ini adalah postingan yang singkat untuk pengguna Github (Social Coding) sesuai judul "**Cara Membuat Custom 404 Pages di GitHub**" secara default Page 404 Not Found untuk GitHub adalah seperti gambar di bawah.
<!-- more -->
{% img center http://i40.photobucket.com/albums/e228/sundi3yansyah/PagenotfoundmiddotGitHubPages-Chromium_003_zps7974ad2b.png Cara Membuat Custom 404 Pages di GitHub %}

> A: Lantas bisa di rubah? Dan bagaimana caranya?

-----

> B: Oh bisa...

Seperti yang di katakan dalam artikel Help GitHub

{% blockquote GitHub Help https://help.github.com/articles/custom-404-pages Custom 404 Pages %}
You can provide custom 404 error pages when people try to access non-existent pages on your site.
{% endblockquote %}

#### Berikut ini caranya

> Asumsikan anda sudah mempunyai repositori GitHub Pages, jika anda belum mempunyai silakan cari di blog saya ini untuk memperlajari bagaimana kita berkerja di GitHub Pages, baik itu menggunakan Static Manual Pages, menggunakan Jekyll Ruby, atau menggunakan Framework lainnya seperti Octopress dan masih banyak Framework Jekyll lainnya. Saya mempunyai beberapa refrensi untuk anda di bawah ini.

*   [Cara Membuat Halaman Di Github](http://sundi3yansyah.com/article/2014/09/12/cara-membuat-halaman-di-github/)
*   [Cara Membuat Repository Baru Di Github](http://sundi3yansyah.com/article/2014/08/27/cara-membuat-repository-baru-di-github/)
*   [Cara Install Octopress](http://sundi3yansyah.com/article/2014/07/02/cara-install-octopress/)

**Oke... langsung saja, disini saya tidak akan menjelaskan secara rinci tetapi saya akan menjelaskan dengan LOGIKA**

*   Buat 1 file bernama `404.html`.
*   Isi script/codenya berupa syntax HMTL, silakan anda design sendiri sesuka kalian mau seperti apa.
*   Kemudian simpan file `404.html ` di dalam folder repositori GitHub Pages kalian.
*   Silakan di push/deploy repositori kalian.
*   Yang pada akhirnya akan ter upload/push ke directori root repositori GitHub Pages kalian.
*   Sebagai contoh `https://github.com/username/username.github.io/blob/master/404.html`.

**Note:**
> Jika menggunakan Octopress atau Jekyll anda bisa juga membuat dengan Generator Markdown.

#### Demo:
[SunDi3yansyah - 404 Not Found](http://sundi3yansyah.com/gantengs)

#### Source Code
``` html 404 https://github.com/SunDi3yansyah/SunDi3yansyah.github.io/blob/master/404.html 404.html
<html>
<head><title>404 Not Found</title><meta http-equiv="refresh" content="5;url=http://sundi3yansyah.com"></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
```