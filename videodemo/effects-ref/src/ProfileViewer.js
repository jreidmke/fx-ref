import React, { useState, useEffect } from "react";
import axios from "axios";
// "https://api.github.com/users/elie"

const ProfileViewer = ({ name = "Elie", color = "purple" }) => {
  const [data, setData] = useState(null);//we have no data at outset. data is set to null
  useEffect(() => {//cannot make useEffect async. nor the component func
    async function loadProfile() {//func within useEffect is async
      const res = await axios.get(`https://api.github.com/users/${name}`);//call made
      setData(res.data.name);//sets data state to name returned from github call
    }
    loadProfile();//don't forget to call the function you wrote!
  }, [name]) //<==== this part is really cool. useEffect will run anytime the name prop changes. also! ***IF YOU ARE USING A PROP IN YOUR useEffect, YOU NEED TO PASS IT IN SECOND ARG ARRAY.

  return (
    <h3 style={{ color }}>{data ? data : 'Loading...'}</h3>//returning data if loaded, otherwise display str 'Loading...'
  )
};

export default ProfileViewer;