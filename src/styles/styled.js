import { createElement, forwardRef } from "react";

const styleRegistry = new Map();
let styleTag = null;

const ensureStyleTag = () => {
  if (typeof document === "undefined") {
    return null;
  }

  if (!styleTag) {
    styleTag = document.querySelector("style[data-app-styled]");

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.setAttribute("data-app-styled", "true");
      document.head.appendChild(styleTag);
    }
  }

  return styleTag;
};

const hashString = (value) => {
  let hash = 5381;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }

  return `sc-${(hash >>> 0).toString(36)}`;
};

const cssBlock = (strings, interpolations) => ({
  __styled_css__: true,
  strings,
  interpolations
});

const resolveInterpolation = (value, props) => {
  if (value == null || value === false) {
    return "";
  }

  if (typeof value === "function") {
    return resolveInterpolation(value(props), props);
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveInterpolation(item, props)).join("");
  }

  if (value.__styled_css__) {
    return resolveTemplate(value.strings, value.interpolations, props);
  }

  return String(value);
};

const resolveTemplate = (strings, interpolations, props) =>
  strings.reduce((result, chunk, index) => {
    const interpolation = index < interpolations.length
      ? resolveInterpolation(interpolations[index], props)
      : "";

    return result + chunk + interpolation;
  }, "");

const compileCss = (className, rawCss) => {
  const trimmedCss = rawCss.trim();

  if (!trimmedCss) {
    return "";
  }

  if (trimmedCss.includes("&")) {
    return trimmedCss.replaceAll("&", `.${className}`);
  }

  return `.${className} { ${trimmedCss} }`;
};

const injectCss = (className, cssText) => {
  if (!cssText || styleRegistry.get(className) === cssText) {
    return;
  }

  const tag = ensureStyleTag();

  if (!tag) {
    return;
  }

  styleRegistry.set(className, cssText);
  tag.appendChild(document.createTextNode(`${cssText}\n`));
};

const createStyledComponent = (tag) => (strings, ...interpolations) =>
  forwardRef(function StyledComponent(
    { as: asProp, children, className: externalClassName, ...restProps },
    ref
  ) {
    const rawCss = resolveTemplate(strings, interpolations, restProps);
    const generatedClassName = hashString(rawCss);

    injectCss(generatedClassName, compileCss(generatedClassName, rawCss));

    const mergedClassName = typeof externalClassName === "function"
      ? (...args) => [generatedClassName, externalClassName(...args)].filter(Boolean).join(" ")
      : [generatedClassName, externalClassName].filter(Boolean).join(" ");

    const componentProps = Object.entries(restProps).reduce((accumulator, [key, value]) => {
      if (!key.startsWith("$")) {
        accumulator[key] = value;
      }

      return accumulator;
    }, {});

    return createElement(asProp || tag, {
      ...componentProps,
      className: mergedClassName,
      ref
    }, children);
  });

const styled = new Proxy(
  (tag) => createStyledComponent(tag),
  {
    get: (_, property) => createStyledComponent(property)
  }
);

export const css = (strings, ...interpolations) => cssBlock(strings, interpolations);

export default styled;
