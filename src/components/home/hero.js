export const heroDesktop = `
<div
class="grid max-h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
<div class="mr-auto place-self-start lg:col-span-2">
  <div class="grid grid-cols-4 gap-x-4 col__hero-vector1">
    <div class="col-span-12">
      <img src="/assets/artwork/leaf1.png" />
    </div>
    <div class="col-span-6 md:mt-12">
      <img src="/assets/artwork/leaf1.png" />
    </div>
  </div>
</div>
<div
  class="mr-auto place-items-center items-stretch lg:col-span-5"
>
  <div class="grid grid-cols-4 gap-x-4 col__hero-context">
    <div class="col-span-12">
      <h1
        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-center leading-loose md:text-8xl xl:text-6xl text-gray-700 dark:text-gray-600 align-bottom"
      >
        May Allah Bless Us
      </h1>
    </div>
    <div class="col-span-12">
      <p
        class="max-w-2xl font-light lg:mb-8 md:text-sm lg:text-xl text-gray-700 dark:text-gray-600 place-self-end md:w-10/12 text-justify"
      >
        Wahai manusia! Bertakwalah kepada Tuhanmu yang telah
        menciptakan kamu dari diri yang satu(Adam), dan (Allah)
        menciptakan pasangannya (Hawa) dari (diri)-nya; dan dari
        keduanya Allah memperkembangbiakkan laki-laki dan
        perempuan yang banyak
      </p>
    </div>
    <div class="col-span-6 md:-mt-8">
      <h3
        class="max-w-2xl text-2xl font-extrabold tracking-tight text-center leading-none md:text-1xl xl:text-1xl text-gray-700 dark:text-gray-600 align-middle md:w-80 w-full h-screen place-self-end"
      >
        Surah An-Nisa - Ayat 1
      </h3>
    </div>
    <div class="col-span-6 col__context-vector1">
      <img
        src="/assets/artwork/leaf2.png"
        class="md:h-20 md:-ml-12"
        alt="mockup"
      />
    </div>
  </div>
</div>
<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
  <div
    class="relative grid grid-cols-4 gap-x-4 col__hero-vector2"
  >
    <div class="col-span-3 vector-1">
      <img
        src="/assets/artwork/mosque.png"
        alt="mockup"
        class="md:max-h-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      />
    </div>
    <div
      class="col-span-2 absolute top-0 right-0 md:h-80 w-16 vector-2"
    >
      <img
        src="/assets/artwork/leaf3.png"
        alt="mockup"
        class="md:h-24"
      />
    </div>
  </div>
</div>
</div>
`;

export const heroMobile = `
<div
class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
<div class="flex justify-between col__hero-vector-1">
  
  <div class="order-first">
    <img
      src="/assets/artwork/leaf1.png"
      class="max-w-none h-24 vector-1"
    />
  </div>
  <div class="order-last">
    <img
      src="/assets/artwork/leaf3.png"
      class="max-w-none h-24 vector-2"
    />
  </div>
</div>
<div class="grid grid-cols-3 gap-x-5 col__hero-context">
  <div class="col-span-6">
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      May Allah Bless Us
    </h1>
  </div>
  <div class="col-span-6 z-50">
    <p
      class="mb-8 text-lg font-semibold text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500"
    >
      Wahai manusia! Bertakwalah kepada Tuhanmu yang telah
      menciptakan kamu dari diri yang satu(Adam), dan (Allah)
      menciptakan pasangannya (Hawa) dari (diri)-nya; dan dari
      keduanya Allah memperkembangbiakkan laki-laki dan perempuan
      yang banyak
    </p>
  </div>
  <!-- <div class="row-end-7 z-0">
    <img
      src="/assets/artwork/leaf1.png"
      class="max-w-xl max-h-screen vector-0 rotate-45"
    />
  </div> -->
  <div class="col-span-6 z-10">
    <h3
        class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight text-center leading-none md:text-1xl xl:text-1xl text-gray-700 dark:text-gray-600 align-middle md:w-80 place-self-end"
      >
        Surah An-Nisa - (1)
      </h3>
  </div>
</div>

<div
  class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 col__hero-vector-2"
></div>
<div class="order-first vector-leaf z-50">
  <img
    src="/assets/artwork/leaf2.png"
    class="h-20 -mt-16 ml-16 -rotate-180 rounded-lg "
    alt="mockup"
  />
</div>
<div
  class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 vector-mosque"
>
  <img
    src="/assets/artwork/mosque.png"
    alt="mockup"
    class="max-h-full rounded-md"
  />
  </div>
</div>
</div>
`;
