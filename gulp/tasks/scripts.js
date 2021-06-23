import gulp from "gulp";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import browserify from "browserify";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify-es";
import config from "../config";
import gulpIf from "gulp-if";

export const scriptsBuild = () =>
  browserify(`${config.src.js}`, { debug: true })
    .transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()
    .on("error", function browserifyError(error) {
      console.log(error.stack);
      this.emit("end");
    })
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(gulpIf(config.isDev, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpIf(config.isProd, uglify()))
    .pipe(gulpIf(config.isDev, sourcemaps.write("/sourcemaps/")))
    .pipe(gulp.dest(config.build.js));

export const scriptsWatch = () => gulp.watch(config.watch.js, scriptsBuild);
