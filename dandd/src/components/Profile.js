import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function Profile() {
  const { user_id } = useParams();
  const url = `https://6079bca0460a6600174fc355.mockapi.io/profile/${user_id}`;
  const [profile, setProfile] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProfile(response.data)
      })
  }, [url])

  if(profile) {
    content =
      <div className="container">
        <div className="user_profile">
          <div className="upper_container">
            <div className="img_container">
              <img src="https://icons-for-free.com/iconfiles/png/512/agenda+app+contacts+online+profile+user+icon-1320183042135412367.png" alt='' height="100px" width="100px"/>
            </div>
          </div>
          <div className="lower_container">
            <h2>User ID: {profile.user_id}</h2>
            <h2>Username: {profile.username}</h2>
            <h3>Email: {profile.email}</h3>
          </div>
        </div>
      </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default Profile;
