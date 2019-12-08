// GET all articles from DB
export const getAllArticles = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/articles`, {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// GET all events from DB
export const getAllEvents = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/events`, {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json"
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
