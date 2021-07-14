import mem from 'mem';
export var ToastTypes;
(function (ToastTypes) {
  ToastTypes["neutral"] = "neutral";
  ToastTypes["success"] = "success";
  ToastTypes["warn"] = "warn";
  ToastTypes["danger"] = "danger";
})(ToastTypes || (ToastTypes = {}));
export var ToastPositions;
(function (ToastPositions) {
  ToastPositions["topStart"] = "topStart";
  ToastPositions["topCenter"] = "topCenter";
  ToastPositions["topEnd"] = "topEnd";
  ToastPositions["bottomStart"] = "bottomStart";
  ToastPositions["bottomCenter"] = "bottomCenter";
  ToastPositions["bottomEnd"] = "bottomEnd";
})(ToastPositions || (ToastPositions = {}));
const init = (options) => {
  const toastContainer = document.querySelector('.stencila-toast-container');
  if (toastContainer) {
    return toastContainer;
  }
  const container = document.createElement('animate-presence');
  container.classList.add('stencila-toast-container');
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('role', 'status');
  // TODO: Look into `aria-relevant="additions"` not silencing node removals in VoiceOver
  container.setAttribute('aria-relevant', 'additions');
  if (options.position !== undefined) {
    container.setAttribute('position', options.position);
  }
  document.body.append(container);
  return container;
};
// Base Toast controller function for managing the presentation of `stencila-toast` components
export const toastController = (baseOptions = {}) => {
  const present = (message, options = {}) => {
    var _a, _b, _c, _d, _e, _f;
    const el = document.createElement('stencila-toast');
    el.type = (_b = (_a = options.type) !== null && _a !== void 0 ? _a : baseOptions.type) !== null && _b !== void 0 ? _b : ToastTypes.neutral;
    el.position =
      (_d = (_c = options.position) !== null && _c !== void 0 ? _c : baseOptions.position) !== null && _d !== void 0 ? _d : ToastPositions.topCenter;
    el.dismissable = (_e = options.dismissable) !== null && _e !== void 0 ? _e : baseOptions.dismissable;
    el.duration = (_f = options.duration) !== null && _f !== void 0 ? _f : baseOptions.duration;
    el.innerText = message;
    init(baseOptions).append(el);
  };
  /** Memoize the notification function based on the message string and options to avoid showing
   * duplicate notifications in quick succession.
   */
  const memoizedPresent = mem(present, {
    cacheKey: JSON.stringify,
    maxAge: 150,
  });
  return {
    present: memoizedPresent,
  };
};
