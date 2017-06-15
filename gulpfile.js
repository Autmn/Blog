var gulp = require('gulp');
var sass = require('gulp-sass');


//配置sass将编绎后的css文件保存到.public/css下
gulp.task('sass', function () {
    gulp.src('./public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});
 
gulp.task('watch', function() {
    gulp.watch('./public/scss/*.scss', ['sass']);
});
 
gulp.task('default', ['sass','watch']);