---
layout: post
title: "Memulai dengan Rails"
date: 2017-07-25 14:43:55 +0700
comments: true
categories: [ruby, rails]
description: Memulai dengan Rails
keywords: Memulai dengan Rails
---

Kemarin kita udah tau bagaimana cara instal Ruby, bagaimana cara instal Rails, nah kali ini bagaimana cara memulai menggunakan Rails intinya artikel ini menganalkan struktur komponen yang ada di Rails.
<!-- more -->
Pada dasarnya Rails memiliki struktur kerangka kerja sebagai berikut:

{% codeblock Terminal %}
.
├── app
│   ├── assets
│   │   ├── config
│   │   ├── images
│   │   ├── javascripts
│   │   │   └── channels
│   │   └── stylesheets
│   ├── channels
│   │   └── application_cable
│   ├── controllers
│   │   └── concerns
│   ├── helpers
│   ├── jobs
│   ├── mailers
│   ├── models
│   │   └── concerns
│   └── views
│       └── layouts
├── bin
├── config
│   ├── environments
│   ├── initializers
│   └── locales
├── db
├── lib
│   ├── assets
│   └── tasks
├── log
├── public
├── test
│   ├── controllers
│   ├── fixtures
│   │   └── files
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   └── system
├── tmp
│   └── cache
│       └── assets
└── vendor
{% endcodeblock %}

Secara keseluruhan memiliki struktur sebagai berikut:

{% codeblock Terminal %}
.
├── app
│   ├── assets
│   │   ├── config
│   │   │   └── manifest.js
│   │   ├── images
│   │   ├── javascripts
│   │   │   ├── application.js
│   │   │   ├── cable.js
│   │   │   └── channels
│   │   └── stylesheets
│   │       └── application.css
│   ├── channels
│   │   └── application_cable
│   │       ├── channel.rb
│   │       └── connection.rb
│   ├── controllers
│   │   ├── application_controller.rb
│   │   └── concerns
│   ├── helpers
│   │   └── application_helper.rb
│   ├── jobs
│   │   └── application_job.rb
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── application_record.rb
│   │   └── concerns
│   └── views
│       └── layouts
│           ├── application.html.erb
│           ├── mailer.html.erb
│           └── mailer.text.erb
├── bin
│   ├── bundle
│   ├── rails
│   ├── rake
│   ├── setup
│   ├── spring
│   ├── update
│   └── yarn
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── application_controller_renderer.rb
│   │   ├── assets.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cookies_serializer.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── puma.rb
│   ├── routes.rb
│   ├── secrets.yml
│   └── spring.rb
├── config.ru
├── db
│   └── seeds.rb
├── Gemfile
├── Gemfile.lock
├── lib
│   ├── assets
│   └── tasks
├── log
├── package.json
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── apple-touch-icon.png
│   ├── apple-touch-icon-precomposed.png
│   ├── favicon.ico
│   └── robots.txt
├── Rakefile
├── README.md
├── test
│   ├── application_system_test_case.rb
│   ├── controllers
│   ├── fixtures
│   │   └── files
│   ├── helpers
│   ├── integration
│   ├── mailers
│   ├── models
│   ├── system
│   └── test_helper.rb
├── tmp
│   └── cache
│       └── assets
└── vendor
{% endcodeblock %}

Ini adalah untuk versi __Rails 5.1.2__, akan saya jabarkan sedikit tentang fungsi sebagaian file atau folder yang berada di root dokumen Rails tersebut.

- __app__ berisi assets, channels, controllers, helpers, jobs, mailers, models, views. Kalian akan lebih banyak untuk membuat codingan disini.
- __bin__ berisi script rails yang gunakan untuk menyiapkan, memperbarui, menyebarkan, atau menjalankan aplikasi.
- __config__ berisi konfigurasi aplikasi, database, dan masih banyak lagi.
- __config.ru__ konfigurasi untuk server berbasis Rack yang digunakan untuk memulai aplikasi.
- __db__ berisi skema database kalian saat ini, serta migrasi database.
- __Gemfile & Gemfile.lock__ file ini memungkinkan kalian menentukan dependensi gem apa yang dibutuhkan untuk aplikasi Rails kalian, file ini digunakan oleh gem Bundler.
- __lib__ modul yang diperluas untuk aplikasi kalian.
- __log__ file log aplikasi.
- __package.json__ file ini untuk kolaborasi dengan nodejs, file ini baru saja di tambahkan di rails versi 5.1 keatas.
- __public__ satu-satunya folder yang dilihat oleh client. Berisi file statis dan asset yang dikompilasi.
- __Rakefile__ file ini menempatkan dan memuat perintah yang bisa dijalankan dari command line atau terminal.
- __README.md__ ini adalah instruksi manual singkat untuk aplikasi kalian.
- __test__ tes unit, perlengkapan, dan alat uji lainnya.
- __tmp__ file sementara (seperti cache dan file pid).
- __vendor__ tempat untuk semua kode pihak ketiga, ini termasuk permata yang telah dipatenkan.
- __.gitignore__ file ini memberitahu git file mana yang harus diabaikan.

