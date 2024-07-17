export default (httpClient) => ({
  userLogin: (data) => {
    return httpClient.post("/login", data);
  },
  userInfo: (user_id) => {
    return httpClient.get(`/users/${user_id}`);
  },
});
