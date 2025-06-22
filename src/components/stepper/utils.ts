import { type StepType } from "../../types";

export const getSteps = () => {
  const steps: Array<StepType> = [
    {
      id: 1,
      title: "Paso 1",
      content:
        "Una familia se encuentra almorzando en un mediodía de lluvia. Se oyen fuertes vientos desde el exterior. De pronto, se notifica en los medios y redes sociales que se han colapsado las napas y la ciudad perdió el funcionamiento de su sistema hídrico normal.",
      options: [
        { id: 1, label: "Alertar a la familia", value: "2" },
        { id: 2, label: "Seguir mirando la tele", value: "2" },
      ],
      media: [
        {
          type: "image",
          src: "/assets/familia-almorzando.jpg",
          alt: "Familia almorzando",
        },
        {
          type: "image",
          src: "/assets/lluvia-fuerte.jpg",
          alt: "Lluvia fuerte cayendo afuera",
        },
        {
          type: "audio",
          src: "truenos.mp3",
          autoplay: true,
          loop: true,
        },
      ],
    },
    {
      id: 2,
      title: "Paso 2",
      options: [
        { id: 1, label: "Opción 1", value: "3" },
        { id: 2, label: "Opción 2", value: "3" },
      ],
      content:
        "Rapidamente la familia se organiza para agarrar provisiones y recipientes con agua potable además de un kit de emergencia",
      media: [
        {
          type: "image",
          src: "/assets/dummy-image.jpg",
          alt: "Familia almorzando",
        },
        {
          type: "image",
          src: "/assets/dummy-image.jpg",
          alt: "Lluvia fuerte cayendo afuera",
        },
        {
          type: "audio",
          src: "alarma.mp3",
          autoplay: true,
          loop: true,
        },
      ],
    },
    {
      id: 3,
      title: "Paso 3",
      content:
        "El grupo se organiza para cortar la luz y las llaves de agua, con el miembro principal dando las indicaciones ayudado por el adolescente, mientras el adulto secundario ayuda a mover al abuelo y al niño a la habitación más segura",
      options: [
        { id: 2, label: "Opción 1", value: "2" },
        { id: 1, label: "Opción 2", value: "1" },
      ],
      media: [
        {
          type: "image",
          src: "/assets/dummy-image.jpg",
          alt: "Familia almorzando",
        },
        {
          type: "image",
          src: "/assets/dummy-image.jpg",
          alt: "Lluvia fuerte cayendo afuera",
        },
        {
          type: "audio",
          src: "tension-effects.mp3",
          autoplay: true,
          loop: true,
        },
      ],
    },
  ];

  return steps;
};
