---
layout: post
title: "Cara Install youtube-dl"
date: 2014-11-22 09:25:12 +0700
comments: true
categories: [youtube,]
description: Cara Install youtube-dl
keywords: Cara Install youtube-dl
---

Menggunakan CURL

{% codeblock lang:sh %}
sudo curl https://yt-dl.org/downloads/2014.11.21.1/youtube-dl -o /usr/local/bin/youtube-dl
{% endcodeblock %}
NEXT
{% codeblock lang:sh %}
sudo chmod a+x /usr/local/bin/youtube-dl
{% endcodeblock %}
<!--more-->
Bisa juga menggunakan WGET

{% codeblock lang:sh %}
sudo wget https://yt-dl.org/downloads/2014.11.21.1/youtube-dl -O /usr/local/bin/youtube-dl
{% endcodeblock %}

{% codeblock lang:sh %}
sudo chmod a+x /usr/local/bin/youtube-dl
{% endcodeblock %}

**NOTE:** Jika belum terinstall dari salah satu diatas maka install terlebih dahulu

```
sudo apt-get install curl wget
```

Tapi biasanya sudah terinstall {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}