let numbersOfFilm;

function start(){
    numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numbersOfFilm == '' || numbersOfFilm == null || isNaN(numbersOfFilm)) {
        numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personaMovieDB = {
    count: numbersOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel(count){
    if (count >= 1 && count < 10) {
        alert('Просмотрено давольно мало фильмов')
    } else if (count >= 10 && count < 30) {
        alert('Вы классический зритель')
    } else if (count >= 30) {
        alert('Вы киноман')
    } else (
        alert('Произошла ошибка')
    )
};

detectPersonalLevel(personaMovieDB.count);

function rememberOfFilms() {
    for (let i = 0; i < 2; i++){
        const answerMoviePrompt = prompt('Один из последних просмотренных фильмов?', '').trim();
    
        const movieRating = prompt('На сколько его оцениваете?', '');
    
        if (answerMoviePrompt != null && movieRating !== null && answerMoviePrompt != '' && movieRating != '' & answerMoviePrompt.length < 50) {
            personaMovieDB.movies[answerMoviePrompt] = movieRating;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
};

rememberOfFilms();

function showMyDB() {
    if (!personaMovieDB.privat) {
        return console.log(personaMovieDB)
    }
}

showMyDB();

function writeYourGenres() {
    let result = [];
    
    for (let i = 1; i <=3 ; i++){
        result.push(prompt(`Ваш любимый жанр под номером ${i}`, ''))
    }
    return personaMovieDB.genres = result;
};

writeYourGenres();

//console.log(personaMovieDB);