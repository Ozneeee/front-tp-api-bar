import React, { useEffect } from "react";

import { Bars } from "../components/molecules";
import { useBars } from "../contexts/bars";

import { useNavigate } from "react-router-dom";

const Accueil = () => {
  let navigate = useNavigate();
  const { getAllBars, bars, deleteBar, setCurrentBar } = useBars();

  useEffect(() => {
    getAllBars();
  }, []);

  return (
    <div className="pt-[80px] accueilBg fixed top-0 left-0 w-full h-screen">
      {bars && bars.length > 0 ? (
        <div className="m-8 h-screen p-8 overflow-y-scroll pb-64">
          <p className="text-2xl text-white mb-5">Liste des bars</p>
          {bars.map((i) => {
            return (
              <Bars.Card
                key={i._id}
                name={i.name}
                adressse={i.adresse}
                tel={i.tel}
                email={i.email}
                description={i.description}
                onDelete={() => deleteBar(i._id)}
                onUpdate={() => {
                  setCurrentBar(i);
                  navigate("/update");
                }}
                onDetail={() => {
                  setCurrentBar(i);
                  navigate("/details");
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="m-8 h-screen p-8">
          <p className="text-2xl text-white mb-5 text-center bg-[#ffffff33] py-10">
            Vous n'avez aucun bar. Pour avoir une gestion compléte de vos bars,
            merci de{" "}
            <span
              onClick={() => navigate("/create")}
              className="underline underline-offset-2 cursor-pointer"
            >
              créer un bar
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default Accueil;
