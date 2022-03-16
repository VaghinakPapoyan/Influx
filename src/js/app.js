import * as flsFunctions from "./modules/functions.js";
import * as onClick from "./modules/onClick.js";
import iSeeYou from "./modules/addActiveClass.js";

iSeeYou()
window.onscroll = () => iSeeYou();
window.addActiveClass = onClick.addActiveClass;
window.slider = onClick.slider;
window.sliderLeft = onClick.sliderLeft;

flsFunctions.isWebp();