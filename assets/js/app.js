document.getElementById("card-1").addEventListener("click", flip);

let img_src = [
  ".assets/images/scarlett-witch.jpg",
  ".assets/images/captain_america.jpg",
  ".assets/images/black_panther.jpg",
  ".assets/images/black-widow.jpg",
  ".assets/images/nick-fury.jpg",
  ".assets/images/spider-man.png",
  ".assets/images/thor.jpg",
  ".assets/images/iron-man.jpg",
  ".assets/images/hulk.png"
];

function flip() {
  console.log("card flips");
  for (i = 0; i < img_src.length; i++) {
    document.getElementById("card-" + i).src = img_src[i];
  }
}
