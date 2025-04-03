import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const initPlasmic = () => {
  const PLASMIC = initPlasmicLoader({
    projects: [
      {
        id: "3wZ1PPNQ8PF1THnQKhRp1i",
        token: "m1Zt081JWIfIIVuCxf9BeSAyblOycqttVHrD2NZshpJCrx7c2XIB1EOfWRPFp6V27PnqO4mGJGlWPZYaLbTAw",
      },
    ],
    // You can add more projects here
  });

  return PLASMIC;
}; 