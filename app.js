var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 2000,
    // Setting the Height
    setHeight = document.getElementById("set-height"),
    // Get the Video       
    vid = document.getElementById('video-source');

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);