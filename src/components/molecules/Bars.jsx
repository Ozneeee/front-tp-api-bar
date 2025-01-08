import React from "react";

import { BsInfoCircleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Card = ({
  name,
  adressse,
  email,
  tel,
  description,
  onDetail,
  onDelete,
  onUpdate,
}) => {
  return (
    <div className="w-full py-2 text-white flex flex-row mb-4">
      <div className="bg-[#ffffff33] mr-6 w-full p-4">
        <div className="flex flex-row items-center justify-between">
          <span>Nom :</span> <span>{name}</span> <span></span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span>Adresse :</span> <span>{adressse}</span> <span></span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span>Téléphone :</span> <span>{tel}</span> <span></span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span>Email :</span> <span>{email}</span> <span></span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span>Description :</span> <span>{description}</span> <span></span>
        </div>
      </div>
      <div className="bg-[#ffffff33] flex flex-col justify-between py-4 px-10">
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            onUpdate();
          }}
        >
          <BiSolidMessageSquareEdit className="mr-2" color="white" />
          <p>Modifier</p>
        </div>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            onDelete();
          }}
        >
          <FaTrash className="mr-2" color="white" />
          <p>Supprimer</p>
        </div>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            onDetail();
          }}
        >
          <BsInfoCircleFill className="mr-2" color="white" />
          <p>Détails</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
