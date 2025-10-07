document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const overlay = document.getElementById("overlay");
  const image = document.getElementById("display-image");
  const audio = document.getElementById("audio-player");

  btn1.addEventListener("click", () => {
    showImageAndSound("media/image1.jpg", "media/sound1.mp3");
  });

  btn2.addEventListener("click", () => {
    showImageAndSound("media/image2.jpg", "media/sound2.mp3");
  });

  function showImageAndSound(imgPath, soundPath) {
    image.src = imgPath;
    overlay.style.display = "flex"; // aseguramos que se muestre
    audio.src = soundPath;
    audio.play();
  }

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
  });
});
