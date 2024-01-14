import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_Key = 'videoplayer-current-time';

const onPlay = function(data) {
  // data is an object containing properties specific to that event
  player.setCurrentTime(localStorage.getItem(LS_Key)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
  }).catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the videos duration
              break;

          default:
              // some other error occurred
              break;
      }
  });
};

player.on('play', onPlay);

const onTimeUpdate = function(data) {
  // data is an object containing properties specific to that event
  player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
    localStorage.setItem(LS_Key, seconds);
  }).catch(function(error) {
      // an error occurred
  });
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
