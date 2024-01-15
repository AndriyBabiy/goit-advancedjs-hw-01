import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_Key = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LS_Key) || 0);

const onTimeUpdate = function(data) {
  // data is an object containing properties specific to that event
  player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
    localStorage.setItem(LS_Key, seconds);
  })
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
