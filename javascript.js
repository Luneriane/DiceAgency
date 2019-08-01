const toggleLight = document.getElementById('myToggle');
const toggleDark = document.getElementById('toggleDark');
const myMain = document.getElementById('myMain');

let darkTheme = false;

toggleLight.addEventListener('click', () => {
    if (myMain.className == 'darkTheme') {
        myMain.className = '';
    } else {
        myMain.className = 'darkTheme';
    }
});