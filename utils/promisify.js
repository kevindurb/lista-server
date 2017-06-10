module.exports = (fn) => () => (
  new Promise((resolve, reject) => {
    fn((err, result) => {
      if (err) reject(err);

      resolve(result);
    });
  })
);
