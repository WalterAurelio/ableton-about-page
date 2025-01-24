import pkg from 'gulp';
const { src, dest } = pkg;
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

function minifyImages() {
  return src(['./src/assets/img/*.jpg', './src/assets/img/*.png'])
    .pipe(imagemin())
    .pipe(dest('./src/assets/img/min'));
}

function webpifyImages() {
  return src(['./src/assets/img/min/*.jpg', './src/assets/img/min/*.png'])
    .pipe(webp())
    .pipe(dest('./src/assets/img/webp'));
}

export const minimgs = minifyImages;
export const webpimgs = webpifyImages;