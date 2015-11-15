---
layout: post
title: "Cara Install Octopress"
date: 2014-07-02 07:19:05 +0700
comments: true
categories: [octopress, youtube]
description: Cara Install Octopress di sistem operasi linux baik di turunan debian maupun rhell atau fedora intinya sama saja.
keywords: Cara Install Octopress, install octopress, how to install octopress, video install octopress, bagaimana cara install octopress
---

Buka terminal, sekarang git clone dari repos Octopressnya

{% codeblock root@sundi3yansyah %}
git clone git://github.com/imathis/octopress.git username.github.io
cd username.github.io
sudo gem install bundler
bundle install
rake install
{% endcodeblock %}
<!-- more -->
Coba buat post

{% codeblock root@sundi3yansyah %}
rake new_post["Octopress is complete"]
{% endcodeblock %}

Coba cek ada kata-kata `Creating new post: source/_posts/2014-07-02-octopress-is-complete.markdown` kalau ada berarti berhasil.

Coba sekarang di lihat local port `4000`, caranya

{% codeblock root@sundi3yansyah %}
rake preview
{% endcodeblock %}

Kalau ada kata-kata ` >>> Compass is watching for changes. Press Ctrl-C to Stop.` berarti jadi, coba buka browser terus buka `http://localhost:4000`
Cara keluar dari preview tekan di keyborad `CTRL+C`

Sekarang install page github repositynya

{% codeblock root@sundi3yansyah %}
rake setup_github_pages
{% endcodeblock %}

Kalau ada suruh masukin Repository url masukin gini:

{% codeblock root@sundi3yansyah %}
git@github.com:username/username.github.io.git
{% endcodeblock %}

Kalau ada kata-kata ini berarti benar `Now you can deploy to...bla...bla...`
Lanjut

{% codeblock root@sundi3yansyah %}
rake generate
{% endcodeblock %}

Kalau ada kata-kata ini berarti benar `Generating...done.`
Lanjut

{% codeblock root@sundi3yansyah %}
rake deploy
{% endcodeblock %}

Kalau ada kata-kata ini berarti benar `Github Pages deploy complete`

Nonton video dari record ku

<iframe width="675" height="415" src="//www.youtube.com/embed/C2zTDYqPWxw" frameborder="0" allowfullscreen></iframe>

## KALAU ADA ERROR KOMEN