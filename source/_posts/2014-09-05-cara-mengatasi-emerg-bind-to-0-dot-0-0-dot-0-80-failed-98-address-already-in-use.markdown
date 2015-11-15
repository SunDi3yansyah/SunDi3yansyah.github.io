---
layout: post
title: "Cara Mengatasi [emerg]: bind() to 0.0.0.0:80 failed (98: Address already in use)"
date: 2014-09-05 05:40:58 +0700
comments: true
categories: [nginx]
description: Cara Mengatasi emerg bind, Address already in use
keywords: Cara Mengatasi emerg bind, Address already in use
---
Jika di saat kita start atau restart muncul pesan error seperti ini nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use) itu berarti nginx atau proses lainnya sudah menggunakan port 80 kita pecahkan masalah itu disini.
<!-- more -->
Kita bisa kill masalah tersebut dengan memberikan command line ini:

```
sudo fuser -k 80/tcp
```
Setelah itu coba start atau restart:
```
service nginx start
```
Atau
```
service nginx restart
```