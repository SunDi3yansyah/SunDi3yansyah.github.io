---
layout: post
title: "Cara Install dan Compile Ruby via Tarball di Debian/Ubuntu"
date: 2014-07-03 03:21:25 +0700
comments: true
categories: [ruby, rails, bundler, ubuntu]
description: Banyak cara untuk meng-Install Ruby, tapi kali ini saya akan mengInsall Ruby menggunakan Tarball di Debian/Ubuntu
keywords: Cara Install dan Compile Ruby via Tarball di Debian/Ubuntu, install ruby, Install Ruby via Tarball, Compile Ruby via Tarball, who to install ruby, install ruby on rails, rails, bundler
---
Banyak cara untuk meng-Install Ruby, tapi kali ini saya akan mengInsall Ruby menggunakan Tarball ini apa yang saya lakukan di Komputer saya, saya menggunakan Ruby versi 1.9.3 jika kalian ingin menginstall di versi atasnya juga gpp tutorial ini teteap berlaku untuk versi berapa saja dan ini saya menggunakan Sistem Operasi Debian/Ubuntu.

Langsung saja buka terminal.
Pertama kita perlu menginstal beberapa development tools dan libraries yang Ruby perlu untuk mengkompilasi.
<!-- more -->
{% codeblock root@sundi3yansyah %}
apt-get install build-essential vim git-core curl
{% endcodeblock %}

Lanjut...

{% codeblock root@sundi3yansyah %}
apt-get install bison openssl libreadline6 libreadline6-dev zlib1g zlib1g-dev libssl-dev libyaml-dev libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev
{% endcodeblock %}

Lanjut...

{% codeblock root@sundi3yansyah %}
apt-get install libcurl4-openssl-dev libopenssl-ruby apache2-prefork-dev libapr1-dev libaprutil1-dev
{% endcodeblock %}

Lanjut...

{% codeblock root@sundi3yansyah %}
apt-get install libx11-dev libffi-dev tcl-dev tk-dev
{% endcodeblock %}

Sudah? Kalau sudah selesai kalain buka ini <a href="https://www.ruby-lang.org/en/downloads/">https://www.ruby-lang.org/en/downloads/</a>

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/L2ry8bb_zps48c28ea5.png downloads ruby %}

Dan pilih versi yang kalain inginkan, dan download.

Downloadnya bisa menggunakan wget atau melalu browser, jika menggunakan wget misalnya.

{% codeblock root@sundi3yansyah %}
wget http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.2.tar.gz
{% endcodeblock %}

Dan balik lagi ke terminal masuk ke directori dimana file Ruby kalian berada, kemudian di buka arsipnya.

{% codeblock root@sundi3yansyah %}
tar -xvf ruby-*.tar.gz  
{% endcodeblock %}

Kemudian masuk ke folder rubynya

{% codeblock root@sundi3yansyah %}
cd ruby-*
{% endcodeblock %}

Kemudian jalankan ini, bila perlu kalian baca-baca dulu `README.md` kalau gk butuh membaca ya lanjut lagi.

{% codeblock root@sundi3yansyah %}
./configure
{% endcodeblock %}

{% codeblock root@sundi3yansyah %}
make
{% endcodeblock %}

{% codeblock root@sundi3yansyah %}
make test
{% endcodeblock %}

{% codeblock root@sundi3yansyah %}
make install
{% endcodeblock %}

Lanjut...!
Install Bundler

{% codeblock root@sundi3yansyah %}
gem install bundler 
{% endcodeblock %}

Butuh Rails nggak? ya kalau yang mau main rails silakan install. (Proses membutuhkan waktu kurang lebih 10menit, tergantung koneksi)

{% codeblock root@sundi3yansyah %}
gem install rails
{% endcodeblock %}

Kalau mau cari `gems` nya disini: [https://rubygems.org/gems/](https://rubygems.org/gems/)

Selesai sudah, yuk keluar.

{% codeblock root@sundi3yansyah %}
exit
{% endcodeblock %}