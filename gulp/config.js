const SOURCE_PATH = "src";
const BUILD_PATH = "build";

const config = {
  src: {
    root: SOURCE_PATH,
    html: `${SOURCE_PATH}/`,
    scss: `${SOURCE_PATH}/scss`,
    js: `${SOURCE_PATH}/js/main.js`,
    images: `${SOURCE_PATH}/images`,
    assets: `${SOURCE_PATH}/assets`,
    fonts: `${SOURCE_PATH}/assets/fonts`,
    svg: `${SOURCE_PATH}/images/icons`
  },
  build: {
    root: BUILD_PATH,
    html: `${BUILD_PATH}`,
    css: `${BUILD_PATH}/css`,
    js: `${BUILD_PATH}/js`,
    assets: `${BUILD_PATH}/assets`,
    fonts: `${BUILD_PATH}/assets/fonts`,
    images: `${BUILD_PATH}/images`,
    sprite: `${BUILD_PATH}/images/icons`
  },
  watch: {
    html: `${SOURCE_PATH}/**/*.html`,
    scss: `${SOURCE_PATH}/scss/**/*.{scss,css}`,
    js: `${SOURCE_PATH}/js/**/*.js`,
    images: `${SOURCE_PATH}/images/**/*.{png,jpg,jpeg,svg,webp}`,
    assets: `${SOURCE_PATH}/assets/**/**`,
    svg: `${SOURCE_PATH}/icons/**/*.svg`
  },
  setEnv() {
    this.isProd = process.argv.includes("--production");
    this.isDev = !this.isProd;
  },
};

export default config;
