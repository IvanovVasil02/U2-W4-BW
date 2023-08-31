const url = "https://deezerdevs-deezer.p.rapidapi.com/album/77211342";

const albumCard = "#album-card";
const albumListSongs = document.getElementById("album-list-songs");

const loadMainCard = (cardName, title, coverImg, artistName) => {
  const mainCover = document.querySelector(cardName + " img");
  const mainTitle = document.querySelector(cardName + " h1");
  const mainName = document.querySelector(cardName + " h5");
  mainCover.src = coverImg;
  mainTitle.innerHTML = title;
  mainName.innerHTML = artistName;
};

const loadData = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85f13bde05msh76a9079bee61db3p1b4413jsn41330dd79912",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const albums = await response.json();

    loadMainCard(albumCard, albums.title, albums.cover_medium, albums.artist.name);

    console.log(albums);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  loadData();
};
