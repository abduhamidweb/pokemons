const $ = function (selectName) {
    return document.querySelector(selectName)
}
const $a = function (selectName) {
  return document.querySelectoAll(selectName);
};


const crElement = function (tagName, className, contentt) {
  const nwElwmwnt = document.createElement(tagName);
  if (className) {
    nwElwmwnt.setAttribute("class", className);
  }
  if (contentt) {
    nwElwmwnt.innerHTML = contentt;
  }
  return nwElwmwnt;
};