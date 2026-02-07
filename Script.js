// Typing Effect
const text = ["Developer", "Data Analyst", "AI Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;

    if(letter.length === currentText.length){
        setTimeout(() => {
            count++;
            index = 0;
        }, 1000);
    }

    setTimeout(type, 100);
})();


// Fade in on scroll
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
