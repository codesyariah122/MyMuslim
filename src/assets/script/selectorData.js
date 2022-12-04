const selectorData = {
  heroDesktop: document.getElementById("hero-content-desktop"),
  heroMobile: document.getElementById("hero-content-mobile"),
  userDetect: {
    el: document.getElementById("user-detect"),
    classes: [
      "w-full",
      "max-w-sm",
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "shadow-md",
      "dark:bg-gray-800",
      "dark:border-gray-700",
    ],
    type: "user-location",
  },
  prayerTime: {
    el: document.getElementById("user-prayer-time"),
    classes: [
      "md:col-span-2",
      "col-span-full",
      "w-80",
      "md:w-full",
      "md:mb-12",
      "ml-4",
      "md:ml-0",
    ],
    type: "prayer-time",
  },
};

export { selectorData };
