function createCard(events) {
  let cardHtml = "";
  let cardContainer = document.getElementsByClassName('container-card')[0];
    for (indexEvent of events) {
    cardHtml += `
      <div class="col d-flex justify-content-center">
      <div class="card shadow-sm">
        <img src=${indexEvent.image} class="card-img-top imgCard" alt="imagen">
        <div class="card-body">
          <h5 class="card-title">${indexEvent.name}</h5>
          <p class="card-text">${indexEvent.description}</p>
          <div class="d-grid gap-2 my-4">
            <a href="details.html" class="btn btn-warning">Details</a>
          </div>
        </div>
      </div>
      </div>
      `;
    }
    cardContainer.innerHTML = cardHtml;
}

createCard(data.events);
