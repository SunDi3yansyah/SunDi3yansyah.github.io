---
layout: post
title: "Cara Install/Upgrade Versi Git Core Terbaru"
date: 2014-07-03 02:51:47 +0700
comments: true
categories: [git, github]
description: 
keywords: Cara Install dan Upgrade Versi Git Core Terbaru, Install Git Core, upgrade versi Git Core, install git, install git-scm, update git core, git, github
---
Secara bawan OS khususnya basis Unix biasanya sudah terinstall <b>git</b>, jika belum maka:

{% codeblock root@sundi3yansyah %}
sudo apt-get install git
{% endcodeblock %}

Itu akan menghasilkan versi 1.7.9.5 biasanya:

{% codeblock root@sundi3yansyah %}
git --version
{% endcodeblock %}
<!-- more -->
Output:

{% codeblock root@sundi3yansyah %}
git version 1.7.9.5
{% endcodeblock %}

Nah biasanya lagi nih, {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a banyak software-software atau module lainnya yang membutuhkan git di atas versi tersebut, maka kita harus update <b>git</b> kita:

{% codeblock root@sundi3yansyah %}
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
{% endcodeblock %}

Jika sudah selesai maka lakukan cek versi:

{% codeblock root@sundi3yansyah %}
git --version
{% endcodeblock %}

Output:

{% codeblock root@sundi3yansyah %}
git version 2.0.1
{% endcodeblock %}

Baik cukup disini selamat bermain <b>git</b>, selamat hacking, selamat coding. Hahaha...

{% codeblock root@sundi3yansyah %}
exit
{% endcodeblock %}