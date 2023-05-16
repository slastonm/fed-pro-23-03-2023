const {series, parallel, src, dest, watch} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const image = require('gulp-imagemin');

function defaultTask(cb) {
    console.log('Hello gulp project');
    cb();
}
function minCss(cb) {
    console.log('Minify CSS');
    cb();
}
function js(cb) {
    console.log('Minify js');
    cb();
}
function html(cb) {
    console.log('Minify html');
    cb();
}
exports.dev = series(minCss, defaultTask);
exports.default = defaultTask;

// function move(){
//     return src('app/index.js').pipe(dest('build/'));
// }
// function move(){
//     return src('app/*.js').pipe(dest('build/'));
// }
// function move(){
//     return src('app/**/*.js').pipe(dest('build/'));
// }
function move(){
    return src(['app/**/*.js', '!app/index.js']).pipe(dest('build/'));
}

// gulp.task('minify-css', () => {
//     return gulp.src('styles/*.css')
//       .pipe(cleanCSS({compatibility: 'ie8'}))
//       .pipe(gulp.dest('dist'));
//   });
function minifyCss(){
    return src('app/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('build/'));
}

function scss2css(){
    return src('app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('compile.css'))
    .pipe(dest('build/'));

}

// exports.production = parallel(minCss, defaultTask, js, html);
exports.production = parallel(
    series(minCss, defaultTask),
    series(js, html)
);
function minImages(){
    return src('app/img/*')
    .pipe(image([
        image.svgo({
            plugins: [
                {
                    removeViewBox: true,
                    removeAttrs: true
                }
            ]
        }),
        image.gifsicle({
            plugins:[
                {
                    optimizationLevel:3
                }
            ]
        })
    ], {
        verbose: true
    }))
    .pipe(dest('build/img-min/'));
}
exports.minImages = minImages;


function watchman(){
    watch('app/*.css', {delay: 1000}, minifyCss);
    watch('app/*.scss',  scss2css);
    watch('app/*', {events:'addDir'}, function(cb){
        console.log('New directory');
        cb();
    });
}
exports.watchman = watchman;

exports.move = move;