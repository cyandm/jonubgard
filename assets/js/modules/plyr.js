import Plyr from "plyr";
import "plyr/dist/plyr.css";

export function ThemePlyr() {
  const plyrs = document.querySelectorAll(".video-plyr");

  plyrs.forEach((plyr) => {
    const player = new Plyr(plyr);
  });
}
