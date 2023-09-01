const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
const contPlaylist = [45, 14, 13, 27, 28, 65];
const contAlbum = [445615925, 163017682, 316164367, 412583757, 450354805];

const mainCard = "#main-card";

const loadMainCard = (cardName, title, coverImg, artistName) => {
  const mainCover = document.querySelector(cardName + " img");
  const mainTitle = document.querySelector(cardName + " h1");
  const mainName = document.querySelector(cardName + " p");
  mainCover.src = coverImg;
  mainTitle.innerHTML = title;
  mainName.innerHTML = artistName;
};

// load playlists

const loadPlaylists = async (numero) => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/" + numero;
  console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85f13bde05msh76a9079bee61db3p1b4413jsn41330dd79912",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const playlistContainers = document.getElementById("cont-generic-playlists");

    playlistContainers.innerHTML += `<div class="col playlist">
                                        <div class="row g-0 align-items-center bg-secondary rounded-2 overflow-hidden">
                                        <div class="col-4"><a href="albumPage.html?id=${album.id}"><img src="${result.picture}" class="img-fluid h-100" alt="" /></a></div>
                                        <div class="col-8 ps-2">
                                            <h5>${result.title}</h5>
                                        </div>
                                        </div>
                                    </div>`;
  } catch (error) {
    console.error(error);
  }
};

// load albums

const loadAlbums = async (numero) => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/album/" + numero;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85f13bde05msh76a9079bee61db3p1b4413jsn41330dd79912",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const album = await response.json();

    const mainListAlbums = document.getElementById("main-list-albums");

    mainListAlbums.innerHTML += `<div class="col>
                                    <div class="card bg-secondary p-2" style="max-heigth: 300px">
                                    <a href="albumPage.html?id=${album.id}"><img src="${album.cover_big}" class="card-img-top" alt="..." /></a>
                                    <div class="card-body p-0">
                                        <h5 class="card-title pt-1">${album.title}</h5>
                                        <p class="card-text">La hotlist più hot di ${album.artist.name}</p>
                                    </div>
                                    </div>
                                </div>`;

    console.log(album);
  } catch (error) {
    console.error(error);
  }
};

// load data

const loadData = async () => {
  try {
    const mainContent = await fetch(url + "366045987", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85f13bde05msh76a9079bee61db3p1b4413jsn41330dd79912",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const album = await mainContent.json();

    loadMainCard(mainCard, album.title, album.cover_medium, album.artist.name);
    console.log(album);

    contPlaylist.forEach((element) => loadPlaylists(element));
    contAlbum.forEach((element) => loadAlbums(element));
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  loadData();
};
