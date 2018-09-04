var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

function getRandomInt(min, max)
{
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function generateRandomColor(colors) {
    return colors[getRandomInt(0, 5)];
}

function alertIfDone() {
    var elements = document.querySelectorAll('div');
    var color = elements[0].style.background;
    var withColor = 1;
    for(let i = 1; i < elements.length; i++) {
        if(color === elements[i].style.background) {
            withColor++;
        }
    }
    if(withColor == elements.length) {
        alert('Готово!');
        
        return true;
    }
    return false;
}

window.onload = function () {
    var squaresNumber = prompt('Введите кол-во квадратов', '3');
    var body = document.querySelector('body');
    var content = '';
    for(let i = 0; i < squaresNumber; i++) {
        content += '<div class="el' + (i + 1) + '">';
    }
    for(let i = 0; i < squaresNumber; i++) {
        content += '</div>';
    }
    body.innerHTML = content;

    var elements = document.querySelectorAll('div');
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.position = 'absolute';
        elements[i].style.top = '50px';
        elements[i].style.left = '50px';
        elements[i].style.background = generateRandomColor(colors);
        elements[i].style.width = 100 * elements.length - 100 * i;
        elements[i].style.height =  100 * elements.length - 100 * i;
    }
    
    for(let i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {
            this.style.background = generateRandomColor(colors);
            alertIfDone();
        }
    }

    var timerId = setInterval(function() {
        var elemId = getRandomInt(0, squaresNumber - 1);
        var elements = document.querySelectorAll('div');
        elements[elemId].style.background = generateRandomColor(colors);
        if(alertIfDone(elemId)) {
            clearInterval(timerId);
        }
    }, 2000);
};
