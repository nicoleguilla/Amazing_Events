
function createCardUpcoming(events) {
    let cardHtml = "";
    let cardContainerUpcoming = document.getElementsByClassName('container-card')[0];
      for (upcomingEvent of events) {
        if(upcomingEvent.date > data.currentDate){
          cardHtml += `
          <div class="col d-flex justify-content-center">
          <div class="card shadow-sm">
            <img src=${upcomingEvent.image} class="card-img-top imgCard" alt="imagen">
            <div class="card-body">
              <h5 class="card-title">${upcomingEvent.name}</h5>
              <p class="card-text">${upcomingEvent.description}</p>
              <div class="d-grid gap-2 my-4">
                <a href="details.html" class="btn btn-warning">Details</a>
              </div>
            </div>
          </div>
          </div>
          `;
        }
      }
      cardContainerUpcoming.innerHTML = cardHtml;
  }
  
  createCardUpcoming(data.events);
  