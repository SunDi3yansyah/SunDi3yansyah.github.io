---
layout: post
title: "Cara install cPanel di VPS Dedicated Servers"
date: 2014-11-22 11:20:18 +0700
comments: true
categories: [vps, dedicated, server]
description: Cara install cPanel di VPS Dedicated Servers
keywords: Cara install cPanel di VPS Dedicated Servers
---
Sebelum melakukan cara install cPanel di Server (VPS, Dedicated) Linux, pastikan anda memiliki spesifikasi RAM Server (VPS, Dedicated) minimal 256Mb.

Berikut ini adalah langkah-langkah untuk install cPanel di Server (VPS, Dedicated):
Login SSH ke Server (VPS, Dedicated) menggunakan akses root
<!--more-->
```sh
mkdir /home/cpins
```
```sh
cd /home/cpins
```
```sh
wget http://layer1.cpanel.net/latest
```
```sh
sh latest
```

Ikuti configurasi yang dibutuhkan cPanel

Proses install melalui console normalnya membutuhkan waktu 1-2 jam jika Server (VPS, Dedicated) USA dan 3-5 jam untuk server Indonesia. 

Setelah installasi melalui console selesai, login ke cpanel menggunakan IP dengan alamat https://IP_SERVER:2087, kemudian lanjutkan proses installasi melalui website (WHM). 

Gampang banget kan 
Demikian tutorial Cara install cPanel di Server (VPS, Dedicated) Linux, semoga bermanfaat.