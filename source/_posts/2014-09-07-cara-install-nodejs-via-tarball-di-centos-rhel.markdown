---
layout: post
title: "Cara Install NodeJS via Tarball di CentOS/RHEL"
date: 2014-09-07 07:14:13 +0700
comments: true
categories: [linux, nodejs]
description: Cara Install NodeJS via Tarball di CentOS atau RHEL
keywords: Cara Install NodeJS via Tarball di CentOS atau RHEL
---

Masuk terminal, langsung saja:
<!-- more -->
``` sh
su -
```
Kenapa kita membutuhkan `Super User`? Ya karena nanti kita akan mengakses lokasi `/usr/local/src`
``` sh
yum install gcc gcc-c++ openssl-devel
```
``` sh
cd /usr/local/src
```
``` sh
wget http://nodejs.org/dist/node-latest.tar.gz
```
Atau jika anda ingin menentukan versinya silakan kunjungi webiste nodejs disini [http://nodejs.org/download/](http://nodejs.org/download/) kemudian pilih bagian **Linux Binaries (.tar.gz)** lalu pilih sesuai arsitektur CentOS/RHEL kalian, menggunakan 32bit atau 64bit
contohnya:
```sh
wget http://nodejs.org/dist/v0.10.33/node-v0.10.33-linux-x64.tar.gz
```
itu yang artinya saya mengambil binari source nodejs versi v0.10.33 dengan arsitektur 64bit, Oke {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %} lanjutkan, setelah download (Asumsikan anda sudah paham).
``` sh
tar zxvf node-latest.tar.gz
```
``` sh
cd node-v*
```
``` sh
./configure
```
``` sh
make
```
``` sh
make install
```

Gampang kan {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}

Cara mengerahuinya
```sh
node -v ; npm -v
```