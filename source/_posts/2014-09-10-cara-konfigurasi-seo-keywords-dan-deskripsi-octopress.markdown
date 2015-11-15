---
layout: post
title: "Cara Konfigurasi SEO Keywords dan Deskripsi Octopress"
date: 2014-09-10 03:49:47 +0700
comments: true
categories: [octopress]
description: SEO itu asset terpenting dalam membangun website, berikut ini adalah Cara Konfigurasi SEO Keywords dan deskripsi Octopress
keywords: cara membuat keywords dan dektipsi, SEO octopress, Cara Konfigurasi SEO Keywords dan deskripsi Octopress, keywords dan deskripsi octopress, who to config keywords
---
SEO itu asset terpenting dalam membangun website, tanya donk kenapa? Nanti akan di jawab dengan rumput yang bergoyang. {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}a.! Ya pokoknya gitu deh...
<!-- more -->
Tutorial ini akan membuat Rakefile pada ruby anda ketika membuat post menghasilkan teks sepebagi berikut:

{% codeblock %}
---
layout: post
title: "Cara Konfigurasi SEO Keywords dan deskripsi Octopress"
date: 2014-09-10 03:49:47 +0700
comments: true
categories: 
description: 
keywords: 
---
{% endcodeblock %}

Pertama rubah dulu file `_config.yml`

{% codeblock %}
url: http://yoursite.com
title: My Octopress Blog
subtitle: A blogging framework for hackers.
author: Your Name
simple_search: http://google.com/search

description: "Description untuk blog anda"
keywords: "keyword1, keyword2, keyword3, dst"
{% endcodeblock %}
Edit kurang lebih seperti diatas, jangan sama persis, tapi sesuaikan dengan blog kalian. Kalau sudah di save.

Buka file `Rakefile`

Tambahkan puts seperti di bawah ini:
{% codeblock %}
    post.puts "description: "
    post.puts "keywords: "
{% endcodeblock %}
Di taroh dimana ya? Liat contoh dibawah
{% codeblock %}
# usage rake new_post[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
desc "Begin a new post in #{source_dir}/#{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your post: ")
  end
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  mkdir_p "#{source_dir}/#{posts_dir}"
  filename = "#{source_dir}/#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S %z')}"
    post.puts "comments: true"
    post.puts "categories: "
    post.puts "description: "
    post.puts "keywords: "
    post.puts "---"
  end
end
{% endcodeblock %}

Lakukan juga untuk di `new_page`

Gak tau? Liat code dibawah:

{% codeblock %}
# usage rake new_page[my-new-page] or rake new_page[my-new-page.html] or rake new_page (defaults to "new-page.markdown")
desc "Create a new page in #{source_dir}/(filename)/index.#{new_page_ext}"
task :new_page, :filename do |t, args|
  raise "### You haven't set anything up yet. First run `rake install` to set up an Octopress theme." unless File.directory?(source_dir)
  args.with_defaults(:filename => 'new-page')
  page_dir = [source_dir]
  if args.filename.downcase =~ /(^.+\/)?(.+)/
    filename, dot, extension = $2.rpartition('.').reject(&:empty?)         # Get filename and extension
    title = filename
    page_dir.concat($1.downcase.sub(/^\//, '').split('/')) unless $1.nil?  # Add path to page_dir Array
    if extension.nil?
      page_dir << filename
      filename = "index"
    end
    extension ||= new_page_ext
    page_dir = page_dir.map! { |d| d = d.to_url }.join('/')                # Sanitize path
    filename = filename.downcase.to_url

    mkdir_p page_dir
    file = "#{page_dir}/#{filename}.#{extension}"
    if File.exist?(file)
      abort("rake aborted!") if ask("#{file} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
    end
    puts "Creating new page: #{file}"
    open(file, 'w') do |page|
      page.puts "---"
      page.puts "layout: page"
      page.puts "title: \"#{title}\""
      page.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
      page.puts "comments: true"
      post.puts "description: "
      post.puts "keywords: "
      page.puts "sharing: true"
      page.puts "footer: true"
      page.puts "---"
    end
  else
    puts "Syntax error: #{args.filename} contains unsupported characters"
  end
end
{% endcodeblock %}

Kalau sudah di save.

Buka file `octopress-mu/source/_includes/head.html`

Cari kode ini:

{% gist 6d568fb5d4ef74a27708 %}


Rubah jadi seperti ini:

{% gist 65f31c0c570402dff9d1 %}

Atau seperti ini juga bisa:

{% gist a6638453d00c037caaff %}

Silakan di pilih mana yang baik.

Kemudian SAVE.

Dan coba buat post baru `rake new_post["post-baru"]` halaman baru `rake new_page[page-baru]`

Ketika anda lihat filenya di folder `_posts` akan terlihat serperti ini:

{% codeblock %}
---
layout: post
title: "Cara Konfigurasi SEO Keywords dan deskripsi Octopress"
date: 2014-09-10 03:49:47 +0700
comments: true
categories: 
description: 
keywords: 
---
{% endcodeblock %}

Maka isilah kolom `description` dan `keywords` jika tidak diisi maka akan menampilkan `description` dan `keywords` default yang sudah kita seting sebelumnya di file `_config.yml`

Kalau gk paham ya ke laut aja, kan bisa komen di bawah ^_^

Happy coding, happy hacking, happy coling. {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}