import React, { useContext, useState } from "react";
import { api } from "../api/api";

const BarsContext = React.createContext();

export function BarsContextProvider({ children }) {
  const [bars, setBars] = useState();
  const [currentBar, setCurrentBar] = useState();

  const getAllBars = async () => {
    try {
      const res = await api.get(`/allBars`);

      setBars(res?.data?.bars);
    } catch (error) {
      console.log("Erreur getBars", error.message);
    }
  };

  const createBar = async (values) => {
    try {
      const res = await api.post(`/createBar`, {
        ...values,
      });

      if (res?.data?.success) {
        await getAllBars();
      }
    } catch (error) {
      console.log("Erreur createBar", error.message);
    }
  };

  const deleteBar = async (id) => {
    try {
      const res = await api.delete(`/${id}`);

      if (res?.data?.success) {
        await getAllBars();
      }
    } catch (error) {
      console.log("Erreur deleteBar", error.message);
    }
  };

  const updateBar = async (values, id) => {
    try {
      const res = await api.put(`/update/${id}`, {
        ...values,
      });

      if (res?.data?.success) {
        await getAllBars();
      }
    } catch (error) {
      console.log("Erreur deleteBar", error.message);
    }
  };

  return (
    <BarsContext.Provider
      value={{
        bars,
        setBars,
        currentBar,
        setCurrentBar,
        getAllBars,
        createBar,
        deleteBar,
        updateBar,
      }}
    >
      {children}
    </BarsContext.Provider>
  );
}

export const useBars = () => useContext(BarsContext);
