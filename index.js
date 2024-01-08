const buttons = document.querySelectorAll('.bnt');
const textarea = document.querySelector('textarea');

const delete_bnt = document.querySelector('.delete');
const shift_bnt = document.querySelector('.shift');
const space_bnt = document.querySelector('.space');

let chars = [];

buttons.forEach(bnt => {
    bnt.addEventListener("click", () => {
        textarea.value += bnt.innerText;
        chars = textarea.value.split('');
    });
});

delete_bnt.addEventListener("click", () => {
    chars.pop()
    textarea.value = chars.join('');
});

space_bnt.addEventListener("click", () => {
    chars.push(' ')
    textarea.value = chars.join('');    
});

shift_bnt.addEventListener("click", () => {
    buttons.forEach(bnt => {
        bnt.classList.toggle("upper")
    })
});