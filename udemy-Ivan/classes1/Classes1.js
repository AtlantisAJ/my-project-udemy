const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        let numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', "");
    
        while (numbersOfFilm == '' || numbersOfFilm == null || isNaN(numbersOfFilm)) {
            numbersOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', "");
        }
        return this.count = numbersOfFilm
    },
    detectPersonalLevel: (count) => {
        if (count >= 1 && count < 10) {
            alert('Просмотрено давольно мало фильмов :(')
        } else if (count >= 10 && count < 30) {
            alert('Вы классический зритель!')
        } else if (count >= 30) {
            alert('Вы киноман!!!')
        } else (
            alert('Произошла ошибка =(')
        )
    },
    rememberOfFilms: function() {
        for (let i = 0; i < 2; i++){
            const answerMoviePrompt = prompt('Один из последних просмотренных фильмов?', '').trim();
        
            const movieRating = prompt('На сколько его оцениваете?', '');
        
            if (answerMoviePrompt != null && movieRating !== null && answerMoviePrompt != '' && movieRating != '' & answerMoviePrompt.length < 50) {
                this.movies[answerMoviePrompt] = movieRating;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            return console.log(this)
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat) {
            this.privat = false
        } else {
            this.privat = true
        }
    },
    writeYourGenres: function() {
        // let result = [];
    
        // for (let i = 1; i <=3 ; i++){
        //     result.push(prompt(`Ваш любимый жанр под номером ${i}`, ''))
        // }

        // return this.genres = result;
        for (let i = 1; i <=3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели вовсе')
                i--
            }
            this.genres[i - 1] = genre;
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }
};

// personaMovieDB.start();

// personaMovieDB.detectPersonalLevel(personaMovieDB.count);

// personaMovieDB.rememberOfFilms();

// personaMovieDB.showMyDB();

personaMovieDB.writeYourGenres();
//console.log(personaMovieDB);
