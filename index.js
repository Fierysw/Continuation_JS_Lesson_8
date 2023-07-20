// 1. При изменении значения в input с id="from", значение содержащееся в нем должно 
// моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const findFromId = document.getElementById('from');
const changeSpan = document.querySelector('span');
const addFromValue = findFromId.value;

findFromId.oninput = () => {
  changeSpan.textContent = findFromId.value
}

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const changeBtnMessage = document.querySelector('.message');
const findMessageBtn = document.querySelector('.messageBtn');

findMessageBtn.onclick = () => {
  btnPress(changeBtnMessage);
}

function btnPress(changeBtnMessage) {
  changeBtnMessage.classList.add("animate_animated");
  changeBtnMessage.classList.add("animate_fadeInLeftBig");
  changeBtnMessage.style.visibility = 'visible';
}

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
//   Если какое-либо поле не заполнено, форма не должна отправляться, 
// также должны быть подсвечены незаполненные поля 
// (необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо, 
// при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const findFrom = document.querySelectorAll('form');
const changeInput = document.querySelectorAll('form input');
const checkSelect = document.querySelectorAll('form select');
const changeSubmitBtn = document.querySelector('form button');

changeSubmitBtn.onclick = () => {
  checkInput(changeInput);
  checkInput(checkSelect);
  let flag = document.querySelector('.error');
  if (typeof flag !== 'undefined') donotSubmit();
}

function checkInput(changeInput) {
  changeInput.forEach(element => {
    if (element.value === '') {
      element.classList.add('error');
    } else {
      if (element.classList.contains('error')) {
        element.classList.remove('error');
      }
    }
  })
}

function donotSubmit() {
  event.preventDefault();
}
