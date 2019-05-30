

function getImages(keyword){
    fetch('https://api.unsplash.com/search/collection?per_page=30&query='+ keyword +'&client_id=bf5952f2a5d2f9b0c49ed75d8192934666d91570f09e21db0889f8d12c248944', {
        method: 'GET',
        headers: {
            "cache-control": "no-cache",
            "Connection": "keep-alive",
            "accept-encoding": "gzip, deflate",
            "cookie": "ugid=eb28c3dc28ee20b11b41d011a0b29d445197157",
            "Host": "api.unsplash.com",
            "Postman-Token": "5b916fef-99fe-4112-862e-42b06ea26ec7,682d3a3d-e6ab-45a9-9a49-c6ec5e9e9e78",
            "Cache-Control": "no-cache",
            "Accept": "*/*",
            "User-Agent": "PostmanRuntime/7.13.0"
        }
    })
    .then(response => response.json())
    .then((responseJson) => {
        var imageUrls = [];
        for (let i = 0; i < responseJson.results.length; i++) {
            const element = responseJson.results[i].urls.full;
            imageUrls.push(element);
        }
        return imageUrls;
      })
      .catch((error) => {
        console.log("There was a problem with downloading images");
      });
};

export default getImages;




