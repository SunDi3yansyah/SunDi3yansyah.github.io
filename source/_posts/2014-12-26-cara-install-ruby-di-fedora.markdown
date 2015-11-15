---
layout: post
title: "Cara Install Ruby di Fedora"
date: 2014-12-26 03:48:32 +0700
comments: true
categories: [ruby, centos, fedora]
description: Cara Install Ruby di Fedora
keywords: Cara Install Ruby di Fedora
---

Kalau di CentOS, Debian, Ubuntu, Windows dan lain-lainnya silakan di lihat di archive blog saya __kan sudah__ nah kali ini saya akan menjelaskan bagaimana jika di __Fedora__ kali ini berbeda dengan di Fedora cukup lakukan perintah __yum yum dan yum__ kalian sudah bisa mendapatkan versi Ruby dan Gems lainnya dengan versi terbaru, langsung saja.

Buka shell session kalian (terminal)

```
yum update
```
<!-- more -->
untuk mengupdate repository kalian jika masih belum up to date.

install ruby

```
yum install ruby
```

nanti kalian akan di beri ruby versi ke old stable, yaitu versi old stable sekarang 2.0, itu sudah menjadi versi ruby yang bisa kompetibel dengan aplikasi apapun.

kemudian update gems nya

```
gem -v
```

silakan buka situs rubygems di [https://rubygems.org/](https://rubygems.org/) jika versi di OS kalian dengan di situs berbeda maka lakukan update

```
gem update --system
```

next, update gem list yang ada

```
gem update
```

NOTE: Jika terjadi error seperti ini:

{% codeblock lang:sh error_required   %}
Updating rubygems-update
Fetching: rubygems-update-2.4.5.gem (100%)
Successfully installed rubygems-update-2.4.5
Parsing documentation for rubygems-update-2.4.5
Installing ri documentation for rubygems-update-2.4.5
Installing darkfish documentation for rubygems-update-2.4.5
Done installing documentation for rubygems-update after 11 seconds
Installing RubyGems 2.4.5
RubyGems 2.4.5 installed
/usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require': cannot load such file -- json/pure (LoadError)
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/share/gems/gems/json-1.7.7/lib/json.rb:60:in `rescue in <module:JSON>'
    from /usr/share/gems/gems/json-1.7.7/lib/json.rb:57:in `<module:JSON>'
    from /usr/share/gems/gems/json-1.7.7/lib/json.rb:54:in `<top (required)>'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/text.rb:16:in `<top (required)>'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/code_object.rb:28:in `<class:CodeObject>'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/code_object.rb:26:in `<top (required)>'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/generator/markup.rb:59:in `<top (required)>'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/generator/darkfish.rb:6:in `<top (required)>'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/rdoc.rb:565:in `<top (required)>'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/core_ext/kernel_require.rb:54:in `require'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/rubygems_hook.rb:73:in `load_rdoc'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/rubygems_hook.rb:238:in `setup'
    from /usr/share/gems/gems/rdoc-4.0.1/lib/rdoc/rubygems_hook.rb:151:in `generate'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/commands/setup_command.rb:317:in `install_rdoc'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/commands/setup_command.rb:148:in `execute'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/command.rb:307:in `invoke_with_build_args'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/command_manager.rb:168:in `process_args'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/command_manager.rb:138:in `run'
    from /usr/local/share/gems/gems/rubygems-update-2.4.5/lib/rubygems/gem_runner.rb:54:in `run'
    from setup.rb:45:in `<main>'
{% endcodeblock %}

Maka lakukan install gems json_pure

```
gem install json_pure
```

Kemudian lakukan update step sebelumnya. Oke,,, sekian dari saya, selamat ngoding...
