const inputsubmit = document.querySelector('#inputsubmit');
const btnsubmit = document.querySelector('#btnsubmit');
const outputarea = document.querySelector('#output');

const uri = 'https://www.swapi.tech/api/people/?name=';

const getStarWars = async function () {
  // @ts-ignore
  const fetched = await fetch(uri + '' + inputsubmit.value)
    .then(res => res.json())
    .catch(err => console.log(err));

  let fetchlength = 0;
  let outputresult = '';

  if (fetched.result) fetchlength = fetched.result.length;

  if (fetchlength > 0) {
    for (let index = 0; index < fetchlength; index++) {
      const props = fetched.result[index].properties;
      outputresult += 

`Name: ${props.name}
Height: ${props.height}
Gender: ${props.gender}
Hair Color: ${props.hair_color}

`; // Ugly

    }
    outputarea.innerHTML = outputresult;
  }
  else {
    outputarea.innerHTML = 'No results';
  }
}

btnsubmit.addEventListener('click', e => {
  e.preventDefault;
  getStarWars();
})

// height, mass, gender och hair_color