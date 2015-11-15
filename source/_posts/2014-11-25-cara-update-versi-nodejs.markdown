---
layout: post
title: "Cara Update Versi NodeJS"
date: 2014-11-25 07:27:33 +0700
comments: true
categories: [nodejs, npm]
description: Cara Update Versi NodeJS
keywords: Cara Update Versi NodeJS
---

Cek dulu versi node kalian, caranya

```
node -v
```
kemudian buka [NODEJS.ORG](http://nodejs.org/) liat di bagian atas button **DOWNLOAD**, jika versi nodejs kalian berbeda dengan yang ada disana maka untuk mengupdatenya.
<!--more-->
```
sudo npm install n -g
```
tunggu sampai selesai
```
sudo n stable
```
tunggu sampai selesai proses download/update nya, jika sudah selesai, silakan di verifikasi untuk melihatnya

```
node -v
```

**NB: Tidak support untuk Windows**