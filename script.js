const battaryLoad = () => {
    let batt = document.getElementById('battry');

    
    batt.innerHTML = '<img src="one.png" class="img">';

    setTimeout(() => {
        batt.innerHTML = '<img src="two.png" class="img">';
        
    }, 500);

    setTimeout(() => {
        batt.innerHTML = '<img src="three.png" class="img">';
    }, 2000);

    setTimeout(() => {
        batt.innerHTML = '<img src="four.png" class="img">';
    }, 3000);

  
}

battaryLoad();

setInterval(battaryLoad, 4000);