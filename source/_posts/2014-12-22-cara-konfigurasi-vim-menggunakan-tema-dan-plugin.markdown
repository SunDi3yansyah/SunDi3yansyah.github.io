---
layout: post
title: "Cara Konfigurasi VIM Menggunakan Tema dan Plugin"
date: 2014-12-22 13:12:28 +0700
comments: true
categories: [vim, editor]
description: Cara Konfigurasi VIM Menggunakan Tema dan Plugin
keywords: Cara Konfigurasi VIM Menggunakan Tema dan Plugin, vim, molokai, pathogen, powerline, numbers
---
Pertama liat dulu penampakannya

![sundi3yansyah vim](https://lh4.googleusercontent.com/-EL817E9o1AQ/VJe2F8KdpmI/AAAAAAAAAdg/IdB5ryWNfks/s800/Screenshot+from+2014-12-22+13:08:19.png)

Mau? Yok... {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}
Saya menggunakan Distro Ubuntu dan bisa di pasang di distro lainnya
<!--more-->
pastikan sudah terinstall VIM minimal versi 7.3, jika belum kita install dulu 

{% codeblock lang:sh terminal %}
sudo apt-get install vim
{% endcodeblock %}

jika di distro lain beda paket manager tinggal di ganti saja __apt-get__ nya
lanjut buat direktorinya

{% codeblock lang:sh terminal %}
mkdir ~/.vim
mkdir ~/.vim/colors
mkdir ~/.vim/bundle
mkdir ~/.vim/tmp
mkdir ~/.vim/tmp/undo
mkdir ~/.vim/tmp/backup
mkdir ~/.vim/tmp/swap
{% endcodeblock %}

### molokai

simpan kode di bawah ini ke folder __~/.vim/colors/__ dengan nama __molokai.vim__

{% include_code new file lang:vim vim/colors/molokai.vim %}

source code
<div class="github-widget" data-repo="tomasr/molokai"></div>



### pathogen

install plugin vim pathogen

{% codeblock lang:sh terminal %}
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
{% endcodeblock %}

source code
<div class="github-widget" data-repo="tpope/vim-pathogen"></div>



### powerline

install plugin vim powerline, pastikan sudah install git

clone dulu repo powerline
{% codeblock lang:sh terminal %}
cd ~/.vim/
git clone git://github.com/Lokaltog/vim-powerline.git bundle/powerline
{% endcodeblock %}

kita akan membutuhkan font __DejaVuSansMono-Powerline__

{% codeblock lang:sh terminal %}
wget https://gist.github.com/toupeira/1630581/raw/bb7b21a7ad38a781b8975bcf6655d307237289c6/DejaVuSansMono-Powerline.ttf
sudo cp DejaVuSansMono-Powerline.ttf /usr/share/fonts/truetype
{% endcodeblock %}

source code
<div class="github-widget" data-repo="Lokaltog/vim-powerline"></div>



### numbers

langsung saja clone numbers vim nya

{% codeblock lang:sh terminal %}
git clone https://github.com/myusuf3/numbers.vim.git ~/.vim/bundle/numbers
{% endcodeblock %}

source code
<div class="github-widget" data-repo="myusuf3/numbers.vim"></div>



### .vimrc

pakailah __.vimrc__ saya ini, ke dalam __.vimrc__ kalian di __~/.vimrc__

{% include_code new file lang:sh .vimrc %}

----

Apa sih fungsi dari plugin-plugin di atas? silakan di baca saja README nya di setiap packagenya {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}
Masih kurang puas dengan package yang saya berikan? Yok kita explorer VIM awesome berikut ini [vimawesome](http://vimawesome.com/) {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}