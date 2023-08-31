const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q={salmo}";
const artistCard = "#artist-card";
const contListSongs = document.getElementById("cont-list-songs");

const getResponse = () => {
  const response = fetch(URL);

  return response;
};

const loadMainCard = (cardName, coverImg) => {
  const mainCover = document.querySelector(cardName + " img");
  console.log(mainCover);
  mainCover.src = coverImg;
};

const loadData = async () => {
  try {
    const resp = await getResponse();
    console.log("risposta non convertita", resp);

    let num;

    if (resp.ok) {
      const songs = await resp.json();
      /*  loadMainCard(artistCard, songs.data.artist.picture_big); */

      /* console.log(songs.data.artist.picture_big); */
      console.log(songs);

      for (let i = 0; i < 5; i++) {
        contListSongs.innerHTML += `<div class="row">
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

window.onload = () => {
  loadData();
};
