//объявляем переменные координат размещения корабля
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

//объявляем переменные действий пользователя
let guess; // текущее введенное значение
let hits = 0; // число попаданий
let guesses = 0; // число попыток

//объявляем переменную признака потопления корабля
let isSunk = false;

//цикл пока корабль не будет потоплен
while (isSunk == false) {
    //запросить координаты выстрела
    guess = prompt("Ready, aim fire! (enter a number 0-6):");
    //проверить корректность введенного значения
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        //прибавляем 1 к количеству попыток
        ++guesses;
        //проверить попадание в корабль
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
                //прибавить 1 к количеству попаданий
                ++hits;
            //проверка потопляемости корабля
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}

//вывод отчета
let stats = "You took " +
             guesses + 
             " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3 / guesses);
alert(stats);