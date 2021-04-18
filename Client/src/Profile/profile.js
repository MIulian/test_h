import React, { useContext, useState, useEffect } from 'react';
import Context from '../utils/context';

import axios from 'axios';

const Profile = () => {
  const context = useContext(Context)

  const [stateLocal, setState] = useState({ open: false,
                                            post_id: null,
                                            posts: []
                                          })

  useEffect(() => {
    const user_id = context.dbProfileState[0].uid
    axios.get('/api/get/userposts', {params: { user_id: user_id}})
      .then((res) => setState({...stateLocal, posts: [...res.data] }))
      .catch((err) => console.log(err))
  })

    return(
        <div>

        </div>
  )}



export default (Profile);
