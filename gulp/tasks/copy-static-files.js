var gulp = require('gulp');

gulp.task('copy-misc-files', function() {
    return gulp.src(['public/sitemap.xml', 'public/**/index.xml', 'public/tags/**/*.xml', 'public/**/sharing.jpg', 'public/favicon*', 'public/apple-icon*', 'public/android-icon*', 'public/ms-icon*', 'public/manifest.json', 'public/browserconfig.xml', 'public/**/*.pdf', 'public/**/*.gif', 'public/_redirects', 'public/robots.txt'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-fonts', function() {
    return gulp.src('public/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
})

gulp.task('copy-css-maps', function() {
    return gulp.src('public/css/**/*.map')
        .pipe(gulp.dest('dist/css'));
})

gulp.task('copy-other-images', function() {
  return gulp.src(['public/**/*.png', 'public/**/*.jpg','public/**/*.jpeg',
          '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg', '!**/logo-square.*', '!public/img/sponsor/*.*', '!public/**/organizers/*.jpg'])
      .pipe(gulp.dest('dist'));
})

gulp.task('copy-old-images', function () {
  return gulp.src(['public/events/2015*/**/', 'public/events/**/2016*/**/', '!**/*.html'])
    .pipe(gulp.dest('dist/events'));
});

gulp.task('copy-static-files', gulp.parallel('copy-misc-files', 'copy-fonts', 'copy-css-maps', 'copy-old-images'))
