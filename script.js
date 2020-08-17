(function () {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;
    let currentWinningNumber = 0;
    let winningOrder = [40, 80, 125, 170, 215, 260, 305, 340];
    
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
    wheel.style.transition = 'all 1s ease-out';
    wheel.style.transitionDuTration = '1s';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
    });
    
    wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
   })();