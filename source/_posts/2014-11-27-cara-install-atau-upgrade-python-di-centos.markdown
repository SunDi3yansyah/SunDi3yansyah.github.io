---
layout: post
title: "Cara Install atau Upgrade Python di CentOS"
date: 2014-11-27 17:18:37 +0700
comments: true
categories: [python, centos]
description: Cara Install atau Upgrade Python di CentOS
keywords: Cara Install atau Upgrade Python di CentOS
---
Pertama tampulkan dulu versi python yang sekarang
```
python --version
```
Jika versi di bawah 2.7.8 maka itu sudah kuno dan sudah saatnya di update {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}
<!--more-->
update dulu systemnya

```
yum -y update
```
install development tools
```
yum groupinstall -y 'development tools'
```
setelah itu install depensi yang di butuhkan
```
yum install -y zlib-devel bzip2-devel openssl-devel xz-libs sqlite-devel
```
download python-nya, dan pilih salah satu saja.
version 2.7.6
```
wget http://www.python.org/ftp/python/2.7.6/Python-2.7.6.tar.xz
```
version 3.3.3
```
wget http://www.python.org/ftp/python/3.3.3/Python-3.3.3.tar.xz
```

kemudian di buka arsipnya
```
xz -d Python-*.tar.xz
```
```
tar -xvf Python-*.tar
```
masuk ke direktorinya
```
cd Python-*
```
jalankan configure nya
```
./configure --prefix=/usr/local
```
lakukan compile, ini akan membutuhkan waktu yang lumayan lama {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}
```
make
```
dan install
```
make altinstall
```
jika sudah selesai maka coba kita lihat versinya
```
python -V
```

Mudah bukan {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}

Jika belum juga berubah dan tidak muncul output dengan versi yang kita compile tadi maka lakukan dengan menambah Environment Variable, anda bisa cari artikel saya sebelumnya __Cara Menambah Environment Variable pada Linux__

```
exit
```