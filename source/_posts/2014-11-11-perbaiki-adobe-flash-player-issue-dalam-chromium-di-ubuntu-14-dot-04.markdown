---
layout: post
title: "Perbaiki Adobe Flash Player Issue Dalam Chromium Di Ubuntu 14.04"
date: 2014-11-11 04:41:38 +0700
comments: true
categories: [ubuntu]
description: Perbaiki Adobe Flash Player Issue Dalam Chromium Di Ubuntu 14.04
keywords: Perbaiki Adobe Flash Player Issue Dalam Chromium Di Ubuntu 14.04, Adobe Flash Player Ubuntu 14.04, Issue Adobe Flash Player
---
Salah satu dari beberapa yang pertama hal yang harus dilakukan setelah menginstal Ubuntu 14.04 adalah untuk menginstal Adobe Flash Player. Biasanya, jika Anda menginstal Ubuntu Restricted Extras, Flash Player harus bekerja dan Anda harus dapat menonton video online dari situs-situs seperti You Tube dll
<!-- more -->
Tapi ini tidak terjadi dengan Chromium dan Ubuntu 14.04 kombinasi. Meskipun Anda dapat dengan mudah bermain You Tube video dll di web browser lain seperti Firefox, Chrome dll, di Chromium Anda akan melihat Adobe Flash player hilang pemberitahuan:

######Adobe Flash Player diperlukan untuk menampilkan beberapa elemen pada laman ini. Menginstal plug-in ..

![Perbaiki Adobe Flash Player Issue Dalam Chromium Di Ubuntu 14.04](https://lh4.googleusercontent.com/-KdFNQ03VZSw/VGExfw4kUfI/AAAAAAAAAFw/x8bPUtGOLak/s800/Flash_Player_Ubuntu_1404_Chromium.jpeg "Perbaiki Adobe Flash Player Issue Dalam Chromium Di Ubuntu 14.04")

#### Alasan untuk flash player masalah secara eksklusif di Chromium:
Alasan mengapa masalah ini terjadi hanya dalam Chromium adalah bahwa sampai sekarang Chromium digunakan Netscape Plugin API untuk dukungan Flash. Mulai dari Ubuntu 14.04, Chromium akan berhenti menggunakan Netscape Plugin API . Oleh karena itu, Anda akan menghadapi masalah dengan Adobe Flash Player dengan Chromium.

Sekarang, mengapa masalah ini tidak terjadi dengan web browser lainnya? Jawabannya adalah karena mereka menggunakan Flash versi 11.2.

#### Perbaiki Adobe Flash Player masalah dengan Chromium:
Untuk memperbaiki masalah ini, kami akan menggunakan Lada Flash Player, versi yang lebih aman dan lebih stabil dari Flash Player dari Google. Sebuah installer Adobe Flash Player Lada tersedia di Ubuntu 14.04 repositori. Installer ini download Google Chrome, ekstrak lada Flash Player dan set up untuk penggunaan Chromium.

Untuk menginstal Lada Flash Player di Ubuntu 14.04, buka terminal dan gunakan perintah berikut:

{% codeblock %}
sudo apt-get install pepperflashplugin-nonfree
{% endcodeblock %}

Selanjutnya

{% codeblock %}
sudo update-pepperflashplugin-nonfree --install
{% endcodeblock %}

Restart Chromium. Tidak perlu reboot komputer/laptop anda. Saya harap posting ini cepat membantu Anda untuk memperbaiki Adobe Flash Player yang bermasalah dengan Chromium.