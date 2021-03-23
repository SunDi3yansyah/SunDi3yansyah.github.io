---
layout: post
title: "Cara Install Rails"
date: 2017-07-25 14:40:21 +0700
comments: true
categories: [rails, ruby, framework]
description: Cara Install Rails
keywords: cara install rails, install rails, setup rails, memasang rails
---

### Apa itu Rails?

{% blockquote Ruby on Rails https://id.wikipedia.org/wiki/Ruby_on_Rails %}
Ruby on Rails, disebut juga Rails, adalah sebuah kerangka kerja aplikasi web sumber terbuka yang berjalan via bahasa pemrograman Ruby. Ia merupakan kerangka kerja full-stack: memampukan pembuatan laman dan aplikasi yang mengumpulkan informasi dari server web, berkomunikasi dengan atau memanggil sebuah kueri dari server web, dan mengolah templat dari sumber. Sebagai hasilnya, Rails menyajikan fitur sistem routing yang independen dari server web.
<!-- more -->
Ruby on Rails menegaskan penggunaan pola-pola dan prinsip-prinsip rekayasa perangkat lunak terkenal, seperti pola active record, konvensi diatas konfigurasi (CoC), don't repeat yourself (DRY), and model-view-controller (MVC).

- Perancang:	David Heinemeier Hansson
- Pengembang:	Rails Core Team
- Rilis perdana:	13 Desember 2005
- Rilis stabil:	4.0.4 (14 Maret 2014)
- Rilis pratayang:	4.1.0 RC 1 (18 Februari 2014)
- Status pengembangan:	Active
- Bahasa pemograman:	Ruby
- Sistem operasi:	Cross-platform
- Lisensi:	Lisensi MIT
- Situs web resmi:	rubyonrails.org
{% endblockquote %}

Sebelumnya kita dapat menjumpai tutorial saya sebelumnya tentang [Cara Instal Ruby via RVM](https://sundi3yansyah.github.io/article/2017/05/08/cara-instal-ruby-via-rvm/).
Jadi saya asumsikan perangkat kalian sudah terpasang Ruby entah itu ruby versi berapa tapi saya sarankan gunakan ruby versi terbaru, dan jangan lupa pula sesuaikan dengan sistem operasi yang kalian gunakan.


#### 1. Cek Ruby Environment

{% codeblock Terminal %}
ruby -v
{% endcodeblock %}

#### 2. Database untuk Rails

Disini saya juga sudah mengasumsikan pada kalian untuk sudah memasang database yang akan digunakan di Rails nanti, contohnya seperti: SQLite3, MySQL, PostgreSQL dan lain sebagainya sesuaikan dengan kebutuhan database yang kalian gunakan nanti.
Untuk memverifikasinya dengan perintah sebagai contoh:

{% codeblock Terminal %}
# SQLite3
sqlite3 --version

# MySQL
mysql --version

# PostgreSQL
psql --version
{% endcodeblock %}

Dan lain sebagainya, sesuaikan dengan environment database yang kalian gunakan. Jika output dihasilkan maka database sudah siap dipakai.

#### 3. Instal Rails

Sekarang kalian sudah bisa instal Rails dengan perintah:

{% codeblock Terminal %}
gem install rails
{% endcodeblock %}

Ini membutuhkan waktu yang lama sesuai koneksi internet dan perangkat yang digunakan.

#### 4. Verifikasi Rails

Jika langkah diatas sudah kelar maka langkah selanjutnya kalian verifikasi rails yang sudah di instal dengan perintah:

{% codeblock Terminal %}
rails -v
{% endcodeblock %}

Jika output dihasilkan maka Rails sudah siap dipakai.

#### 5. Siapkan aplikasi baru

Untuk memulai aplikasi baru Rails yang sudah di-install langsung saja ketikkan perintah:

{% codeblock Terminal %}
rails new aplikasi-pertamaku
{% endcodeblock %}

Sebelum kalian menggunakan perintah `rails new aplikasi-pertamaku` kalian juga dapat menggunakan parameter yang tersedia sebegai berikut:

{% codeblock Parameter 'rails new --help' %}
Usage:
  rails new APP_PATH [options]

Options:
  -r, [--ruby=PATH]                                      # Path to the Ruby binary of your choice
                                                         # Default: /home/sundi3yansyah/.rvm/rubies/ruby-2.3.3/bin/ruby
  -m, [--template=TEMPLATE]                              # Path to some application template (can be a filesystem path or URL)
  -d, [--database=DATABASE]                              # Preconfigure for selected database (options: mysql/oracle/postgresql/sqlite3/frontbase/ibm_db/sqlserver/jdbcmysql/jdbcsqlite3/jdbcpostgresql/jdbc)
                                                         # Default: sqlite3
  -j, [--javascript=JAVASCRIPT]                          # Preconfigure for selected JavaScript library
                                                         # Default: jquery
      [--skip-gemfile], [--no-skip-gemfile]              # Don't create a Gemfile
  -B, [--skip-bundle], [--no-skip-bundle]                # Don't run bundle install
  -G, [--skip-git], [--no-skip-git]                      # Skip .gitignore file
      [--skip-keeps], [--no-skip-keeps]                  # Skip source control .keep files
  -M, [--skip-action-mailer], [--no-skip-action-mailer]  # Skip Action Mailer files
  -O, [--skip-active-record], [--no-skip-active-record]  # Skip Active Record files
  -P, [--skip-puma], [--no-skip-puma]                    # Skip Puma related files
  -C, [--skip-action-cable], [--no-skip-action-cable]    # Skip Action Cable files
  -S, [--skip-sprockets], [--no-skip-sprockets]          # Skip Sprockets files
      [--skip-spring], [--no-skip-spring]                # Don't install Spring application preloader
      [--skip-listen], [--no-skip-listen]                # Don't generate configuration that depends on the listen gem
  -J, [--skip-javascript], [--no-skip-javascript]        # Skip JavaScript files
      [--skip-turbolinks], [--no-skip-turbolinks]        # Skip turbolinks gem
  -T, [--skip-test], [--no-skip-test]                    # Skip test files
      [--dev], [--no-dev]                                # Setup the application with Gemfile pointing to your Rails checkout
      [--edge], [--no-edge]                              # Setup the application with Gemfile pointing to Rails repository
      [--rc=RC]                                          # Path to file containing extra configuration options for rails command
      [--no-rc], [--no-no-rc]                            # Skip loading of extra configuration options from .railsrc file
      [--api], [--no-api]                                # Preconfigure smaller stack for API only apps

Runtime options:
  -f, [--force]                    # Overwrite files that already exist
  -p, [--pretend], [--no-pretend]  # Run but do not make any changes
  -q, [--quiet], [--no-quiet]      # Suppress status output
  -s, [--skip], [--no-skip]        # Skip files that already exist

Rails options:
  -h, [--help], [--no-help]        # Show this help message and quit
  -v, [--version], [--no-version]  # Show Rails version number and quit

Description:
    The 'rails new' command creates a new Rails application with a default
    directory structure and configuration at the path you specify.

    You can specify extra command-line arguments to be used every time
    'rails new' runs in the .railsrc configuration file in your home directory.

    Note that the arguments specified in the .railsrc file don't affect the
    defaults values shown above in this help message.

Example:
    rails new ~/Code/Ruby/weblog

    This generates a skeletal Rails installation in ~/Code/Ruby/weblog.
{% endcodeblock %}

Sebagai contoh aplikasi rails kita ingin menggunakan database MySQL dengan perintah:

{% codeblock Terminal %}
rails new aplikasi-pertamaku -d mysql
{% endcodeblock %}

Contoh lain aplikasi rails kita ingin digunakan untuk membuat API maka perintahnya:

{% codeblock Terminal %}
rails new aplikasi-pertamaku --api
{% endcodeblock %}

Atau kedua-duanya, maka perintahnya:

{% codeblock Terminal %}
rails new aplikasi-pertamaku -d mysql --api
{% endcodeblock %}

__aplikasi-pertamaku__ adalah nama aplikasi atau nama module atau apakah kalian menyebutnya dan __aplikasi-pertamaku__ sekaligus nama folder yang akan dihasilkan, maka langkah selanjutnya masuk ke folder aplikasi tersebut:

{% codeblock Terminal %}
cd aplikasi-pertamaku
{% endcodeblock %}

#### 6. Jalankan Aplikasi

Jika aplikasi rails kalian sudah yakin benar, untuk menjalankannya aplikasi rails yang sudah dihasilkan gunakan perintah:

{% codeblock Terminal %}
rails server
{% endcodeblock %}

Jika output terminal yang dihasilkan kurang lebih sebagai berikut:

{% codeblock Terminal %}
=> Booting Puma
=> Rails 5.1.2 application starting in development on http://localhost:3000
=> Run `rails server -h` for more startup options
Puma starting in single mode...
* Version 3.9.1 (ruby 2.3.3-p222), codename: Private Caller
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://0.0.0.0:3000
Use Ctrl-C to stop
{% endcodeblock %}

Maka aplikasi berhasil dijalankan, langkah berikutnya kalian bisa kunjungi alamat http://localhost:3000 pada browser favorit kalian.

Jika output pada browser sebagai berikut:

![Rails welcome](http://guides.rubyonrails.org/images/getting_started/rails_welcome.png)

Maka artikel ini berhasil membantu anda untuk meng-instal Rails pada perangkat kalian.