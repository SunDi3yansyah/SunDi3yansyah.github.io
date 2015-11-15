---
layout: post
title: "Blogging Menggunakan Octopress &amp; Github"
date: 2014-07-02 08:06:29 +0700
comments: true
categories: [octopress, github, git, gem, ruby]
description: Setelah lama menggunakan wordpress, blogger, joomla sebagai media untuk blogging akhirnya saya memutuskan untuk bermigrasi menggunakan octopress.
keywords: Blogging Menggunakan Octopress dan Github, ngeblog biar tidak goblok, blog paling mudah, ngeblog paling enak, blog tidak pakai database
---
Setelah lama menggunakan wordpress, blogger, joomla sebagai media untuk blogging akhirnya saya memutuskan untuk bermigrasi menggunakan octopress. Hmmm sebenernya ini tulisannya mas sugeng karena saya juga sejalan dengan beliau maka saya ingin menuliskannya kembali di blog saya ini...hehe... Alasan kenapa saya bermigrasi sebagai berikut:

### Plugin Wordpress terlalu banyak

Salah satu keunggulan worpress adalah tersedianya plugin yang banyak, namun untuk mengelola plugin-plugin yang terinstall terlalu makan waktu sehingga terkadang malah tidak fokus pada tujuan nge-blog yaitu menulis.
<!-- more -->
### Cepat dan Efisien

Octopress framework menggunakan [Jekyll](https://github.com/mojombo/jekyll) untuk menggenerate halaman-halaman websitenya. Semua halaman blog adalah static page sehingga tidak membutuhkan proses yang berat pada server dan dapat didownload secepatnya ke browser client.

### Hosting di Github Pages

Web static octopress bisa dihosting-kan di [Github pages](https://help.github.com/articles/what-are-github-pages) yang notabene gratis. Terlebih github selalu online dan waktu respon yang cepat.

### Mudah digunakan

Workflow penggunaan octopress juga sangat mudah, cukup dengan perintah command line posting blog lansung selesai.

{% codeblock %}
rake new_post['Judul Posting']
rake generate
rake deploy
{% endcodeblock %}

### Markdown

Sebagai editor, octopress menggunakan [Markdown](http://daringfireball.net/projects/markdown/). Menggunakan markdown lebih simple dan cepat daripada wordpress editor. Untuk markdown editor di Linux saya menggunakan [Haroopad](http://pad.haroopress.com/user.html#download).

### Tidak menggunakan database/Static pages

__apa? tidak menggunakan database??__ Ya, octopress tidak memerlukan database content sehingga tidak ada query yang memberatkan server. Config file disimpan di file `_config` kemudian halaman blog digenerate oleh `jekyll`.

### Security yang lebih baik

Tentunya dengan menggunakan service kepunyaan github, securitas dari blog lebih kuat.

### Tersedia Plugin

Octoress tentunya juga memiliki plugin-plugin yang dapat dipakai seperti Disqus, Twitter, Facebook, Github, dll..

Untuk sementara mungkin hal diatas yang bisa saya pikirkan. Dan sampai sekarang saya cukup puas menggunakan octopress.

Src: [Blogging Menggunakan Octopress & Heroku](http://catatan.sugengweb.net/2013/11/22/blogging-menggunakan-octopress-and-heroku/)