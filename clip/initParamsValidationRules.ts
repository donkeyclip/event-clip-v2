export default {
  color: {
    label: "Text Color",
    type: "color",
    optional: true,
    default: "white",
  },
  title: {
    type: "string",
    label: "Title",
  },
  subTitle: {
    type: "string",
    label: "Subtitle",
  },
  eventLink: {
    type: "string",
    label: "Event Link",
  },
  sponsors: {
    label: "Sponsors",
    type: "array",
    items: {
      type: "string",
    },
  },
  venue: {
    type: "object",
    props: {
      img: "string",
      address: "string",
      building: "string",
      hall: "string",
      town: "string",
      country: "string",
      townImage1: "string",
      townImage2: "string",
      townImage3: "string",
    },
  },
  speekers: {
    label: "Speekers",
    type: "array",
    items: {
      type: "object",
      props: {
        dayName: {
          type: "string",
          optional: true,
          default: "",
        },
        dayNumber: {
          type: "string",
          optional: true,
          default: "",
        },
        monthName: { 
          type: "string",
          optional: true,
          default: "",
        },
        name: { type: "string" },
        surname: { type: "string" },
        positionName: { type: "string" },
        speech: { type: "string" },
        img: { type: "string" },
      },
    },
  },
};
