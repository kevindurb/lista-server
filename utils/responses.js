module.exports = {
  success: data => ({ data, status: 200 }),
  badRequest: (data = 'Bad Request') => ({ data, status: 400 }),
  notFound: (data = 'Not Found') => ({ data, status: 404 }),
};
