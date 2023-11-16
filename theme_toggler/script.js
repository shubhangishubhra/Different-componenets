// Add JavaScript code here



const dropdowns = document.querySelectorAll('.wrapper-dropdown')
const themeBtns = document.querySelectorAll(".light-button, .dark-button");
const ICONS = ['<svg class="color-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>',
    '<svg class="color-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z"></path></svg>',
    '<svg class="color-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 4v2h-5V7h5zm-5 4h5v2h-5v-2zM4 19V5h7v14H4z"></path></svg>',
    '<svg class="color-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path></svg>',
    '<svg class="color-5 invert-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path></svg>'
];



// Theme Toggler
themeBtns.forEach((themeBtn) => {
    themeBtn.addEventListener('click', () => {

        if (document.documentElement.dataset.theme == 'light') {
            document.documentElement.dataset.theme = 'dark';
            themeBtns.forEach((themeBtn) => {
                themeBtn.classList.toggle('--theme-active');
            });
        } else {
            document.documentElement.dataset.theme = 'light';
            themeBtns.forEach((themeBtn) => {
                themeBtn.classList.toggle('--theme-active');
            });
        }
    });
});




window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dataset.theme = 'light';
});


//Possible updates
//Avoid the form showing up when press tab (visibility)
//pick colors for icons