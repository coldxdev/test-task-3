import gulp from "gulp";
import config from "./gulp/config";
import clean from "./gulp/tasks/clean";
import server from "./gulp/tasks/server";

import { htmlBuild, htmlWatch } from "./gulp/tasks/html";
import { scriptsBuild, scriptsWatch } from "./gulp/tasks/scripts";
import { stylesBuild, stylesWatch } from "./gulp/tasks/styles";
import { assetsBuild, assetsWatch } from "./gulp/tasks/assets";
import { imagesBuild, imagesWatch } from "./gulp/tasks/images";
import { spritesBuild, spritesWatch } from "./gulp/tasks/svg";

config.setEnv();

export const build = gulp.series(
  clean,
  htmlBuild,
  stylesBuild,
  scriptsBuild,
  assetsBuild,
  imagesBuild,
  spritesBuild
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    htmlWatch,
    scriptsWatch,
    stylesWatch,
    assetsWatch,
    imagesWatch,
    spritesWatch
  )
);
