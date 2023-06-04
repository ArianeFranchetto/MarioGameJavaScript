const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const toad = document.querySelector('.toad');
const moedas = document.querySelector('.moedas');


function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  



    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {

     
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'



        clearInterval(loop);

    }

}, 10)

const loopToad = setInterval (() => {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const toadPosition = toad.offsetLeft;

    if(toadPosition <= 150 && toadPosition > 0 && marioPosition < 70) {
        mario.style.height = '200px'
        toad.style.width = '0px'
    }

}, 20)

/*const loopMoedas = setInterval(() => {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const moedasPosition = toad.offsetLeft;
    


if(moedasPosition <= 20 && moedasPosition > 0 && marioPosition < 250) {

    

}

},30)*/


		





document.addEventListener('keydown', jump)