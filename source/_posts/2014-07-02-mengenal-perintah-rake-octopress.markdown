---
layout: post
title: "Mengenal Perintah Rake Octopress"
date: 2014-07-02 07:24:59 +0700
comments: true
categories: [octopress]
description: Mengenal Perintah Rake di Octopress dan bermacam-macam rake yang akan di gunakan di dalam framework octopress.
keywords: Mengenal Perintah Rake Octopress, rake octopress, command rake octopress, who to rake octopress
---
Bismillah. Alhamdulillah. Pembuat dan pengembang Octopress telah mengumpulkan berbagai perintah rumit menjadi perintah yang sangat sederhana. Perintah-perintah yang disederhanakan tersebut untuk memudahkan siapa saja dalam memanajemen blog yang dibangun dengan __platform__ Jekyll Octopress. Sifat Octopress yang terbuka (__Open Source__) untuk dikembangkan memicu banyak pihak ikut serta mengembangkannya. Hal ini pula yang membuat Octopress makin hari semakin mudah untuk digunakan, bahkan oleh pengguna pemula sekalipun seperti halnya penulis.

<!-- more -->


Octopress sebagai salah satu turunan Jekyll memang memiliki banyak kelebihan dibandingkan turunan Jekyll yang lainnya. Diantara kelebihan Octopress adalah sekumpulan perintah-perintah CLI (__Command-Line Interface__) yang diambil dari module Ruby on Rails dibuat semudah mungkin untuk digunakan. Sebelum perintah-perintah tersebut disederhanakan, para pengguna terutama Jekyll cukup rumit untuk memanjemen blog ber-__platform__ dasar Jekyll. Namun pada Octopress perintah-perintah CLI tersebut menjadi mudah untuk diingat dan digunakan karena perintah-perintah CLI tersebut disusun menggunakan Rake. Rake merupakan salah satu module (__plugins__) Ruby on Rails yang disusun untuk memudahkan (lebih tepatnya merangkum) berbagai perintah CLI yang fungsinya mirip dengan Make, makanya kemudian penamaan Rake diambil dari Ruby Make.

### Daftar Perintah Rake


Perintah yang dibangun dengan Rake khusus untuk Octopress tidaklah terlalu banyak, sampai dengan artikel ini dibuat, perintah CLI Rake baru ada sekitar 19 perintah. Untuk mengetahui daftar perintah Rake yang digunakan untuk Octopress, cukup dengan mengetikan perintah `rake -T` melalui Git Bash pada folder Octopress, sehingga akan muncul informasi seperti dibawah ini:

{% codeblock root@sundi3yansyah %}
$ rake -T
rake clean                     # Clean out caches: .pygments-cache, .gist-c...
rake copydot[source,dest]      # copy dot files for deployment
rake deploy                    # Default deploy task
rake gen_deploy                # Generate website and deploy
rake generate                  # Generate jekyll site
rake install[theme]            # Initial setup for Octopress: copies the de...
rake integrate                 # Move all stashed posts back into the posts...
rake isolate[filename]         # Move all other posts than the one currentl...
rake list                      # list tasks
rake new_page[filename]        # Create a new page in source/(filename)/ind...
rake new_post[title]           # Begin a new post in source/_posts
rake preview                   # preview the site in a web browser
rake push                      # deploy public directory to github pages
rake rsync                     # Deploy website via rsync
rake set_root_dir[dir]         # Update configurations to support publishin...
rake setup_github_pages[repo]  # Set up _deploy folder and deploy branch fo...
rake update_source[theme]      # Move source to source.old, install source ...
rake update_style[theme]       # Move sass to sass.old, install sass theme ...
rake watch                     # Watch the site and regenerate when it changes
{% endcodeblock %}

> Perhatian: Gunakan huruf T besar (Upper Case atau Kapital) dan jangan menggunakan huruf t kecil (__Lower Case__), karena perintah rake Git Bash bersifat Case Sensitive.


### Fungsi Perintah Rake

