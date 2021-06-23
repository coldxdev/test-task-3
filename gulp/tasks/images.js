import gulp from "gulp";
import config from "../config";
import changed from "gulp-changed";
import imagemin from "gulp-imagemin";
import imageminPng from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import gulpIf from "gulp-if";
import rename from "gulp-rename";

const imagesCopy = () =>
  gulp
    .src(`${config.src.images}/**/*.{png,jpg,jpeg,svg,webp}`)
    .pipe(changed(`${config.build.images}/**/*`))
    .pipe(
      gulpIf(
        config.isProd,
        imagemin([
          imagemin.mozjpeg({ quality: 80 }),
          imageminPng({ quality: [0.8, 0.9] }),
          imagemin.svgo()
        ])
      )
    )
    .pipe(gulp.dest(config.build.images));

const imagesConvertToWebp = () =>
  gulp
    .src(`${config.src.images}/**/*.{jpg,jpeg,png}`)
    .pipe(changed(config.build.images, { extension: ".webp" }))
    .pipe(imagemin([imageminWebp({ quality: 80 })]))
    .pipe(
      rename({
        extname: ".webp",
      })
    )
    .pipe(gulp.dest(config.build.images));

export const imagesBuild = gulp.series(imagesCopy, imagesConvertToWebp);

export const imagesWatch = () => gulp.watch(config.watch.images, imagesBuild);
