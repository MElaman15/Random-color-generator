const wrapper = document.querySelector('.wrapper');

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function initCols(count) {
    for (let i = 0; i < count; i++) {
        let item = document.createElement('div');
        item.style.background = randomColor();
        item.classList.add('item');

        let text = document.createElement('p');
        text.innerText = randomColor();

        wrapper.append(item)
        item.append(text)
    }
};

initCols(20);

const cols = document.querySelectorAll('.item');

for(let i = 0; i < cols.length; i++){
    cols[i].onclick = () => {
        navigator.clipboard.writeText(cols[i].children[0].innerText);
    }
}