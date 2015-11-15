---
layout: post
title: "Cara Install NodeJS dan NPM di Ubuntu"
date: 2014-07-05 20:58:02 +0700
comments: true
categories: [ubuntu, nodejs, npm]
description: Cara Install NodeJS dan NPM di Ubuntu
keywords: Cara Install NodeJS dan NPM di Ubuntu
---
Install dulu Depensial dari software python dan menambahkan PPA dari NodeJS untuk ubuntunya.

{% codeblock root@sundi3yansyah %}
apt-get install python-software-properties
apt-add-repository ppa:chris-lea/node.js
apt-get update
{% endcodeblock %}
<!-- more -->
Kalau sudah lanjut ke installasi

{% codeblock root@sundi3yansyah %}
apt-get install nodejs
{% endcodeblock %}

NB: Jika ada persetujuan di <b>Y</b>

Untuk melihat versi yang sudah terinstall tadi, caranya:

{% codeblock root@sundi3yansyah %}
node -v
{% endcodeblock %}

Contoh outputnya

`v0.10.29`

{% codeblock root@sundi3yansyah %}
apt-get install npm
{% endcodeblock %}

Untuk melihat versi yang sudah terinstall tadi, caranya:

{% codeblock root@sundi3yansyah %}
npm -v
{% endcodeblock %}

Contoh outputnya

`1.4.14`

#### Ini berlaku juga untuk untuk semua distro based _Ubuntu_