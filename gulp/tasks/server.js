import browserSync from "browser-sync";
import config from "../config";

const server = (cb) => {
  browserSync.create().init({
    server: {
      baseDir: config.build.root,
    },
    files: [
      config.watch.html,
      `${config.build.css}/*.css`,
      `${config.build.js}/*.js`,
      {
        match: [config.build.images, config.build.assets],
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });
  cb();
};

export default server;
