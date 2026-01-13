// === BOOKING MODAL ===
const modal=document.getElementById('booking-modal');
const serviceTitleModal=document.getElementById('service-title-modal');
const bookingText=document.getElementById('booking-text');
const form=document.getElementById('booking-form');

const servicesNames={
'oil-change':{'ru':'Замена масло','kz':'Майды ауыстыру','en':'Oil change','ruPrice':'от 25 000 т','kzPrice':'25 000 т-ден','enPrice':'from 25 000'},
'electrician':{'ru':'Автоэлектрик','kz':'Автоэлектрик','en':'Electrician','ruPrice':'от 10 000 т','kzPrice':'10 000 т-ден','enPrice':'from 10 000'},
'suspension':{'ru':'Ходовая часть','kz':'Ходовая бөлік','en':'Suspension','ruPrice':'от 40 000 т','kzPrice':'40 000 т-ден','enPrice':'from 40 000'},
'brakes':{'ru':'Тормозная система','kz':'Тежегіш жүйесі','en':'Brakes','ruPrice':'от 15 000 т','kzPrice':'15 000 т-ден','enPrice':'from 15 000'},
'diagnostics':{'ru':'Диагностика','kz':'Диагностика','en':'Diagnostics','ruPrice':'от 8 000 т','kzPrice':'8 000 т-ден','enPrice':'from 8 000'},
'bodywork':{'ru':'Кузовные работы','kz':'Кузов жұмыстары','en':'Bodywork','ruPrice':'от 50 000 т','kzPrice':'50 000 т-ден','enPrice':'from 50 000'},
'gearbox':{'ru':'Ремонт АКПП','kz':'АКПП жөндеу','en':'Gearbox repair','ruPrice':'от 150 000 т','kzPrice':'150 000 т-ден','enPrice':'from 150 000'},
'polishing':{'ru':'Полировка авто','kz':'Автомобильді полировкалау','en':'Car polishing','ruPrice':'от 35 000 т','kzPrice':'35 000 т-ден','enPrice':'from 35 000'}
};

let currentLang='ru';

function openBooking(serviceKey){
    serviceTitleModal.textContent = servicesNames[serviceKey][currentLang];
    modal.style.display = 'block';
    document.body.style.overflow='hidden';
}
function closeBooking(){
    modal.style.display='none';
    document.body.style.overflow='auto';
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const phone=document.getElementById('phone').value;
    const date=document.getElementById('date').value;
    const time=document.getElementById('time').value;
    alert(`Бронь успешно оформлена!\nСервис: ${serviceTitleModal.textContent}\nИмя: ${name}\nТелефон: ${phone}\nДата: ${date}\nВремя: ${time}`);
    form.reset(); closeBooking();
});

