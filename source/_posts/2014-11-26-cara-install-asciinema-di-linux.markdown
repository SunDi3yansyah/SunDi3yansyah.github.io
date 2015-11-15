---
layout: post
title: "Cara Install Asciinema di Linux"
date: 2014-11-26 18:52:38 +0700
comments: true
categories: [asciinema, linux]
description: Cara Install Asciinema di Linux
keywords: Cara Install Asciinema di Linux
---
{% img center https://lh5.googleusercontent.com/-pLbkxy3l_oY/VHXFK4PJ0mI/AAAAAAAAASo/o_DUioz5j_U/s800/Screenshot+from+2014-11-26+18:54:05.png  'asciinema' 'asciinema' %}

Apa itu ASCIINEMA?

Dari kata-kata ASCII
<!--more-->
{% blockquote wikipedia http://id.wikipedia.org/wiki/ASCII ASCII %}
Kode Standar Amerika untuk Pertukaran Informasi atau ASCII (American Standard Code for Information Interchange) merupakan suatu standar internasional dalam kode huruf dan simbol seperti Hex dan Unicode tetapi ASCII lebih bersifat universal, contohnya 124 adalah untuk karakter "|".
{% endblockquote %}

Dan dari kata NEMA - Cinema kwkkwkwk {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png 20 20 'smiley' 'smiley' %}

{% blockquote wikipedia http://id.wikipedia.org/wiki/Sinema Sinema %}
Sinema (akar kata dari cinema = kinematik = gerak). Film sebenarnya merupakan lapisan-lapisan cairan selulosa, biasa di kenal di dunia para sineas seluloid.

Pengertian secara harafiah film (sinema) adalah Cinemathographie yang berasal dari Cinema + tho = phytos (cahaya) + graphie = grhap (tulisan = gambar = citra), jadi pengertiannya adalah melukis gerak dengan cahaya. Agar kita dapat melukis gerak dengan cahaya, kita harus menggunakan alat khusus, yang biasa kita sebut dengan kamera V
{% endblockquote %}

Yah gitu lah, tapi jangan di gabungin, intinya Asciinema itu packages yang bisa merekam session di dalam terminal. Gini aja kalian buka aja profile saya disini https://asciinema.org/~SunDi3yansyah dan scroll ke bawh, ada list videonya coba di pilih 1 dan di play, maka yang di rekam hanyalah di bagian windows terminalnya saja. Oke paham...? Sip... {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}

Saya disini akan menjelaskan cara install di Linux.

#### Ubuntu

```sh
sudo apt-add-repository ppa:zanchey/asciinema
```
```sh
sudo apt-get update
```
```sh
sudo apt-get install asciinema
```
#### Fedora (Fedora 19 dan 20)
```sh
sudo yum install asciinema
```
#### Arch Linux
```sh
sudo yaourt -S asciinema
```
#### Gentoo Linux
```sh
sudo emerge asciinema
```

Source: https://asciinema.org/docs/installation

Nah setelah kalian install, kalian di berkenankan membuat akun disana, jangan lupa di verifikasi emailnya, setelah itu kalian bisa menggunakan asciinema ini di session terminal, tapi sebelum menggunakan saya sarankan untuk membuat auth config di asccinema kalian dengan akun di asscinema.org, cara nya buka terminal dan ketik ini
```sh
asciinema auth
```
Copy dan paste link yang ada di output kemudian di pastekan ke browser yang kalian pakai tadi untuk register ke asciinema.org.

Setelah itu kalian bisa menggunakannya, dengan perintah di terminal.
```sh
asciinema rec
```
Maka akan membersihkan halaman terminal baru dan siap di rekam. Untuk keluar ketik perintah
```sh
exit
```
dan ENTER.
Atau bisa juga dengan menekan tombil **CTRL + D**

Nah ketika akan berhenti dari rekaman kalian akan di beri perintah

**Rekaman yang barusan di rekam mau di upload atau tidak?**

Jika iya, maka ketik perintah **Y** dan tekan **ENTER** jika tidak ingin menguploadnya maka ketik perintah **N** dan tekan **ENTER**.

Lama gak ya uploadnya?
Jawabannya **TIDAK** seberapa lama anda merekam maka uploadnya akan tetap cepat, gak percaya? Silakan di buktikan... {% img https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png 20 20 'smile' 'smile' %}

Jika memerlukan bantuan lebih lengkapnya, ketik perintah ini
```sh
asciinema -h
```