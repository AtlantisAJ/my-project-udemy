const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('#first');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[3].classList.add('red'))

// btns[2].addEventListener('click', () => {
//     // if (!btns[2].classList.contains('red')) {
//     //     btns[2].classList.add('red')
//     // } else {
//     //     btns[2].classList.remove('red')
//     // }
//     btns[2].classList.toggle('red')
// })

btns.forEach((btn) => {
    btn.addEventListener('', () => {
        btn.classList.toggle('red')
    })
})

wrapper.addEventListener('click', () => {
    if (event.target && event.target.matches('button.red')) {
        console.log('You press btn')
    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);