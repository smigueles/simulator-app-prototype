import { type StepType } from "../../types";

export const getSteps = (): StepType[] => [
  {
    id: 1,
    title: "Paso 1 - La alerta",
    content:
      "Es un mediodía lluvioso. Una familia almuerza tranquila mientras en la televisión interrumpen la programación con una alerta urgente. Se informa que, debido a lluvias persistentes, el sistema de drenaje ha colapsado y se esperan inundaciones inminentes.",
    options: [
      {
        id: 1,
        label: "Ignorar la noticia y seguir almorzando",
        value: "incorrecta",
      },
      {
        id: 2,
        label: "Comentar la noticia pero no hacer nada aún",
        value: "incorrecta",
      },
      {
        id: 3,
        label: "Alertar al resto de la familia y comenzar a prepararse",
        value: "correcta",
      },
      {
        id: 4,
        label: "Salir a ver si los vecinos también se enteraron",
        value: "incorrecta",
      },
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
        alt: "Fuertes lluvias",
      },
      {
        type: "audio",
        src: "/sounds/truenos.mp3",
        autoplay: true,
        loop: true,
      },
    ],
  },
  {
    id: 2,
    title: "Paso 2 - El tiempo apremia",
    content:
      "El clima empeora y el agua empieza a acumularse en las calles. La familia sabe que debe actuar rápido para asegurarse de tener lo necesario ante un posible aislamiento.",
    options: [
      {
        id: 1,
        label: "Llenar recipientes con agua y juntar provisiones",
        value: "correcta",
      },
      {
        id: 2,
        label: "Salir a comprar más comida en el mercado",
        value: "incorrecta",
      },
      {
        id: 3,
        label: "Revisar las redes sociales en busca de memes",
        value: "incorrecta",
      },
      {
        id: 4,
        label: "Esperar que pare la lluvia antes de hacer algo",
        value: "incorrecta",
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/juntando-provisiones.jpg",
        alt: "Recolectando víveres",
      },
      {
        type: "image",
        src: "/assets/kit-emergencia.jpg",
        alt: "Kit de emergencia",
      },
      {
        type: "audio",
        src: "/sounds/alerta-urgente.mp3",
        autoplay: true,
        loop: true,
      },
    ],
  },
  {
    id: 3,
    title: "Paso 3 - Seguridad primero",
    content:
      "El agua comienza a ingresar por el patio. La electricidad, el gas y el agua corren riesgo de generar accidentes si no se toman precauciones.",
    options: [
      {
        id: 1,
        label: "Cortar los suministros desde las llaves principales",
        value: "correcta",
      },
      {
        id: 2,
        label: "Encender todas las luces para tener mayor visibilidad",
        value: "incorrecta",
      },
      {
        id: 3,
        label: "Subirse a una silla para no mojarse",
        value: "incorrecta",
      },
      {
        id: 4,
        label: "Encender el horno para secar el ambiente",
        value: "incorrecta",
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/cortando-servicios.jpg",
        alt: "Persona cerrando llaves de paso",
      },
      {
        type: "image",
        src: "/assets/familia-prepara-casa.jpg",
        alt: "La familia se prepara",
      },
      { type: "audio", src: "/sounds/tension.mp3", autoplay: true, loop: true },
    ],
  },
  {
    id: 4,
    title: "Paso 4 - Barreras contra el agua",
    content:
      "Las filtraciones empiezan a verse por las rendijas de puertas y ventanas. La familia debe impedir el ingreso del agua lo antes posible.",
    options: [
      {
        id: 1,
        label: "Tapar las aberturas con trapos y bolsas de arena",
        value: "correcta",
      },
      {
        id: 2,
        label: "Cerrar las cortinas y bajar las persianas",
        value: "incorrecta",
      },
      {
        id: 3,
        label: "Rodear las puertas con sillas para contener el agua",
        value: "incorrecta",
      },
      {
        id: 4,
        label: "Aplicar cinta adhesiva en los marcos",
        value: "incorrecta",
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/tapando-ventanas.jpg",
        alt: "Ventanas protegidas con trapos",
      },
      {
        type: "image",
        src: "/assets/puertas-bloqueadas.jpg",
        alt: "Puertas reforzadas con muebles",
      },
      {
        type: "audio",
        src: "/sounds/viento-fuerte.mp3",
        autoplay: true,
        loop: true,
      },
    ],
  },
  {
    id: 5,
    title: "Paso 5 - Prevenir daños materiales y químicos",
    content:
      "La familia evalúa qué objetos podrían arruinarse y qué productos peligrosos podrían representar un riesgo si entrara agua a la casa.",
    options: [
      {
        id: 1,
        label:
          "Colocar electrodomésticos y productos tóxicos en lugares elevados",
        value: "correcta",
      },
      { id: 2, label: "Cubrir todo con bolsas de basura", value: "incorrecta" },
      {
        id: 3,
        label: "Encender la aspiradora para secar el suelo",
        value: "incorrecta",
      },
      {
        id: 4,
        label: "Dejar todo como está para no perder tiempo",
        value: "incorrecta",
      },
    ],
    media: [
      {
        type: "image",
        src: "/assets/elevando-electrodomesticos.jpg",
        alt: "Electrodomésticos levantados",
      },
      {
        type: "image",
        src: "/assets/alejando-toxicos.jpeg",
        alt: "Productos químicos en estantes altos",
      },
      {
        type: "audio",
        src: "/sounds/prepared.mp3",
        autoplay: true,
        loop: true,
      },
    ],
  },
  {
    id: 6,
    title: "Paso 6 - Esperar y mantenerse informado",
    content:
      "El nivel del agua sigue subiendo. La familia ya no puede salir, así que sube al piso más alto con provisiones y radio. Ahora solo queda esperar nuevas instrucciones.",
    options: [
      {
        id: 1,
        label: "Mantenerse en un lugar alto con radio o celular cargado",
        value: "correcta",
      },
      {
        id: 2,
        label: "Salir a la calle para ver cómo está el barrio",
        value: "incorrecta",
      },
      { id: 3, label: "Bajar a buscar el control remoto", value: "incorrecta" },
      {
        id: 4,
        label: "Intentar secar el agua con toallas",
        value: "incorrecta",
      },
    ],
    isLastStep: true,
    media: [
      {
        type: "image",
        src: "/assets/familia-refugiada.jpg",
        alt: "Familia en la planta alta",
      },
      {
        type: "image",
        src: "/assets/radio-emergencia.jpeg",
        alt: "Radio encendida en mesa",
      },
      { type: "audio", src: "/sounds/waiting.mp3", autoplay: true, loop: true },
    ],
  },
];
