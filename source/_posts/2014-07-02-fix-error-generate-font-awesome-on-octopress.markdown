---
layout: post
title: "Fix Error Generate Font Awesome on Octopress"
date: 2014-07-02 22:21:00 +0700
comments: true
categories: [octopress]
description: Fix Error Generate Font Awesome on Octopress yang sempat error di octopress, pada kesempatan kali ini sundi3yansyah akan memecahkan masalah ini
keywords: Fix Error Generate Font Awesome on Octopress, error font awesome, not display font awesome, font awesome on octopress
---
Bismillah. Alhamdulillah. Sempat dibuat pusing oleh kode SASS Font Awesome, karena disetiap melakukan `rake generate` selalu saja menampilkan error. Beberapa kali melakukan pencarian melalui Google tapi masih belum ditemukan solusinya. Akhirnya mau tidak mau harus belajar bahasa SASS. Padahal sebelumnya saya hanya belajar bahasa LESS dan sering menghindar dari bahasa SASS. Karena kasus error inilah akhirnya belajar sedikit tentang [SASS](http://sass-lang.com) walau agak memaksakan diri. Hmmm… Ini adalah sebuah “pemerkosaan” pikirku beberapa saat yang lalu :)

<!-- more -->

Setelah mempelajari karakter SASS secara cepat maka ditemukan beberapa perbedaan antara LESS dan SASS walau sepertinya (untuk saat ini) perbedaan tersebut tidaklah terlalu rumit (walau sangat mendasar), yaitu; LESS menggunakan simbol @ sedangkan SAAS menggunakan simbol $. Dan sedikit perbedaan dibagian mixin include. Mungkin (kalau tidak malas belajarnya) suatu saat akan dibahas lebih jauh tentang LESS dan SASS serta perbedaannya.
Saat ini kita akan fokus dibagian error Font Awesome pada saat di generate. Pada saat dilakukan `rake generate` maka jendela Git Bash menampilkan error seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
$ rake generate
## Generating Site with Jekyll
error sass/font-awesome-ie7.scss (Line 17: Invalid CSS after ".ie7icon": expected "{", was "(@inner) { *zoo...")
create source/stylesheets/font-awesome-ie7.css
error sass/font-awesome.scss (Line 1: Invalid CSS after "@fontAwesomePath:":expected pseudoclass or pseudoelement, was " "../font";")
create source/stylesheets/font-awesome.css
identical source/stylesheets/screen.css
{% endcodeblock %}

Dari informasi diatas, terlihat ada 2 error yang terjadi pada 2 file. Error pada file `sass/font-awesome-ie7.scss` terdapat pada baris ke 17. Sedangkan error pada file `sass/font-awesome.scss` terdapat pada baris ke 1. Maka untuk memperbaikinya kita harus membuka file-file tersebut yang terdapat pada folder sass dengan menggunakan teks editor.

Isi kode `sass/font-awesome-ie7.scss` baris 17

{% codeblock root@sundi3yansyah %}
ie7icon(@inner) {
  *zoom: expression(this.runtimeStyle['zoom'] = '1', this.innerHTML = '{@inner}');
}

.icon-glass                { ie7icon('&#xf000;'); }
.icon-music                { ie7icon('&#xf001;'); }
.icon-search               { ie7icon('&#xf002;'); }
.icon-envelope             { ie7icon('&#xf003;'); }
.icon-heart                { ie7icon('&#xf004;'); }
{% endcodeblock %}

Isi kode `sass/font-awesome.scss` baris 1

{% codeblock root@sundi3yansyah %}
@fontAwesomePath: "../font";

@font-face {
  font-family: 'FontAwesome';
  src: url('{@fontAwesomePath}/fontawesome-webfont.eot');
  src: url('{@fontAwesomePath}/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('{@fontAwesomePath}/fontawesome-webfont.woff') format('woff'),
    url('{@fontAwesomePath}/fontawesome-webfont.ttf') format('truetype'),
    url('{@fontAwesomePath}/fontawesome-webfont.svg#FontAwesome') format('svg');
  font-weight: normal;
  font-style: normal;
}
{% endcodeblock %}

Sepintas kita tidak melihat adanya keanehan pada kode diatas, namun sebenarnya ada kesalahan fatal dalam penggunaan Variabel, Interpolation dan Mixin SASS. Kesalahan-kesalahan tersebut antara lain:

* Kesalahan penggunaan simbol variabel. Harusnya menggunakan simbol $ untuk mendeklarasikan variabel, sedangkan pada file tersebut justru menggunakan simbol @.
* Kesalahan penggunaan interpolation. Pada file diatas tidak digunakan, seharusnya menggunakan #{}.
* Kesalahan penggunaan mixin.

Jika masih bingung silahkan bandingkan kode asli SASS diatas dengan yang sudah dimodifikasi dibawah ini.

Perbaikan kode `sass/font-awesome-ie7.scss` dari mulai baris 17

{% codeblock root@sundi3yansyah %}
@mixin ie7icon($inner) {
  *zoom: expression(this.runtimeStyle['zoom'] = '1', this.innerHTML = '#{$inner}');
}

.icon-glass                { @include ie7icon('&#xf000;'); }
.icon-music                { @include ie7icon('&#xf001;'); }
.icon-search               { @include ie7icon('&#xf002;'); }
.icon-envelope             { @include ie7icon('&#xf003;'); }
.icon-heart                { @include ie7icon('&#xf004;'); }
...
{% endcodeblock %}

Untuk baris selanjutnya kebawahnya silahkan tambahkan kode `@include` pada semua baris sebelum kode `ie7icon`

Perbaikan kode `sass/font-awesome.scss` dari mulai baris 1

{% codeblock root@sundi3yansyah %}
$fontAwesomePath: "../font";

@font-face {
  font-family: 'FontAwesome';
  src: url('#{$fontAwesomePath}/fontawesome-webfont.eot');
  src: url('#{$fontAwesomePath}/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('#{$fontAwesomePath}/fontawesome-webfont.woff') format('woff'),
    url('#{$fontAwesomePath}/fontawesome-webfont.ttf') format('truetype'),
    url('#{$fontAwesomePath}/fontawesome-webfont.svg#FontAwesome') format('svg');
  font-weight: normal;
  font-style: normal;
}
{% endcodeblock %}

Setelah dilakukan modifikasi kode tersebut, silahkan lakukan `rake generate` dan lihat hasilnya. Boom! Error menghilang…
Jendela bash anda harusnya menampilkan kode seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
$ rake generate
## Generating Site with Jekyll
overwrite source/stylesheets/font-awesome-ie7.css
overwrite source/stylesheets/font-awesome.css
identical source/stylesheets/screen.css
{% endcodeblock %}


“Tapi saya masih belum mengerti dengan perbaikan kode diatas” Ikuti saja dulu langkah diatas, Insya Allah suatu hari kita akan membahas lebih jauh tentang SASS untuk Jekyll Octopress… (Mode: Meneruskan optimasi Gurita Pena)

Selamat mencoba dan semoga berhasil. Happy Hacking :)