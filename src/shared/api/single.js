import React, { useState, useEffect, useContext } from 'react';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import axios from './http-common';
import AuthActions from '../store/AuthActions';
import { useNavigate } from 'react-router-dom';

const Single = ({ title, fetchUrl }, props) => {
   const [product, setProduct] = useState();
   const [isAdmin, setIsAdmin] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const user = AuthActions.getCurrentUser();

   useEffect(() => {
      if (user) {
         if (user.roles == 'ROLE_ADMIN') {
            setIsAdmin(true);
         }
      } else {
         setIsAdmin(false);
      }
   }, [user]);

   useEffect(() => {
      async function fetchData() {
         const req = await axios.get(fetchUrl);

         setProduct(req.data);
         setIsLoading(false);
         return req;
      }

      fetchData();
   }, [fetchUrl]);
   let navigate = useNavigate();

   const routeToEdit = (id) => {
      navigate(`/edit/${id}`);
   };
   const routeToChangeImg = (id) => {
      navigate(`/image-request/${id}`);
   };

   return (
      <React.Fragment>
         {console.log(isAdmin)}
         {!isLoading && (
            <Product
               key={product.id}
               id={product.id}
               title={product.title}
               price={product.price}
               tags={product.tags}
               imageUrl={product.file}
               content={product.description}
               actions={false}
            />
         )}
         {isAdmin && (
            <>
               <Button
                  onClick={() => routeToEdit(product.id)}
                  design='success'
                  mode='raised'
               >
                  Edit Title , price or description
               </Button>
               <div style={{ marginTop: '9px' }} />
               <Button
                  onClick={() => routeToChangeImg(product.id)}
                  design='accent'
                  mode='raised'
               >
                  Change image{' '}
               </Button>
            </>
         )}
      </React.Fragment>
   );
};

export default Single;
