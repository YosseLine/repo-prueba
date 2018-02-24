onload = ((event) => {
  function getItems(event) {
    let url = `https://api.etsy.com/v2/listings/active.js?api_key=hsjj6lj08brn2m1i516tkfum&includes=Images,Shop`;
    fetch(url)
    .then(handleError)
    .then(parseJSON)
    .then(addNews)
    .catch(displayError);
  };

  function handleError(res) {
   if(!res.ok){
   throw Error(res.status);
 }
 return res;
 }

function parseJSON(res) {
 return res.json().then(function(data) {
   return data.response.docs;
   console.log(data);
 })
}

function addNews(data) {
  console.log(data);
}

function displayError(err){
 console.log("Hubo un error");
 console.log(err);
}

getItems();
});
