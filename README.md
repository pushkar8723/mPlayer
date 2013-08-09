mPlayer
=======

A jQuery Music Player Plugin.

How to use
----------

### Import Scripts and Stylesheets
<code>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.mPlayer.js"></script>
<link type="text/css" rel="stylesheet" href="css/jquery.mPlayer.css" />
</code>

### HTML Script
<code>
<div id="music"></div>
</code>

### Initialize Script
<code>
$(document).ready(function() {
    $('#music').mPlayer({
        'music/Michio - Ninon (Rumba).mp3': 'Ninon - Michino',
        'music/Michio - Ninon (Rumba).ogg': '',
        'music/The Secession - Arrange.mp3': 'Arrange - The Secession',
        'music/The Secession - Arrange.ogg': '',
        'music/The Secession - Decide.mp3': 'Decide - The Secession',
        'music/The Secession - Decide.ogg': ''
    });
});
</code>

Metods Available
----------------

Methods available:
* play : Plays the current song.
* pause : Pause the current song.
* togglePlay : Toggles the current song between play and pause.
* next : Loads and play the next song in the list.
* prev : Loads and play the previous song in the list.