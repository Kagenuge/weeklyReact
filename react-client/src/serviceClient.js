async function fetchData(callback) {
  const res = await fetch("/api/topics");
  res
    .json()
    .then(res => callback(res))
    .catch(err => console.log(err));
};

const deletePost = (id) => {
  fetch(`api/topics/${id}`, {
    method: 'DELETE'
  });
};

export { fetchData, deletePost };