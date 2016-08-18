---
layout: post
title: "Cara Membuat Widget GitHub Menggunakan jQuery di Octopress"
date: 2014-09-02 22:20:35 +0700
comments: true
categories: [github]
description: Cara Membuat Widget GitHub Menggunakan jQuery di Octopress
keywords: Cara Membuat Widget GitHub Menggunakan jQuery di Octopress
---

Haha ketemu lagi sama orang ganteng B| jangan iri ya{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}kebetulan kemarin saya jalan-jalan di GitHub nemu repository bagus yaitu `GitHub-jQuery-Repo-Widget` untuk github yang bisa kita pasang di blog/web kita, ingat ini bisa di pasang di web berbasis apa saja, tetapi kali ini saya akan kasih contoh di Framework Octopress.

Liat dulu demonya
<div class="github-widget" data-repo="twbs/bootstrap"></div>
<!-- more -->

Code
{% codeblock root@sundi3yansyah %}
<div class="github-widget" data-repo="twbs/bootstrap"></div>
{% endcodeblock %}

Original repository
[twbs/bootstrap](https://github.com/twbs/bootstrap)

Mau buat kaya gitu juga kan? Nah simak nih...
Pertama download dulu repositorynya di bawah ini:

<div class="github-widget" data-repo="JoelSutherland/GitHub-jQuery-Repo-Widget"></div>

Kalau sudah di download silakan di extrak, ambil salah satu javascriptnya baik yang minify ataupun yang non minify sama saja

Minify:
`
jquery.githubRepoWidget.min.js
`

Non-Minify:
`
jquery.githubRepoWidget.js
`

Kopas salah satu JavaScript-nya ke repository octopress kita, misalnya di `source/javascripts` maka akan ada file di `source/javascripts/jquery.githubRepoWidget.js` atau `source/javascripts/jquery.githubRepoWidget.min.js`

Kemudian edit file `source/_includes/custom/head.html` tambahkan code seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
<script src="{{ root_url }}/javascripts/jquery.githubRepoWidget.js"></script>
{% endcodeblock %}

atau

{% codeblock root@sundi3yansyah %}
<script src="{{ root_url }}/javascripts/jquery.githubRepoWidget.min.js"></script>
{% endcodeblock %}

Kemudian save.
Nah sekarang coba kita buat page atau post baru, misalnya post kita berhubungan dengan repository Framework Laravel yang bisa anda lihat disini:

[Framework Laravel](https://github.com/laravel/laravel)

Cara menambahkan widget-nya ke postingan seperti ini

{% codeblock root@sundi3yansyah %}
<div class="github-widget" data-repo="laravel/laravel"></div>
{% endcodeblock %}

### Kunci

{% codeblock root@sundi3yansyah %}
<div class="github-widget" data-repo="username/nama-repository"></div>
{% endcodeblock %}

Tips for Octopress:
Karena belum ada syntax untuk bahasa di octopressnya maka kita membuatnya menggunakan HTML dulu, mungkin esok saya akan bisa membuat pluginnya.


Sekian postingan dari saya, jangan lupa follow my GitHub.
Hapy coding, hapy hacking, not hapy carding {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a