const contentHolder = document.querySelector(".contentHolder");
const elonImage = document.querySelector(".elonImage");
const btnClick = document.querySelector(".btnClick");
const audio = document.querySelector("audio");

btnClick.addEventListener("click", () => {
  audio.play();
  contentHolder.innerText =
    "But sometimes, I also get really crazy. Happy, successful year, whishes Elon Musk.";
  elonImage.src = "./assets/Elon Happy.jpg";
  btnClick.disabled = true;

  setTimeout(() => {
    contentHolder.innerText =
      " Hi, I'm Elon Musk and I am a CEO of Tesla. I'm a serious person, not a Joker.  ";
    elonImage.src = "./assets/Elon-Musk-PNG-Picture.png";
    btnClick.disabled = false;
  }, 2500);
});
