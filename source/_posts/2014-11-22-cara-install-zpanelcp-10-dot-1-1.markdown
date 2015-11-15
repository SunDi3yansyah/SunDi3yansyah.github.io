---
layout: post
title: "Cara Install ZPanelCP 10.1.1"
date: 2014-11-22 11:08:28 +0700
comments: true
categories: [control panel, vps]
description: Cara Install ZPanelCP 10.1.1
keywords: Cara Install ZPanelCP 10.1.1
---
PEMBERITAHUAN: cek installer / upgrader untuk 32 atau 64 bit secara otomatis! Hanya satu script yang dibutuhkan.

Ubuntu

{% codeblock lang:sh installer ubuntu %}
bash <(curl -Ss https://raw.github.com/zpanel/installers/master/install/Ubuntu-12_04/10_1_1.sh)
{% endcodeblock %}
<!--more-->
CentOS

{% codeblock lang:sh installer centos %}
bash <(curl -Ss https://raw.github.com/zpanel/installers/master/install/CentOS-6_4/10_1_1.sh)
{% endcodeblock %}

-----

Jika dari ZPanel kalian dalam keadaan versi 10.1.0, lakukan upgrade dibawah ini:

Ubuntu

{% codeblock lang:sh installer ubuntu %}
bash <(curl -Ss https://raw.github.com/zpanel/installers/master/upgrade/Ubuntu-12_04/10_1_1.sh)
{% endcodeblock %}

CentOS

{% codeblock lang:sh installer centos %}
bash <(curl -Ss https://raw.github.com/zpanel/installers/master/upgrade/CentOS-6_4/10_1_1.sh)
{% endcodeblock %}

-----

Installers for Microsoft Windows (10.1.0)

[Application Stack (Apache, PHP, MySQL etc.) Installer for Microsoft® Windows™](http://sourceforge.net/projects/zpanelcp/files/server_stack/10.0.2/zpanel-stack-1_0_2_php53.exe/download)
[ZPanel Installer (installs ZPanel on top of the Application stack)](https://github.com/zpanel/zpanelx/releases/download/10.1.0/installer-10_1_0-win32.exe)

Upgrade for Microsoft Windows (10.1.0 to 10.1.1)

For new 10.1.1 installs: Install as noted above (10.1.0) then follow the instructions below:
[Manual Update Tutorial for Microsoft Windows](http://forums.zpanelcp.com/Thread-HOW-TO-UPGRADE-10-1-1-WINDOWS?pid=76365#pid76365) Manually upgrade from ZPanel version 10.1.0 to 10.1.1

Upgrade tools for Microsoft Windows (10.0.1/10.0.2 to 10.1.0)

[Updater for Microsoft Windows](https://github.com/zpanel/zpanelx/releases/download/10.1.0/updater-10_1_0-win32.exe) Automatically upgrades from ZPanel version 10.0.1 or 10.0.2 to 10.1.0

Bug yang di termukan adalah:

[RoundCube Vulnerability Bug](http://forums.zpanelcp.com/Thread-RoundCube-Urgent-Security-HotFix)
[Pcharts Vulnerability Bug](http://forums.zpanelcp.com/Thread-Pcharts-Urgent-Vulnerability-Fix)

