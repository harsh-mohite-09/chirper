export const sortOptions = {
  Latest: 'Latest Posts',
  Oldest: 'Oldest Posts',
  Trending: 'Trending Posts',
};

export const getSortedPosts = (posts, sortBy) => {
  switch (sortBy.toUpperCase()) {
    case 'LATEST':
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case 'OLDEST':
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case 'TRENDING':
      return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    default:
      return [...posts];
  }
};

export const getSearchSuggestions = (users, searchText) => {
  const search = searchText.toLowerCase().trim();
  return search.length > 0
    ? users.filter(
        user =>
          user.firstName.toLowerCase().includes(search) ||
          user.lastName.toLowerCase().includes(search) ||
          user.username.toLowerCase().includes(search)
      )
    : users;
};
