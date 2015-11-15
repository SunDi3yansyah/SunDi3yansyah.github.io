---
layout: post
title: "Update Versi LEMP CentOS dan Fedora"
date: 2014-09-05 05:47:41 +0700
comments: true
categories: [nginx, mysql, php-fpm, php]
description: Update Versi LEMP CentOS dan Fedora
keywords: Update Versi LEMP CentOS dan Fedora
---
#### update remi: nginx mysql mysql-server php php-common php-fpm <!-- more -->
```
yum --enablerepo=remi,remi-test update nginx mysql mysql-server php php-common php-fpm
```
#### update remi modules PHP
```
yum --enablerepo=remi,remi-test update php-mysql php-pgsql php-sqlite php-pecl-memcache php-gd php-mbstring php-mcrypt php-xml php-pecl-apc php-cli php-pear php-pdo
```
Pastikan nginx.repo seperti ini:
##### CentOS
```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```
##### RHEL
```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/rhel/$releasever/$basearch/
gpgcheck=0
enabled=1
```
Tambahan jika  ingin update versi phpMyAdmin-nya
#### update phpmyadmin
```
yum --enablerepo=remi update phpmyadmin
```
Sudah selesai sudah, jika ada persetujuan YES or NO di YES semua
```
y
```
Mudah bukan? {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a

semoga berhasil...