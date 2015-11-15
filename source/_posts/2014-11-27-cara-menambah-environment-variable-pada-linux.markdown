---
layout: post
title: "Cara Menambah Environment Variable pada Linux"
date: 2014-11-27 17:17:52 +0700
comments: true
categories: [linux]
description: Cara Menambah Environment Variable pada Linux
keywords: Cara Menambah Environment Variable pada Linux
---
tampilkan dulu environment variables yang sudah ada
```sh
echo $PATH
```
<!--more-->
Cara menambahkan environment variablenya jalankan perintah ini di terminal
```sh
export PATH=$PATH:/usr/local/go/bin
```
Itu yang artinya saya baru saja menambahkan environment variable dari bahasa pemrograman __GOlang__ atau __GO__

Mudah bukan {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}