Untuk menggunakan perintah-perintah rake Octopress, kita harus berada pada Git Bash yang sedang berada didalam folder Octopress. Perintah-perintah rake Octopress akan dijelaskan dengan mengkategorikannya menjadi 3 kategori, namun penggunaan perintah rake ini akan dijelaskan secara detail pada artikel secara terpisah.

#### Pembuatan

{% codeblock root@sundi3yansyah %}
rake new_post[title]
{% endcodeblock %}

Perintah ini digunakan untuk membuat artikel baru pada Octopress. Perintah ini merupakan perintah rake yang paling sering digunakan, jadi jangan sampai lupa.

{% codeblock root@sundi3yansyah %}
rake new_page[filename]
{% endcodeblock %}

Perintah ini digunakan untuk membuat halaman baru pada Octopress, namun halaman ini tidak termasuk kedalam halaman artikel. Halaman ini biasanya digunakan untuk halaman project, portofolio, contact, about atau halaman-halaman lain yang dipandang perlu untuk memperkaya informasi tentang blog atau pengelola blog. Penggunaan perintah ini telah dijelaskan pada artikel “Membuat Halaman Baru Dan Menambahkan Menu Navigasi”.

{% codeblock root@sundi3yansyah %}
rake install[theme]
{% endcodeblock %}

Perintah ini digunakan untuk mengganti theme Octopress. Kita bisa dengan mudah meng-install theme baru yang dibuat oleh pihak ketiga. Penggunaan perintah ini telah dijelaskan pada artikel “Install Theme Octopress”.

#### Manajemen

{% codeblock root@sundi3yansyah %}
rake list
{% endcodeblock %}

Perintah ini sama saja dengan perintah `rake -T`, namun perintah diatas hanya menampilkan informasi daftar perintah rake tanpa deskripsi fungsi.

{% codeblock root@sundi3yansyah %}
rake generate
{% endcodeblock %}

Perintah ini digunakan untuk meregenerasi file-file Octopress. Perintah ini juga akan sering digunakan, karena disetiap kita melakukan perubahan pada suatu file dan atau penambahan suatu file kedalam Octopress, maka perintah ini harus terlebih dahulu digunakan sebelum perintah lain. Perintah ini ibarat fungsi update pada perangkat lunak, tanpa perintah ini, file-file yang baru saja dimodifikasi atau dibuat tidak akan ditampilkan pada Browser. Perintah ini akan lebih dimengerti saat mengenal perintah berikutnya.

{% codeblock root@sundi3yansyah %}rake watch
{% endcodeblock %}


Perintah ini merupakan lanjutan perintah `rake generate` hanya saja ada sedikit perbedaan dan penempatan. `rake generate` biasanya digunakan untuk meyakinkan kita bahwa semua file Octopress telah memasuki final dan siap untuk diterbitkan sehingga penggunaannya biasanya disandingkan dengan perintah-perintah dalam kategori publikasi. Sedangkan perintah `rake watch` digunakan untuk meyakinkan bahwa setiap kita melakukan perubahan pada file-file Octopress maka otomatis file-file tersebut di __generate__ tanpa harus lagi menggunakan perintah `rake generate`. Ini perintah __realtime__ untuk memantau perubahan yang terjadi pada file-file Octopress. Disetiap kita melakukan perubahan pada file Octopress dan kemudian menyimpannya maka jendela Git Bash akan menampilkan informasi bahwa perubahan data telah diregenerasi. Contoh informasi yang ditampilkan Git Bash.
`[2013-06-18 01:39:09] regeneration: 1 files changed`

{% codeblock root@sundi3yansyah %}rake preview
{% endcodeblock %}


Perintah diatas merupakan perintah __multitask__ (gabungan perintah) atau satu perintah yang menjalankan beberapa perintah sekaligus. Jika perintah `rake generate` digunakan hanya untuk meregenerasi perubahan atau penambahan file namun tidak digunakan secara __realtime__ untuk memantau perubahan atau penambahan file. Perintah `rake watch` digunakan sebagai perintah __realtime__ untuk memantau sekaligus meregenerasi perubahan atau penambahan file. Sedangkan perintah `rake preview` digunakan untuk; meregenerasi file, memantau perubahan atau penambahan file dan menjalankan server Ruby Jekyll localhost agar bisa ditampilkan pada browser.

