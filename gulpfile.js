var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

// 侦听文件改变执行任务
gulp.task('watch', function (cb) {
    gulp.watch('./rui/**/*', ['ruiall']);
});


gulp.task('ruiall', function () {

    var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];

    // RUI 全部 CSS 生成 包括动画，字体
    gulp.src('./rui/index.all.styl')
        .pipe(stylus({
            compress:false
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(rename('rui.all.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(gulp.dest('./test/css/'));;

    // // 字体图标测试用    


    gulp.src('./rui/index.styl')
        .pipe(stylus({
            compress:true
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(rename('rui.min.css'))
        .pipe(gulp.dest('./dist/css/'));

    // RUI 全部 CSS 生成   
    gulp.src('./rui/index.styl')
        .pipe(stylus({
            compress:true
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(rename('rui.min.css'))
        .pipe(gulp.dest('./dist/css/'));

    // RUI 其它框架生成［动画、字体］
    gulp.src(['./rui/animate.styl','./rui/icons/font-awesome.styl'])
        .pipe(stylus({
            compress:true
        }))
        .pipe(autoprefixer({
            browsers: browserslist,
            cascade: false
        }))
        .pipe(rename({
            suffix:".min"
        }))
        .pipe(gulp.dest('./dist/css/'));


    gulp.src('./rui/fonts/*')
        .pipe(gulp.dest('./test/fonts/'));

});


gulp.task('default', ['ruiall']);

