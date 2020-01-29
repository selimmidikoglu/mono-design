

/*export const FETCH_IMAGES_BEGIN = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export function fetchImages() {
  return dispatch => {
    dispatch(fetchImagesBegin());
    return fetch('https://api.unsplash.com/search/photos?query='+'mountain'+ '&per_page=20&page=1&client_id=bf5952f2a5d2f9b0c49ed75d8192934666d91570f09e21db0889f8d12c248944', {
      method: 'GET',
      headers: {
          "cache-control": "no-cache",
          "Connection": "keep-alive",
          "accept-encoding": "gzip, deflate",
          "cookie": "ugid=eb28c3dc28ee20b11b41d011a0b29d445197157",
          "Host": "api.unsplash.com",
          "Postman-Token": "5b916fef-99fe-4112-862e-42b06ea26ec7,682d3a3d-e6ab-45a9-9a49-c6ec5e9e9e78",
          "Cache-Control": "no-cache",
          "User-Agent": "PostmanRuntime/7.13.0"
      }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(responseJson => {
        console.log(responseJson);
        /*var imageUrls = [];
        for (let i = 0; i < responseJson.results.length; i++) {
            let element = responseJson.results[i].urls.regular;
            console.log(typeof(element));
            let index = element.indexOf('ixid');
            let insertStr = "w=" + dimensionsObj.width + "&h=" + dimensionsObj.height + "&";
            let str = element.substring(0,index) + insertStr + element.substring(index,element.length);
            //console.log(str);
            imageUrls.push(element);
        }
        var images  = imageUrls;
        console.log("birşeyler")
        dispatch(fetchImagesSuccess(images));
        return images;
      })
      .catch(error => dispatch(fetchImagesFailure(error)));
  };
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchImagesBegin = () => ({
    type: FETCH_IMAGES_BEGIN
  });
  
export const fetchImagesSuccess = images => ({
    type: FETCH_IMAGES_SUCCESS,
    payload: { images }
  });
  
export const fetchImagesFailure = error => ({
    type: FETCH_IMAGES_FAILURE,
    payload: { error }
  });*/