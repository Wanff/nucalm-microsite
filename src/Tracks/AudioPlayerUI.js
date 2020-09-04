import React from 'react';
// import 'shaka-player/dist/controls.css';
// const shaka = require('shaka-player/dist/shaka-player.ui.js');
import shaka from 'shaka-player';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'


//Creating class component
class AudioPlayerUI extends React.PureComponent{

    constructor(props){

		super(props);

        //Creating reference which will allow access to audio player on DOM
		this.audioComponent = React.createRef();

        //Adding reference to event handler functions
		this.onErrorEvent = this.onErrorEvent.bind(this);
        this.onError = this.onError.bind(this);

	}

	onErrorEvent(event) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

    //Initialize your shaka player here
	componentDidMount(){

        //MPEG-DASH audio URL
		var manifestUri = 'https://firebasestorage.googleapis.com/v0/b/nucalm-mini-site.appspot.com/o/never_gonna%20copy.mp3?alt=media&token=9e8d904b-144e-431e-8449-3793ce4b224b';

        const audio = document.getElementById('player')

        const player = new Plyr(audio, {
          controls: ['pip', 'play', 'progress', 'current-time', 'volume', 'mute', 'settings'],
          settings: ['loop', 'speed', 'quality']
          
        });

        //Reference to our audio component on DOM
		// const audio = this.audioComponent.current;

        //Initializing our shaka player
		var shakaPlayer = new shaka.Player(audio);

		
		// player.configure({
		// 	drm: {
		// 	  servers: {
		// 		'com.widevine.alpha': 'https://foo.bar/drm/widevine',
		// 		'com.microsoft.playready': 'https://foo.bar/drm/playready'
		// 	  }
		// 	}
		//   });

		// Listen for error events.
  		shakaPlayer.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	shakaPlayer.load(manifestUri).then(function() {
		    // This runs if the asynchronous load is successful.
		    console.log('The audio has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if the asynchronous load fails.
		
	}

	render(){

		/*
		Returning audio with a container. Remember, when setting up shaka player with custom UI, you must
		add your audio component inside a container
		The container will be used by shaka player to add your customized UI for the player
		*/
		return(
			// <div className="audio-container" ref={this.audioContainer}>
			// 	<audio 
			// 		className="shaka-audio"
			// 		ref={this.audioComponent}
            //         poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
            //         controls
			// 	/>
            // </div>
            <audio id="player" controls></audio>
		);
	}
}

export default AudioPlayerUI;