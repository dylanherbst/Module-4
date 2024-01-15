function addCard() {
    // clone the template
    const template =
    document.getElementById("card-template")
    .content.cloneNode(true);
    // populate the template
    template.querySelector('.card-title').innerText =
    'My Card Title';
    template.querySelector('.card-text').innerText =
    'lorem ipsum ble bla';
    // include the populated template into the page
    document.querySelector('#card-list')
    .appendChild(template);
    }
    addCard();

    const data = [{name: 'bob', age: 23},
{name: 'alice', age: 39}]

addCard();
addCard();



// For exercise 3 use the following:
const artist = {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
      },
      {
        title: "sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-gogh-worldwide-2.jpg"
      }
    ]
  };


  function addArtCard(artist) {
    // clone the template

    const template =
    document.getElementById("card-template")
    .content.cloneNode(true);
    // populate the template

    template.querySelector('.card-title').innerText =
    artist.name;

    template.querySelector('.card-text').innerText = ""; // include the populated template into the page

    artist.portfolio.forEach(item => {
      const title =document.createElement('p');
      title.innerText = item.title;
      template.querySelector('.card-text').appendChild(title);

      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.title;
      img.style.width = '90%'; // Adjust width as needed
      template.querySelector('.card-text').appendChild(img);
    })


    document.querySelector('#card-list')
    .appendChild(template);
    }

    addArtCard(artist)