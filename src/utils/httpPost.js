const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
  params: {
    url: 'https://www.tiktok.com/@tiktok/video/7106658991907802411',
    hd: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'e775f167f5msh90e26de521cfcc9p101bcejsn7322bcfdb36e',
    'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}