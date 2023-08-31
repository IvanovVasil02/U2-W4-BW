const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=bon jovie ";
const currentUrl = window.location.search.includes("albumpage.html");
const artistCard = "#artist-card";
const albumCard = "#album-card";
const artisListSongs = document.getElementById("cont-list-songs");
const albumListSongs = document.getElementById("album-list-songs");

const getResponse = () => {
  const response = fetch(URL);

  return response;
};

const loadMainCard = (cardName, title, coverImg) => {
  const mainCover = document.querySelector(cardName + " img");
  const mainTitle = document.querySelector(cardName + " h1");
  mainCover.src = coverImg;
  mainTitle.innerHTML = title;
};

const loadArtistData = async () => {
  try {
    const resp = await getResponse();

    let contListSongs;

    if (resp.ok) {
      const songs = await resp.json();
      /*  loadMainCard(artistCard, songs.data.artist.picture_big); */

      loadMainCard(artistCard, songs.data[0].title, songs.data[0].artist.picture_xl);

      for (let i = 0; i < 5; i++) {
        artisListSongs.innerHTML += `<div class="row">
                                          <div class="col-auto d-flex justify-content-end align-items-center">
                                              <p>${i + 1}</p>
                                          </div>
                                          
                                          <div class="col-1 d-flex justify-content-end align-items-center px-2">
                                            <a href="#">
                                                <img src="${songs.data[i].album.cover}" class="img-fluid pb-3" alt="" />
                                            </a>
                                          </div>
                                          <div class="col d-flex align-items-center ps-1">
                                             <a href="#"> <h6>${songs.data[i].title}</h6></a>
                                          </div>

                                          <div class="col d-flex justify-content-end align-items-center">
                                          <p>${songs.data[i].rank
                                            .toString()
                                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p></div>
                                          <div class="col d-flex justify-content-end align-items-center pe-4">
                                            <p>${(songs.data[i].duration / 60).toFixed(2)}</p>
                                          </div>
                                      </div>`;
      }
    }
  } catch (error) {
    // container.innerHTML = `<h2 class="w-100">${error}</h2>`;
    console.log(error);
  }
};

const loadAlbumtData = async () => {
  try {
    const resp = await getResponse();

    if (resp.ok) {
      const songs = await resp.json();
      /*  loadMainCard(artistCard, songs.data.artist.picture_big); */
      console.log(songs);

      //   loadMainCard(artistCard, songs.data[0].title, songs.data[0].artist.picture_xl);
    }
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  loadArtistData();
};
