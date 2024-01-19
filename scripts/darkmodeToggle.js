const dark = document.querySelector('.toggle');
let onOff = false;

const darkToggleHandler = () => {
    onOff = !onOff;
    if( onOff ){
        document.documentElement.setAttribute('color-theme', 'dark');
      } else {
        document.documentElement.setAttribute('color-theme', 'light');
      }
}

dark.addEventListener('click', darkToggleHandler);