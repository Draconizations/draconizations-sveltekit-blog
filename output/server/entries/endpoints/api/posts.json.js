const get = async () => {
  const postModules = {};
  const allPosts = Object.entries(postModules).map(([key, value]) => {
    key.slice(2, -3);
    const contents = value.default.render();
    const meta = value.metadata;
    return {
      path: "/posts/" + meta.path,
      contents,
      meta
    };
  });
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
  return {
    status: 200,
    body: sortedPosts
  };
};
export { get };
