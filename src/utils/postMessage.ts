export const clevergyPostMessage = (data: { [key: string]: any }) => {
  window.postMessage({ clevergy: { ...data } }, "*");
};
