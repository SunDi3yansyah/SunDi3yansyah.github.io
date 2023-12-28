---
layout: post
title: "Menggunakan subdomain untuk assets pada Rails"
date: 2017-07-25 14:47:25 +0700
comments: true
categories: [ruby, rails]
description: Menggunakan subdomain untuk assets pada Rails
keywords: Menggunakan subdomain untuk assets pada Rails
---

Disini saya akan mencoba memberikan pengalaman saya bagaimana cara menggunakan subdomain untuk assets pada Rails, saya selalu menggunakan subdomain untuk memisahkan asset file pada aplikasi Rails tentunya untuk production, kebetulan ada beberapa teman saya yang minta panduan gimana sih caranya bikin kaya gitu.
<!-- more -->
Loh keuntunganya apa? Sebaiknya kalian cari tau dulu gih...

Saya enggak tau mau cerita apa lagi ;v langsung ke langkah-langkahnya aja ya.

Asumsikan ini untuk:

- Environment production.
- Aplikasi rails yang sudah siap disajikan.

Buka file `config/environments/production.rb` dan cari bagian baris seperti ini:

{% codeblock Editor %}
# config.action_controller.asset_host = 'http://assets.example.com'
{% endcodeblock %}

Rubahlah menjadi seperti ini:

{% codeblock Editor %}
config.action_controller.asset_host = 'http://assets.domain.tld'
{% endcodeblock %}

- Tentukan protokol apakah menggunkan SSL atau tidak.
- Tentukan domain TLD dan string subdomain yang digunakan.

Jadi jika kalian masih dalam development maka akan tetap menggunakan http://localhost:port, sedangkan jika sudah dalam production akan menjadi http://assets.domain.tld secara otomatis dengan syarat kalian harus selalu menggunakan helper assets bawaan Rails.

Sebagai contoh untuk memanggil assets CSS menggunakan tag `stylesheet_link_tag`, memanggil assets JS menggunakan tag `javascript_include_tag` dan tag-tag asset lainnya. Kalian tidak boleh memanggil alamat assets tanpa menggunakan tag helper bawaan Rails.

Untuk tahap production assets harus di precompile, kan perintahnya seperti ini:

{% codeblock Terminal %}
bundle exec rake assets:precompile RAILS_ENV=production
{% endcodeblock %}

Atau

{% codeblock Terminal %}
rails assets:precompile RAILS_ENV=production
{% endcodeblock %}

Nah sampai disini destinasi assets akan berada di `public/assets/`

Tugas kita selanjutnya hanya memindahkan assets tersebut ke document root untuk subdomain yang sudah kita tentukan, dengan perintah:

{% codeblock Terminal %}
mv public/assets/ ../assets-domain-tld/ -f
{% endcodeblock %}

Perintah bash diatas adalah asumsi jika document root assets setara dengan direktori root rails.
Untuk codeblock konfigurasi virtual host web server yang kita gunakan adalah statis.

Karena saya sudah terbiasa dengan web server nginx maka saya akan kasih contoh server block sebagai berikut:

{% codeblock Terminal %}
server {
  listen 80;
  server_name assets.domain.tld;

  add_header X-Frame-Options SAMEORIGIN;
  add_header X-Content-Type-Options nosniff;
  add_header X-XSS-Protection "1; mode=block";

  root /path/assets-domain-tld;
  index index.html;
  
  location / {
      try_files $uri $uri/ =404;
  }

  location ~ \.(ico|css|js|gif|jpe?g|png)(\?[0-9]+)?$ {
    expires 30d;
    add_header Pragma public;
    add_header Cache-Control "public";
    add_header ETag "";
    log_not_found off;
    access_log off;
  }

  location ~ \.(eot|ttf|woff|woff2|svg|json)$ {
    add_header Access-Control-Allow-Origin *;
  }

  location ~ \.(git|sh)?$ {
    deny all;
    log_not_found off;
    access_log off;
  }
}
{% endcodeblock %}

Untuk selanjutnya silakan kalian kembangkan sendiri cara praktis deployement untuk cara-cara diatas, karena saya tidak tau keterbiasaan kalian itu gimana jadi ya silakan gunakan metode kalian sendiri.

Tutorial selanjutnya adalah bagaimana jika untuk file upload dijadikan subdomain juga ^_^
