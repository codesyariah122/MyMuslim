import axios from "axios";

import {
  detectAgent,
  checkIp,
  userLocationDetect,
  userGeoLocationData,
  fetchContentApi,
  handleResponse,
} from "./functions";
import { heroDesktop, heroMobile } from "../../components/home/hero";

export function selectorClass(selectors) {
  const newEl = document.createElement("section");
  if (detectAgent()) {
    const mobileHero = selectors.heroMobile;
    newEl.classList.add("hero__section-mobile");
    newEl.innerHTML = heroMobile;
    mobileHero.appendChild(newEl);
  } else {
    const desktopHero = selectors.heroDesktop;
    newEl.classList.add("hero__section-desktop");
    newEl.innerHTML = heroDesktop;
    desktopHero.appendChild(newEl);
  }
}

export function changeTitleHTML(title) {
  document.title = title;
}

export async function ipLookUp() {
  await checkIp()
    .then((response) => {
      if (response.ip) {
        localStorage.setItem("user-ip", JSON.stringify({ ip: response.ip }));
      }
    })
    .catch((err) => console.log(err));
}

export async function userLocation(apiKey) {
  await userLocationDetect(apiKey)
    .then((response) => {
      if (response.ip) {
        const userDataDetected = {
          ip: response.ip,
          location: response.location,
        };
        localStorage.setItem("user-detect", JSON.stringify(userDataDetected));
      }
    })
    .catch((err) => console.log(err));
}

export async function userGeoLocation(apiKey) {
  let dataGeo = {};
  await userGeoLocationData(apiKey)
    .then((response) => {
      if (response.ip) {
        dataGeo = response;
      }
    })
    .catch((err) => console.log(err));
  return dataGeo;
}

export async function fetchPrayerApi(endpoint, data, location) {
  await fetchContentApi(endpoint, data)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const dataContent = json.data.map((d) => d);
      let date = new Date().getDate();
      const day = date <= 10 ? `0${date}` : toString(date);
      const allData = dataContent.map((d) => d);
      // const basedOnToday = allData.filter((d) => {
      //   if (d.date.gregorian.day === day) {
      //     return d;
      //   }
      // });

      handleResponse(allData, "prayer-time", location);
    })
    .catch((err) => console.log(err));
}
