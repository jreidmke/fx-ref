import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const ProfileViewerWithSearch = () => {
  const [profile, setProfile] = useState(null);//profile init state null
  const [url, setUrl] = useState(`https://api.github.com/users/elie`);//url init state

  const search = term => {
    setUrl(`https://api.github.com/users/${term}`);//search is a func that set's url state to passed in term
  };

  useEffect(() => {//use effect called
    console.log("LOADING DATA")//i love console.log checks so much :)
    async function loadProfile() {//async func declared
      const res = await axios.get(url);//call made to url
      setProfile(res.data);//profile set to res.data
    }
    loadProfile();//asyc func called
    return () => console.log("CLEANING UP!")//cleaning up using a clean up function!
  }, [url])//useEffect alled whenever url changes

  return (
    <div>
      {profile ? <h1>Hi {profile.name}</h1> : <h1>Loading....</h1>}
      <ProfileSearchForm search={search} />
    </div>
  );
};

export default ProfileViewerWithSearch;
