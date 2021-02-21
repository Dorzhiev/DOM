const books = document.querySelectorAll('.book'),
    li = document.querySelectorAll('li'),
    titels = document.querySelectorAll('a'),
    spam = document.querySelector('.adv'),
    h1 = document.querySelector('h1');

h1.insertAdjacentText('beforebegin', '✎'); // текст над тэгом H1
// h1.insertAdjacentText('afterend', 'afterend');
h1.insertAdjacentText('afterbegin', '✵ '); // текст перед тэгом H1
h1.insertAdjacentText('beforeend', ' ⚝'); // текст после тэга H1

console.log(books);
console.log(li);
console.log(titels);
spam.remove(); //удалил спам 
titels[4].textContent = 'Книга 3. this и Прототипы Объектов';//

const newElem = document.createElement('li');  //создал елемент 
newElem.textContent = 'Глава 8: За пределами ES6';  //добавили текст
li[25].after(newElem);  //добавили в 6ю книгу 

books[5].after(books[2]);
books[0].before(books[1]);
books[3].before(books[4]);


li[3].after(li[6]);
li[6].after(li[8]);
li[9].after(li[2]);

li[47].before(li[55]);
li[50].after(li[48]);
li[53].after(li[51]);