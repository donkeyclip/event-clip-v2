import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { Opacity, Size, Top, Left, Right } from "./effects/incidents";
import { speakerCombo } from "./effects/speakerCombo";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap`,
    },
  ],
});
///scene1
clip.addIncident(Opacity(1, ".scene-1", 800), 1);
clip.addIncident(
  Top("-100%", "70%", ".cercle-1", 1500, "easeInOutCubic"),
  5000
);
clip.addIncident(Top("-70%", "71%", ".cercle-2", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Top("-50%", "2%", ".cercle-3", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Top("-40%", "3%", ".cercle-4", 1500, "easeInOutCubic"), 5000);
////scene2
clip.addIncident(Top("0%", "100%", ".conf-title", 1000, "easeInOutCubic"), 0);
clip.addIncident(
  Top("0%", "100%", ".scene-2 .date-title", 800, "easeInOutCubic"),
  1000
);
clip.addIncident(
  Opacity(1, ".sponsor-title,.logo", 800, "@stagger(0, 1000)"),
  1800
);
clip.addIncident(Top("-100%", "0%", ".scene-2", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Opacity(0, ".sponsor-title,.logo", 1, "@stagger(0, 1)"), 6500);
clip.addIncident(Top("100%", "0%", ".sponsor-wrapper", 1000), 6501);

// ///scene4
clip.addIncident(Top("50%", "100%", ".ball", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Size("3000px", ".blue-ball", 1600, "easeOutSine"), 5300);
clip.addIncident(Size("3000px", ".white-ball", 900, "easeInCubic"), 5300);
clip.addIncident(Opacity(0, ".ball", 1), 6120);
// ///scene6
clip.addIncident(
  Left("1100px", ".venue-town-image-wrapper1", 1700, "easeInOutCubic"),
  6300
);
clip.addIncident(
  Left("700px", ".venue-town-image-wrapper2", 1700, "easeInOutCubic"),
  6300
);
clip.addIncident(
  Left("200px", ".venue-town-image-wrapper3", 1700, "easeInOutCubic"),
  6300
);
clip.addIncident(Left("1560px", ".cercle-5", 1700, "easeInOutCubic"), 6200);
clip.addIncident(Left("200px", ".cercle-6", 1700, "easeInOutCubic"), 6200);
clip.addIncident(
  Right(
    "0%",
    ".scene-6 .hall-wrapper,.scene-6 .building-wrapper",
    1500,
    "easeInOutCubic"
  ),
  7400
);
// clip.addIncident(
//   Top(
//     "130%",
//     "@pattern(56%,83%,45%,2%,2%,1%)",
//     ".venue-town-image-wrapper2,.cercle-6,.scene-6 .text-wrapper,.venue-town-image-wrapper1,.cercle-5,.venue-town-image-wrapper3",
//     1000,
//     "easeInOutCubic",
//     "@stagger(0, 200)"
//   ),
//   10200
// );
clip.addIncident(
  Top("130%", "56%", ".venue-town-image-wrapper2", 1000, "easeInOutCubic"),
  10200
);
clip.addIncident(
  Top("130%", "83%", ".cercle-6", 1000, "easeInOutCubic"),
  10200
);
clip.addIncident(
  Top("130%", "45%", ".scene-6 .text-wrapper", 1000, "easeInOutCubic"),
  10200
);
clip.addIncident(
  Top("130%", "2%", ".venue-town-image-wrapper1", 1000, "easeInOutCubic"),
  10200
);
clip.addIncident(Top("130%", "2%", ".cercle-5", 1000, "easeInOutCubic"), 10200);
clip.addIncident(
  Top("130%", "1%", ".venue-town-image-wrapper3", 1000, "easeInOutCubic"),
  10200
);
// ///scene7
clip.addIncident(
  Right("1000px", ".venue-image-wrapper", 1700, "easeInOutCubic"),
  11200
);
clip.addIncident(Right("1560px", ".cercle-7", 1700, "easeInOutCubic"), 11100);
clip.addIncident(Right("250px", ".cercle-8", 1700, "easeInOutCubic"), 11100);
clip.addIncident(
  Left(
    "0%",
    ".scene-7 .hall-wrapper,.scene-7 .building-wrapper",
    1500,
    "easeInOutCubic"
  ),
  12300
);
clip.addIncident(
  Top("0%", "-100%", ".address-wrapper", 1500, "easeInOutCubic"),
  12400
);
// clip.addIncident(
//   Top(
//     "130%",
//     ".cercle-8,.scene-7 .text-wrapper,.venue-image-wrapper,.cercle-7",
//     1000,
//     "easeInOutCubic",
//     "@stagger(0, 200)"
//   ),
//   16100
// );
clip.addIncident(
  Top("130%", "80%", ".cercle-8", 1000, "easeInOutCubic"),
  16100
);
clip.addIncident(
  Top("130%", "40%", ".scene-7 .text-wrapper", 1000, "easeInOutCubic"),
  16100
);
clip.addIncident(
  Top("130%", "10%", ".venue-image-wrapper", 1000, "easeInOutCubic"),
  16100
);
clip.addIncident(Top("130%", "1%", ".cercle-7", 1000, "easeInOutCubic"), 16100);
clip.addIncident(
  Top("-100%", "0%", ".address-wrapper", 1000, "easeInOutCubic"),
  16400
);
// ///scene5
clip.addIncident(speakerCombo, 17300);
///scene8
clip.addIncident(
  Top(
    "0%",
    "100%",
    ".scene-8 .text",
    1500,
    "easeInOutCubic",
    "@expression(initParams.speekers.length*5300)"
  ),
  17000
);
clip.addIncident(
  Opacity(
    1,
    ".scene-8 .date-title,.link",
    800,
    "@expression(initParams.speekers.length*5300)"
  ),
  18700
);
clip.addIncident(
  Opacity(1, ".logo", 800, "@expression(initParams.speekers.length*5300)"),
  18200
);

export { clip };
