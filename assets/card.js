let card = []

  fetch('card.json')
.then(response => response.json())
    .then(data => {
      card.push(data)

     let cards = document.getElementById('card');

function getRandomItem(card) {
    return Math.floor(Math.random() * card[0].length);
}

for (let i = 0; i <= 3; i++) {
    let id = getRandomItem(card);
    console.log(id);
    let img = document.createElement("img");
    img.src = card[0][id].printings[0]["image_url"];
    cards.appendChild(img);
    img.style.height = "400px";
}
        let cardz =  document.getElementById('cardz');

          for( let i = 0; i <= 3; i++) {
            let id = getRandomItem(card)
            let img = document.createElement("img")
            img.src= card[0][id].printings[0]["image_url"];
            img.classList.add("zoomable");
            cardz.appendChild(img)
            img.style.height = "400px";
        }
        });


    console.log(card);
  

  // .catch(error => {
  //   console.error(error);
  // });