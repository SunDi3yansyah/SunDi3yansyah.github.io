---
layout: post
title: "Cara Install SQLite di Linux"
date: 2014-11-14 02:37:34 +0700
comments: true
categories: [SQLite, Linux]
description: Cara Install SQLite di Linux
keywords: Cara Install SQLite di Linux
---

{% blockquote id.wikipedia http://id.wikipedia.org/wiki/SQLite SQLite %}
SQLite merupakan sebuah sistem manajemen basisdata relasional yang bersifat ACID-compliant dan memiliki ukuran pustaka kode yang relatif kecil, ditulis dalam bahasa C. SQLite merupakan proyek yang bersifat public domain yang dikerjakan oleh D. Richard Hipp.
<!-- more -->
Tidak seperti pada paradigma client-server umumnya, Inti SQLite bukanlah sebuah sistem yang mandiri yang berkomunikasi dengan sebuah program, melainkan sebagai bagian integral dari sebuah program secara keseluruhan. Sehingga protokol komunikasi utama yang digunakan adalah melalui pemanggilan API secara langsung melalui bahasa pemrograman. Mekanisme seperti ini tentunya membawa keuntungan karena dapat mereduksi overhead, latency times, dan secara keseluruhan lebih sederhana. Seluruh elemen basisdata (definisi data, tabel, indeks, dan data) disimpan sebagai sebuah file. Kesederhanaan dari sisi disain tersebut bisa diraih dengan cara mengunci keseluruhan file basis data pada saat sebuah transaksi dimulai.
{% endblockquote %}

Yah begitulah SQLie... kali ini saya akan memberikan informasi cara installasinya. Cek dulu apakah di linux kalian sudah ada package SQLite belum, caranya


{% codeblock lang:sh check version sqlite3 %}
sqlite3 --version
{% endcodeblock %}

dan kalau mau masuk ke SQLite nya ketik


{% codeblock lang:sh open sqlite3 %}
sqlite3
{% endcodeblock %}

atau lihat bambar shell saya dibawah


{% img center https://lh5.googleusercontent.com/-XDu3mkhCiiQ/VGUTARCPrtI/AAAAAAAAAGg/AmI7GdeRd1g/s800/Screenshot+from+2014-11-14+03:20:10.png 'sqlite3' 'sqlite3' %}

Oke...! Bisa di mengertikan ya kaya wanita aja{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}...

Oke langsung saja.....

#### Cara Install SQLite di Linux

Buka archive download dari SQLite disini [http://www.sqlite.org/download.html](http://www.sqlite.org/download.html) cari yang di bagian __source code__ kemudian download kurang lebih seperti ini namanya `sqlite-autoconf-*.tar.gz`, bintang (*) adalah mewakili dari nomer versi saat ini, kemudian di  __DOWNLOAD__.

Sebagai contoh
{% codeblock lang:sh %}
http://www.sqlite.org/2014/sqlite-autoconf-3080702.tar.gz
{% endcodeblock %}

Oke... saya anggap download sudah berhasil dan buka terminal kalian, asumsikan kita berada di folder __Downloads__ (ketik `pwd` kalau anda bingung sedang posisi di direktori mana pakailah `cd` untuk masuk ke direktori yg di tuju)

Kemudian langsung saja buka archivenya

{% codeblock lang:sh %}
tar xvfz sqlite-autoconf-*.tar.gz
{% endcodeblock %}

{% codeblock lang:sh %}
cd sqlite-autoconf-*
{% endcodeblock %}

**NB: Install depencies jika belum terinstall, seperti compiller etc.**

{% codeblock lang:sh %}
./configure --prefix=/usr/local
{% endcodeblock %}

{% codeblock lang:sh %}
make
{% endcodeblock %}
dan yang terakhir kita
{% codeblock lang:sh %}
make install
{% endcodeblock %}

Kalau terjadi error atau Not Permission ya gunakan `sudo`

Kemudian verifikasi untuk melihat versi sqlite3 yang barusan kita install

```sh
sqlite3 --version
```
Jika tidak muncul, seperti ini

```
SQLite header and source version mismatch
```

Maka salin file `libsqlite3.so.0.8.6` ke `/usr/lib/$arch`

Misalnya

x86
```sh
cp /usr/local/lib/libsqlite3.so.0.8.6 /usr/lib/i386-linux-gnu/libsqlite3.so.0.8.6
```
x64
```sh
cp /usr/local/lib/libsqlite3.so.0.8.6 /usr/lib/x86_64-linux-gnu/libsqlite3.so.0.8.6
```

Silakan di cek kembali dengan

```sh
sqlite3 --version
```

{% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}