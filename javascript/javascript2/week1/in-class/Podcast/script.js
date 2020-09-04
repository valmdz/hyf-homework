const podcasts = [{
  name: 'The mystery om of Johan Klausen Varbourg',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'Tips about dogs with small legs',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'You, me, we and us',
  imageUrl: 'https://picsum.photos/536/354'
},
{
  name: 'Breakfast news - Dinner edition'
}
];

const getContent = () => {
  const div = document.querySelector('div');
  const myUl = document.createElement('ul');
  myUl.innerHTML = 'Podcast list';
  div.appendChild(myUl);

  for(let i = 0; i < podcasts.length; i++){
    let podcastLi = document.createElement('li');
    let podcastName = document.createElement('h1');
    podcastName.innerHTML = podcasts[i].name;
    myUl.appendChild(podcastLi);
    podcastLi.appendChild(podcastName);

    if(podcasts[i].imageUrl){
      let image = document.createElement('img');
      image.src= podcasts[i].imageUrl;
      podcastLi.appendChild(image);
    };
  };
};


getContent(podcasts);
