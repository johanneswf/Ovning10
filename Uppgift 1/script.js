const inputsubmit = document.querySelector('#inputsubmit');
const btnsubmit = document.querySelector('#btnsubmit');
const outputarea = document.querySelector('#output');
const uri = 'https://www.swapi.tech/api/people/?name=';

const getStarWars = async function () {
  // @ts-ignore
  if (inputsubmit.value) {
    // @ts-ignore
    await fetch(uri + inputsubmit.value)
      .then(res => res.json())
      .then(data => {
        const datalength = data.result.length;
        if (datalength > 0) {
          let outputresult = '';
          for (let index = 0; index < datalength; index++) {
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