// === LANGUAGES ===
const langButtons={kz:document.getElementById('lang-kz'),ru:document.getElementById('lang-ru'),en:document.getElementById('lang-en')};
const texts={
    heroTitle:{ru:'GARAGE CITY',kz:'GARAGE CITY',en:'GARAGE CITY'},
    heroSubtitle:{ru:'Lux Premium Autocervice',kz:'Lux Premium Автосервис',en:'Lux Premium Autocervice'},
    contactsTitle:{ru:'Контакты',kz:'Байланыс',en:'Contacts'},
    admin:{ru:'Администратор: +7 777 111 22 33',kz:'Администратор: +7 777 111 22 33',en:'Admin: +7 777 111 22 33'},
    director:{ru:'Директор: +7 777 44 55 66',kz:'Директор: +7 777 44 55 66',en:'Director: +7 777 44 55 66'},
    address:{ru:'Адрес: Астана қаласы, Абай Құнанбаев 48',kz:'Мекен-жай: Астана қаласы, Абай Құнанбаев 48',en:'Address: Astana, Abai 48'},
    bookingText:{ru:'Выберите дату и время для вашего визита',kz:'Келу уақыты мен күнін таңдаңыз',en:'Select date and time for your visit'},
    nameLabel:{ru:'Ваше имя:',kz:'Сіздің атыңыз:',en:'Your name:'},
    phoneLabel:{ru:'Телефон:',kz:'Телефон:',en:'Phone:'},
    dateLabel:{ru:'Дата:',kz:'Күні:',en:'Date:'},
    timeLabel:{ru:'Время:',kz:'Уақыты:',en:'Time:'},
    bookButton:{ru:'Забронировать',kz:'Брондау',en:'Book'},
    whyTitle:{ru:'Почему выбирают нас',kz:'Неге біз?',en:'Why Choose Us'},
    feature1Title:{ru:'Высокое качество',kz:'Жоғары сапа',en:'High Quality'},
    feature2Title:{ru:'Быстрая работа',kz:'Жылдам жұмыс',en:'Fast Service'},
    feature3Title:{ru:'Надежность',kz:'Сенімділік',en:'Reliability'},
    feature4Title:{ru:'Гарантия',kz:'Кепілдік',en:'Warranty'},
    galleryTitle:{ru:'Наши работы',kz:'Біздің жұмыстар',en:'Our Works'},
    reviewsTitle:{ru:'Отзывы наших клиентов',kz:'Клиенттердің пікірлері',en:'Reviews'},
    promoTitle:{ru:'Акция месяца!',kz:'Айдың акциясы!',en:'Promo of the Month'},
    promoText:{ru:'Скидка 10% на полировку авто до конца месяца',kz:'Автокөлікті полировкаға 10% жеңілдік айдың соңына дейін',en:'10% off car polishing until end of month'}
};

Object.keys(langButtons).forEach(lang=>{
    langButtons[lang].addEventListener('click',()=>{
        currentLang=lang;
        document.getElementById('hero-title').textContent=texts.heroTitle[lang];
        document.getElementById('hero-subtitle').textContent=texts.heroSubtitle[lang];
        document.getElementById('contacts-title').textContent=texts.contactsTitle[lang];
        document.getElementById('admin-number').textContent=texts.admin[lang];
        document.getElementById('director-number').textContent=texts.director[lang];
        document.getElementById('address').textContent=texts.address[lang];
        document.getElementById('booking-text').textContent=texts.bookingText[lang];
        document.getElementById('label-name').textContent=texts.nameLabel[lang];
        document.getElementById('label-phone').textContent=texts.phoneLabel[lang];
        document.getElementById('label-date').textContent=texts.dateLabel[lang];
        document.getElementById('label-time').textContent=texts.timeLabel[lang];
        document.getElementById('book-button').textContent=texts.bookButton[lang];
        document.getElementById('why-title').textContent=texts.whyTitle[lang];
        document.getElementById('feature1-title').textContent=texts.feature1Title[lang];
        document.getElementById('feature2-title').textContent=texts.feature2Title[lang];
        document.getElementById('feature3-title').textContent=texts.feature3Title[lang];
        document.getElementById('feature4-title').textContent=texts.feature4Title[lang];
        document.getElementById('gallery-title').textContent=texts.galleryTitle[lang];
        document.getElementById('reviews-title').textContent=texts.reviewsTitle[lang];
        document.getElementById('promo-title').textContent=texts.promoTitle[lang];
        document.getElementById('promo-text').textContent=texts.promoText[lang];

        // карточкаларды да ауыстыру
        document.querySelectorAll('.service-card').forEach(card=>{
            const key=card.getAttribute('onclick').match(/'(.+?)'/)[1];
            card.querySelector('.service-title').textContent=servicesNames[key][lang];
            card.querySelector('.service-price').textContent=servicesNames[key][lang+'Price'];
        });
    });
});

// === SCROLL TO BOOKING ===
function scrollToBooking(){
    const firstService = document.querySelector('.service-card');
    if(firstService){
        firstService.scrollIntoView({behavior:'smooth'});
    }
}