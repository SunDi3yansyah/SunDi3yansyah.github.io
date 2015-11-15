---
layout: post
title: "Cara Convert .ogv ke .mp4 di Linux"
date: 2014-11-18 17:34:27 +0700
comments: true
categories: linux
description: Cara Convert .ogv ke .mp4 di Linux, ffmpeg, Cara Convert .ogv ke .avi
keywords: Cara Convert .ogv ke .mp4 di Linux, ffmpeg, Cara Convert .ogv ke .avi
---
Biasanya saya kalau habis record desktop ubuntu saya hasil jadi adalah dengan format `.ogv` lantas bagaimana jika saya ingin mengupload video desktop saya terutama tutor-tutor yang ingin saya bagikan ke youtube? nah saya disini menggunakan converter **ffmpeg**. Pertama install dulu packages yang di butuhkan
<!-- more -->
```
sudo [spm] install ffmpeg
```
#### spm adalah __software package manager__

misalnya debian/ubuntu:
```
sudo apt-get install ffmpeg
```
nah cara menggunakannya sebagai berikut:
{% codeblock lang:sh %}
ffmpeg -i out.ogv -acodec aac -strict experimental demo.mp4
{% endcodeblock %}

Dan bisa juga di jadikan `.avi` `.mkv` dan lain sebagainya, tinggal kita baca saja halaman __help_ pada ffmpeg di terminal


{% codeblock lang:sh %}
ffmpeg --help
{% endcodeblock %}