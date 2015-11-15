---
layout: post
title: "Cara Menghilangkan Versi Nginx"
date: 2014-09-05 05:52:09 +0700
comments: true
categories: [nginx]
description: Cara Menghilangkan Versi Nginx, nginx
keywords: Cara Menghilangkan Versi Nginx, nginx
---
Ini suka banget kalau ada hacker kelas junior yang exploit" web, nah salah satu upaya untuk merentasnya biasanya mereka melihat dulu versi type server yang di gunakan lantas bagaimana untuk menghilangkannya/hide, itu cukup mudah di lakukan walaupun hacker nya udah dewa banget setidaknya kita sudah melakukan sedikit upaya untuk menghilngkan versi type server yang kita gunakan.  cukup menambahkan 1 baris config di nginx nya, langsung aja yok ke tutorialnya.
<!-- more -->
Pertama buka:
```
/etc/nginx/nginx.conf
```
Tambahkan 1 bari berikut ini:
```
server_tokens off;
```
Ke dalam deklarasi http

Tak kasih contoh ya 
```
http {
    # konfigurasi  lainnya
    server_tokens off;
}
```
Jangan lupa kalau sudah restart atau reload nginx nya 
```
service nginx restart
```
Atau
```
service nginx reload
```