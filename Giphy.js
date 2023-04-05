console.log("Let's get this party started!");

const api_key='MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

const $text = $('#search');
const $button = $('#submit');
const $form = $('#gif');
const $div = $('#gifDiv');

$form.on('submit', async function getGif(e){
 e.preventDefault();
   const newGif = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q: $text, api_key}});
   const idx = Math.floor(Math.random() * newGif.data.data.length);
    const randomGif = newGif.data.data[idx]; 
     $div.append(randomGif.images.original.url)
     console.log(randomGif)
});



