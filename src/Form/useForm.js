import axios from "axios";
import { useState } from "react";

const useForm = () => {
  const [type, setType] = useState("");
  const [validationInfo, setValidationInfo] = useState("");
  const [data, setData] = useState({
    type: null,
    name: null,
    preparation_time: null,
    diameter: null,
    no_of_slices: null,
    slices_of_bread: null,
    spiciness_scale: null,
  });

  const dataBase = {
    type: null,
    name: null,
    preparation_time: null,
  };

  const dataPizza = {
    no_of_slices: null,
    diameter: null,
  };

  const dataSoup = {
    spiciness_scale: null,
  };

  const dataSandwich = {
    slices_of_bread: null,
  };

  const changeDishType = (e) => {
    setType(e.target.value);
  };

  const changeHandler = (e) => {
    let dataTemp = { ...data };
    dataTemp[e.target.name] = isNaN(e.target.value)
      ? e.target.value
      : +e.target.value;
    setData(dataTemp);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const promise = new Promise((res) => {
      let dataToPost = transformObject();
      res(dataToPost);
    });
    promise.then((dataToPost) => {
      makePostRequest(e, dataToPost);
    });
  };

  const transformObject = () => {
    let typeData = { ...dataBase, ...eval("data" + type) };
    let dataToPost = {};
    Object.keys(typeData).forEach((field) => {
      dataToPost[field] = data[field] ?? typeData[field];
    });
    dataToPost["type"] = dataToPost["type"].toLowerCase();
    return dataToPost;
  };

  const makePostRequest = (e, dataToPost) => {
    const axios = require("axios");
    const data = JSON.stringify(dataToPost);
    const config = {
      method: "post",
      url: "https://frosty-wood-6558.getsandbox.com:443/dishes",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function () {
        e.target.reset();
        setData({
          type: null,
          name: null,
          preparation_time: null,
          diameter: null,
          no_of_slices: null,
          slices_of_bread: null,
          spiciness_scale: null,
        });
        setValidationInfo("Data submitted successfully");
      })
      .catch(function (error) {
        setValidationInfo("Error: " + error);
      });
  };

  return {
    data,
    changeHandler,
    submitForm,
    changeDishType,
    type,
    validationInfo,
  };
};

export default useForm;
