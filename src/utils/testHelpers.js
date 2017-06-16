const R = require('ramda');

module.exports = {
  mockDB: R.pipe(
    R.toPairs,
    R.reduce((acc, action) => (
      R.merge(
        acc,
        R.objOf(
          R.head(action),
          Promise.resolve(
            R.last(action)
          )
        )
      )
    ))
  ),
  requestWith(body) {
    return R.objOf('body', body);
  }
};
