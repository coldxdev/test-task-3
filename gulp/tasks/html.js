import gulp from "gulp";
import config from "../config";
import include from "gulp-file-include";
import webpHtml from "gulp-xv-webp-html";
export const htmlBuild = () =>
  gulp
    .src(`${config.src.html}/*.html`)
    .pipe(include({ prefix: "@" }))
    // .pipe(webpHtml(['.jpg', '.jpeg', '.png']))
    .pipe(gulp.dest(config.build.html));

export const htmlWatch = () => gulp.watch(config.watch.html, htmlBuild);
