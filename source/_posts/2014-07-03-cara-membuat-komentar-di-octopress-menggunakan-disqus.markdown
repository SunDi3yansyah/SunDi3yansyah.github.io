---
layout: post
title: "Cara Membuat Komentar di Octopress Menggunakan Disqus"
date: 2014-07-03 05:22:27 +0700
comments: true
categories: [octopress]
description: Cara Membuat Komentar di Octopress Menggunakan Disqus
keywords: Cara Membuat Komentar di Octopress Menggunakan Disqus
---
Pernah liat kan Octopress punya kawan-kawan kalian ada fasilitas komentarnya powered by Disqus? Yap... betul, gimana cara buatnya? Nyok simak...

Pertama buat akun dulu disini [SignUp](https://disqus.com/admin/signup/?utm_source=New-Site) kalau sudah selesai silakan di edit-edit apa aja dah yang di perlukan. INGAT pada saat membuat akun di Disqus pada kolom Short Name itu adalah sub domain yang nantinya akan jadi milik kalian dan itu akan di jadikan patokan untuk config di `_config.yml`. Jika sudah selesai registrasinya maka edit file `_config.yml` cari bagian:
<!-- more -->
{% codeblock root@sundi3yansyah %}
disqus_short_name: 
{% endcodeblock %}

Isi valuenya sesui yang kalian daftarkan tadi di Disqus dan untuk `disqus_show_comment_count` valuenya `true`

Contoh untuk Octopress saya:

{% codeblock root@sundi3yansyah %}
disqus_short_name: sundi3yansyahlabs
disqus_show_comment_count: true
{% endcodeblock %}

Masih di file `_config.yml`, pastikan untuk config `url:`
Harus seperti ini:

{% codeblock root@sundi3yansyah %}
url: http://sundi3yansyah.github.io
{% endcodeblock %}

***Bukan seperti ini***

{% codeblock root@sundi3yansyah %}
url: http://sundi3yansyah.github.io/
{% endcodeblock %}

Kemudian pastikan file `/source/_includes/disqus.html`
Cari:

{% codeblock root@sundi3yansyah %}
var disqus_shortname
{% endcodeblock %}

Harus seperti ini:

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/disqus_short_name_zpsd3c4b057.png sundi3yansyah Disqus Octopress %}

Kemudian SAVE semua, jalankan rake untuk meluhat perubahhnya.

{% codeblock root@sundi3yansyah %}
rake generate
{% endcodeblock %}

{% codeblock root@sundi3yansyah %}
rake deploy
{% endcodeblock %}

Oke selesai sampai disini. Happy coding, happy hacking :).