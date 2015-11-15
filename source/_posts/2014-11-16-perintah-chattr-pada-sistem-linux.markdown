---
layout: post
title: "Perintah “chattr” Pada Sistem Linux"
date: 2014-11-16 18:08:09 +0700
comments: true
categories: [linux]
description: Perintah chattr Pada Sistem Linux
keywords: Perintah chattr Pada Sistem Linux
---
Seringkali secara tidak sengaja sebuah file penting terhapus atau terubah. Pada sistem linux tidak ada fasilitas **undelete**, jadi file yang telah terhapus tidak dapat dikembalikan lagi.
Perintah **chattr** digunakan untuk melindungi sebuah file sehingga tidak akan dapat dihapus ataupun dirubah dengan perintah apapun. Perintah chattr memberikan attribut ” **i** “ pada file yang dilindungi, perintahnya:
```sh
chattr +i namafile
```
<!-- more -->
misalnya:
```sh
chattr +i sundi3yansyah.txt
```
Setelah perintah tersebut dijalankan, gunakan perintah **ls -l** untuk melihat hasilnya:
```
ls -l
```
{% blockquote %}
-rw-r–r– 1 rody rody 223901 Dec 23 18:30 sundi3yansyah.txt
{% endblockquote %}
Dapat dilihat pada tampilan diatas, ketika perintah **ls -l** dijalankan, ternyata perubahan yang dilakukan tidak tampak, tetapi ketika file tersebut dihapus, maka akan muncul peringatan bahwa file tersebut dilindungi, tampilannya seperti dibawah ini:
```
rm sundi3yansyah.txt
```
{% blockquote %}
rm: remove write-protected reguler file ‘sundi3yansyah.txt’? y

rm: cannot remove ‘sundi3yansyah.txt’ : Operation not permitted
{% endblockquote %}
Jika suatu ketika file ini akan diedit atau dihapus, terlebih dahulu attribut diatas harus dilepas, untuk melepasnya gunakan perintah berikut ini:
```
chattr -i namafile
```
Setelah attribut tersebut dilepas, maka file tersebut baru akan dapat dihapus.

Jika untuk folder maka:
```
chattr +i -R sundi3yansyah
```
Coba untuk melakukan uji coba seperti yang di atas.
Maka semua file yang ada di folder sundi3yansyah tidak dapat di hapus, edit dan lain sebagainya.

Gak PERCAYA? coba aja ndiri... {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a