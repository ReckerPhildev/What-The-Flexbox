var gulp = require('gulp');
var autoprefixer=require('gulp-autoprefixer');


gulp.tast('styles'.function(){
	gulp.src('css/style.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('build'))

});

gul TextTrackList('watch', function(){
	gulp.watch('css/style.css', ['styles'])
});