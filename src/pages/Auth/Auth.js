import React from 'react'

import classes from './Auth.module.css'

const auth = (props) => (
  <section className={classes.authForm}>{props.children}</section>
)

export default auth
