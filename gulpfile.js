const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

const paths = {
    styles: {
        src: './source/styles/*.scss',
        dest: './build/styles',
        maps: './maps'
    },
    scripts: {
        src: './source/scripts/*.js',
        dest: './build/scripts'
    },
    images: {
        src: './source/images/*',
        dest: './build/images'
    }
};

function compilaSass() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write(paths.styles.maps))
        .pipe(gulp.dest(paths.styles.dest));
}

function comprimeJavaScript() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest(paths.scripts.dest));
}

function comprimeImagens() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.src, compilaSass);
    gulp.watch(paths.scripts.src, comprimeJavaScript);
    gulp.watch(paths.images.src, comprimeImagens);
}

exports.default = gulp.series(
    gulp.parallel(compilaSass, comprimeJavaScript, comprimeImagens),
    watchFiles
);