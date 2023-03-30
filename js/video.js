var video;
video = document.getElementById('player1')

// load the page
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

// play the video (play button)
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	sliderDiv = document.getElementById("volume");
	sliderDiv.innerHTML = document.getElementById("slider").value;
});

// pause the video (pause button)
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});

// slow down the video
document.querySelector("#slower").addEventListener("click", function(){
	video.defaultPlaybackRate = 1
	let decrease_rate = 0.1;
	video.playbackRate -= decrease_rate
	console.log("the video speed is"+ video.playbackRate+ '.')
});

// speed the video up 
document.querySelector("#faster").addEventListener("click", function(){
	video.defaultPlaybackRate = 1
	let increase_rate = 0.1;
	video.playbackRate += increase_rate
	console.log("the video speed is"+ video.playbackRate+ '.')
});

//skip ahead in the video and ensure that the video is looping after the end has been hit
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0;

	}
	console.log("the current video time is" + video.currentTime + '.')
});
// mute the video and then unmute the video
document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else{
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
});

// volume slider
document.querySelector("#slider").addEventListener("click", function(){
	sliderDiv = document.getElementById("volume");
	sliderDiv.innerHTML = document.getElementById("slider").value;

	video.volume = document.getElementById("slider").value/100;
});

// old school style 
document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector("video").setAttribute('class', 'oldSchool')
})

// remove the old school style and go back to normal
document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector("video").setAttribute("class", "video")
})