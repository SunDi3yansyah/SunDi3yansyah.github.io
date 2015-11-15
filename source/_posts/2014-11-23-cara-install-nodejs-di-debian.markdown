---
layout: post
title: "Cara Install NodeJS di Debian"
date: 2014-11-23 17:27:33 +0700
comments: true
categories: [nodejs, debian]
description: Cara Install NodeJS di Debian
keywords: Cara Install NodeJS di Debian
---
Kalau kemarin saya sudah share [Cara Install NodeJS Dan NPM Di Ubuntu](http://sundi3yansyah.com/article/2014/07/05/cara-install-nodejs-dan-npm-di-ubuntu/), [Cara Install NodeJS via Tarball Di CentOS/RHEL](http://sundi3yansyah.com/article/2014/09/07/cara-install-nodejs-via-tarball-di-centos-rhel/), [Cara Install NodeJS Di Windows](http://sundi3yansyah.com/article/2014/10/25/cara-install-nodejs-di-windows/) ... nah sekarang saya akan memberikan sedikit snippet command line untuk [Cara Install NodeJS di Debian](#), langsaung saja...
```
sudo apt-get install python g++ make wget libssl-dev
```
<!--more-->
```
wget http://nodejs.org/dist/node-latest.tar.gz
```
```
tar xvfvz node-latest.tar.gz
```
atau bisa juga
```
tar xzvf node-latest.tar.gz
```
```
cd node-latest
```
```
./configure
```
```
make
```
```
sudo make install
```

Nah kesimpulannya apa? Hampir sama kan cara install di distro lainnya, hanya berbeda di devlopment untuk mengcimpilienya, karena beda nama package {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}