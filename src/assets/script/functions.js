export function detectAgent() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

export function returnData(data) {
  return data;
}

export function handleResponse(data, type, location) {
  switch (type) {
    case "prayer-time":
      for (let item of data) {
        console.log(item.date);
        const cardHeaderEl = document.createElement("div");
        cardHeaderEl.classList.add("md:col-span-3", "col-span-full");
        cardHeaderEl.innerHTML = `
          <h2 class="font-bold text-4xl md:ml-0 ml-6 w-full">Jadwal Shalat ${location.country} - ${location.city}</h2>
          <p class="text-gray-300 font-semibold text-center text-1xl md:mt-4 mt-4">${item.date.hijri.weekday.en}, ${item.date.readable}</p>
        `;
        document.getElementById("header-prayer").appendChild(cardHeaderEl);
        domContent(
          selectorData.prayerTime.el,
          item,
          selectorData.prayerTime.classes,
          "prayer-time"
        );
      }

      break;
  }
}

export function domContent(selector, data, classesLists, type) {
  switch (type) {
    case "user-location":
      console.log("User Location Detect");
      const newEl = document.createElement("div");
      newEl.classList.add(...classesLists);
      newEl.innerHTML = `
      <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
          <!-- Dropdown menu -->
          <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul class="py-1" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${data.country_flag}" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${data.country_name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">${data.district} | ${data.state_prov}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 font-bold">
              ${data.ip}
            </span>
              
          </div>
        `;
      selector.appendChild(newEl);
      break;

    case "prayer-time":
      console.log("this prayer time");
      const createElImsak = document.createElement("div");
      const createElFajr = document.createElement("div");
      const createElDhuhr = document.createElement("div");
      const createElAsr = document.createElement("div");
      const createElMaghrib = document.createElement("div");
      const createElIsha = document.createElement("div");
      createElFajr.classList.add(...classesLists);
      createElFajr.innerHTML = innerHTMLData({
        name: "Subuh",
        time: data.timings.Fajr,
        method: data.meta.method.name,
      });
      selector.appendChild(createElFajr);
      createElDhuhr.classList.add(...classesLists);
      createElDhuhr.innerHTML = innerHTMLData({
        name: "Dzuhur",
        time: data.timings.Dhuhr,
        method: data.meta.method.name,
      });
      selector.appendChild(createElDhuhr);
      createElAsr.classList.add(...classesLists);
      createElAsr.innerHTML = innerHTMLData({
        name: "Ashar",
        time: data.timings.Asr,
        method: data.meta.method.name,
      });
      selector.appendChild(createElAsr);
      createElMaghrib.classList.add(...classesLists);
      createElMaghrib.innerHTML = innerHTMLData({
        name: "Maghrib",
        time: data.timings.Maghrib,
        method: data.meta.method.name,
      });
      selector.appendChild(createElMaghrib);
      createElIsha.classList.add(...classesLists);
      createElIsha.innerHTML = innerHTMLData({
        name: "Isya",
        time: data.timings.Isha,
        method: data.meta.method.name,
      });
      selector.appendChild(createElIsha);
      break;
  }
}

function innerHTMLData(shalat) {
  return `
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ${shalat.name} : ${shalat.time}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ${shalat.method}
      </p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Snooze
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  `;
}

export function checkIp() {
  try {
    return new Promise((resolve, reject) => {
      fetch("https://api.ipify.org?format=json")
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.error(error);
  }
}

export function userLocationDetect(apiKey) {
  try {
    return new Promise((resolve, reject) => {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.error(error);
  }
}

export async function userGeoLocationData(apiKey) {
  try {
    const fetchs = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
    );
    return fetchs.json();
  } catch (error) {
    console.error(error);
  }
}

export async function fetchContentApi(url, data) {
  try {
    const responses = await fetch(url);
    return responses;
  } catch (err) {
    console.log(err);
  }
}
