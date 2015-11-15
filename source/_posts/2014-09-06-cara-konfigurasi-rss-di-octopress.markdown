---
layout: post
title: "Cara Konfigurasi RSS di Octopress"
date: 2014-09-06 21:30:44 +0700
comments: true
categories: [octopress]
description: Cara Konfigurasi RSS di Octopress
keywords: Cara Konfigurasi RSS di Octopress
---

Langsung saja karena saya anggap anda sudah master{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}dan sudah mengerti apa arti dari RSS itu sendiri dan gimana cara konfigurasi RSS / Email di Octopress yang secara default masih keadaan kosong di file `_config.yml` <!-- more -->

``` yaml
# RSS / Email (optional) subscription links (change if using something like Feedburner)
subscribe_rss: /atom.xml
subscribe_email: 
# RSS feeds can list your email address if you like
email: 
```
Bagaimaka caranya konfigurasi dari file YAML tersebut?

Pertama anda daftar dulu disini [http://feeds.feedburner.com](http://feeds.feedburner.com), itu adalah RSS layanan dari google. Dan silakan di konfigurasi dulu akun anda disana jangan lupa untuk menyantumkan URL Blog Octopress kalian di feedburner tersebut dengan benar, kalau sudah.

Edit file `_config.yml`

cari:

``` yaml
# RSS / Email (optional) subscription links (change if using something like Feedburner)
subscribe_rss: /atom.xml
subscribe_email: 
# RSS feeds can list your email address if you like
email: 
```
Rubah kurang lebih seperti ini:

``` yaml
# RSS / Email (optional) subscription links (change if using something like Feedburner)
subscribe_rss: /atom.xml
subscribe_email: feed://feeds.feedburner.com/FeedAddressKamu
# RSS feeds can list your email address if you like
email: email@kamu.com
```

##### Note:
* Rubah `feed://feeds.feedburner.com/FeedAddressKamu` dengan Feed Address anda sesungguhnya.
* Rubah `email@kamu.com` dengan email anda sesungguhnya.

Kemudian save dan silakan di preview / deploy.

Sampai sini sudah selesai, ketika RSS Feed yang ada di octopress kalian di klik (bagian atas) akan muncul POPUP subscribe RSS.
