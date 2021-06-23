import gulp from "gulp";
import config from "../config";
import scss from "gulp-sass";
import plumber from "gulp-plumber";
import magicImporter from "node-sass-magic-importer";
import autoprefixer from "gulp-autoprefixer";
import gulpIf from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import gcmq from "gulp-group-css-media-queries";

export const stylesBuild = () =>
  gulp
    .src(`${config.src.scss}/main.scss`)
    .pipe(plumber())
    .pipe(gulpIf(config.isDev, sourcemaps.init()))
    .pipe(scss({ importer: magicImporter() }))
    .pipe(gulpIf(config.isProd, gcmq()))
    .pipe(gulpIf(config.isProd, cleanCss({ level: 2 })))
    .pipe(gulpIf(config.isProd, autoprefixer()))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpIf(config.isDev, sourcemaps.write("sourcemaps/")))
    .pipe(gulp.dest(config.build.css));

export const stylesWatch = () => gulp.watch(config.watch.scss, stylesBuild);

// import webpCss from "gulp-webpcss";
// .pipe(
//   webpCss({
//     webpClass: "._webp",
//     noWebpClass: "._no-webp"
//   })
// )
