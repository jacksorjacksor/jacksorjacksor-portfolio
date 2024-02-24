// main.js

// This file is intentionally left blank
document.getElementById('copyright-year').innerHTML = new Date().getFullYear();


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
     console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
      
    } else {
        entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
  observer.observe(element);
});