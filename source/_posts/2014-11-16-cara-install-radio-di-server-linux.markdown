---
layout: post
title: "Cara Install Radio di Server Linux"
date: 2014-11-16 17:53:24 +0700
comments: true
categories: [linux, server]
description: Cara Install Radio di Server Linux
keywords: Cara Install Radio di Server Linux
---
Masuk sebagai root pastinya
KIta buat folder baru dimana saja terserah, saya kasih contoh di

```
/root/radio
```
Yang artinya membuat folder dengan nama radio di folder root, langsung saja.
<!-- more -->
```
mkdir radio
```
Masuk ke folder radio
```
cd /root/radio
```
Ambil scriptnya
```
wget http://www.shoutcast2.com/download/sc_serv_1.9.8_Linux.tar.gz
```
Buka tar gz`nya
```
tar -zxvf sc_serv_1.9.8_Linux.tar.gz
```
Kemudian edit file sc_serv.conf dengan editor kesukaan kalian, saya menggunakan nano yang mudah
```
nano sc_serv.conf
```
Ganti terserah kalian velue untuk:
```
maxuser
```
```
password
```
```
port
```
Lanjut... jalankan scriptnya
```
./sc_serv sc_serv.conf
```
Troubleshooting: Jika di kemudian hari suka error atau gak konek radionya itu minta di ganti port`nya:
Misalnya yang tadinya port 8000 jadi port 8100

Maka jalankan ini lagi setelah kalian menggnati port`nya
```
./sc_serv sc_serv.conf
```
Terus aku pingin radionya muncul di blog atau web jenis apa saja. Paman bisa google cara membuat script audio di HTML, saya kasih contoh radio kampoeng ( http://www.radiokampoeng.com/ ) seperti ini:
```html
<embed width="450" height="20" quality="best" src="http://www.radiokampoeng.com/flash_radio.swf" flashvars="file=http://127.0.0.1:8000/;stream.nsv&amp;type=mp3&amp;volume=120&amp;autostart=true" type="application/x-shockwave-flash">
```
Note:
http://127.0.0.1 = IP Server, kalian ganti dengan IP Server kalian.
8000 = Itu port yang berjalan, ganti sesuai dengan port kalian.
Gampang bukan