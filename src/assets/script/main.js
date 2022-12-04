import "../css/style.css";
import {
  selectorClass,
  changeTitleHTML,
  ipLookUp,
  userGeoLocation,
  fetchPrayerApi,
} from "./loaded";
import { domContent, returnData } from "./functions";
import { selectorData } from "./selectorData";

// assign setup
const apiKeyIpLookup = "at_0yQ4Xmbo5tron5iK3fUd04D5ecXF5";
const apiKeyGeo = "267b1cdc2a264807b030ea587e61f8b4";
const xRapidApiKey = "27bd9a3d0bmshb459a56fb843892p105ab4jsn586dae0c9415";
const xRapidHost = "aladhan.p.rapidapi.com";

let ip = localStorage.getItem("user-ip")
  ? JSON.parse(localStorage.getItem("user-ip"))
  : null;
// end assign

selectorClass(selectorData);
changeTitleHTML("My Islam App");

ipLookUp();

userGeoLocation(apiKeyGeo)
  .then((res) => {
    if (res) {
      domContent(
        selectorData.userDetect.el,
        res,
        selectorData.userDetect.classes,
        selectorData.userDetect.type
      );
      localStorage.setItem("user-data", JSON.stringify(res));
    }
  })
  .catch((err) => console.log(err));

setTimeout(() => {
  let userData = localStorage.getItem("user-data")
    ? JSON.parse(localStorage.getItem("user-data"))
    : null;
  const objectDataLocation = {
    country: userData.country_name,
    city: userData.city,
  };
  const token = "xaxbbczczaaxaa";
  const endpoint = `https://islamic-api-collect.vercel.app/api/islamic/v1/${token}/${objectDataLocation.country}/${objectDataLocation.city}/day`;

  fetchPrayerApi(endpoint, userData, objectDataLocation);
}, 2500);
