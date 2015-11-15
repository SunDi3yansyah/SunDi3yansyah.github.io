---
layout: post
title: "Cara Install Nginx MySQL PHP5 di Turunan Debian"
date: 2014-09-05 05:31:36 +0700
comments: true
categories: [nginx]
description: Cara Install Nginx MySQL PHP5 di Turunan Debian
keywords: Cara Install Nginx MySQL PHP5 di Turunan Debian
---
Cara Install Nginx, MySQL, PHP5 di Turunan Debian misalnya Ubuntu, Linux Mint, Kali Linux (Tapi ini sudah ada langsung dari dist Kali Linux`nya ) dan kawan-kawannya termasuk debian, cek di mari aja  [http://distrowatch.com/](http://distrowatch.com/)
<!-- more -->
Udah tau kan nginx ya udah lanjut gk usah di bahas

Oh ya rekomendasi pakai user root

```
sudo -s
```
Masukin dah passwd`nya

Update dulu system .
```
apt-get update
```
Kalau sudah selesai install nginx nya
```
apt-get install nginx
```
Udah gitu aja gampang kan

Sekarang install MySQLnya
```
apt-get install mysql mysql-server
```
Biasa deh klo ada persetujuan di YES tekan Y [enter]  pasti tau lah ya.
Next step aja deh ikuti intruksinya, nanti klo ada suruh masukin password itu suruh buat passowrd MySQLnya buat deh terserah apa passwordnya.
Kalau gk ada intruksi suruh masukin password masukin command berikut man
```
mysql_install_db
```
atau ini juga boleh
```
mysql_secure_installation
```
Sudah gitu aja, anggap sudah selesai install mysql-server`nya.

Lanjut install php5-fpmnya
```
apt-get install php5-fpm php5-mysql
```
Kalau udah restart
```
service php5-fpm restart
```
Sekarang gimana caranya buat virtualhost`nya,  searching di forum Server Kampoeng udah banyak yang share [http://www.kampoeng.co.id/forum-674-nginx](http://www.kampoeng.co.id/forum-674-nginx), atau googling aja cuma ada revisi di bagian fastcgi_pass kurang lebih seperti ini
```
fastcgi_pass unix:/var/run/php5-fpm.sock;
```
Pastikan setelah melakukan add/edit virtualhost harus restart nginx`nya
```
service nginx restart
```
Kalau udah coba deh buat file atau langsung buat CMS di dir root doc nginx 

Kalau  untuk server ikuti intruksi ini, kalau nginx  di install di PC/Laptop local ya gk usah ikuti intruksi ini,,, ini akan mematikan value cgi.fix_pathinfo di php.ini
```
nano /etc/php5/fpm/php.ini
```
Cari ini
```
;cgi.fix_pathinfo=1
```
Ganti jadi ini
```
cgi.fix_pathinfo=0
```
Udah gitu aja sih 
Capek juga gue ngejelasin, udahan doloe eak 
Oke selamat menikmati nginx