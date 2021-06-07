// var axios = require("axios").default;
// // al objeto options hay que ver como pasarle los parametros de busqueda en la url

// var options = {
//   method: 'GET',
//   url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/${country}/%7B${currency}%7D/%7B${locale}%7D/%7B${originplace}%7D/%7B${destinationplace}%7D/%7B${outboundpartialdate}%7D/%7B${inboundpartialdate}%7D`,
//   params: {shortapikey: 'ra66933236979928', apiKey: '{shortapikey}'},
//   headers: {
//     'x-rapidapi-key': '95a60264d7mshf2a89f5a1728961p1d4f26jsn68fdcbeb8d64',
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


const request = require('request');

const options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  qs: {query: 'Stockholm'},
  headers: {
    'x-rapidapi-key': '95a60264d7mshf2a89f5a1728961p1d4f26jsn68fdcbeb8d64',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});