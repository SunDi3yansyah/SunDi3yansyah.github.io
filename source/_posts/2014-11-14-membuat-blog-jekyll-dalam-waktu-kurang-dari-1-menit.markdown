---
layout: post
title: "Membuat Blog Jekyll Dalam Waktu Kurang Dari 1 Menit"
date: 2014-11-14 03:50:42 +0700
comments: true
categories: [jekyll, ruby, asciinema]
description: Membuat Blog Jekyll Dalam Waktu Kurang Dari 1 Menit
keywords: membuat jekyll, membuat blog jekyll, cara membuat blog jekyll, Membuat Blog Jekyll Dalam Waktu Kurang Dari 1 Menit
---
{% img center https://lh4.googleusercontent.com/-xCp6nD01yA8/VGUb4oM55iI/AAAAAAAAAHM/0Hse4vDTwHk/s800/Screenshot+from+2014-11-14+04:00:02.png 'jekyll' 'jekyll' %}

{% blockquote en.wikipedia http://en.wikipedia.org/wiki/Jekyll_(software) Jekyll (software) %}
Jekyll is an open source program, written in Ruby by Tom Preston-Werner, GitHub's co-founder. Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites. It is a file-based CMS; instead of using databases, Jekyll takes the content, renders Markdown or Textile and Liquid templates, and produces a complete, static website ready to be served by Apache HTTP Server, Nginx or another web server.[1] Jekyll is the engine behind GitHub Pages,[2] a GitHub feature that allows users to host websites based on their GitHub repositories.
{% endblockquote %}
<!-- more -->
{% blockquote id.wikipedia http://sundi3yansyah.com/article/2014/11/14/membuat-blog-jekyll-dalam-waktu-kurang-dari-1-menit/ wikipedia version google translate %}
Jekyll merupakan open source program yang ditulis dalam Ruby oleh Tom Preston-Werner , GitHub yang co-founder. Jekyll adalah, sederhana blog -aware, situs statis generator situs pribadi, proyek, atau organisasi. Ini adalah file berbasis CMS ; alih-alih menggunakan database , Jekyll mengambil konten, membuat penurunan harga atau tekstil dan template Liquid , dan menghasilkan lengkap, website statis siap disajikan oleh Apache HTTP Server , Nginx atau server web lain. [ 1 ] Jekyll adalah mesin belakang GitHub Pages , [ 2 ] fitur GitHub yang memungkinkan pengguna untuk meng-host situs web berdasarkan repositori GitHub mereka.
{% endblockquote %}

Terdengar aneh dengan judul ini? Yup...emang benar bikin blog pakai jekyll cepat sekali gk sampe 1 menit udah jadi selanjutnya kita rancang sendiri, semacam framework begitu bray{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}...

Asumsikan:

1. [Sudah install Ruby](http://sundi3yansyah.com/article/categories/ruby/)
2. [Sudah install RubyGems](http://sundi3yansyah.com/article/categories/ruby/)
3. Sudah install jekyll `gem install jekyll`

Oke langcung ajah eak... :*

#### Install jekyll dari gems, jika belum kalian install

{% codeblock lang:sh install jekyll %}
gem install jekyll
{% endcodeblock %}

Jika sudah install jekyll ya gk usah di install lg, mungkin perlu upgrade atau mau downgrade versi :v

Asumsikan posisi saya ada di `/home/user/`

Saya akan membuat blog jekyll baru dengan folder `nggak-ada-1-menit`{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}maka:

{% codeblock lang:sh new jekyll blog %}
jekyll new nggak-ada-1-menit
{% endcodeblock %}

{% codeblock lang:sh masuk ke foldernya %}
cd nggak-ada-1-menit
{% endcodeblock %}

{% codeblock lang:sh jalankan generate jekyll %}
jekyll serve
{% endcodeblock %}

Sebagai contoh:

{% img center https://lh5.googleusercontent.com/-VL7L0G8CoF0/VGUe7dueORI/AAAAAAAAAHw/ainRVh7_vxc/s800/Screenshot+from+2014-11-14+04:10:42.png 'buat jekyll blog' 'buat jekyll blog' %}


Sekarang buka browser dan arahkan address bar ke [http://localhost:4000](http://localhost:4000)

Hasilnya:

{% img center https://lh4.googleusercontent.com/-8eXMgIjNcds/VGUe7Zj7bkI/AAAAAAAAAH0/Yqu9YmhoTqk/s800/Screenshot+from+2014-11-14+04:12:21.png 'hasil generate jekyll' 'hasil generate jekyll' %}

Atau bisa melihat video dibawah ini:

<script src="https://asciinema.org/a/14165.js" id="asciicast-14165" async></script>
