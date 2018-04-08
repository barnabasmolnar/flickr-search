# Search for images via Flickr API

Users can search for images by entering a keyword or choosing one from a pre-defined keyword structure.

The results are displayed on a simple, familiar looking UI. With each image, the following extra information is retrieved:
* title
* owner's name
* date taken
* number of views

No additional API requests are made to retrieve this information. The flickr.photos.search method accepts an 'extras' argument which is where this information comes from.

Users can also toggle between multiple pages of image results.

Technologies used:
* React
* react-sidemenu (3rd party lib, see: https://github.com/umarovt/react-sidemenu)
* Bootstrap 4

To install & run
***
1. npm install
2. Obtain API key from Flickr
3. Change API key in AppContainer.js
4. npm start