{% codeblock root@sundi3yansyah %}rake isolate[filename]
{% endcodeblock %}


Perintah ini digunakan untuk mengisolasi artikel (yang disebutkan pada `[filename]`) dan memindahkan artikel lainnya (yang tidak disebutkan pada `[filename]`) untuk dipindahkan dari folder `posts` ke folder `stash`. Ini biasanya digunakan untuk mempercepat proses regenerasi (__generate__) file. Misal; artikel yang kita buat sudah mencapai 500 artikel, maka disetiap kita melakukan regenerasi baik menggunakan `generate`, `watch` atau `preview` maka semua artikel tersebut sekaligus artikel yang baru saja kita buat akan diregenerasi, hal ini tentunya menghabiskan banyak sekali waktu. Maka untuk mempercepat proses regenerasi, kita hanya akan melakukan regenerasi pada file atau artikel yang baru saja kita buat, sedangkan artikel yang sudah kita buat dan terbitkan tidak akan diregenerasi.

{% codeblock root@sundi3yansyah %}rake integrate
{% endcodeblock %}


Perintah diatas merupakan kebalikan dari perintah `rake isolate` yaitu untuk mengembalikan artikel-artikel dari folder `stash` kedalam folder `posts`. Perintah ini biasanya digunakan ketika kita sudah yakin bahwa artikel terbaru telah siap untuk dipublikasikan.

{% codeblock root@sundi3yansyah %}rake update_source[theme]
{% endcodeblock %}


Perintah ini digunakan untuk meng-update file-file yang terdapat pada folder `source`. Perintah ini akan memindahkan semua file-file yang ada pada folder `source` ke dalam folder `source.old`. Jika folder `source.old` belum tersedia maka perintah ini akan otomatis menciptakan folder `source.old` tersebut. Lebih tepatnya, perintah ini digunakan untuk mem-__backup__ atau membuat salinan cadangan file-file yang terdapat pada folder `source`. Perintah ini kita gunakan pada saat akan melakukan modifikasi pada file-file yang terdapat pada folder `source`. Misal; kita akan menambah menu navigasi, maka lakukan perintah ini untuk membuat cadangan sebelum dilakukan perubahan, jika suatu hari kita membutuhkan file asal maka kita tinggal mengambilnya dari folder `source.old`.

{% codeblock root@sundi3yansyah %}rake update_style[theme]
{% endcodeblock %}


Perintah ini hampir mirip dengan perintah `rake update_source` hanya saja berbeda target folder. Perintah ini digunakan untuk membuat salinan file SASS yang terdapat pada folder `sass` dan kemudian menyalinnya pada folder `sass.old`. Perintah ini biasanya digunakan saat kita ingin meng-__install__ theme baru atau ingin memodifikasi style yang sudah ada. Jika kemudian hari style tersebut gagal atau kita ingin kembali ke style semula, maka kita tinggal mengambilnya dari folder `sass.old`.

{% codeblock root@sundi3yansyah %}rake clean
{% endcodeblock %}


Semakin sering kita melakukan regenerasi file maka semakin banyak cache dari file-file tersebut. Tentunya sampah-sampah ini akan menumpuk dan membuat ukuran dan jumlah file pada Octopress semakin besar dan semakin banyak. Maka gunakan perintah diatas untuk membersihkan file-file cache yang tersimpan pada folder `.pygments-cache`, `.gist-cache` dan `.sass-cache`. Gunakan perintah ini sebulan sekali atau beberapa bulan sekali sesuai dengan frekwensi anda menulis dan menerbitkan artikel.

#### Publikasi

{% codeblock root@sundi3yansyah %}
rake set_root_dir[dir]
{% endcodeblock %}


