const requests = {
  byTags: `/public/tags/`,
  fetchByTitle: `/public/getByTitle/`,
  fetchByTags: `/public/getByTags/`,
  fetchById: `/public/productById/`,
  fetchAllProducts: '/public/allProductsInShop/',

  withQuery: (route, id) => route.concat(id)

}

export default requests;
