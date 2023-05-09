import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const speakerCombo = new Combo(
  {
    incidents: [
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeInCubic",
        },
        position: 200,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 0,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeOutCubic",
        },
        position: 250,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeInCubic",
        },
        position: 300,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 0,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeOutCubic",
        },
        position: 350,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeInCubic",
        },
        position: 400,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 0,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeOutCubic",
        },
        position: 450,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".dot-box",
          duration: 50,
          easing: "easeOutCubic",
        },
        position: 500,
      },
      ///////
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".day-name",
          duration: 400,
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "0px",
          },
        },
        props: {
          selector: ".day-number",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "50%",
            transform:{
              translateX:"-50%"
            }
          },
        },
        props: {
          selector: ".month-name",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "45%",
          },
        },
        props: {
          selector: ".image-wrapper",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "900px",
          },
        },
        props: {
          selector: ".cercle-10",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "100px",
          },
        },
        props: {
          selector: ".cercle-9",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            width: "400px",
          },
        },
        props: {
          selector: ".image-wrapper",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            height: "400px",
          },
        },
        props: {
          selector: ".image-wrapper",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 0,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            width: "400px",
          },
        },
        props: {
          selector: ".image-wrapper-background",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 300,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            height: "400px",
          },
        },
        props: {
          selector: ".image-wrapper-background",
          duration: 1500,
          easing: "easeInOutCubic",
        },
        position: 300,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "0px",
          },
        },
        props: {
          selector: ".name",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 600,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "0px",
          },
        },
        props: {
          selector: ".surname",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 600,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "0px",
          },
        },
        props: {
          selector: ".position-name",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 600,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            bottom: "0%",
          },
        },
        props: {
          selector: ".speech-wrapper",
          duration: 800,
          easing: "easeInOutCubic",
        },
        position: 1200,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            opacity: 1,
          },
        },
        props: {
          selector: ".speech",
          duration: 800,
        },
        position: 1700,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            bottom: "-100%",
          },
        },
        props: {
          selector: ".speech-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 3700,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
          initialValues: {
            top: "70%",
          },
        },
        props: {
          selector: ".day-number-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 3900,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
        },
        props: {
          selector: ".day-name-wrapper",
          duration: 1200,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
          initialValues: {
            top: "40%",
          },
        },
        props: {
          selector: ".name-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
          initialValues: {
            top: "52.5%",
          },
        },
        props: {
          selector: ".position-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
          initialValues: {
            top: "46%",
          },
        },
        props: {
          selector: ".surname-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
        },
        props: {
          selector: ".image-wrapper",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "100%",
          },
          initialValues: {
            top: "2%",
          },
        },
        props: {
          selector: ".dot-box",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "100%",
          },
        },
        props: {
          selector: ".cercle-9",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
      {
        incidentClass: CSSEffect,
        attrs: {
          animatedAttrs: {
            top: "150%",
          },
        },
        props: {
          selector: ".cercle-10",
          duration: 1000,
          easing: "easeInOutCubic",
        },
        position: 4000,
      },
    ],
  },
  {
    selector: ".scene-5",
    delay: "@expression(5300*index)",
  }
);
