---
layout: post
title: "Cara Mengatasi 500 Internal Server Error Pada Nginx"
date: 2014-09-05 05:27:14 +0700
comments: true
categories: [nginx]
description: Cara Mengatasi 500 Internal Server Error Pada Nginx
keywords: Cara Mengatasi 500 Internal Server Error Pada Nginx
---
Kita akan share nginx lagi nih man, tenTang maSalah Mengatasi 500 Internal Server Error (lihat gambar)
<!-- more -->
{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/8cKys2H_zps29470b26.png Cara Mengatasi 500 Internal Server Error Pada Nginx %}

Langsung saja cara mengatasinya, buka file config nginx default

cari bagian ini:

```
    location / {
        try_files $uri $uri/ /index.html;
    }
```
Atau sejenisnya, kemudian ganti seperti ini:
```
    location / {
        try_files $uri/ $uri /index.php?$query_string;
    }
```
Atau seperti ini:
```
    location / {
        try_files $uri/ $uri /index.html?$query_string;
    }
```
Kemudian save dan restart:
```
service nginx restart
```
Selesai coba F5