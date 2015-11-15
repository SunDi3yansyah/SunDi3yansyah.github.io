---
layout: post
title: "Cara Mereset Environment Variable pada Linux"
date: 2014-11-27 17:18:05 +0700
comments: true
categories: [linux]
description: Cara Mereset Environment Variable pada Linux
keywords: Cara Mereset Environment Variable pada Linux
---
Cara reset environment variables, tampilkan dulu environment variables yang sudah ada
```sh
echo $PATH
```
<!--more-->
Contoh output:

```sh
/usr/local/heroku/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/local/go/bin
```
Jika ingin ingin di seret, maka:
```sh
export PATH=/usr/local/sbin:/usr/local/bin
```
Maka environment variables yang ada sekarang hanya `/usr/local/sbin:/usr/local/bin`

Mudah bukan {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}