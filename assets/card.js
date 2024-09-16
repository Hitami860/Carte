let card = []

  fetch('card.json')
.then(response => response.json())
    .then(data => {
      card.push(data)

      let cards =  document.getElementById('card');

          function getRandomItem() {

            return Math.floor(Math.random() * card.length);
          
          }
          for( let i = 0; i <= 3; i++) {
            let id = getRandomItem(card)
            let img = document.createElement("img")
            img.src= card[0][id].printings[0]["image_url"];
            cards.appendChild(img)
            img.style.height = "400px";
        }

        let cardz =  document.getElementById('cardz');

          function getRandomItem() {

            return Math.floor(Math.random() * card.length);
          
          }
          for( let i = 0; i <= 3; i++) {
            let id = getRandomItem(card)
            let img = document.createElement("img")
            img.src= card[0][id].printings[0]["image_url"];
            cardz.appendChild(img)
            img.style.height = "400px";
        }
        });


    console.log(card);


  function getRandomItem(card) {

    return Math.floor(Math.random() * card.length);
  
  }
  

  // .catch(error => {
  //   console.error(error);
  // });