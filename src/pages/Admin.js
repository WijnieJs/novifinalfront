import React from 'react';

import List from "../shared/api/list"
import requests from "../shared/utils/requests"
import NoteList from "./notes/NoteList"

const Admin = () => {

  return (
    <div className="">
      <h5>Hi we learning new thing</h5>
      <List title="All Products" fetchUrl={requests.fetchAllProducts}> </List>
      <h4>Populairr</h4>

      <h3>Sales</h3>


    </div>
  )
}

export default Admin;
