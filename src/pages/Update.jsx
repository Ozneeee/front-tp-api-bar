import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useBars } from "../contexts/bars";

const Update = () => {
  const { currentBar, updateBar } = useBars();
  let navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Le prénom est requis"),
    adresse: Yup.string().required("L'adresse est requise"),
    tel: Yup.number("Ceci n'est pas un numéro de téléphone").required(
      "Le téléphone est requis"
    ),
    email: Yup.string()
      .email("L'adresse mail est invalide")
      .required("L'adresse mail est requise"),
    description: Yup.string().required("La description est requise"),
  });

  const [barInfo, setBarInfo] = useState({
    name: currentBar.name || "",
    adresse: currentBar.adresse || "",
    tel: currentBar.tel || "",
    email: currentBar.email || "",
    description: currentBar.description || "",
  });

  const [newName, setNewName] = useState(currentBar.name);
  const [success, setSuccess] = useState(false);
  const [modification, setModification] = useState(false);

  const modifiyBar = async (values, formikActions) => {
    try {
      await updateBar(values, currentBar._id);
      formikActions.setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[80px] accueilBg fixed top-0 left-0 w-full h-screen">
      <p
        className="text-white mb-5 underline underline-offset-1 cursor-pointer mt-8 ml-14"
        onClick={() => navigate("/")}
      >
        Retour
      </p>
      <div className="m-8 h-screen p-8">
        <p className="text-2xl text-white mb-5 text-center bg-[#ffffff33] py-4">
          Modification de{" "}
          <span className="underline underline-offset-2">{newName}</span>
        </p>

        <Formik
          initialValues={barInfo}
          validationSchema={validationSchema}
          onSubmit={modifiyBar}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            setFieldValue,
          }) => {
            const { name, tel, adresse, email, description } = values;

            return (
              <div className="text-2xl text-white mb-5 bg-[#ffffff33] p-4 flex flex-col gap-10">
                <div>
                  <input
                    type="text"
                    placeholder="Nom du bar"
                    className="w-full text-lg p-2 rounded-xl text-black"
                    onBlur={(value) => {
                      setFieldValue("name", value.target.value);
                      handleBlur("name");
                    }}
                    onChange={(value) => {
                      setFieldValue("name", value.target.value);
                      setModification(true);
                      setNewName(value.target.value);
                    }}
                    value={name}
                  />
                  {touched.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Numéro de téléphone"
                    className="w-full text-lg p-2 rounded-xl text-black"
                    onBlur={(value) => {
                      setFieldValue("tel", value.target.value);
                      handleBlur("tel");
                    }}
                    onChange={(value) => {
                      setFieldValue("tel", value.target.value);
                      setModification(true);
                    }}
                    value={tel}
                  />
                  {touched.tel && (
                    <p className="text-sm text-red-500">{errors.tel}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Adresse postale"
                    className="w-full text-lg p-2 rounded-xl text-black"
                    onBlur={(value) => {
                      setFieldValue("adresse", value.target.value);
                      handleBlur("adresse");
                    }}
                    onChange={(value) => {
                      setFieldValue("adresse", value.target.value);
                      setModification(true);
                    }}
                    value={adresse}
                  />
                  {touched.adresse && (
                    <p className="text-sm text-red-500">{errors.adresse}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Adresse email"
                    className="w-full text-lg p-2 rounded-xl text-black"
                    onBlur={(value) => {
                      setFieldValue("email", value.target.value);
                      handleBlur("email");
                    }}
                    onChange={(value) => {
                      setFieldValue("email", value.target.value);
                      setModification(true);
                    }}
                    value={email}
                  />
                  {touched.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Description du bar"
                    className="w-full text-lg p-2 rounded-xl text-black"
                    onBlur={(value) => {
                      setFieldValue("description", value.target.value);
                      handleBlur("description");
                    }}
                    onChange={(value) => {
                      setFieldValue("description", value.target.value);
                      setModification(true);
                    }}
                    value={description}
                  />
                  {touched.description && (
                    <p className="text-sm text-red-500">{errors.description}</p>
                  )}
                </div>
                <p
                  className={`text-2xl text-white mb-5 text-center bg-[#ffffff33] py-4 ${
                    modification ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (modification) {
                      handleSubmit();
                    }
                  }}
                >
                  Enregistrer
                </p>
              </div>
            );
          }}
        </Formik>
        {success && (
          <p className="text-2xl text-green-300 mb-5 text-center py-4 cursor-pointer border-2 border-green-300">
            Le bar a été modifié !
          </p>
        )}
      </div>
    </div>
  );
};

export default Update;
