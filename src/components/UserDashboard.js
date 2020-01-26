import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import unique from 'array-unique-deep';

import { getDiscographies } from '../redux/actions/getDiscographies';

// 3  actions to do:

// GET_CD

// SHOW_SONGS

//HIDE_SONGS


export default function UserDashboard() {
  const [data, setDataSet] = useState([]);

  async function fetchData() {
    const res = await fetch('../../data.json');
    res
      .json()
      .then(res => setDataSet(res))
  }

  useEffect(() => {
    fetchData()
  },[])
  const discography = data && data
  .sort((ascending, descending) => ascending.band.localeCompare(descending.band))
  .map((item, i, name) => {
 return (
    <>
    {/* check for item being unique and only push if it is */}
    <h1>{item.name}</h1>
    <h2>{item.band}</h2>
    <h2>{item.song}</h2>
    </>
  )});


  return(
    <div>
      {discography}
    </div>
  )
}
