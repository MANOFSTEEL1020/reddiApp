// Fetch data from the Reddit API
const fetchData = async () => {
  try {
    const response = await fetch('https://www.reddit.com/r/all.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
};

// Render posts
const renderPosts = (posts) => {
  const postsContainer = document.getElementById('posts');
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.author}</p>
      <p>${post.score} points</p>
      <a href="${post.url}" target="_blank">Read More</a>
    `;
    postsContainer.appendChild(postElement);
  });
};

// Initialize the app
const initializeApp = async () => {
  try {
    const data = await fetchData();
    const posts = data.data.children.map((child) => child.data);
    renderPosts(posts);
  } catch (error) {
    console.log('Error initializing app:', error);
  }
};

// Start the app
initializeApp();
