const ENG_LOWER = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-",
"=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[",
"]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";",
"'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

const ENG_UPPER = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]",
"\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'",
"Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

const RUS_LOWER = [ "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
"\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
"Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_UPPER = [ "Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
"Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
"\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э",
"Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const ENG_SHIFT = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
"Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}",
"|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":",
"&quot;", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const ENG_SHIFT_LOWER = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
"+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{",
"}", "|", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":",
"&quot;", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_SHIFT = [ "Ё", "!", "&quot;", "№", ";", "%", ":", "?", "*", "(", ")", "_",
"+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х",
"Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж",
"Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲",
"Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ]; 

const RUS_SHIFT_LOWER= [ "ё", "!", "&quot;", "№", ";", "%", ":", "?", "*", "(", ")",
"_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з",
"х", "ъ", "/", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д",
"ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",",
"▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl" ];

const CODE = [ "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5",
"Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
"Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
"KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock",
"KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL",
"Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV",
"KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
"ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft",
"ArrowDown", "ArrowRight", "ControlRight" ];  
 
const main = `<main>
                <div class="wrapper">
                <textarea class="input" name="" id="input" cols="30" rows="10"></textarea>
                    <p>Клавиатура создана в операционной системе Windows.</p>
                    <p>Для переключения языка используйте комбинацию клавиш: Ctrl Left + Alt Left</p>
              </div>
              </main>`;
const LEFT_SHIFT = 42;
const RIGHT_SHIFT = 54;
const RUS = "rus";
const ENG = "eng";
const LANGUAGE = "lang";
let caps_lock = false;

// Add keyboard in html page
function render_keyboard() {
    document.querySelector("body").innerHTML = main;
    let wrapper = document.querySelector(".wrapper");
    let textarea = document.querySelector(".input");
    let keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    wrapper.insertBefore(keyboard, textarea.nextSibling);

    ENG_LOWER.forEach((value, index) => {
        let button = document.createElement("div");
        button.classList.add("button");
        button.classList.add(`${CODE[index]}`);
        if (value === "Backspace" || value === "Tab" || value === "Del") {
          button.classList.add(`${value.toLowerCase()}`);
          keyboard.appendChild(button);
        } else if (value === "CapsLock" || index === LEFT_SHIFT) {
          button.classList.add("left-btn");
          keyboard.appendChild(button);
        } else if (value === "Enter" || index === RIGHT_SHIFT) {
          button.classList.add("right-btn");
          button.value = value;
          keyboard.appendChild(button);
        } else if (value === " ") {
          button.classList.add("space");
          keyboard.appendChild(button);
        } else keyboard.appendChild(button);
      });
}

render_keyboard();

let bord = document.querySelectorAll(".button");

render(RUS_LOWER, ENG_LOWER);

// function add key value for keyboard
function render_key(language) {
  language.forEach((key, i) => {
    bord[i].innerHTML = key;
  });
}

// function render key value with load html
function render(rus, eng) {
  let locale = localStorage.getItem(LANGUAGE);
  locale === RUS ? render_key(rus) : render_key(eng);
}

// Insert the text in text area using the mouse
document.querySelector(".keyboard").addEventListener("mousedown", event => {
  if (event.target.matches(".button")) {
    let clas = event.target.classList[1];
    key_down_click(clas);
  }
});

document.querySelector(".keyboard").addEventListener("mouseup", event => {
  let clas = event.target.classList[1];
  switch (clas) {
    case "ShiftLeft":
      event.target.classList.remove("active");
      render(RUS_LOWER, ENG_LOWER);
      break;
    case "CapsLock":
      break;
    default:
      event.target.classList.remove("active");
  }
});

// Insert the text in text area using the keyboard and animation button
function key_down_click(code) {
  let button = document.querySelector(`.${code}`);
  let text = document.querySelector("#input").value;
  let textarea = document.querySelector("#input");
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  function deleteSelectedDiapason() {
    textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end);
  }

  function writeLetters(letter, cursorPosition) {
    button.classList.add("active");
    if (start != end) {
        deleteSelectedDiapason();
        textarea.value = textarea.value.slice(0, start) + letter + text.slice(end, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = cursorPosition;
      } else {
        textarea.value = textarea.value.slice(0, start) + letter + textarea.value.slice(start, textarea.value.length);
        textarea.selectionStart = textarea.selectionEnd = cursorPosition;
      }
  }

  function changeLanguage() {
    button.classList.add("active");
      let locale = localStorage.getItem(LANGUAGE);
      if ((event.code === "AltLeft" && event.ctrlKey) || (event.code === "ControlLeft" && event.altKey)) {
        if (locale === RUS) {
          if (!caps_lock) {
            render_key(ENG_LOWER);
          } else {
            render_key(ENG_UPPER);
          }
          localStorage.setItem(LANGUAGE, ENG);
        } else {
          if (!caps_lock) {
            render_key(RUS_LOWER);
          } else {
            render_key(RUS_UPPER);
          }
          localStorage.setItem(LANGUAGE, RUS);
        }
      }
  }
  
  switch (code) {
    case "Backspace":
      button.classList.add("active");
      if (start != end) {
        deleteSelectedDiapason();
        textarea.selectionStart = textarea.selectionEnd = start;
      } else {
          if (start != 0) {
            textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(start, textarea.value.length);
            textarea.selectionStart = textarea.selectionEnd = start - 1;
          }
      }
      break;
    case "Tab":
      writeLetters("    ", start + 4);
      break;
    case "Delete":
      button.classList.add("active");
      if (start != end) {
        deleteSelectedDiapason();
        textarea.selectionStart = textarea.selectionEnd = start;
      } else {
        textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1, text.length);
        textarea.selectionStart = textarea.selectionEnd = start;
      }
      break;
    case "CapsLock":
      if (!caps_lock) {
        button.classList.add("active");
        render(RUS_UPPER, ENG_UPPER);
        caps_lock = true;
      } else {
        button.classList.remove("active");
        render(RUS_LOWER, ENG_LOWER);
        caps_lock = false;
      }
      break;
    case "Enter":
      writeLetters("\n", start + 1);
      break;
    case "ShiftLeft":
      button.classList.add("active");
      if (caps_lock) {
        render(RUS_SHIFT_LOWER, ENG_SHIFT_LOWER);
      } else render(RUS_SHIFT, ENG_SHIFT);
      break;
    case "ShiftRight":
      button.classList.add("active");
      break;
    case "ControlLeft":
      changeLanguage();
      break;
    case "ControlRight":
      button.classList.add("active");
      break;
    case "MetaLeft":
      button.classList.add("active");
      break;
    case "AltLeft":
      changeLanguage();
      break;
    case "AltRight":
        button.classList.add("active");
        break;
    case "ArrowUp":
      button.classList.add("active");
      if (start != 0) textarea.selectionStart = textarea.selectionEnd = start - 1;
      break;
    case "ArrowDown":
        button.classList.add("active");
        let position = textarea.value.indexOf("\n", start);
        if (position != -1) {
          textarea.selectionStart = textarea.selectionEnd = position + 1;
        }
        break;
    case "ArrowLeft":
        button.classList.add("active");
        if (start != 0) textarea.selectionStart = textarea.selectionEnd = start - 1;
        break;
    case "ArrowRight":
        button.classList.add("active");
        textarea.selectionStart = textarea.selectionEnd = start + 1;
        break;
    default:
        writeLetters(button.textContent, start + 1);
  }
}

document.addEventListener("keypress", event => {
  event.preventDefault();
});

document.addEventListener("keydown", event => {
  event.preventDefault();
  if (document.querySelector(`.${event.code}`) != null) {
    key_down_click(event.code); 
  }
});

document.addEventListener("keyup", event => {
    event.preventDefault();
    if (document.querySelector(`.${event.code}`) != null) {
  let button = document.querySelector(`.${event.code}`);
  switch (event.code) {
    case "ShiftLeft":
      button.classList.remove("active");
      if (caps_lock) {
        render(RUS_UPPER, ENG_UPPER);
      } else render(RUS_LOWER, ENG_LOWER);
      break;
    case "CapsLock":
      break;
    default:
      button.classList.remove("active");
  }
}
});
