import gulp from "gulp";
import config from "../config";
import fs from "fs";

import plumber from "gulp-plumber";
import fonter from "gulp-fonter";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export const fontsOtfBuild = () =>
  gulp
    .src(`${config.src.fonts}/*.otf`)
    .pipe(plumber())
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(gulp.dest(config.src.fonts));

export const fontsBuild = () => {
  gulp
    .src(`${config.src.fonts}/*.ttf`)
    .pipe(plumber())
    .pipe(ttf2woff())
    .pipe(gulp.dest(config.build.fonts));
  return gulp
    .src(`${config.src.fonts}/*.ttf`)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(config.build.fonts));
};

export const connectFonts = (cb) => {
  let file = `${config.src.scss}/utils/_fonts.scss`;
  let fileContent = fs.readFileSync(`${config.src.scss}/utils/_fonts.scss`);
  if (fileContent == "") {
    fs.writeFile(file, "", cb);
    return fs.readdir(config.build.fonts, (err, items) => {
      if (items) {
        let c_fontname;
        for (let i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              file,
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
  cb();
};

export const assetsCopy = () =>
  gulp
    .src([`${config.src.assets}/**/*`, `!${config.src.fonts}/**/*`])
    .pipe(gulp.dest(config.build.assets));

export const assetsBuild = gulp.series(
  assetsCopy,
  fontsOtfBuild,
  fontsBuild,
  connectFonts
);
export const assetsWatch = () => gulp.watch(config.watch.assets, assetsCopy);
