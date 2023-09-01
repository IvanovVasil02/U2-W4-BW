/* const getData = async function () {
  const resp = await fetch(URL);
  const responseConvert = await resp.json();
  console.log(resp);
  console.log(responseConvert.data);
  responseConvert.data.forEach((songObj, index) => {
    const container = document.getElementById("cont-song");
    container.innerHTML += `<div class="row">
      <div class="col-auto d-flex justify-content-end align-items-center">
        <p>${index + 1}</p>
      </div>
      <div class="col-1 d-flex justify-content-end align-items-center px-2">
        <img src=${songObj.album.cover_medium} class="img-fluid" alt="" />
      </div>
      <div class="col d-flex align-items-center ps-1">
        <h6>${songObj.title}</h6>
      </div>
      
      <div class="col d-flex justify-content-end align-items-center">
        <p>${songconst URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";Obj.rank}</p>
      </div>
      <div class="col d-flex justify-content-end align-items-center pe-4">
        <p>${songObj.duration}</p>
      </div>
    </div>`;

    console.log(songObj);
  });
};

window.onload = function () {
  getData();
}; */
