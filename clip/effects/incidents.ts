import { CSSEffect } from "@donkeyclip/motorcortex";

export const Draw = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        strokeDashoffset: "0",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const FillLogo = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fill: "#21084f",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Top = (value, selector, duration, easing = "linear", delay = 0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const Left = (value, selector, duration, easing = "linear", delay = 0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
export const Right = (value, selector, duration, easing = "linear", delay = 0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        right: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay
    }
  );

export const Width = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Height = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Size = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height: value,
        width: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const FontWeight = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        fontWeight: value,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Scale = (value, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: value,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const Opacity = (
  value,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: value,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );
