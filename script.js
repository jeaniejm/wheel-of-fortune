(function () {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;
    let currentWinningNumber = 0;
    let winningOrder = [40, 80, 125, 170, 215, 260, 305, 340];
    var snd = new Audio("./assets/sound.m4a");


    window.onload = getWeekDay();
    function getWeekDay() {
      let d = new Date();
      let weekday = new Array(7);
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Happy Friday!";
      weekday[6] = "It's the weekend, what are you doing here?";
      weekday[7] = "Come back tomorrow 10am!";
      let n = weekday[d.getDay()];
      document.getElementById("weekday").innerHTML = n;
    };

    
    function hasFallenIntoThatRange() {
    currentWinningNumber = Math.floor(Math.random() * winningOrder.length);
    landedNumber = winningOrder[currentWinningNumber];
    console.log(winningOrder, currentWinningNumber, winningOrder[currentWinningNumber]);
    winningOrder.splice(currentWinningNumber, 1);
    if (winningOrder.length < 0) {
    return;
    }
    return landedNumber;
    }
    
    startButton.addEventListener('click', () => {
    startButton.getElementsByClassName.pointerEvents = 'none';
    deg = hasFallenIntoThatRange();
    wheel.style.transition = 'all 3s ease-out';
    wheel.style.transitionDuration = '3s';
    wheel.style.transform = `rotate(${deg + 360}deg)`;
    wheel.classList.add('blur');
    if (deg > 0) snd.play();
    });
    
    wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
   })();