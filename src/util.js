import React from "react";
/* eslint-disable no-param-reassign */
export const withNoPadding = component => (
  <div className="sb-no-padding">{component}</div>
); // eslint-disable-line
export const trapFocus = (element, prepend, append) => {
  if (!element) {
    return;
  }
  const KEYCODE_TAB = 9;
  const focusableEls = Array.prototype.slice.call(
    element.querySelectorAll(
      'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    )
  );
  if (prepend) {
    focusableEls.unshift(document.querySelector(prepend));
  }
  if (append) {
    focusableEls.push(document.querySelector(append));
  }
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  // focus first element
  if (firstFocusableEl) {
    firstFocusableEl.tabIndex = -1;
    firstFocusableEl.focus();
    firstFocusableEl.tabIndex = 0;
  }

  const keydownHandler = e => {
    const isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (
        typeof document !== "undefined" &&
        document.activeElement === firstFocusableEl
      ) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else if (
      typeof document !== "undefined" &&
      document.activeElement === lastFocusableEl
    ) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  };
  element.addEventListener("keydown", keydownHandler);
  return () => {
    element.removeEventListener("keydown", keydownHandler);
  };
};

// Consolidating DOM check with single function. Should return bool true|false.
export const canUseDOM = () => {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement &&
    (typeof isServer === "undefined" || global.isServer !== true)
  );
};

export const scrollElement = (element, to, scrollType, duration) => {
  if (!element) {
    return;
  }
  const easing = (t, b, c, d) => {
    return c * (t / d) * (t / d) + b;
  };
  const startDate = new Date().getTime();
  const start = element[scrollType];
  const animateScroll = () => {
    const currentTime = new Date().getTime() - startDate;
    element[scrollType] = Number(
      easing(currentTime, start, to - start, duration)
    );
    if (canUseDOM() && currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      element[scrollType] = to; // eslint-disable-line no-param-reassign
    }
  };
  animateScroll();
};

export const blurTextField = el => {
  const textField = document.querySelector(el);
  textField.blur();
};

export const bodyScroll = bool => {
  if (typeof document !== "undefined") {
    return bool
      ? document.body.removeAttribute("data-dialog")
      : document.body.setAttribute("data-dialog", "open");
  }
  return null;
};

export const debounce = (fn, ms) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this);
    }, ms);
  };
};
