set encoding=utf-8
set laststatus=2
set number
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab
set colorcolumn=+1          
set cursorline              " highligh current line
set ignorecase
set smartcase
set showmatch
set hlsearch
set gdefault
set virtualedit=block

" colors
colorscheme molokai
syntax on
set t_Co=256
set guifont=DejaVu\ Sans\ Mono\ for\ Powerline\ 10
let Powerline_symbols = 'fancy'

inoremap <c-a> <esc>I
inoremap <c-e> <esc>A

" Return to the previously selected line in the file
augroup line_return
    au!
    au BufReadPost *
        \ if line("'\"") > 0 && line("'\"") <= line("$") |
        \ execute 'normal! g`"zvzz' |
        \ endif
augroup END

" remove seach-highlights when pressing ,+<space>
let mapleader=","
noremap <leader><space> :noh<cr>: call clearmatches()<cr>

" Buffers, Backup & Co
set undodir=~/.vim/tmp/undo//
set backupdir=~/.vim/tmp/backup//
set directory=~/.vim/tmp/swap//
set backup
set noswapfile
set ruler
set history=10000
set undofile
set undoreload=10000
set title
set autoindent
set autoread
set lazyredraw
set mouse=a

" reload .vimrc on saving
au BufWritePost .vimrc so ~/.vimrc

execute pathogen#infect()
call pathogen#infect('bundle/{}')

nnoremap <F3> :NumbersToggle<CR>
nnoremap <F4> :NumbersOnOff<CR>