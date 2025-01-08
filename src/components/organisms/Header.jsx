import React from "react";

import { IoBeer } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Primary = () => {
  let navigate = useNavigate();

  return (
    <nav className="bg-[#252525a6] w-full min-h-[80px] flex flex-row items-center justify-around fixed top-0 left-0 z-10">
      <IoBeer
        size={40}
        color="white"
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      <h1
        onClick={() => navigate("/")}
        className="text-4xl text-white cursor-pointer"
      >
        BarApi
      </h1>
      <div
        className="py-2 px-8 bg-slate-100 rounded-full textcenter cursor-pointer"
        onClick={() => navigate("/create")}
      >
        <p>Créer un bar</p>
      </div>
    </nav>
  );
};

export { Primary };
