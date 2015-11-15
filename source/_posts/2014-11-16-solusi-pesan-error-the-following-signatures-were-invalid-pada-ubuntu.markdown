---
layout: post
title: "Solusi Pesan “Error The following signatures were invalid” pada Ubuntu"
date: 2014-11-16 18:05:17 +0700
comments: true
categories: [ubuntu]
description: Solusi Pesan Error The following signatures were invalid pada Ubuntu
keywords: Solusi Pesan Error The following signatures were invalid pada Ubuntu
---
#### Solusi Pesan Error "The following signatures were invalid" pada Ubuntu
Contohnya seperti apa?
```sh
Reading package lists... Done
W: GPG error: http://extras.ubuntu.com precise Release: The following signatures were invalid: BADSIG 16126D3A3E5C1192 Ubuntu Extras Archive Automatic Signing Key <ftpmaster@ubuntu.com>
```
<!-- more -->
Cara mengatasinya:

Buka terminal.

Masuk sebagai root
```sh
sido -s
```
Masukin passowrdnya...

NEXT:
```sh
apt-get clean
```
```sh
mv /var/lib/apt/lists /tmp
```
```sh
mkdir -p /var/lib/apt/lists/partial
```
```sh
apt-get clean
```
```sh
apt-get update
```