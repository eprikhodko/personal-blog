// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
const theme = {
  plain: {
    backgroundColor: "#fdfaf6",
    color: "rgb(54, 49, 61)",
  },
  styles: [
    {
      types: ["prolog", "doctype", "cdata"],
      style: {
        color: "#6c6783",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(104, 116, 139)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "hsl(220, 9%, 50%)",
        fontStyle: "italic",
      },
    },

    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["operator", "number"],
      style: {
        color: "rgb(12, 114, 198)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#c92c2c",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "rgb(12, 114, 198)",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(54, 49, 61)",
        fontStyle: "italic",
      },
    },
    {
      types: [
        "boolean",
        // "string",
        "entity",
        "url",
        // "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "hsl(286, 69%, 51%)",
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#2f9c0a",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
      },
    },
  ],
}

export default theme

// const theme = {
//   plain: {
//     color: "#d6deeb",
//     backgroundColor: "#011627",
//     fontFamily: "var(--font-family-syntax)",
//     fontSize: "16px",
//   },
//   styles: [
//     {
//       types: ["changed"],
//       style: {
//         color: "rgb(162, 191, 252)",
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["deleted"],
//       style: {
//         color: "rgba(239, 83, 80, 0.56)",
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["inserted", "attr-name"],
//       style: {
//         color: "rgb(173, 219, 103)",
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["comment"],
//       style: {
//         color: "rgb(99, 119, 119)",
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["string", "url"],
//       style: {
//         color: "rgb(173, 219, 103)",
//       },
//     },
//     {
//       types: ["variable"],
//       style: {
//         color: "rgb(214, 222, 235)",
//       },
//     },
//     {
//       types: ["number"],
//       style: {
//         color: "rgb(247, 140, 108)",
//       },
//     },
//     {
//       types: ["builtin", "char", "constant", "function"],
//       style: {
//         color: "rgb(130, 170, 255)",
//       },
//     },
//     {
//       // This was manually added after the auto-generation
//       // so that punctuations are not italicised
//       types: ["punctuation"],
//       style: {
//         color: "rgb(199, 146, 234)",
//       },
//     },
//     {
//       types: ["selector", "doctype"],
//       style: {
//         color: "rgb(199, 146, 234)",
//         fontStyle: "italic",
//       },
//     },
//     {
//       types: ["class-name"],
//       style: {
//         color: "rgb(255, 203, 139)",
//       },
//     },
//     {
//       types: ["tag", "operator", "keyword"],
//       style: {
//         color: "rgb(127, 219, 202)",
//       },
//     },
//     {
//       types: ["boolean"],
//       style: {
//         color: "rgb(255, 88, 116)",
//       },
//     },
//     {
//       types: ["property"],
//       style: {
//         color: "rgb(128, 203, 196)",
//       },
//     },
//     {
//       types: ["namespace"],
//       style: {
//         color: "rgb(178, 204, 214)",
//       },
//     },
//   ],
// }

// export default theme
