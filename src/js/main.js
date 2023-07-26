import { swiperCustom } from "./swiperCustom";
import { fixedMenu } from "./fixedMenu";
import modals from "./modals";
import tabs from "./tabs";
window.addEventListener('DOMContentLoaded', function () {
  swiperCustom();
  fixedMenu();
  modals()
  tabs()
});