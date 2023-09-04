import { swiperCustom } from "./swiperCustom";
import { fixedMenu } from "./fixedMenu";
// import { fixedSidebar } from "./fixedSidebar";
import modals from "./modals";
import tabs from "./tabs";
import { getRangeSlider } from "./rangeSlider";
window.addEventListener('DOMContentLoaded', function () {
  swiperCustom();
  fixedMenu();
  modals()
  tabs()
  getRangeSlider()
  // fixedSidebar()
});