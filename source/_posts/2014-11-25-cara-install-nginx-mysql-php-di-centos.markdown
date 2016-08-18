---
layout: post
title: "Cara Install Nginx, MySQL, PHP di CentOS"
date: 2014-11-25 04:17:41 +0700
comments: true
categories: [centos, nginx, mysql, php, php-fpm, asciinema]
description: Cara Install Nginx, MySQL, PHP, PHP-FPM di CentOS
keywords: Cara Install Nginx, MySQL, PHP, PHP-FPM di CentOS
---
Pada artikel sebelumnya saya sudah menjelaskan tentang [Install LEMP Di CentOS 5-6 Dan Fedora 18-13](/article/2014/09/03/install-lemp-di-centos-5-6-dan-fedora-18-13/), namun disini saya akan menjabarkan lebih datail **Cara Install Nginx, MySQL, PHP di CentOS** menggunakan recorder.

#### Requirements
   - CentOS 6.*
   - Architecture i386, x86_64

Silakan di simak, recordernya. Remi repositorinya menyesuikan arsitektur OS yang kalian pakai
<!--more-->
<script src="https://asciinema.org/a/14190.js" id="asciicast-14190" async></script>

Anda bisa melihat command line di bawah ini untuk mengikuti dari recorder di atas.

64bit / x86_x64
```
rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
```
32bit / i386
```
rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
```

Jika gagal download silakan menggunakan mirror, ganti `dl.fedoraproject.org` dengan `download.fedoraproject.org` tapi tetap hati-hati menggunakan mirror, takut terjadi gagal atau repositorinya 404, lanjutkan dibawah ini:

```
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
```

```
nano /etc/yum.repos.d/nginx.repo
```

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

```
yum --enablerepo=remi,remi-test install nginx mysql mysql-server php php-common php-fpm
```

```
yum --enablerepo=remi,remi-test install php-mysql php-pgsql php-sqlite php-pecl-memcache php-gd php-mbstring php-mcrypt php-xml php-pecl-apc php-cli php-pear php-pdo
```

```
chkconfig --levels 235 httpd off
```
```
service httpd stop
```

```
chkconfig --add nginx
```
```
chkconfig --add mysqld
```
```
chkconfig --add php-fpm
```

```
chkconfig --levels 235 nginx on
```
```
chkconfig --levels 235 mysqld on
```
```
chkconfig --levels 235 php-fpm on
```

```
service nginx start
```

```
service mysqld start
```
Konfigurasi MySQL
```
/usr/bin/mysql_secure_installation
```

```
service php-fpm start
```

Merubah user dan group
```
nano /etc/php-fpm.d/www.conf
```

```
user = nginx
group = nginx
```

```
nano /etc/nginx/conf.d/default.conf
```

Merubah config default server

```
server {
    listen 80;
    server_name DOMAINorIP;

    location / {
        root   /usr/share/nginx/html;
        index index.php index.html index.htm;
    }

    error_page  404              /404.html;
    location = /404.html {
        root   /usr/share/nginx/html;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        root           /usr/share/nginx/html;
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

Selesai merubah config default server

Test php info
```
nano /usr/share/nginx/html/info.php
```

```
service nginx restart
```
```
service php-fpm restart
```