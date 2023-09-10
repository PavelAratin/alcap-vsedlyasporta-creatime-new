import { swiperCustom } from "./swiperCustom";
import { fixedMenu } from "./fixedMenu";
import modals from "./modals";
import tabs from "./tabs";
import { getRangeSlider } from "./rangeSlider";
import customeSelect from "./select";
window.addEventListener('DOMContentLoaded', function () {
  swiperCustom();
  fixedMenu();
  modals();
  tabs();
  getRangeSlider();
  customeSelect();
});