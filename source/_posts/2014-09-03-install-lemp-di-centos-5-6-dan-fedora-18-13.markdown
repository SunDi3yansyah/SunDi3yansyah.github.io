---
layout: post
title: "Install LEMP di CentOS 5-6 dan Fedora 18-13"
date: 2014-09-03 13:53:06 +0700
comments: true
categories: [nginx, mysql, php-fpm]
description: Install LEMP di CentOS 5-6 dan Fedora 18-13
keywords: Install LEMP di CentOS 5-6 dan Fedora 18-13
---

Apa itu LEMP bukan Lem yang buat nempelin kertas itu
LEMP itu singkatan dari Linux, EngineX, MySQL, PHP... Orang-orang senior menyebutnya dengan LEMP Hmmm... terus Nginx itu apa? Yah gimana ya saya jelasiinya susah banget, mending googling dulu deh asumsikan kita udah ngerti LEMP disini saya menjelaskan untuk System Opreasi di CentOS/RHEL dan Fedora simak aja nanti repository nya untuk masing-masing versi 
<!-- more -->
## Install Remi Repository on Fedora 18, 17, 16, 15
Sebelum install Repositorinya cek dulu OS kalian itu apa? nanti jangan di install semua Repo nya bisa ancur servernya cek aja, caranya:

```sh
uname -a
```
atau
```sh
uname -i
```
Jelaskan kalau udah jelas Install Remi Repository sesuai OS kalian dibawah ini:

#### Fedora
```sh
rpm -Uvh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
```
```sh
rpm -Uvh http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm
```
##### Fedora 18
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-18.rpm
```
##### Fedora 17
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-17.rpm
```
##### Fedora 16
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-16.rpm
```
##### Fedora 15
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-15.rpm
```
##### Fedora 14
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-14.rpm
```
##### Fedora 13
```sh
rpm -Uvh http://rpms.famillecollet.com/remi-release-13.rpm
```
#### RHEL/CentOS 6.3-6.0
```sh
rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
```
```sh
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
```
#### RHEL/CentOS 5.4-5.0
```sh
rpm -Uvh http://dl.fedoraproject.org/pub/epel/5/i386/epel-release-5-4.noarch.rpm
```
```sh
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-5.rpm
```
Asumsikan saya punya CentOS 6.3, untuk 32bit atau 64bit sama aja maka yang di install reponya seperti ini:
```sh
rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
```
```sh
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
```
Kalau sudah buat file baru dengan memasukan perintah seperti ini:
```sh
nano /etc/yum.repos.d/nginx.repo
```
###### Isinya seperti ini untuk RHEL 6.3/6.2/6.1/6/5.8
{% codeblock nginx %}
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/rhel/$releasever/$basearch/
gpgcheck=0
enabled=1
{% endcodeblock %}

######Isinya seperti ini untuk CentOS 6.3/6.2/6.1/6/5.8
{% codeblock nginx %}
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
{% endcodeblock %}

##### Install Ngnix, MySQL 5.5.29, PHP 5.4.11 & PHP-FPM
###### Fedora 13, 14, 15, 16, 17, 18
```sh
yum --enablerepo=remi install nginx mysql mysql-server php php-common php-fpm
```
###### RHEL/CentOS 5-6
```sh
yum --enablerepo=remi,remi-test install nginx mysql mysql-server php php-common php-fpm
```
##### Install PHP 5.4.11 Modules
###### Fedora 13, 14, 15, 16, 17, 18
```sh
yum --enablerepo=remi install php-mysql php-pgsql php-sqlite php-pecl-memcache php-gd php-mbstring php-mcrypt php-xml php-pecl-apc php-cli php-pear php-pdo
```
###### RHEL/CentOS 5-6
```sh
yum --enablerepo=remi,remi-test install php-mysql php-pgsql php-sqlite php-pecl-memcache php-gd php-mbstring php-mcrypt php-xml php-pecl-apc php-cli php-pear php-pdo
```
##### Matikan Apache
```sh
chkconfig --levels 235 httpd off
```
```sh
/etc/init.d/httpd stop
```
##### Starting/Stopping/Status Nginx MySQL dan PHP-FPM

###### Enable Nginx, MySQL dan PHP-FPM on Boot
```sh
chkconfig --add nginx
chkconfig --add mysqld
chkconfig --add php-fpm
```
###### Enable Nginx, MySQL dan PHP-FPM on Run Levels
```sh
chkconfig --levels 235 nginx on
chkconfig --levels 235 mysqld on
chkconfig --levels 235 php-fpm on
```
###### Nginx Startup Commands
```sh
/etc/init.d/nginx start
/etc/init.d/nginx stop
/etc/init.d/nginx status
```
###### MySQL Startup Commands
```sh
/etc/init.d/mysqld start
/usr/bin/mysql_secure_installation
```
###### Bagaimana cara configurasi MySQL-Server, cari di forum Kampoeng Server
```sh
/etc/init.d/mysqld stop
/etc/init.d/mysqld status
```
###### PHP-FPM Startup Commands
```sh
/etc/init.d/php-fpm start
/etc/init.d/php-fpm stop
/etc/init.d/php-fpm status
```
Kalau berjalan semua coba untuk di Start semua
```sh
/etc/init.d/nginx start
/etc/init.d/mysqld start
/etc/init.d/php-fpm start
```
##### Website Direktori
###### public_html direktori dan logs direktori 
```sh
mkdir -p /srv/www/domain.com/public_html
mkdir /srv/www/domain.com/logs
chown -R nginx:nginx /srv/www/domain.com
```
##### Website Logs
###### public_html direktori dan logs direktori
```sh
mkdir -p /srv/www/domain.com/public_html
mkdir -p /var/log/nginx/domain.com
chown -R nginx:nginx /srv/www/domain.com
chown -R nginx:nginx /var/log/nginx
```
##### Konfigurasi Virtual Host Direktori
```sh
mkdir /etc/nginx/sites-available
mkdir /etc/nginx/sites-enabled
```
###### Edit file nginx.conf
```sh
nano /etc/nginx/nginx.conf
```
Tambahkan code ini:
```sh
include /etc/nginx/sites-enabled/*;
```
Sesudah baris ini:
```sh
include /etc/nginx/conf.d/*.conf;
```
##### Tambah Konfigurasi Virtual Host dengan Domain
Asumsikan kita punya `domain.com`
```sh
nano /etc/nginx/sites-available/domain.com
```
{% codeblock domain %}
server {
    server_name domain.com;
    access_log /srv/www/domain.com/logs/access.log;
    error_log /srv/www/domain.com/logs/error.log;
    root /srv/www/domain.com/public_html;

    location / {
        index index.html index.htm index.php;
    }

    location ~ .php$ {
        include /etc/nginx/fastcgi_params;
        fastcgi_pass  127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME /srv/www/domain.com/public_html$fastcgi_script_name;
    }
}
{% endcodeblock %}
```sh
cd /etc/nginx/sites-enabled/
```
```sh
ln -s /etc/nginx/sites-available/domain.com
```
###### Restart Nginx-nya
```sh
/etc/init.d/nginx restart
```
Tambahkan 1 bari hosts domain yang baru saja di tambahkan ke Konfigurasi Nginx
```sh
nano /etc/hosts
```
```sh
127.0.0.1 localhost.localdomain localhost domain.com
```
Coba tampilkan PHP Info
```sh
nano /srv/www/domain.com/public_html/phpinfo.php
```
{% codeblock phpinfo.php %}
<?php
     phpinfo ();
?>
{% endcodeblock %}

Jika muncul maka anda sudah berhasil.
Happy coding, happy config ^_^