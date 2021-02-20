class VideoPlayer {

    constructor() {
       

        this.playVideo = () => {
            this.video.play();
            this.playButton.classList.add('playing');
            
        }
        this.pauseVideo = () => {
            
            this.video.pause();
            this.playButton.classList.remove('playing');
        }

        this.handlePlayButton = () => {
            console.dir(this.video)
            this.video.controls = false;
            if (this.video.paused) {
                this.playVideo();
            } else {
                this.pauseVideo();
               
            }
        }

        this.handleVolumeButton = () => {
            
            if(this.video.volume > 0){
                console.log('станет 0')
                this.video.volume = 0;
            }else {
                console.log('станет 1')
                this.video.volume = 1;
            }
        }
        
        this.handleFullScreenButton = () =>{
            this.video.requestFullscreen();
        }
        
        this.handleChangeTimeVideo =() => {
            console.log(event.target.value);
            this.selectedTime = event.target.value;
            this.video.currentTime = (this.video.duration/100)*this.selectedTime;
            
        }

        this.init();
    }
    init() {
        this.videoPlayer = document.getElementsByClassName('video-player');
        this.videoPlayerControl = document.getElementsByClassName('video-player__controls');
        this.video = document.querySelector('.video-player__video');
        this.playButton = document.querySelector('.video-player__play-button');
        this.playButton.addEventListener("click", this.handlePlayButton,false);
        this.volumeButton = document.querySelector('.video-player__volume-button');
        this.volumeButton.addEventListener('click', this.handleVolumeButton,false);
        this.fullScreenButton = document.querySelector('.video-player__fullscreen-button');
        this.fullScreenButton.addEventListener('click', this.handleFullScreenButton,false);
        this.timeRange = document.querySelector('.video-player__time-range');
        this.timeRange.addEventListener('change',this.handleChangeTimeVideo,false);
        this.timeRange.setAttribute('min',0);
        this.timeRange.setAttribute('max',100);
        this.timeRange.setAttribute('step',1);

        console.log(this.video);
    }






}