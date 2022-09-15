// import { Input } from "postcss";
import React from "react";
import MemeData from "../memesData"

function Meme() {
    function Logg(e) {
        e.preventDefault();
        const random = Math.floor(Math.random() * MemeData.data.memes.length)
        console.log(random, MemeData.data.memes[random].url)
    }
    return (
      <>
        <main className="">
            <form className="flex flex-col">
                <input type="text"  placeholder="Top Text" className="indent-2.5 border-2 border-solid"/>
                <input type="text" placeholder="Bottom Text"  className="indent-2.5 border-2 border-solid"/>
                <button onClick={Logg} className="bg-green-700 border-green-600 text-white border-2 mt-4 py-1" >Get a new meme image</button>
            </form>
        </main>
      </>
    );
  }
  
  export default Meme;
  