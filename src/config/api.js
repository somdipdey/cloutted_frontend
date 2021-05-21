const BASE_URL = "http://localhost:5000";
const API_BASE_URL = `${BASE_URL}/v1`;

const endPoints = {
  hashtags: `${API_BASE_URL}/hashtags`,
  hashtagtrends: `${API_BASE_URL}/hashtagtrends`,
  getUserProfile: `${API_BASE_URL}/users/get-user`,
  getPostsPerUser: `${API_BASE_URL}/posts/by-user`,
  getHashtagFrequency: `${API_BASE_URL}/hashtagtrends/get-count`,
  users: `${API_BASE_URL}/users`,
};

module.exports = {
  BASE_URL,
  API_BASE_URL,
  endPoints,
};
