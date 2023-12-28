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
```
Reading package lists... Done
W: GPG error: http://extras.ubuntu.com precise Release: The following signatures were invalid: BADSIG 16126D3A3E5C1192 Ubuntu Extras Archive Automatic Signing Key <ftpmaster@ubuntu.com>
```
<!-- more -->
Cara mengatasinya:

Buka terminal.

Masuk sebagai root
```
sido -s
```
Masukin passowrdnya...

NEXT:
```
apt-get clean
```
```
mv /var/lib/apt/lists /tmp
```
```
mkdir -p /var/lib/apt/lists/partial
```
```
apt-get clean
```
```
apt-get update
```