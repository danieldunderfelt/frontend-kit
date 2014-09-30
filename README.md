Frontend Kit
============
A template for quickly getting started with front-end projects.

Clone this repo, make adjustments if necessary, and code. Remove example files. Here's some things you should take a look at before starting:


package.json
------------
The Gruntfile is very clever, and will use the "name" entry in package.json as the name for top-level style and script files. So even if you want to start immediately, at least change the name.

While you're there, you can add or remove packages that you need.


Grunt
------------
The project will compile as it is, but feel free to add or remove Grunt tasks. If you change the src or build folder name, you need to correct the paths in the gruntfile.

Run 'grunt dev' to start the filewatcher. Please define your own production build tasks. Minifiers are not included.


Javascript
----------
The Javascript is run through Traceur by default, so go ahead use ES6 goodness! Adjust the Gruntfile if you don't want this.

Browserify is also used. Because it's great.


Style
-----
Styles are herded through Autoprefixer. Do not change this! It's awesome. This means that you do not have to write -webkit-, -moz- etc in your styles; those will automatically be added by Autoprefixer!


Dev server
----------
This template includes grunt-connect which provides an instant local server. Just open a separate terminal, enter "grunt connect" and you're off. Please note that this terminal window cannot be used for anything else as the connect server is blocking while it's in use.

Then just hop onto 127.0.0.1:9001 using your favourite hypertext document reader.


Live reloading
--------------
Only styles are live-reloaded, not Javascripts. Adjust this to your tastes.