@REM build.bat
@ECHO off
python %PATH_ASCII%\asciidoc.py -b html5 -a data-uri -a icons -a toc2 -a uber-hypermedia.asciidoc %*