# editor

Try it here: [gogos.me/editor](https://gogos.me/editor/)

`editor` is a static html page which uses [`codemirror`](https://codemirror.net/) and javascript to help you with greek text.

## History...

`editor` was created for some friends who were working on some old Microsoft Word files which had issues regarding Greek (wrong symbols for punctuation, greek words with latin characters inside etc...) and this text had to be fixed before being added to a database.

The idea was to copy-paste a piece of text and "visually" be able to check if there are problems. Green color for `Greek` / yellow for `Greek-extended` meant that you were probably OK, red color meant that you might had to correct some characters.

The big number of badly-used characters also led us to the creation of functions that do batch replacements/fixes, so there you have it!

## Confusables...

In 2025, I bumped into the term "confusables", which describes part of the problem that we were trying to solve. Unicode.org provides a relative utility here: [Unicode Utilities: Confusables](https://util.unicode.org/UnicodeJsps/confusables.jsp) 

>*Confusable characters are those that may be confused with others (in some common UI fonts), such as the Latin letter "o" and the Greek letter omicron "ο". Fonts make a difference: for example, the Hebrew character "ס" looks confusingly similar to "o" in some fonts (such as Arial Hebrew), but not in others. See also unaccented [Latin Characters.](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?\p{latin}-\p{nfkdqc%3Dn}). The data for confusables and restrictions is from UTS39.*

## Short demo

![](demo.gif)

## Under the hood...

Go check what's inside [this js](js/custom.js) file. All the "magic" is there!
