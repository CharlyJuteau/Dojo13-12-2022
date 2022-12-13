const listVideos = (req, res) => {
  res
    .status(200)
    .send({ id: 1, source: "", website: "", tags: "", title: "toto" });
};

module.exports = {
  listVideos,
};
