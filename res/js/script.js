let title = document.querySelector('.title');
let stick_nav = document.querySelector('#stick-nav');

let titles = [
    "Computer Scientist ",
    "Computer Engineer ",
    "Python Developer ",
    "Competitive Programmer ",
    "Web Developer ",
];
let title_count = 0;

let set_text = (text, el) => {
    new Promise(
        function(resolve, reject) {
            var text_len = el.innerText.length;
            for(var skat in el.innerText){
                setTimeout(() => {el.innerText = el.innerText.slice(0, -(0 + 1));}, 50*skat)
            }
        setTimeout(() => {resolve()}, 70 * text_len + 10)
    }).then(
        function() {
            for (let ind in text){
                setTimeout(() => {
                    var new_text = el.innerText.slice(0, -1) + text[ind] + '|';
                    el.innerText = new_text;
                }, 50*ind);
            }
            
        }, (err) => {console.log(err);}
    ).then(
        function() {
            setTimeout(() => {
                set_text(titles[title_count++ % titles.length], title);
            }, 3000)
        }
    )
    
}

window.addEventListener('DOMContentLoaded', () => {
    set_text(titles[title_count++ % titles.length], title);
})
window.addEventListener('scroll', function(e){
    var scroll_pos = document.body.scrollTop || document.documentElement.scrollTop;
    if (scroll_pos > 420){
        if (stick_nav.classList.contains('hide')){
            stick_nav.style.opacity = "0";
            stick_nav.classList.remove('hide');
        } else {
            var opc;
            if (scroll_pos < 500) {
                opc = ((scroll_pos - 400) / 451) % 1;
            }
            else {
                opc = 1;
                stick_nav.classList.add('stick-nav');
            }
            stick_nav.style.opacity = String(opc);
        }
    } else {
        if (!stick_nav.classList.contains('hide')){
            stick_nav.classList.add('hide');
        }
    }

}
)  
