import { message } from "antd";
import axios from "axios";
const ROUTE_URL = process.env.REACT_APP_ROOT_URL;
export const DataRequestAction = (
  method,
  apiName,
  setConfig,
  values,
  recordName,
  spinnerName,
  successCase,
  errorCase
) => {
  setConfig(spinnerName, true);
  axios({
    url: `${ROUTE_URL}/${apiName}`,
    method: method,
    data: values,
  })
    .then(function (response) {
      console.log("===response===", response);
      setConfig(successCase, true);
      // setConfig(recordName, );
      showSuccessNotification(response);
      setConfig(spinnerName, false);
    })
    .catch(function (error) {
      setConfig(spinnerName, false);
      setConfig(errorCase, true);
      showErrorNotification(error);
    });
};
const showErrorNotification = (error) => {
  if (error && error.request && error.request && error.request.response) {
    const errorResponses = JSON.parse(error.request.response);
    if (errorResponses.status === "ERROR") {
      message.error(errorResponses.message);
    }
  } else {
    message.error(error.message);
  }
};
const showSuccessNotification = (response) => {
  if (response && response.data && response.data.status === "SUCCESS") {
    message.success(response.data.message);
  }
};
