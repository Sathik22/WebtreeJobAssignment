import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!user) return <div className='text-3xl font-extrabold m-10'>Loading...</div>;

  return (
    <div className="max-w-fit mx-auto mt-10 shadow-sm rounded-lg overflow-hidden flex relative ">

      <div
        className="absolute -inset-1  z-0 rounded-lg "
      ></div>


      <div className="w-fit relative m-5   rounded-2xl flex  md:shadow-lg -inset-2 md:shadow-purple-500  bg-black ">
        <div className="relative  flex-col p-2 m-2 bg-gradient-to-r  from-pink-800 to bg-black-900  rounded-lg md:shadow-lg md:shadow-black  text-center" >
          <img
            src={user.picture.large}
            alt="User"
            className="w-full h-48 object-fit rounded-full  md:shadow-purple-500 "
          />
          <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to bg-white font-bold text-2xl">{user.name.first}</h3>
        </div>
        <div className='border-x-2 h-1/2 m-5 my-12 border-purple-500' ></div>
        <div className="relative p-4  space-y-4 m-5 rounded-lg">
          <h2 className="text-2xl font-bold  text-white">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-pink-500'>
              {`${user.name.first} 
              ${user.name.last}`}
            </span> </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-pink-500 text-xl">
            <span className='p-1 my-5 bg-clip-text bg-gradient-to-r from-pink-800 to bg-purple-200'>Gender :</span> {user.gender}</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-pink-500 text-xl">
            <span className='p-1 my-5 bg-clip-text bg-gradient-to-r from-pink-800 to bg-purple-200'>Contact : </span>{user.phone}</p>
        </div>
      </div>  
    </div>


  );
};
export default UserProfile
