// plugin  var
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    connect = require('gulp-connect-php'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    extender = require('gulp-html-extend'),
    fileinclude = require('gulp-file-include'),
    zip = require('gulp-zip'),
    gulpCopy = require('gulp-copy'),
    moment = require("moment"),
    gulpPlumber = require('gulp-plumber');

// common
var reload = browserSync.reload;

//path
var web = {
    sass: [
        'sass/*.scss',
        'sass/**/*.scss',
        'sass/**/**/*.scss'
    ],
    html: [
        'app/*.html',
        'app/**/*.html'
    ],
    zips: [
        '*.html',
        'css/*.css'
    ],
    move: [
         'js/*.',
         'css/*',
         'images/*',
         '*.html'
    ]
    // images: 'resources/assets/images/*',
    // fonts: ['resources/assets/fonts/*', 'resources/assets/fonts/**/*'],
    // sass: [
    //     'resources/assets/sass/*.scss',
    //     'resources/assets/sass/views/vender/**/*.scss'
    // ],
    // tmp: 'resources/assets/tmp/css/*.css'
};




gulp.task('css', function () {
    var plugins = [
        autoprefixer({
            broswer: ['last 1 vrsion']
        })
    ];
    return gulp.src('./css/*.css')
        .pipe(gulpPlumber())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css/autoprefixer'));
});


//  sass
gulp.task('styles', function () {
    gulp.src(web.sass) //要處理的scss檔案
        //  .pipe(gulpPlumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'expanded' // compact , expanded, nested
        }))
        .pipe(gulp.dest('css')) //指定編譯後的路徑

});

//html
gulp.task('fileinclude', function () {
    gulp.src(['app/*.html'])
        .pipe(gulpPlumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

//move fifle

gulp.task('copy' , function(){
  return gulp.src(web.move, {base:'./'})   
             .pipe(gulp.dest('./dist'));
});

//打包

gulp.task('zipfile', function () {
    var timeStamp = moment().format("YYYY-MM-D_HH-mm");
    return gulp.src(['dist/*' ,'dist/**/*']) //要壓縮的檔案
        .pipe(gulpPlumber())
        .pipe(zip('archive_' + timeStamp + '.zip'))
        .pipe(gulp.dest('compress'))

});


//broswerSync static
gulp.task('static', ['styles'], function () {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
    gulp.watch(web.sass, ['styles']).on('change', reload); //watch  sass
    gulp.watch('css/*.css', ['css']).on('change', reload); //watch  sass
    gulp.watch('*.html').on('change', reload); //watch html
    gulp.watch( web.html , ['fileinclude'] ).on('change', reload); //watch template
    gulp.watch( web.move , ['copy'] ).on('change', reload); //watch template
  
});


gulp.task('compress',['css','styles','fileinclude','copy'] ,function() {
  // Do stuff
});


//執行指令

gulp.task('default', ['static']);
gulp.task('zip', ['compress']);
