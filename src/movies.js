// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => {
        return movie.director;
    })
    return allDirectors;
}

// Bonus: clean the array of directors

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    
    const allSpielberg = moviesArray.filter(spielbergMovies => {
     if (spielbergMovies.director === "Steven Spielberg" && spielbergMovies.genre.includes('Drama')) return true;    
     })
    
 
     return allSpielberg.length;
 }

 console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const sumScores = moviesArray.reduce((acc, curr) => {
        if (curr.score === 0) return 0;
        
        else {
           return acc + curr.score;
        }
    }, 0)

    const avgScores = sumScores/moviesArray.length;

    return Number(avgScores.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDrama = moviesArray.filter(dramaList => {
        if (dramaList.genre.includes('Drama')){
            return true;
        }
        else {
            return 0;
        }
    })

    const sumDrama = allDrama.reduce((acc1, curr1) => {
        if (curr1.score === 0) {
            return 0;
        }
        else {
            return acc1 + curr1.score;  
        }
    }, 0)

    const avgDrama = sumDrama / allDrama.length;

    return Number(avgDrama.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesYear = moviesArray.sort((a, b) => {
        return a.year - b.year;
        
    })
    return Array.from(moviesYear);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const movieList = moviesArray.map(movieTitle => {
      return movieTitle.title;
    })
    const movieOrdered = movieList.sort();
    const top20 = movieOrdered.slice(0, 20);
    return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
