import React from 'react'
import { useStore } from '../../hooks-store/store'
import classes from './ProductItem.module.css'
const ProductItem = React.memo((props) => {
  console.log('RENDERING')
  const dispatch = useStore(false)[1]

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id)
  }
  return (
    <React.Fragment style={{ marginBottom: '1rem' }}>
      <div className={classes.ProductItem}>
        <h2>With prod</h2>
      </div>
    </React.Fragment>
  )
})

export default ProductItem
