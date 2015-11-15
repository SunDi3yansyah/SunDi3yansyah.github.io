---
layout: post
title: "Cara Install Ruby di CentOS"
date: 2014-09-10 23:57:17 +0700
comments: true
categories: [centos, ruby]
description: Cara install ruby di centos dan di beberapa disto lainnya yang menyerupai centos seperti RHELL/Redhat dan Fedora.
keywords: install ruby, install ruby di centos, who to install ruby on centos, installing ruby, install ruby on centos
---
Pada kesempatan kali ini saya akan mencoba untuk membagi pengalamn saya menggunakan CentOS Server maupun CentOS Dektop untuk menggunakan ruby, secara default ruby di turunan RPM belum terinstall maka kita akan menginstallnya terlebih dahulu sebelum memulai coding script ruby kita. Sebenarnya tidak jauh dari cara menginstall ruby di turunan DEB yaitu Debian/Ubuntu, tapi apa salahnya ya kan jika saya akan membagi pengalaman saya disini, ini murni apa yang saya lakukan di Server CentOS saya dan di Laptop Desktop CentOS saya.
<!-- more -->
Langung saja buka shell Terminal kalian.

Sebelum kita menginstall rubynya kita install dulu dependensi untuk menginstall rubynya nanti.
```
yum -y install gcc g++ make automake zlib-devel curl-devel openssl-devel httpd-devel apr-devel apr-util-devel autoconf sqlite-devel
```
```
sudo yum install ruby-rdoc ruby-devel
```
Sudah? Kalau sudah selesai kalain buka ini <a href="https://www.ruby-lang.org/en/downloads/">https://www.ruby-lang.org/en/downloads/</a>

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/L2ry8bb_zps48c28ea5.png downloads ruby %}

Dan pilih versi yang kalain inginkan, dan download.

Downloadnya bisa menggunakan wget atau melalu browser, jika menggunakan wget misalnya.

```
wget http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.5.tar.gz
```

Dan balik lagi ke terminal masuk ke directori dimana file Ruby kalian berada, kemudian di buka arsipnya.
```
tar zxvf ruby-*.tar.gz
```
Masuk ke Direktori rubynya
```
cd ruby-*
```
Kemudian kita compiling
```
./configure
```
```
make
```
```
make install
```
Note: Jika terjadi `Permission denied` lakukan dengan `sudo`

Jika sudah semua coba kita verfikasi dan lihat versi ruby kita dengan command sebagai berikut
```
ruby -v
```
atau
```
riby --version
```