module.exports = {
  async rewrites() {
    return [
      {
        source: "/docs/doc1",
        destination: "http://localhost:3001/",
      },
    ];
  },
};
