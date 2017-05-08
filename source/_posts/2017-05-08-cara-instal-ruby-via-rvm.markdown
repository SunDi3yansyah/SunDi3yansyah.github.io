---
layout: post
title: "Cara Instal Ruby via RVM"
date: 2017-05-08 14:06:02 +0700
comments: true
categories: [rails, ruby, rvm]
description: cara install ruby via RVM
keywords: cara install ruby via RVM, cara install ruby, cara install rvm
---

Apa itu RVM? 

{% blockquote Ruby Version Manager https://en.wikipedia.org/wiki/Ruby_Version_Manager %}
Ruby Version Manager, often abbreviated as RVM, is a unix-like software platform designed to manage multiple instalations of Ruby on the same device.
{% endblockquote %}
<!-- more -->

Jadi intinya kita bisa memasang ruby untuk beberapa versi yang kita inginkan.

Tutorial kali ini hanya untuk sistem operasi keturunan dari **Darwin** dan **Linux**

Sebelum menginstalnya kita harus instal **mpapis public key**

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
```

Instal RVM

Versi Development

```
\curl -sSL https://get.rvm.io | bash
```

atau Versi Stable

```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

Teman-teman cukup memilih salah satu versi diatas, dan tunggu proses sampai selesai.

Jika sudah selesai, silakan untuk melisting versi yang telah terinstal dengan cara.

```
rvm list
```

_Jika belum keluar outputnya maka restartlah terminal teman-teman._

Sekarang buka tautan ruby-lang berikut https://www.ruby-lang.org/en/downloads/ , apakah versi yang terinstal sudah sama dengan yang tertera dihalaman ruby-lang tersebut?
Jika belum maka lakukan instal sesuai versi yang berbeda atau yang terbaru, dengan cara berikut ini.

Misalnya ruby versi terbarunya adalah 0.0.1, maka lakukan perintah:

```
rvm install 0.0.1
```

Tunggu proses sampai selesai, untuk menggunakan ruby yang telah terinstal lakukan perintah

```
rvm use 0.0.1 --default
```

Nah sampai disini ruby telah terinstal menggunakan RVM. Untuk melihat semua gems yang terinstal secara bawaan lakukan perintah `gem list`, sedangkan untuk memperbarui versi gemnya lakukan perintah `gem update --system`, untuk melakukan perbaruan dari daftar gem yang telah terinstal lakukan `gem update`.

So far, instalasi sudah selesai. Nantikan tutorial-tutorial dari saya selanjutnya seputar Ruby dan beserta frameworknya seperti Rails, Sinatra dan lain-lain.
