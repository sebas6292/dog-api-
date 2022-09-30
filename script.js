const URL = 'https://api.thedogapi.com/v1/breeds?limit=4&page=0';

const container = document.querySelector('.container');

const DogCard = ({ name, image, temperament, origin, life_span, ...rest }) => {
  const card = document.createElement('section');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('button');

  img.src = image.url;
  h2.innerHTML = name;
  p.textContent = temperament;
  p2.textContent = origin;
  p3.textContent = life_span;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);

  return card;
};

const fetchBreeds = (event) => {
  axios
    .get(URL)
    .then((res) => {
      console.log(res.data);
      res.data.forEach((breed) => {
        const card = DogCard(breed);
        container.appendChild(card);
      });
    })
    .catch((err) => {
      debugger;
    });
};

Btn.addEventListener('click', fetchBreeds);
