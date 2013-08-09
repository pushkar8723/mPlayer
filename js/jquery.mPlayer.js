/*!
 * mPlayer v0.9
 *
 * Copyright 2013, Pushkar Anand
 *
 * Designed and built with all the love in the world by @pushkar8723.
 */
(function( $ ){
    var audioElement;
    var m = 0;
    var tracks;
    var src = "";
    var objectID;
    var $this;
    var methods = {
        init : function(source) {
            if (source != ""){
                objectID = this.attr('id');
                $this = $('#'+objectID);
                src = source;
                tracks = Object.keys(src);
                $('#'+objectID).html('<div class="mPlayerButtons"></div><div class="mPlayCaptions"></div><div class="mPlayAudio" style="display:none;"></div>');
                $('#'+objectID+' > .mPlayAudio').html('<audio preload="metadata" controls="controls" id ="'+'mPlay'+objectID+'"><source src="'+tracks[0]+'" type="audio/'+tracks[0].split(".").pop()+'" /><source src="'+tracks[1]+'" type="audio/'+tracks[1].split(".").pop()+'" />Your browser does not support the audio element.</audio>');
                audioElement = document.getElementById('mPlay'+objectID);
                $('#mPlay'+objectID).bind('ended.mPlayer', methods.next);
                $(window).bind('resize.tooltip', methods.reposition);
                $('#'+objectID+' > .mPlayerButtons').html('<table><tr><td><button class="prevbtn" onclick=\'$("#'+objectID+'").mPlayer("prev");\'></button></td><td><button class="mainbtn playbtn" onclick=\'$("#'+objectID+'").mPlayer("togglePlay");\'></button></td><td><button class="nextbtn" onclick=\'$("#'+objectID+'").mPlayer("next");\'></button></td></tr></table>');
                $('#'+objectID+' > .mPlayCaptions').html(src[tracks[0]]);
            }
            else{
                $.error('Souce cannot be Empty!');
            }
        },
        play : function( ) {
            audioElement.play();
            $('#'+objectID+' .mainbtn').removeClass('playbtn');
            $('#'+objectID+' .mainbtn').addClass('pausebtn');
        },
        pause : function( ) { 
            audioElement.pause();
            $('#'+objectID+' .mainbtn').removeClass('pausebtn');
            $('#'+objectID+' .mainbtn').addClass('playbtn');
        },
        togglePlay : function() { 
            if(audioElement.paused)
                $this.mPlayer('play');
            else
                $this.mPlayer('pause');; 
        },
        prev : function() {
            m--;
            if (m < 0)
                m = tracks.length/2 - 1;
            $('#'+objectID+' > .mPlayAudio').html('<audio preload="metadata" controls="controls" id ="'+'mPlay'+objectID+'"><source src="'+tracks[m*2]+'" type="audio/'+tracks[m*2].split(".").pop()+'" /><source src="'+tracks[m*2+1]+'" type="audio/'+tracks[m*2+1].split(".").pop()+'" />Your browser does not support the audio element.</audio>');
            audioElement = document.getElementById('mPlay'+objectID);
            $('#mPlay'+objectID).bind('ended.mPlayer', methods.next);
            $('#'+objectID+' > .mPlayCaptions').html(src[tracks[m*2]]);
            $this.mPlayer('play');
        },
        next : function() {
            m++;
            m %= (tracks.length/2);
            $('#'+objectID+' > .mPlayAudio').html('<audio preload="metadata" controls="controls" id ="'+'mPlay'+objectID+'"><source src="'+tracks[m*2]+'" type="audio/'+tracks[m*2].split(".").pop()+'" /><source src="'+tracks[m*2+1]+'" type="audio/'+tracks[m*2+1].split(".").pop()+'" />Your browser does not support the audio element.</audio>');
            audioElement = document.getElementById('mPlay'+objectID);
            $('#mPlay'+objectID).bind('ended.mPlayer', methods.next);
            $('#'+objectID+' > .mPlayCaptions').html(src[tracks[m*2]]);
            $this.mPlayer('play');
        }
    };

    $.fn.mPlayer = function( method ) {
        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        else {
            return methods.init.apply( this, arguments );
        }      
    };

})( jQuery );