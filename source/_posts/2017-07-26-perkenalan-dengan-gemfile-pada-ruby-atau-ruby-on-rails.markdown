---
layout: post
title: "perkenalan dengan gemfile pada ruby atau ruby on rails"
date: 2017-07-26 17:55:42 +0700
comments: true
categories: [rails, gemfile]
description: perkenalan dengan gemfile pada ruby atau ruby on rails
keywords: perkenalan dengan gemfile pada ruby atau ruby on rails
---

### Apa itu Gemfile?

Gemfile adalah file konfigurasi pada bahasa pemrograman ruby, semua dependensi gem atau kebanyakan orang menyebutnya adalah library atau perpustakaan yang dapat kita temukan di [RubyGems](https://rubygems.org). Siapaun dapat membuat, menambah, mengolah gem milik kalian bahkan kita juga dapat berkolaborasi di hosting git. Sedangkan pengoprasiannya dapat dilakukan dengan [bundler](http://bundler.io) dan perintahnya menggunakan `bundle`.
<!-- more -->
Jika kita ingin membuat sebuah proyek berbasis bahasa ruby biasanya Gemfile akan selalu dipakai mungkin malah harus menggunakannya.

Saya disini tidak akan membahasa tentang cara penggunaan gem pada situs rubygems.org, tapi lebih bagaimana mendefinisikan isi dari Gemfile pada bahasa ruby.

Yang pertama kita harus menginisialiasi sumber atau source alamat yang akan kita gunakan, sebagai contoh:

{% codeblock Gemfile %}
source 'https://rubygems.org'
{% endcodeblock %}

Yang selenjutnya adalah bagaimana kita mendefinisikan gem yang akan kita gunakan, jadi misal kita ingin menggunakan gem [__json__](https://rubygems.org/gems/json) maka:

{% codeblock Gemfile %}
gem 'json'
{% endcodeblock %}

- __gem__ adalah perintah untuk memanggila nama gem tersebut
- __json__ dari mana? json adalah nama yang diambil dari situs resminya rubygems.org disini https://rubygems.org/gems/json

Yang selanjutnya adalah bagaimana jika kita ingin mendefinisikan versinya juga? karena setiap gem itu memiliki versi, contoh diatas tidak mendefinisikan versi maka akan menggunakan versi yang terbaru. Jika kita ingin mendefinisikan dengan versinya maka:

{% codeblock Gemfile %}
gem 'json', '2.1.0'
{% endcodeblock %}
atau
{% codeblock Gemfile %}
gem 'json', '~> 2.1.0'
{% endcodeblock %}

- __~>__ adalah operator yang berarti sama dengan
- __2.1.0__ adalah nilai dari versinya, nilai versi ini harus tersedia di https://rubygems.org/gems/json, kalian bisa melihat dibagian __VERSION__, saya mengambil versi yang terbaru saat ini.

Adapun operator lain yang dapat digunakan:

- __>=__ adalah operator yang berarti lebih besar atau sama dengan
- __<__ adalah operator yang berarti lebih kecil

Yang selanjutnya kita mengenal group, mungkin kalian akan langsung paham jika melihat kode dibawah:

{% codeblock Gemfile %}
group :development do
  gem 'json'
end
{% endcodeblock %}

Kita bisa melihat kode diatas bahwa `gem 'json'` diapit oleh `group :development`, development yang artinya bahwa gem json hanya dapat digunakan pada environment development.

Selain group __development__ kita bisa juga menggunakan group __production__ dan __test__

Sekarang saya kenalkan Gemfile milik Rails versi 5.1.2

{% codeblock Gemfile %}
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.2'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
{% endcodeblock %}

Maka dari sini saya rasa anda cukup bisa memahaminya, ya kan? Yes...

Namun kita lihat disana ada __platforms__ yang belum kita definisikan, kita ambil kutipan kode diatas:

{% codeblock Gemfile %}
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end
{% endcodeblock %}

Gem __byebug__ akan digunakan oleh nilai array yang ada didalam __platforms__.

Dan satu lagi, dari kutipan kode dibawah ini:

{% codeblock Gemfile %}
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
{% endcodeblock %}

Bahwa source dapat diambil dari hosting git langsung yaitu GitHub. Revisi kode pada Gemfile ini baru muncul di Rails versi 5 keatas.

Sebenarnya masih ada beberapa fungsi yang bisa digunakan di Gemfile ini, tapi saya rasa bacaan ini cukup sekian dulu lah ya ^_^, nantikan bacaan saya selanjutnya tentang Ruby / Ruby on Rails ataupun pengetahuan lainnya.

