---
layout: post
title: "Cara Menambah Virtual Hosts di Nginx"
date: 2014-11-25 04:48:12 +0700
comments: true
categories: [nginx, centos]
description: Cara Menambah Virtual Hosts di Nginx
keywords: Cara Menambah Virtual Hosts di Nginx
---
Kalau sebelumnya saya sudah menejalaskan tentang [Cara Install Nginx, MySQL, PHP Di CentOS](/article/2014/11/25/cara-install-nginx-mysql-php-di-centos/), sekarang bagaimana jika kita ingin menambahkan domain kita ke server yang pada tempo lalu sudah di install NGINX dan kawan-kawannya? Yah... tulisan & video di bawah ini yang akan menjawab, ini real saya praktekan langsung di domain saya, namun nama domain tsb adalah nama Nick teman saya {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %} 

Langsung saja ke videonya.
<!--more-->
<script src="https://asciinema.org/a/14192.js" id="asciicast-14192" async></script>

Anda bisa melihat command line di bawah ini untuk mengikuti dari recorder di atas.

Direktori root bisa dimana saja, silakan disesuaikan

```
mkdir -p /srv/www/formatdongkrak.com/logs
```
for security secure, keep using chown root

```
nano /etc/php.ini
```
press on the keyboard `CTRL+W`
find
```
cgi.fix_pathinfo
```
you will see like this
```
;cgi.fix_pathinfo=0
```
replace
```
cgi.fix_pathinfo=0
```

```
mkdir /etc/nginx/sites-available
```

```
mkdir /etc/nginx/sites-enabled
```

```
nano /etc/nginx/nginx.conf
```
add the code below, to the bottom before the closing `}`
```
include /etc/nginx/sites-enabled/*;
```

```
nano /etc/nginx/sites-available/formatdongkrak.com
```
```
server {
    server_name formatdongkrak.com;
    access_log /srv/www/formatdongkrak.com/logs/access.log;
    error_log /srv/www/formatdongkrak.com/logs/error.log;
    root /srv/www/formatdongkrak.com;

    location / {
        index index.php index.html index.htm;
    }
    location ~ .php$ {
        include fastcgi_params;
        fastcgi_pass  127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
    }
}
```
```
cd /etc/nginx/sites-enabled/
```

```
ln -s /etc/nginx/sites-available/formatdongkrak.com
```
```
service nginx restart
```
```
nano /srv/www/formatdongkrak.com/info.php
```
If permission denied
```
cd /srv/www
```
```
find . -type d | while read folder ; do chmod 755 "$folder" ; done
```
```
find . -type f | while read file ; do chmod 644 "$file" ; done
```