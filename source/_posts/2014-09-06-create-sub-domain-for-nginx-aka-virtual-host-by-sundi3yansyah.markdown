---
layout: post
title: "Create Sub Domain for NGINX aka Virtual Host by. SunDi3yansyah"
date: 2014-09-06 19:34:54 +0700
comments: true
categories: [nginx]
description: Create Sub Domain for NGINX aka Virtual Host
keywords: Create Sub Domain for NGINX aka Virtual Host
---
#### Create Sub Domain for NGINX aka Virtual Host by. SunDi3yansyah
<!-- more -->

``` nginx sub domain for nginx by sundi3yansyah https://gist.githubusercontent.com/SunDi3yansyah/966c7164eff435c59f5a/raw/f833b4a05baaf59b1e142ccc4528dfe8e3459436/sub.domain_nginx.conf
server {
    server_name sub.domain;
    access_log /usr/share/nginx/html/sub.domain/access.log;
    error_log /usr/share/nginx/html/sub.domain/error.log;
    root /usr/share/nginx/html/sub.domain;
 
    location / {
    root /usr/share/nginx/html/sub.domain;
        index index.php index.htm index.html;
    }
 
    location ~* \.(jpg|jpeg|gif|css|png|js|ico|html)$ {
        access_log off;
        expires max;
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

##### Gak ngerti komen, sudah di sediakan komentar di bawah ^_^