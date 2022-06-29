const btndraw = document.querySelector('#btndraw');
const divcard = document.querySelector('#divcard');

async function getCard() {

}

btndraw.addEventListener('click', async function (e) {
  e.preventDefault();
  await fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then(res => res.json())
    .then(data => {
      const imgcard = document.createElement('img');
      imgcard.setAttribute("src", data.cards[0].image);

      divcard.appendChild(imgcard);
    });
})