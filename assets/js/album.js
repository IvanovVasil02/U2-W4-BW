const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";

const albumCard = "#album-card";
const albumListSongs = document.getElementById("album-list-songs");

const loadMainCard = (cardName, title, coverImg, artistName) => {
  const mainCover = document.querySelector(cardName + " img");
  const mainTitle = document.querySelector(cardName + " h1");
  const mainName = document.querySelector("#cont-name");
  mainCover.src = coverImg;
  mainTitle.innerHTML = title;
  mainName.innerHTML = `<a class="navbar-brand" href="artistPage.html?id=${artistName}">
                        <img
                          src="${coverImg}"
                          alt="Logo"
                          width="20"
                          height="20"
                          class="d-inline-block align-text-top rounded-circle"
                        />
                        <h5 class="d-inline-block">BootraP</h5>
                      </a>`;
};

const loadData = async (albumId) => {
  try {
    const response = await fetch(url + albumId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85f13bde05msh76a9079bee61db3p1b4413jsn41330dd79912",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const albums = await response.json();

    loadMainCard(albumCard, albums.title, albums.cover_medium, albums.artist.name);

    albums.tracks.data.forEach((track, index) => {
      albumListSongs.innerHTML += `<div class="row">
                                    <div class="col d-flex align-items-center pt-2">
                                      <span class="pe-3 ps-1">${index + 1}</span>
                                      <div class="title-song d-flex flex-column justify-content-center">
                                        <h6>${track.title}</h6>
                                        <p>${track.artist.name}</p>
                                      </div>
                                    </div>
                                    <div class="col d-flex justify-content-end align-items-center">
                                      <p>${track.rank}</p>
                                    </div>
                                    <div class="col d-flex justify-content-end align-items-center pe-4">
                                      <p>${(track.duration / 60).toFixed(2)}</p>
                                    </div>
                                  </div>`;
    });

    console.log(albums);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  const urlId = new URL(document.location).searchParams;
  const albumId = urlId.get("id");
  console.log(albumId);

  loadData(albumId);
};
