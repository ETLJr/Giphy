console.log("Let's get this party started!");

const api_key='MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'

const $text = $('#search');
const $button = $('#submit');
const $form = $('#gif');
const $div = $('#gifDiv');
const $clear= $('#clear')

$form.on('submit', async function getGif(e){
 e.preventDefault();
   const newGif = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{q: $text.val(), api_key}});
   const idx = Math.floor(Math.random() * newGif.data.data.length);
    const randomGif = newGif.data.data[idx]; 
    console.log(randomGif)
     const img = $("<img>",{src: randomGif.images.original.url});
     img.appendTo($div);
     $clear.on('click', function(){
        $div.empty();
    })
});

