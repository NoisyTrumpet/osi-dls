import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import scss from "rollup-plugin-scss";
import svg from "rollup-plugin-svg";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";

import react from "react";
import reactDom from "react-dom";
import PropTypes from "prop-types";

export const buildPath = "lib";

export default [
  {
    input: "./src/index.js",
    output: {
      file: `${buildPath}/components.js`,
      format: "cjs"
    },
    plugins: [
      json(),
      resolve(),
      scss({
        output: `${buildPath}/index.css`
      }),
      babel({
        exclude: "node_modules/**"
      }),
      svg(),
      commonjs({
        include: "node_modules/**",
        namedExports: {
          react: Object.keys(react),
          "react-dom": Object.keys(reactDom),
          "react-responsive": ["useMediaQuery"],
          "prop-types": Object.keys(PropTypes),
          "node_modules/react-is/index.js": ["isValidElementType"]
        }
      }),
      copy({
        targets: [{ src: "src/styles", dest: "lib" }]
      })
    ],
    external: [
      "react",
      "react-dom",
      "react-router-dom",
      "prop-types",
      "formik",
      "yup",
      "react-inlinesvg"
    ]
  },
  {
    input: "./src/ContentComponents/index.js",
    output: {
      dir: `${buildPath}/ContentComponents`,
      format: "cjs"
    },
    plugins: [
      json(),
      resolve(),
      scss({
        output: `${buildPath}/ContentComponents/index.css`
      }),
      babel({
        exclude: "node_modules/**"
      }),
      svg(),
      commonjs({
        include: "node_modules/**",
        namedExports: {
          react: Object.keys(react),
          "react-dom": Object.keys(reactDom),
          "react-responsive": ["useMediaQuery"],
          "prop-types": Object.keys(PropTypes),
          "node_modules/react-is/index.js": ["isValidElementType"]
        }
      })
    ],
    external: [
      "react",
      "react-dom",
      "react-router-dom",
      "prop-types",
      "formik",
      "yup",
      "react-inlinesvg",
      "interweave"
    ]
  }
  // {
  //   input: './src/widgets/index.js',
  //   output: {
  //     dir: `${buildPath}/widgets`,
  //     format: 'cjs',
  //   },
  //   plugins: [
  //     json(),
  //     resolve(),
  //     scss({
  //       output: `${buildPath}/widgets/index.css`,
  //     }),
  //     babel({
  //       exclude: 'node_modules/**',
  //     }),
  //     svg(),
  //     commonjs({
  //       include: 'node_modules/**',
  //       namedExports: {
  //         react: Object.keys(react),
  //         'react-dom': Object.keys(reactDom),
  //         'react-responsive': ['useMediaQuery'],
  //         'prop-types': Object.keys(PropTypes),
  //         'node_modules/react-is/index.js': ['isValidElementType'],
  //       },
  //     })
  //   ],
  //   external: [
  //     'react',
  //     'react-dom',
  //     'react-router-dom',
  //     'prop-types',
  //     'formik',
  //     'yup',
  //     'react-inlinesvg',
  //     'interweave',
  //     '@dotcom/api-middleware',
  //   ],
  // },
];
