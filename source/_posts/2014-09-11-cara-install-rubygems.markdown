---
layout: post
title: "Cara Install RubyGems"
date: 2014-09-11 00:24:50 +0700
comments: true
categories: [ruby, gems]
description: Cara Install RubyGems, gems adalah manajer paket untuk bahasa pemrograman Ruby yang menyediakan format standar untuk mendistribusikan program Ruby
keywords: Cara Install RubyGems, Install RubyGems, install gems, installing gems, who to install rubygems, gems, rubygems
---
Apa itu RubyGems?
{% blockquote RubyGems http://en.wikipedia.org/wiki/RubyGems RubyGems - Wikipedia, the free encyclopedia %}
RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them. It is analogous to pip for the Python programming language. RubyGems was created in about November 2003 and is now part of the standard library from Ruby version 1.9.
{% endblockquote %}
<!-- more -->
Paham...??? Jadi RubyGems itu adalah perpustakaan yang di ditrubusikan dari bahasa pemrograman Ruby, dan di dalam Gems tersebut banyak sekali perpustakaan yang bisa kita install.

#### Install RubyGems

Pertama buka halaman rubygems disini [https://rubygems.org/pages/download](https://rubygems.org/pages/download)

Dan sorot ke URL `TGZ` kemudian kita download, misalnya gems saat ini versi `2.4.1` maka:
```
wget http://production.cf.rubygems.org/rubygems/rubygems-2.4.1.tgz
```
Jika sudah, sekarang kita buka arsipnya
```
tar zxvf rubygems-2.4.1.tgz
```
Maka arsip tadi akan menghasilkan folder yang bernama `rubygems-2.4.1`, sekarang kita masuk ke foldernya
```
cd rubygems-2.4.1
```
Saatnya kita lakukan eksekusi file setup
```
ruby setup.rb
```
Jika sudah, coba kita verfikasi dan lihat versi Gems kita dengan command sebagai berikut
```
gem -v
```
atau
```
gem --version
```

Nah sampai disini kita bisa menginstall apapun yang ada di perpustakaan Gems yang di distribusikan di bahasa pemrograman Ruby. 

Misalnya saya mau

Install Rails
```
gem install rails
```
Install Bundler
```
gem install bundler
```

Dan masih banyak lagi. Kalian bisa browsing disni [https://rubygems.org/gems/](https://rubygems.org/gems/)

Nah sampai disinilah postingan **SunDi3yansyah** kali ini ^_^

Udah ah mau keluar

```
exit
```