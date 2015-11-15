---
layout: post
title: "Cara Memasang Octocard di Web"
date: 2014-09-02 23:23:02 +0700
comments: true
categories: [github]
description: Cara Memasang Octocard di Web
keywords: Cara Memasang Octocard di Web
---

Apa itu Octocard? Octocard adalah sebuah repository widget yang bisa kita pasang di web/blog kita untuk menampilkan sebuah profile kita di GitHub, yang di buat menggunakan API Gihub, authornya adalah `zmmbreeze`. Apa saja yang bisa kita tampilkan dari widget ini? di antaranya ada Nama, Username, Email, Website, Lokasi, Company, Repository, Event, Organisasi.
<!-- more -->
##### Official web: [Octocard](http://octocard.in/)

##### Demo ada di blog saya ini:

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/my-octocard_zps9b3fa741.png sundi3yansyah octocard %}

Oke langsung saja masukan code javascript di bawah ini ke Web/blog kalian:

{% codeblock root@sundi3yansyah %}
<script data-name="username" data-modules="base,details,stats,repos,eventsStatis,orgs" data-reposNum="3" src="http://nodejs.in/octocard/bin/octocard.js"> </script>
{% endcodeblock %}

**Ganti `username` dengan username github kalian.**

Sekarang buka halaman Octocardnya di [http://octocard.in](http://octocard.in)

Kemudian klik:

#### Sign Up with Github

Anda akan di bawa ke halaman "Authorize application" kemudian langkah selanjutnya klik:

#### Authorize application

Oke sudah sampai sini silakan di lihat hasilnya


## Untuk pengguna Octopress
> Silakan di simak sampai selesai untuk pengguna Octopress

Buat file baru dengan extensi `.html` misalnya `octocard.html` isinya seperti di bawah ini:

{% codeblock javascript %}
<script data-name="username" data-modules="base,details,stats,repos,eventsStatis,orgs" data-reposNum="3" src="http://nodejs.in/octocard/bin/octocard.js"> </script>
{% endcodeblock %}

**Ganti `username` dengan username github kalian.**

dan simpan di folder `source/_includes/asides/`
kemudian edit file `_config.yml` cari konfigurasi seperti ini:

`default_asides`

Misalnya:

{% codeblock _config.yml %}
default_asides: [asides/widget-1.html, asides/widget-2.html]
{% endcodeblock %}

Tambahkan valuenya untuk widget octocard seperti ini:

{% codeblock _config.yml %}
default_asides: [asides/widget-1.html, asides/octocard.html, asides/widget-2.html]
{% endcodeblock %}

** Ingat `asides/widget-1.html` dan `asides/widget-2.html` itu hanya contoh, jadi saya tidak tau apa saja widget yang sudah di pasang di Octopress kalian dan jangan lupa urutannya, sesuaikan lah apa yang kalian inginkan.

Kemudian SAVE semuanya.

Sekarang buka halaman Octocardnya di [http://octocard.in](http://octocard.in)

Kemudian klik:

### Sign Up with Github

Anda akan di bawa ke halaman "Authorize application" kemudian langkah selanjutnya klik:

### Authorize application

Oke sudah sampai sini silakan di lihat hasilnya dengan preview, kalau sudah siap di onlinekan tinggal di generate && deploy.

Semoga sukses...!
happy coding...