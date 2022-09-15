import React from "react";
import Troll from "../assets/troll-face.png"

function Nav() {
  return (
    <>
    <nav className="flex justify-center bg-green-700 text-white py-2.5 shadow-inner shadow-gray-50">
        <div className="flex flex-row items-center">
            <img src={Troll} alt="" className="w-12"/>
            <p className="ml-2 tracking-wide text-xl font-bold">Meme Generator</p>
        </div>
        
    </nav>
    </>
  );
}

export default Nav;
