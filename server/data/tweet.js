let tweets = [
  {
    id: "1",
    text: "우린 노래가 될 수 있을까",
    createdAt: Date.now().toString(),
    name: "Hyobum",
    username: "hyobum",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "살랑살랑해 말랑말랑해",
    createdAt: Date.now().toString(),
    name: "Youtang",
    username: "youtang",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((t) => t.id !== id);
}
