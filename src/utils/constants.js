// AIzaSyA7577UFBkZ4J9mxF0sK2lCFeP_1Hc85ug
// AIzaSyBSaEMG4wufKmGtUDMfsWDwMOyJguNG35A
const GOOGLE_API_KEY = "AIzaSyA7577UFBkZ4J9mxF0sK2lCFeP_1Hc85ug";
export const YOUTUBE_VIDEO_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=` +
  GOOGLE_API_KEY;

export const SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&q=`;

export const VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const VIDEO_ID_API = `https://youtube.googleapis.com/youtube/v3/videos?&key=${GOOGLE_API_KEY}&part=snippet%2Cstatistics%2Cstatus&id=
`;
export const CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;
