const BASE_URL = "https://api.cloutouts.com";
// const BASE_URL = "http://localhost:5000";
const API_BASE_URL = `${BASE_URL}/v1`;

const endPoints = {
  hashtags: `${API_BASE_URL}/hashtags`,
  trending: `${API_BASE_URL}/trending`,
  hashtagtrends: `${API_BASE_URL}/hashtagtrends`,
  getUserProfile: `${API_BASE_URL}/users/get-user`,
  getPostsPerUser: `${API_BASE_URL}/posts/by-user`,
  getHashtagFrequency: `${API_BASE_URL}/hashtagtrends/get-count`,
  users: `${API_BASE_URL}/users`,
  getSatoshiRate: `${API_BASE_URL}/getRate`,
};

module.exports = {
  BASE_URL,
  API_BASE_URL,
  endPoints,
};
