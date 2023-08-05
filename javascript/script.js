const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');
    console.log('jump');
}

document.addEventListener('keydown', jump);