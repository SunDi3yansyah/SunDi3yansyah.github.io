---
layout: post
title: "Konfigurasi GZIP di Nginx"
date: 2014-09-05 05:57:40 +0700
comments: true
categories: [nginx]
description: Konfigurasi GZIP di Nginx
keywords: Konfigurasi GZIP di Nginx
---
Apa itu GZIP google-lieng doloe sana
<!-- more -->
Pertama buka:
```
/etc/nginx/nginx.conf
```
Tambahkan beberapa baris berikut ini:
{% codeblock nginx %}
gzip  on;
    gzip_min_length  1000;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
{% endcodeblock %}
Ke dalam deklarasi **http**

Misalnya:
{% codeblock nginx %}
http {
    # konfigurasi  lainnya

    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    # konfigurasi GZIP 

    gzip  on;
    gzip_min_length  1000;
    gzip_disable "msie6";

    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_buffers 16 8k;
    gzip_http_version 1.1;
    gzip_types text/plain text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    include /etc/nginx/conf.d/*.conf;
}
{% endcodeblock %}
Jangan lupa kalau sudah restart atau reload nginx nya
```
service nginx restart
```
Atau
```
service nginx reload
```