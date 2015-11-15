---
layout: post
title: "Cara Install Go-lang di Linux"
date: 2014-11-27 17:19:52 +0700
comments: true
categories: [go-lang, linux]
description: Cara Install Go-lang di Linux
keywords: Cara Install Go-lang di Linux
---
Pertama buka dulu page download arsip go-lang disini https://golang.org/dl/ setelah itu ambil file arsipnya sesuai arsitektur pada distro linux kalian (x64 or x86), sebagai contoh:

Buka terminal
```sh
cd Downloads ; mkdir go-lang ; cd go-lang
```
<!--more-->
x64
```sh
wget https://storage.googleapis.com/golang/go1.3.3.linux-amd64.tar.gz
```
x86
```sh
wget https://storage.googleapis.com/golang/go1.3.3.linux-386.tar.gz
```
Setelah itu buka arsipnya, dan di copy + paste ke direktori `/usr/local`
x64
```sh
tar -C /usr/local -xzf go1.3.3.linux-amd64.tar.gz
```
x86
```sh
tar -C /usr/local -xzf go1.3.3.linux-386.tar.gz
```

Setelah itu tambahkan __Environment Variable__ nya

```sh
export PATH=$PATH:/usr/local/go/bin
```

Sekarang kita buat contoh apakah sudah work atau belum.

```sh
nano test.go
```

{% codeblock lang:go test.go %}
package main

import "fmt"

func main() {
    fmt.Printf("Hallo, dunia\n")
}
{% endcodeblock %}

Sekarang di jalankan

```sh
go run test.go
```