Perintah ini digunakan untuk menge-set ulang atau meng-konfigurasi direktori root atau sub direktori yang akan diterbitkan sebagai direktori blog pada repositori. Mungkin masih agak membingungkan, karena hal ini berhubungan dengan subdirektori yangn justru digunakan sebagai blog-nya, bukan pada root direktori. Jika blog anda berada pada root direktori, maka perintah ini tidak usah digunakan. Penggunaan perintah ini mempengaruhi setting pada `_config.yml`. Ini akan dibahas pada artikel terpisah atau anda bisa baca pada artikel “[Deploying to a Subdirectory](http://octopress.org/docs/deploying/subdir/) ”.

{% codeblock root@sundi3yansyah %}rake setup_github_pages[repo]
{% endcodeblock %}


Perintah ini digunakan untuk men-setting dan atau mensinkronisasi folder antara localhost dengan repository pada Github. Perintah ini dilakukan sejak awal ketika kita berencana ingin membuat blog Octopress pada Github. Ini akan dibahas pada artikel tepisah atau baca pada artikel “[Deploying to Github Pages](http://octopress.org/docs/deploying/github/) ”.

{% codeblock root@sundi3yansyah %}rake copydot[source,dest]
{% endcodeblock %}


Perintah ini digunakan untuk menyalin dan memindahkan file atau direktori yang akan dideploy. Perintah ini jarang digunakan bagi mereka yang hanya sekedar membuat Octopress sebagai platform Blog. Akan dibahas lebih lanjut pada artikel terpisah.

{% codeblock root@sundi3yansyah %}rake deploy
{% endcodeblock %}


Ini perintah yang lebih lengkap daripada `copydot`, karena selain menyalin dan memindahkan file atau direktori, perintah ini digunakan untuk meregenerasi file jika teryata ditemukan bahwa ada artikel yang telah dibuat tetapi tidak ditampilkan pada browser. Perintah ini digunakan apabila PC anda sudah tersedia aplikasi [RSync](http://www.rsync.net/) . Jika belum tersedia aplikasi RSync maka Git Bash akan menampilkan pesan “## Deploying website via Rsync FAILED”.

{% codeblock root@sundi3yansyah %}rake gen_deploy
{% endcodeblock %}


Perintah ini digunakan ketika file atau artikel Octopress siap di-deploy. Perintah ini merupakan rangkuman dari 3 perintah yaitu; `integrate`, `generate` dan `deploy`. Jika sudah memahami masing-masing perintah itu, berarti kita sudah memahami perintah `gen_deploy`.

{% codeblock root@sundi3yansyah %}rake rsync
{% endcodeblock %}


Perintah ini digunakan untuk men-deploy Octopress melalui aplikasi RSync. Tentang RSync akan dibahas pada artikel terpisah atau baca pada artikel “[Deploying With Rsync](http://octopress.org/docs/deploying/rsync/)”.

{% codeblock root@sundi3yansyah %}rake push
{% endcodeblock %}


Perintah ini digunakan untuk men-deploy Octopress ke webservice repository Github. Sedangkan untuk pengguna repository non Github tidak cocok menggunakan perintah ini. Pada artikel mendatang akan dibahas cara deploy ke repository non Github.

{% codeblock root@sundi3yansyah %}rake terbitkan
{% endcodeblock %}


Perintah ini digunakan untuk men-deploy Octopress ke webservice repository Heroku. Perintah ini telah dibahas pada artikel “Membuat Perintah Rake Deploy Heroku Pada Octopress”.

### Kesimpulan


Perintah-perintah rake diatas memang ada yang sering kita gunakan, ada yang jarang digunakan dan ada yang hanya satu kali digunakan. Semua kembali pada kebiasaan kita dalam memanajemen blog. Perintah rake diatas adalah perintah default yang dibuat oleh pengembang Octopress, sedangkan Octopress bersifat terbuka yang siapa saja bisa memodifikasi, memperbaiki, dan menambahkan fungsi-fungsi baru. Bahkan kita bisa menyesuaikan dan menterjermahkan perintah-perintah dalam bahasa Inggris tersebut menjadi berbahasa Indonesia. Untuk memodifikasi perintah-perintah rake akan dibahas dikemudian hari.

Selamat mencoba dan semoga berhasil. Happy Hacking :)

[Source](http://hendriono.herokuapp.com/blog/2013/06/17/mengenal-perintah-rake-octopress)