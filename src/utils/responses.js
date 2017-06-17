module.exports = {
  success: (body = 'Success') => ({ body, status: 200 }),
  created: (body = 'Created') => ({ body, status: 201 }),
  badRequest: (body = 'Bad Request') => ({ body, status: 400 }),
  notFound: (body = 'Not Found') => ({ body, status: 404 }),
  notAuthorized: (body = 'Not Authorized') => ({ body, status: 401 }),
};
