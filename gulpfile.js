const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('praise', () =>
    gulp.src(['./src/**/*.es.js', '!./src/public/*/*.es.js'])
        .pipe(babel({
            presets: ['es2015', 'stage-0']
        }))
        .pipe(gulp.dest('./build'))
);

gulp.task('default',['praise'], () =>
    gulp.watch(['./src/**/*.es.js', '!./src/public/*/*.es.js'], ['praise'])
);