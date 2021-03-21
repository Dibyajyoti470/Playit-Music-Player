/* This script converts all SVG image elements with class icon-click to SVG DOM elements */

let icon_click_list = document.querySelectorAll(".icon-click");

icon_click_list.forEach((icon) => {
  icon.addEventListener("load", (ele) => {
    SVGInject(ele);
    console.log("Testing event listener");
  });
  console.log(icon);
  //   console.log("Testing");
});
