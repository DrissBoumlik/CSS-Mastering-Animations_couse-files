var btnPlay = document.getElementById('play');
var box = document.getElementById('box');
var points = document.getElementById('points');
var angle = 45;
var turn = true;
var start;
var totalPoints = 1000;

btnPlay.addEventListener('click', function(){
    if (turn) {
        updateElements([btnPlay, box], ['orangered', '#bbb'], ['stop', '']);
        
        start = setInterval(function(){
            box.style.transform = 'rotate(' + angle + 'deg)';
            angle += 45;
        }, 50);
    } else { // stop the game
        clearInterval(start);
        var stoppedAt = angle - 45;
        var margin = stoppedAt % 360;
        
        if (margin == 0) { // winner
            updateElements([box], ['#28a745'], ['winner']);
            totalPoints += 1000;
        } else { // loser
            updateElements([box], ['orangered'], ['loser']);
            totalPoints -= (360 - margin);
        }
        updateElements([btnPlay], ['#28a745'], ['play']);
        points.innerText = totalPoints;
    }
    turn = !turn;
});

function updateElements(elements, bgColors, texts) {
    for(i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = bgColors[i];
        elements[i].innerText = texts[i];
    }
}