import { swiperCustom } from "./swiperCustom";
import { fixedMenu } from "./fixedMenu";
// import { fixedSidebar } from "./fixedSidebar";
import modals from "./modals";
import tabs from "./tabs";
import { getRangeSlider } from "./rangeSlider";
import { toggleDisplayPopup } from "./togglePopup";
window.addEventListener('DOMContentLoaded', function () {
  swiperCustom();
  fixedMenu();
  modals()
  tabs()
  getRangeSlider()
  toggleDisplayPopup()
  // fixedSidebar()
});