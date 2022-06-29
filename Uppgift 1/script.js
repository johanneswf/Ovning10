const inputsubmit = document.querySelector('#inputsubmit');
const btnsubmit = document.querySelector('#btnsubmit');
const outputarea = document.querySelector('#output');
const uri = 'https://www.swapi.tech/api/people/?name=';

const getStarWars = async function () {
  let outputresult = '';

  if (inputsubmit.value) {
    const fetched = await fetch(uri + inputsubmit.value)
      .then(res => res.json())
      .then(data => {
        if (data.result.length > 0) {
          for (let index = 0; index < data.result.length; index++) {
            const props = data.result[index].properties;
            outputresult +=
// Ugly
`Name: ${props.name}
Height: ${props.height}
Gender: ${props.gender}
Hair Color: ${props.hair_color}

`;
          }
          outputarea.innerHTML = outputresult;
        }
        else outputarea.innerHTML = 'No results.';
      })
      .catch(err => console.log(err));
  }
  else outputarea.innerHTML = 'Nothing submitted.';
}

btnsubmit.addEventListener('click', e => {
  e.preventDefault;
  getStarWars();
})