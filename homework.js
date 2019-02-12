// -------------------------- Home work 6 --------------------------
// -------------------------- Кириченко Игорь --------------------------

// 1. По нажатию на кнопку "btn-msg" должен появиться алерт
// с тем текстом который находится в атрибуте data-text у кнопки.

let btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', function (e) {
    alert(e.target.dataset.text);
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
// она становится прежнего цвета. Цвет менять можно через добавление класса.


btnMsg.addEventListener('mouseover', function() { btnMsg.style.background = '#ff0000'; });
btnMsg.addEventListener('mouseleave', function() { btnMsg.style.background = ''; });


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.


document.body.addEventListener('click', function(e) { 
    document.getElementById('tag').textContent = 'Click Tag: ' +  e.target.tagName;
 });


 // 4. При нажатии на кнопку btn-generate добавлять в список ul
 // элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д.


let btnGenerate = document.getElementById('btn-generate');
let ul = document.querySelector('ul');


btnGenerate.addEventListener('click', function() { 
    
    let li = document.createElement('li');
    li.textContent = 'Item ' + (ul.children.length + 1);
    ul.appendChild(li);  
  });