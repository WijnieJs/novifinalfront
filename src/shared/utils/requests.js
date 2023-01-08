const requests = {
   byTags: `/public/tags/`,
   fetchByTitle: `/public/getByTitle/`,
   fetchByTags: `/public/getByTag/`,
   fetchById: `/public/productById/`,
   fetchAllProducts: '/public/newAll/',
   signUp: '/auth/signUp',
   adminRoute: 'api/admin/auth/admin',
   withQuery: (route, id) => route.concat(id)
};


export default requests;
