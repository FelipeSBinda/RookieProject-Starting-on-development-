$(function () {
    var playlist = [{
        artist: 'Shinedown',
        title: 'Brilliant',
        mp3: '../Teste PF/root/music/brilliant.mp3'
    }, {
        artist: 'Dead by April',
        title: 'Crying Over You',
        mp3: '../Teste PF/root/music/crying_over_you.mp3'
    }, {
        artist: 'Architects',
        title: 'Doomsday',
        mp3: '../Teste PF/root/music/doomsday.mp3'
    }, {
        artist: 'Mike Shinoda',
        title: 'Nothing Makes Sense Anymore',
        mp3: '../Teste PF/root/music/nothing-makes-sense-anymore.mp3'
    }, {
        artist: 'Our Last Night',
        title: 'Castle In The Sky',
        mp3: '../Teste PF/root/music/castle-in-the-sky.mp3'
    }, {
        artist: 'Architects',
        title: 'Royal Beggars',
        mp3: '../Teste PF/root/music/royal-beggars.mp3'
    }, {
        artist: 'Anberlin',
        title: 'Uncanny',
        mp3: '../Teste PF/root/music/uncanny.mp3'
    }, {
        artist: 'Three Days Grace',
        title: 'Villain Im Not',
        mp3: '../Teste PF/root/music/villain-im-not.mp3'
    }, {
        artist: 'Acceptance',
        title: 'We Can Escape',
        mp3: '../Teste PF/root/music/we-can-escape.mp3'
    }, {
        artist: 'Architects',
        title: 'Hereafter',
        mp3: '../Teste PF/root/music/hereafter.mp3'
    }, {
        artist: 'Our Last Night',
        title: 'Every Time Our Eath Shakes',
        mp3: '../Teste PF/root/music/every-time-our-earth-shakes.mp3'
    }, {
        artist: 'Shinedown',
        title: 'Darkside',
        mp3: '../Teste PF/root/music/darkside.mp3'
    }, {
        artist: 'Mike Shinoda',
        title: 'Hold It Together',
        mp3: '../Teste PF/root/music/hold-it-together.mp3'
    },{
        artist: 'Our Last Night',
        title: 'Bury The Hatchet',
        mp3: '../Teste PF/root/music/bury-the-hatchet.mp3'
    },{
        artist: 'Dream on Dreamer',
        title: 'Dont Lose Your Heart',
        mp3: '../Teste PF/root/music/dont-lose-your-heart.mp3'
    }]
    var currentTrack = 0;
    var numTracks = playlist.length;
    $('.player-next').click(function () {
        player.playNext();
    });
    $('.player-prev').click(function () {
        player.playPrevious();
    });
    var player = $(".player").jPlayer({
        ready: function () {
            player.jPlayer("setMedia", playlist[currentTrack])
            player.playCurrent();
        },
        ended: function () {
            $(this).playNext();
        },
        play: function () {
            $('.player-current-track').text(playlist[currentTrack].artist + ' - ' + playlist[currentTrack].title);
        },
        swfPath: 'script/plugins/jplayer/',
        supplied: "mp3",
        cssSelectorAncestor: "",
        cssSelector: {
            play: ".player-play",
            pause: ".player-pause",
            stop: ".player-stop",
            seekBar: ".player-timeline",
            playBar: ".player-timeline-control"
        },
        size: {
            width: "1px",
            height: "1px"
        }
    });
    player.playNext = function () {
        currentTrack = (currentTrack == (numTracks - 1)) ? 0 : ++currentTrack;
        player.playCurrent()
    };
    player.playCurrent = function () {
        player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
    };
    player.playPrevious = function () {
        currentTrack == (currentTrack == 0) ? numTracks - 1 : --currentTrack;
        player.playCurrent();
    };
});
