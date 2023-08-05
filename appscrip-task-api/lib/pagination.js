const pagination = (query = {}) => {
  let pagination = {
    skip: 0,
    limit: 10,
    page: 1,
  };

  pagination.page = query.page;
  pagination.skip = (query.page - 1) * pagination.limit;

  return pagination;
};

module.exports = pagination;
