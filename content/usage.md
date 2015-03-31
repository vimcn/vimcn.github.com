
# 安装 & 使用

----

## Vundle 方式

.vimrc 中加入：

```
Plugin "vimcn/{repository-name}"
```

重启 Vim 执行 `:PluginInstall`


## NeoBundle 方式

.vimrc 中：

```
NeoBundle 'vimcn/{repository-name}'
```

重启 Vim 执行命令 `:NeoBundleInstall`


## Pathogen 方式

终端（命令行）执行：

```
$ cd ~/.vim/bundle
$ git clone git://github.com/vimcn/{repository-name}.git
```

重启 Vim 即可。


## 手工方式

* 下载（或 git clone） [Vim script 中文文档 (*.cnx)](https://github.com/vimcn) 
* 放至 Vim 用户目录下的 doc 目录中

  * for Windows: `$VIM/vimfiles/doc`
  * for Unix-like(Linux, Mac OSX): `~/.vim/doc`
    > 以下统称 `$VIM/vimfiles` 和 `~/.vim` 目录为 `runtime` 目录。
* 在 Vim 环境中运行 `helptags` 命令生成 tags：

  for Windows:

  ```
  :helptags $Vim/vimfiles/doc
  ```

  for Unix-like:

  ```
  :helptags ~/.vim/doc
  ```

* 设置 Vim 使用的文档语言，默认是英文。

  ```
  :set helplang=cn
  ```

  如果在 vimrc 设置无效，可以查看并修改 `runtime/plugin/vimcdoc.vim`
  中的设置，之前安装有 Vim 中文帮助则可以忽略这步。
