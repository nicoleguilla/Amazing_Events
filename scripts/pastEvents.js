function createCardPast(events) {
    let cardHtml = "";
    let cardContainerPast = document.getElementsByClassName('container-card')[0];
      for (pastEvent of events) {
        if(pastEvent.date < data.currentDate){
          cardHtml += `
          <div class="col d-flex justify-content-center">
          <div class="card shadow-sm">
            <img src=${pastEvent.image} class="card-img-top imgCard" alt="imagen">
            <div class="card-body">
              <h5 class="card-title">${pastEvent.name}</h5>
              <p class="card-text">${pastEvent.description}</p>
              <div class="d-grid gap-2 my-4">
                <a href="details.html" class="btn btn-warning">Details</a>
              </div>
            </div>
          </div>
          </div>
          `;
        }
      }
      cardContainerPast.innerHTML = cardHtml;
  }
  
  createCardPast(data.events);
  