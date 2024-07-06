// const displayedImage = document.querySelector('.displayed-img');

// const button = document.querySelector('button');
// const overlay = document.querySelector('.overlay');

// /* Declaring the array of image filenames */


// const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];



// /* Declaring the alternative text for each image file */


// const imageAlts = {
//     'pic1.jpg': 'Closeup of a human eye',
//     'pic2.jpg': 'Wavy rock',
//     'pic3.jpg': 'Purple and white flowers',
//     'pic4.jpg': 'Ancient emojis from the regions of Egypt',
//     'pic5.jpg': 'Mothman without the -man'
// };


// const thumbBar = document.querySelector('.thumb-bar');


// /* Looping through images */


// for (const filename of imageFilenames) {

//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', images/$[filename]);
//     newImage.setAttribute('alt', imageAlts[filename]);
//     thumbBar.appendChild(newImage);

// }



// thumbBar.addEventListener('click', (event) => {
//     if (event.target.tagName === 'IMG') {
//         const displayedImage = document.querySelector('.displayed-img');
//         displayedImage.setAttribute('src', event.target.getAttribute('src'));
//         displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
//     }
//   }
// );
  



// /* Wiring up the Darken/Lighten button */


// button.addEventListener('click', () => {
//     const isDark = button.getAttribute('class') === 'dark';
//     if (isDark) {
//         button.setAttribute('class', 'light');
//         button.textContent = 'Lighten';
//         overlay.style.backgroundColor = 'rgb(0, 0, 0 / 50%)';
//     } else {
//         button.setAttribute('class', 'dark');
//         button.textContent = 'Darken';
//         overlay.style.backgroundColor = 'rgb(0, 0, 0 / 0%)';
//     }
//     }
// );





const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const imageAlts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Wavy rock',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Ancient emojis from the regions of Egypt',
    'pic5.jpg': 'Mothman without the -man'
};

const thumbBar = document.querySelector('.thumb-bar');

const button = document.querySelector('button');

const overlay = document.querySelector('.overlay');



for (const filename of imageFilenames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', imageAlts[filename]);
    thumbBar.appendChild(newImage);
}




thumbBar.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const displayedImage = document.querySelector('.displayed-img');
        displayedImage.setAttribute('src', event.target.getAttribute('src'));
        displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
    }
    }
);





button.addEventListener('click', () => {
    const isDark = button.getAttribute('class') === 'dark';
    if (isDark) {
        button.setAttribute('class', 'light');
        button.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        button.setAttribute('class', 'dark');
        button.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
    }
);

