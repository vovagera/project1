var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
console.log(prev)
console.log()
var images = document.querySelectorAll('.telephone__map_content');

console.log(images)
var i = 0;

prev.addEventListener('click', function(){
    console.log(i)
    images[i].classList.remove('show');
    i--;
    
    if(i < 0){
        i = images.length - 1;
    }
    
    images[i].classList.add('show');
})

next.addEventListener('click', function(){
    images[i].classList.remove('show');
    i++;
    
    if(i >= images.length){
        i = 0;
    }
    
    images[i].classList.add('show');
})



let button = document.querySelector('.main__btn');
let buttonFooter = document.querySelectorAll('.shooting__btn button');

class Popup {
    popup = document.querySelector('.pop_up');

    element = document.querySelector('.all_screen');

    constructor(text, button){
        this.text = text,
        this.button = button,

        this.element.addEventListener('click', () => {
            this.click();
        }),
        this.popup.addEventListener('click', () => {
            this.stop();
        }),
        this.button.addEventListener('click', () => {
            this.show();
        })
    }
    renderText(){
        this.popup.innerHTML = `
        ${this.text}
        `
    }
    
    stop(){
        event.stopPropagation();
    }

    show(){
        this.element.style.display = 'block';
        this.renderText()
    }

    click(){
        this.element.style.display = 'none';
    }
}



let pop = new Popup(`<form action="POST">
<p class="modal_title">Бронирование</p>
<p class="m_t" >Email<span>*</span></p>
<input type="text" placeholder="Электронная почта" required>
<p class="m_t">Имя<span>*</span></p>
<input type="text" placeholder="Введите Имя" required>
<p class="m_t">Фамилия<span>*</span></p>
<input type="text"placeholder="Введите Фамилию" required>
<p class="m_t">Телефон<span>*</span></p>
<input type="number" placeholder="+7(___)___-__-__" required>
<p class="m_t">Данные карты<span>*</span></p>
<input type="text" placeholder="Номер карты" required>
<div class="block">
    <input type="number" placeholder="Срок действия" required>
    <input type="number" placeholder="CVV" required>
</div>
<div class="check">
    <input type="checkbox" required>
    <div class="check_text">
        Я согласен с пользовательским<br>
        соглашением и публичной офертой
    </div>
</div>
<div class="footer_modal">
    <button>Забронировать</button>
</div>
</form>
`, button);

for(let item of buttonFooter){
    new Popup(`<form action="POST">
    <p class="modal_title">Бронирование</p>
    <p class="m_t" >Email<span>*</span></p>
    <input type="text" placeholder="Электронная почта" required>
    <p class="m_t">Имя<span>*</span></p>
    <input type="text" placeholder="Введите Имя" required>
    <p class="m_t">Фамилия<span>*</span></p>
    <input type="text"placeholder="Введите Фамилию" required>
    <p class="m_t">Телефон<span>*</span></p>
    <input type="number" placeholder="+7(___)___-__-__" required>
    <p class="m_t">Данные карты<span>*</span></p>
    <input type="text" placeholder="Номер карты" required>
    <div class="block">
        <input type="number" placeholder="Срок действия" required>
        <input type="number" placeholder="CVV" required>
    </div>
    <div class="check">
        <input type="checkbox" required>
        <div class="check_text">
            Я согласен с пользовательским<br>
            соглашением и публичной офертой
        </div>
    </div>
    <div class="footer_modal">
        <button>Забронировать</button>
    </div>
    </form>
    `, item);
}

    let textbtn = document.querySelector('.slide_text span');
    let styleBlock = document.querySelector('.slide_all_reviews');
    let reviews = document.querySelectorAll('.reviews__rev');

    console.log(textbtn)

    textbtn.innerHTML = reviews.length;


$('.container__slider p').click(function(){
    $(this).next().slideToggle(1000);
})

$('.slide_lor .blue').click(function(){
    $(this).next().slideToggle(1000);
})

$('.slide').click(function(){
    $(this).next().slideToggle(1000);
})

$('.slide_text').click(function(){
    $(this).next().slideToggle(1000);
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1
    });
  });


let video = document.querySelector('.mainWrapper__video img');
let onlyBlockVideo = document.querySelector('.mainWrapper__video')

video.addEventListener('click', function(){
    onlyBlockVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_cR5FSlGUZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
})



