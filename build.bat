@REM build.bat
@ECHO off
python %PATH_ASCII%\asciidoc.py -b html5 -n -a data-uri -a icons uber-hypermedia.asciidoc %*
