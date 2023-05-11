const {series, parallel, src, dest} = require('gulp');

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

// exports.production = parallel(minCss, defaultTask, js, html);
exports.production = parallel(
    series(minCss, defaultTask),
    series(js, html)
);

exports.move = move;