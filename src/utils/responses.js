module.exports = {
  success: (body = 'Success') => ({ body, status: 200 }),
  badRequest: (body = 'Bad Request') => ({ body, status: 400 }),
  notFound: (body = 'Not Found') => ({ body, status: 404 }),
};
