import React from "react";

import { Bars } from "../components/molecules";
import { useBars } from "../contexts/bars";

import { useNavigate } from "react-router-dom";
import { IoBeer } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Details = () => {
  let navigate = useNavigate();
  const { currentBar, deleteBar } = useBars();

  return (
    <div className="pt-[80px] accueilBg fixed top-0 left-0 w-full h-screen">
      <div className="m-8 h-screen p-8 overflow-y-scroll pb-64">
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl text-white mb-5">Bar le {currentBar.name}</p>
          <p
            className="text-xl text-white mb-5 underline underline-offset-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Retour
          </p>
        </div>
        <Bars.Card
          name={currentBar.name}
          adressse={currentBar.adresse}
          tel={currentBar.tel}
          email={currentBar.email}
          description={currentBar.description}
          onDelete={async () => {
            await deleteBar(currentBar._id);
            navigate("/");
          }}
          onUpdate={() => {
            navigate("/update");
          }}
          onDetail={() => {}}
        />
        <div className="text-xl text-white mb-5 bg-[#ffffff33] p-4 flex flex-row justify-between items-center">
          <p>Nombre de bieres : 5</p>
          <p className="underline underline-offset-2 cursor-pointer">
            Ajouter une biere
          </p>
        </div>
        <div className="text-xl text-white mb-5 bg-[#ffffff33] p-4 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <IoBeer size={30} color="white" />{" "}
            <p className="ml-2">2x Biere blanche</p>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <FaTrash className="mr-2" color="white" />
            <p>Supprimer</p>
          </div>
        </div>
        <div className="text-xl text-white mb-5 bg-[#ffffff33] p-4 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <IoBeer size={30} color="white" />{" "}
            <p className="ml-2">3x Biere blonde</p>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <FaTrash className="mr-2" color="white" />
            <p>Supprimer</p>
          </div>
        </div>
        <div className="text-xl text-white mb-5 bg-[#ffffff33] p-4 flex flex-row justify-between items-center">
          <p>Commandes en cour : 0</p>
          <p className="underline underline-offset-2 cursor-pointer">
            Créer une commande
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
