$(function(){
    var playlist = [{
        artist:'Shinedown',
        title:'Brilliant',
        mp3:'../music/brilliant.mp3'
    }, {
        artist:'Dead by April',
        title:'Crying Over You',
        mp3:'../music/crying_over_you.mp3'
    }, {
        artist:'Architects',
        title:'Doomsday',
        mp3:'../music/doomsday.mp3'
    }, {
        artist:'Mike Shinoda',
        title:'Nothing Makes Sense Anymore',
        mp3:'../music/nothing-makes-sense-anymore.mp3'
    }, {
        artist:'Anberlin',
        title:'Uncanny',
        mp3:'../music/uncanny.mp3'
    }]
})
var currentTrack = 0;
var numTracks = playlist.length;
var player = $(".player").jPlayer({
    ready:function(){
        player.jPlayer("setMedia", playlist[currentTrack])
        player.playCurrent();
    },
    ended:function(){
        $(this).playNext();
    },
    play:function(){
        $('.player-current-track').text(playlist[currentTrack].artist+' - '+playlist[currentTrack].title);
    },
    swfPath: 'js/plugins/jplayer/',
    supplied: "mp3",
    cssSelectorAncestor: "",
    cssSelector:{
        play: ".player-play",
        pause: ".player-pause",
        stop: ".player-stop",
        seekBar: ".player-timeline",
        playBar: ".player-timeline-control"
    },
    size:{
        width:"1px",
        height:"1px"
    }
})
player.playCurrent = function(){
    player.jplayer("setMedia",playlist[currentTrack]).jPlayer("play");
}
player.playNext = function(){
    currentTrack = (currentTrack == (numTracks -1)) ? 0:++currentTrack;
    player.playCurrent();
};
player.playPrevious = function(){
    currentTrack == (currentTrack == 0)? numTracks - 1: --currentTrack;
    player.playCurrent();
};
$('.player-next').click(function(){
    player.playNext();
});
$('.player-prev').click(function(){
    player.playPrevious();
});