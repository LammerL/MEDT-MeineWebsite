const page = document.URL.split('/').pop();
const ImgsTokyo = ["Glitch", "TokyoStation", "Matcha", "TokyoShrine", "TokyoNight"];
const ImgsKyoto = ["KyotoShrine", "ImperialGarden"];
const ImgsSapporo = ["Sunset"];
var index = 0;
var text = document.getElementById("Text");

if (page == "PageTokyo.html") {
  Imgs = ImgsTokyo;
  setBG('Tokyo')
  document.getElementById(Imgs[index]).style.display = "block";
}
if (page == "PageKyoto.html") {
  Imgs = ImgsKyoto;
  setBG('Kyoto')
  document.getElementById(Imgs[index]).style.display = "block";
}
if (page == "PageSapporo.html") {
  Imgs = ImgsSapporo;
  setBG('Sapporo')
  document.getElementById(Imgs[index]).style.display = "block";
}
const lastImg = Imgs.length - 1;

function setBG(city) {
  let img = document.getElementById(city);
  img.style.backgroundImage = `url('Bilder/${city}\ Main.jpg')`;
  img.style.backgroundRepeat = "no-repeat";
  img.style.backgroundPosition = "center";
  img.style.backgroundSize = "cover";
}
function Toggle(np) {
  document.getElementById(Imgs[index]).style.display = "none";
  if (np == 0) {
    if (index == 0) {
      document.getElementById(Imgs[lastImg]).style.display = "block";
      index = lastImg;
    }
    else {
      document.getElementById(Imgs[index - 1]).style.display = "block";
      index -= 1;
    }
  }
  else {
    if (index == lastImg) {
      document.getElementById(Imgs[0]).style.display = "block";
      index = 0;
    }
    else {
      document.getElementById(Imgs[index + 1]).style.display = "block";
      index += 1;
    }
  }
  UpdateText();
}
function UpdateText() {
  if (page == "PageTokyo.html") {
    switch (index + 1) {
      case 1:
        text.innerHTML = "Ein Glitch in der Matrix.\nZeile2\nZeile3\n..."
        break;
      case 2:
        text.innerHTML = "Platzhalter Text 2 Tokyo\nZeile2\nZeile3\n..."
        break;
      case 3:
        text.innerHTML = "Platzhalter Text 3 Tokyo"
        break;
      case 4:
        text.innerHTML = "Platzhalter Text 4 Tokyo"
        break;
      case 5:
        text.innerHTML = "Platzhalter Text 5 Tokyo"
        break;
    }
  }
  if (page == "PageKyoto.html") {
    switch (index + 1) {
      case 1:
        text.innerHTML = "Platzhalter Text 1 Kyoto\nZeile2\nZeile3\n..."
        break;
      case 2:
        text.innerHTML = "Platzhalter Text 2 Kyoto"
        break;
      case 3:
        text.innerHTML = "Platzhalter Text 3 Kyoto"
        break;
    }
  }
  if (page == "PageSapporo.html") {
    switch (index + 1) {
      case 1:
        text.innerHTML = "Platzhalter Text 1 Sapporo"
        break;
      case 2:
        text.innerHTML = "Platzhalter Text 2 Sapporo"
        break;
      case 3:
        text.innerHTML = "Platzhalter Text 3 Sapporo"
        break;
    }
  }
}