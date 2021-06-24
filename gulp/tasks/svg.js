import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import config from "../config";

const spriteGenerate = () =>
  gulp
    .src(`${config.src.svg}/**/*.svg`)
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../sprites/sprite.svg",
          },
        },
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    removeAttrs: {
                      attrs: ["class", "data-name"],
                    },
                  },
                  {
                    removeUselessStrokeAndFill: false,
                  },
                  {
                    inlineStyles: true,
                  },
                ],
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(config.build.images));

export const spritesBuild = gulp.parallel(spriteGenerate);

export const spritesWatch = () => {
  gulp.watch(`${config.watch.svg}/**/*.svg`, spriteGenerate);
};
