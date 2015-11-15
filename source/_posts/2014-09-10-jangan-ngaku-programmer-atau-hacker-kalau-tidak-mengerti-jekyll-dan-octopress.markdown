---
layout: post
title: "Jangan Ngaku Programmer atau Hacker Kalau Tidak Mengerti Jekyll dan Octopress"
date: 2014-09-10 01:01:32 +0700
comments: true
categories: [octopress, jekyll, github]
description: Jangan Ngaku Programmer atau Hacker Kalau Tidak Mengerti Jekyll dan Octopress
keywords: Jangan Ngaku Programmer atau Hacker Kalau Tidak Mengerti Jekyll dan Octopress
---
Apakah anda Programmer ataupun Hacker? Tidak ada yang mengaku kan, tapi seharusnya anda di akui jika anda punya sebuah project dan saling berkolaborasi, apakah anda punya blog artikel? Pasti kalau programmer dan hacker itu sudah pernah membuat Web blog artikel, tetapi jangan salah, sekarang saya tanya, Platform apa yang anda gunakan untuk nge Blog biar gk goblok? Sepintas pertanyaan tersebut pasti banyak yang menjawab CMS Wordpress, Joomla, Blogspot dan lain sebagainya. Cok...! Nulis code di Wordpress, Joomla, Blogspot itu kurang mudah. Atau mungkin bisa juga dibilang susah. Setelah itu saya melirik platform lain yaitu [Squarespace](http://squarespace.com), [Typepad](http://typepad.com), [Posthaven](http://posthaven.com) dan juga [Ghost](http://ghost.org). Ke 4 platform tersebut mempunyai 1 kesamaan yang cukup menyebalkan. Layanan yang ditawarkan berbayar! Seperti kebanyakan orang Indonesia lainnya, tentu saja saya lebih suka barang gratisan. Tetapi dari ke 4 platform tersebut, jika suatu hari nanti saya sudah kembali ke jalan yang benar (mau membayar), saya akan memilih Ghost. Kenapa? Karena Ghost memenuhi ke 3 kriteria saya dengan sangat baik.
<!-- more -->
Pernah menggunakan [tumblr](http://praxmatig.tumblr.com)? Mungkin dari beberapa kalian yang mempunyai kan. Tetapi saya tidak, saya pernah mencoba dan kemudian melupakannya. Sepintas saya memakai [tumblr](http://praxmatig.tumblr.com) untuk blogging dan meskipun merupakan platform blogging yang cukup bagus-bagus hampir jelek,haha,,, apa yang jelek? SEOnya jelek! Pernah melihat postingan tumblr yang ada di halaman result 1 google.com? Oh jelas belum. Maka dari itu, saya mencari platform blogging yang lain untuk memuat tulisan-tulisan saya tentang programming development.

### Jekyll
{% blockquote Jekyll http://jekyllrb.com/docs/home/ %}
Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown (or Textile) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.
{% endblockquote %}

Ngerti? Jadi intinya kamu hanya perlu menulis di file teks dengan format [Markdown](daringfireball.net/projects/markdown/) atau [Textile](http://textile.sitemonks.com/), lalu Jekyll akan menggenerate website kamu. Website yang dihasilkan hanya berupa website statis yang berisi hanya html, css dan javascript. Tidak ada database, tidak ada code apapun. Sudah kelihatan bagusnya dimana? Belum? Oke, akan saya jelaskan.

*   Cepat

    Performa sebuah website biasanya paling ditentukan oleh waktu yang diperlukan untuk melakukan query ke database dan juga overhead dari code kamu. Tetapi Jekyll menggenerate website statis untuk kamu yang tidak ada query database atau code apapun. Artinya? Betul sekali. Website kamu akan menjadi super cepat! Belum lagi jika kamu melakukan caching secara agressive, pembaca pasti akan sangat senang membaca blog kamu (tentunya jika artikel kamu semenarik artikel ini).

*   Mudah

    Sudah pernah pakai Markdown? Kalau sudah silahkan skip ke point selanjutnya. Jika belum silahkan baca tentang [Markdown](http://daringfireball.net/projects/markdown). Intinya Markdown adalah tool untuk konversi text-to-HTML. Tetapi teks yang kamu tulis harus mengikuti [syntax](http://daringfireball.net/projects/markdown/syntax) Markdown. Jangan khawatir, syntaxnya sangat mudah sekali. Cukup luangkan waktu setengah jam saja untuk menguasainya.

*   Pakai teks editor kesayangan kamu

    Secara pribadi, saya kurang menyukai editor Wordpress, Blogger dan beberapa platform lainnya. Apakah kamu sependapat dengan saya? Jika ya, bagus sekali karena dengan Jekyll kamu dapat menulis postingan kamu dengan editor kesayangan kamu. Editor saya menggunakan vi, vim, nano, sublimetext, haroopad. Kenapa pakai itu? Dengan saya menggunakan sublimetext dan haroopad saya langsung bisa melihat isi postingan saya tanpa harus mem-publish dan kedua software ini sangat ringan digunakan.

Keren bukan? Jelas keren banget, {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a. Kamu dapat membacanya secara lebih lengkap di situs [Jekyll](http://jekyllrb.com/). Sekarang saya akan menjelaskan tentang Octopress.


### Octopress

{% blockquote Octopress http://octopress.org/ %}
Octopress is a framework designed by Brandon Mathis for Jekyll, the blog aware static site generator powering Github Pages. To start blogging with Jekyll, you have to write your own HTML templates, CSS, Javascripts and set up your configuration. But with Octopress All of that is already taken care of. Simply clone or fork Octopress, install dependencies and the theme, and you're set.
{% endblockquote %}

Singkatnya Octopress hampir menyerupai Jekyll. Tetapi di Octopress kamu telah diberikan theme/template dasar. Selain template dasar, juga tersedia themes lain seperti yang dapat dilihat di [opthemes.com](http://opthemes.com/), [octopressthemes.com](http://octopressthemes.com/) dan [octopress wiki](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes). Octopress juga menyediakan plugin-plugin seperti code snippets, video tag, github gists, jsFiddle, syntax highlight dan plugin lainnya. Nah dari plugin-plugin diatas saya tarik lagi point di atas tentang software sublimetext, saya bisa membuat snippet sendiri di sublimetext dengan perintah `CTRL+SHIFT+P` kemudian mengetikkan nama snipet yang saya buat dan langsung muncul syntax dari plugin tersebut. Keren!

Gimana? Tertarik untuk mencobanya? Saya sudah membuat tutorial tentang cara menginstall dan beberapa aspek tentang Octopress menggunakan **VIDEO** silakan di cai di arsip blog saya ini. Sesuai dengan konsep Octopress "A blogging framework for hackers", kamu harusnya dapat melakukannya sendiri jika kamu merasa cukup pantas untuk dipanggil `programmer ataupun hacker`

Semua postingan jekyll/octopress saya terbuka, gk percaya? Silakan kunjungin repository blog saya ini disini:

[https://github.com/SunDi3yansyah/SunDi3yansyah.github.io](https://github.com/SunDi3yansyah/SunDi3yansyah.github.io)

<div class="github-widget" data-repo="SunDi3yansyah/SunDi3yansyah.github.io"></div>

Kalau anda mengatakan `dimana file public_html dan database blog saya ini` ya disana. :LOL: ~> {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a...

Anda sudah membaca artikel saya sebelumnya belum? [Blogging Menggunakan Octopress & Github](http://sundi3yansyah.com/article/2014/07/02/blogging-menggunakan-octopress-and-github/), memang sedikit hampir sama cuma disini saya menjelaskan sedikit spesifik kepenggunaanya dan melestarikan para pengguna Jekyll, Octopress dan Github.