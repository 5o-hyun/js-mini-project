const videoHz = document.querySelector(".video");

// Pause and play the video
function videoControl() {
  if (videoHz.paused) {
    videoHz.play();
  } else {
    videoHz.pause();
  }
}
