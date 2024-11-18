'use client';

import { useEffect, useState, useRef } from "react"; 



function Home() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {

    if(inputRef.current) {
      inputRef.current.focus();
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }


  return (
    <>
    <h1>Home</h1>
    <input ref={inputRef} onChange={handleInputChange}/>
    <button onClick={handleClick}> Click to focus </button>
    </>
  );
}

export default Home;