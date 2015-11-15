---
layout: post
title: "Firephp pada Nginx 502 Bad Gateway"
date: 2014-09-05 06:03:00 +0700
comments: true
categories: [nginx]
description: Firephp pada Nginx 502 Bad Gateway
keywords: Firephp pada Nginx 502 Bad Gateway
---
Belum lama ini lagi coba pakai Nginx dan PHP-FPM. Tapi sering muncul 502 Bad Gateway, gak selalu sih, kadang muncul sesekali. Pas dicek error log Nginx-nya, “upstream sent to big header while reading response header from upstream..bla bla bla”. To Big ??, ini php-nya yang gak kuat atau si nginx nya ?? Dicari-cari belum ketemu solusinya.
<!-- more -->
Dan gak lama ketemu kutu-nya, kalau saya banyak nge-log data dengan Firephp, si 502 Bad Gateway pasti muncul. Tapi kalau saya perkecil atau tidak pakai firephp, tidak muncul tuh si 502 Bad Gateway. Lalu saya searching dengan keyword “firephp 502 bad gateway nginx”, dan ketemu cara handel di sini [ http://shikii.net/blog/firephp-on-nginx-...d-gateway/ ].

Saya kutip saja dari situs tersebut, ternyata nginx membatasi buffering response header. Dan untuk mengatur atau menambahkan agar buffering lebih besar, saya mesti men-set fastcgi_buffer_size dan fastcgi_buffers pada settingan default, atau di config nginx domain  berada dimana, misalnya:
```
/etc/nginx/conf.d/default.conf
```
atau
```
/etc/nginx/sites-available/default
```
atau
```
/etc/nginx/sites-available/domain.com
```
{% codeblock default atau vhost domain kalian %}
server {
# .. Setingan lainnya 

location ~ \.php$ {
  root /folder/situs/utama;
  fastcgi_index index.php;
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
  fastcgi_pass 127.0.0.1:9000;

  # Ini adalah penambahan settingnya
  fastcgi_buffer_size 16k;
  fastcgi_buffers 4 16k;
}

}
{% endcodeblock %}
Artinya kita hanya menambahkan config ini:
```
fastcgi_buffer_size 16k;
fastcgi_buffers 4 16k;
```
Jika sudah, restart nginx 
```
service nginx restart
```
dan

php5-fpm nya
```
service php-fpm restart
```
dan coba refresh kembali website . Semoga jalan dan gak ketemu lagi si 502 Bad Gateway