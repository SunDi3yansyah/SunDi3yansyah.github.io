---
layout: post
title: "Membuat Halaman Baru Dan Menambahkan Menu Navigasi"
date: 2014-07-02 07:50:26 +0700
comments: true
categories: [octopress]
description: Bagaimana sih Membuat Halaman Baru Dan Menambahkan Menu Navigasi di octopress
keywords: Membuat Halaman Baru Dan Menambahkan Menu Navigasi, Menambahkan Menu Navigasi octopress, Halaman Baru di octopress
---

Bismillah. Alhamdulillah. Octopress sebagai salah satu `platform` blog statis memiliki banyak keunggulan salah satunya adalah pembuatan halaman tambahan yang sangat mudah dan cepat bahkan pengguna pemulamu akan dengan cepat beradaptasi dalam proses pembuatan halaman-halaman baru pada Octopress. Halaman yang akan kita bahas bukanlah halaman artikel atau halaman blog, namun halaman penunjang lain yang berfungsi sebagai wadah dalam memberikan informasi-informasi penting yang mendapat perhatian khusus. Misal; halaman About, Portofolio, Project, Contact dan lain sebagainya.

<!-- more -->


Proses pembuatan halaman baru sebenarnya mirip dengan proses pembuatan halaman "Error HTTP 404" yang pernah dibahas sebelumnya. Namun ada sedikit perbedaan lokasi penyimpanan halaman lain selain halaman Error HTTP 404. Bagaimana cara membuat halaman baru pada Octopress?

## Membuat Halaman Baru pada Octopress

**Langkah 1**: Buka Git Bash pada folder Octopress.

**Langkah 2**: Ketikan perintah dibawah ini:

{% codeblock root@sundi3yansyah %}
rake new_page["judul_halaman"]
{% endcodeblock %}


Misal, penulis akan membuat halaman “About”, maka perintahnya seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
rake new_page["About"]
{% endcodeblock %}

Jendela Git Bash akan menampilkan informasi seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
$ rake new_page["About"]
mkdir -p source/about
Creating new page: source/about/index.markdown
{% endcodeblock %}

Sebuah halaman baru telah dibuat dan tersimpan pada folder `source/about/` dengan nama file `index.markdown`.

**Langkah 3**: Buka folder `source/about/` dan buka file `index.markdown` dengan teks editor. Isi file tersebut kurang lebih seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
---
layout: page
title: "about"
date: 2013-06-19 13:37
comments: true
sharing: true
footer: true
---
Isi informasi yang akan disampaikan disini...
{% endcodeblock %}

Keterangan:

* `layout: page`: Style layout yang digunakan adalah page. Mengenai hal ini akan dibahas terpisah.
* `title: "about"`: Ini berisi judul halaman. Anda bisa saja merubah judulnya sesuai keperluan, tapi link tidak akan berubah. Mengubah bagian ini hanya akan mengubah judul halaman. Dan atau membuang baris ini jika dirasa tidak perlu untuk ditampilkan.
* `date: 2013-06-19 13:37`: Ini berisi informasi tanggal bulan tahun jam menit pembuatan. Anda bisa saja mengubahnya sesuai dengan kebutuhan. Dan atau membuang baris ini jika dirasa tidak perlu untuk ditampilkan.
* `comments: true`: Nilai true berarti fasilitas komentar diaktifkan, nilai false berarti fasilitas komentar di non-aktifkan.
* `sharing: true`: Nilai true berarti fasilitas tombol berbagi diaktifkan, nilai false berarti fasilitas tombol berbagi di non-aktifkan.
* `footer: true`: Nilai true berarti informasi artikel pada footer diaktifkan, nilai false berarti informasi artikel pada footer di non-aktifkan. Bagian ini lebih baik bernilai false.
* Tambahkan informasi halaman setelah baris `---`.


**Langkah 4**: Simpan file `index.markdown` tersebut.

**Langkah 5**: Lakukan `generate` `commit` `push` pada blog anda dan akses halaman baru melalui URL, misal `http://domain.com/about`.

## Menambahkan Menu Navigasi pada Octopress

Ketika halaman baru dibuat, halaman tersebut tidak secara otomatis akan ditambahkan pada menu navigasi, tetapi kita harus memasukannya secara manual kedalam menu navigasi halaman. Penambahan menu navigasi ini tidak hanya terbatas pada halaman yang baru saja dibuat, tetapi bisa link apa saja dan kemana saja, tergantung kebutuhan anda. Bagaimana cara menambahkan menu navigasi halaman pada Octopress?

**Langkah 1**: Buka folder `source/_includes/custom/` kemudian cari file`navigation.html` dan buka menggunakan teks editor. Isi file tersebut seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
<ul class="main-navigation">
  <li><a href="/">Blog</a></li>
  <li><a href="/blog/archives">Archives</a></li>
</ul>
{% endcodeblock %}

Tambahkan link halaman baru hingga menjadi seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
<ul class="main-navigation">
  <li><a href="/">Blog</a></li>
  <li><a href="/blog/archives">Archives</a></li>
  <li><a href="/about">About</a></li>
</ul>
{% endcodeblock %}

Anda bisa menambahkan link apapun pada bagian navigasi halaman ini. Silahkan tambahkan sesuai dengan kebutuhan.

**Langkah 2**: Simpan file `navigation.html` tersebut. Lakukan `generate` `commit` `push` pada blog anda dan silahkan dicoba untuk memeriksa link pada menu navigasi.

## Kesimpulan

Menambahkan halaman baru yang berisi informasi tambahan dan atau informasi penting tentang blog atau tentang penulis blog memang sesuatu yang memang perlu untuk dilakukan oleh pengelola blog, hal ini agar pembaca mudah untuk mengenali siapa yang berada dibelakang blog yang sedang dibacanya. Penambahan menu navigasi juga mempermudah pembaca untuk menelusuri halaman demi halaman blog. Ini sebagai bentuk keseriusan penulis dalam mengelola blognya. Jika ingin membaca dokumen resmi tetang pembuatan halaman silahkan baca pada artikel “[Blogging Basics](http://octopress.org/docs/blogging/)”.

Selamat mencoba dan semoga berhasil. Happy Hacking :)