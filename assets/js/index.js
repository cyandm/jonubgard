/**
 * Main entry point for the theme's JavaScript.
 * you must add any functions for every javascript file to the import statement below.
 */

import { Modals } from "./functions/modals";
import { setVariables } from "./functions/setVariables";
import { shareBtn } from "./functions/shareBtn";
import { register } from "swiper/element/bundle";
import videoCover from "./modules/videoCover";
import { ThemePlyr } from "./modules/plyr";
import photoswipe from "./modules/photoswipe";
import fancybox from "./modules/fancybox";
import travelGalleryFancybox from "./modules/travelGalleryFancybox";
import galleryFancybox from "./modules/galleryFancybox";
import { Tabs } from "./functions/tabs";
import { Accordion } from "./functions/accordion";
import { BookingForm } from "./functions/bookingForm";
import { TravelGallery } from "./functions/travelGallery";
import { FaqTabs } from "./functions/faq";
import { FaqCard } from "./functions/faq";
import { SubMenuMobile } from "./functions/subMenuMobile";
import { AddIcons } from "./functions/subMenuDesktop";
import { Finder } from "./functions/finder";
import { SearchPage } from "./functions/search";
import { Htmx } from "./functions/htmx";
import { TextForm } from "./functions/textForm";

Modals();
setVariables();
shareBtn();
register();
videoCover();
ThemePlyr();
photoswipe();
fancybox();
travelGalleryFancybox();
galleryFancybox();
Tabs();
Accordion();
BookingForm();
TravelGallery();
FaqTabs();
FaqCard();
SubMenuMobile();
AddIcons();
Finder();
SearchPage();
Htmx();
TextForm();