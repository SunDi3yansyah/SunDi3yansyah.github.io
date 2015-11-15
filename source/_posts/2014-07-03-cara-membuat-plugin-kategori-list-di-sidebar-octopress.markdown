---
layout: post
title: "Cara Membuat Plugin Kategori List di Sidebar Octopress"
date: 2014-07-03 21:24:46 +0700
comments: true
categories: [ruby, octopress]
description: Cara Membuat Plugin Kategori List di Sidebar Octopress, ruby
keywords: Cara Membuat Plugin Kategori List di Sidebar Octopress, ruby
---
Pertama kita perlu menulis kode ruby ​​sedikit. Menambahkan file ke direktori plugin yang disebut `category_list_tag.rb`. Plug-in ini akan mengambil data kategori dari situs dan menghasilkan daftar item untuk setiap kategori. Pada line 17 tag `category_list` tersedia untuk liquid template engine (Lihat code di bawah).

Pertaman buat file baru menggunakan editor kesukaan kalian, dan isi code Ruby nya seperti ini:
<!-- more -->
{% codeblock root@sundi3yansyah - category_list_tag.rb %}
module Jekyll
  class CategoryListTag < Liquid::Tag
    def render(context)
      html = ""
      categories = context.registers[:site].categories.keys
      categories.sort.each do |category|
        posts_in_category = context.registers[:site].categories[category].size
        category_dir = context.registers[:site].config['category_dir']
        category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)
        html << "<li class='category'><a href='/#{category_url}/'>#{category} (#{posts_in_category})</a></li>\n"
      end
      html
    end
  end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryListTag)
{% endcodeblock %}

Sekarang kita perlu membuat daftar kategori (category_list.html) template di dalam direktori `source/_includes/asides`, dengan menggunakan "category_list" tag dari plug-in di atas.

Buat file baru di `source/_includes/asides` dengan nama `category_list.html` dengan isi code sebagi berikut:

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/category_list_zps7b19c7f9.png category list %}

Kemudian yang terakhir adalah meng-edit file `_config.yml` cari kode berikut ini:

{% codeblock root@sundi3yansyah %}
default_asides
{% endcodeblock %}

Tambahkan `asides/category_list.html` ke dalam daftar asides-nya, misalnya punya saya seperti ini:

{% codeblock root@sundi3yansyah - _config.yml %}
default_asides: [asides/recent_posts.html, asides/github.html, asides/delicious.html, asides/pinboard.html, asides/googleplus.html, asides/category_list.html]
{% endcodeblock %}

Terakhir memperhabarui dengan perintah rake supaya kita bisa melihat hasilnya

Jika di lokal server

{% codeblock root@sundi3yansyah %}
rake preview
{% endcodeblock %}

Jika di server seprti GitHub atau yang lainnya.

{% codeblock root@sundi3yansyah %}
rake generate
rake deploy
{% endcodeblock %}

Maka hasilnya seperti ini kalau punya saya:

{% img http://i40.photobucket.com/albums/e228/sundi3yansyah/category_list_sundi3yansyah-labs_zps22bf2717.png sundi3yansyah category list %}

Good Luck...! Happy coding, happy hacking, happy homoer :)