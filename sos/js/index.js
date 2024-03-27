const select = document.querySelector(".header__menu-lang-change-lang");
const select_change = document.querySelector(".header__menu-lang-change");
const list = document.querySelector(".header__menu-lang-list");
const options = document.querySelectorAll(".header__menu-lang-option");
const AllLang = ["ENG","RUS","FRA", "DEU"]

const button = document.querySelector(".header__menu-button");
const dialog = document.querySelector(".header__dialog");

ChangeLanguage();
options.forEach((option) => {
    option.addEventListener("click", OptionListenerClick);
    option.addEventListener("keydown", OptionListenerKeyDown);
});
select_change.addEventListener("keydown", ListListenerKeyDown);
button.addEventListener("click", ButtonListenerClick);
function ListListenerKeyDown(){
    if (event.keyCode === 13) {
        list.classList.toggle('display-lang');
    }
}
function OptionListenerKeyDown(){
    if (event.keyCode === 13) {
        let option = this.valueOf();

        const url_1 = new URL(window.location.href);
        url_1.searchParams.set('lang', option.attributes['value'].textContent);
        let newUrl = url_1.toString();
        window.history.pushState({path: newUrl.toString()}, '', newUrl.toString());

        let select_lang = Object.assign(select.textContent);
        let option_lang = Object.assign(option.textContent);

        select.textContent = option_lang;
        this.valueOf().textContent = select_lang;

        let option_value = Object.assign(option.attributes['value'].textContent);
        let select_value = Object.assign(select.attributes['value'].textContent);

        option.setAttribute("value", select_value);
        select.setAttribute("value", option_value);

        ChangeLanguage();
    }
}
function OptionListenerClick(){
    let option = this.valueOf();

    const url_1 = new URL(window.location.href);
    url_1.searchParams.set('lang', option.attributes['value'].textContent);
    let newUrl = url_1.toString();
    window.history.pushState({path: newUrl.toString()}, '', newUrl.toString());

    let select_lang = Object.assign(select.textContent);
    let option_lang = Object.assign(option.textContent);

    select.textContent = option_lang;
    this.valueOf().textContent = select_lang;

    let option_value = Object.assign(option.attributes['value'].textContent);
    let select_value = Object.assign(select.attributes['value'].textContent);

    option.setAttribute("value", select_value);
    select.setAttribute("value", option_value);

    ChangeLanguage();
}
function ChangeLanguage(){
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (AllLang.includes(lang)) {
        let option_;
        options.forEach((option) => {
            if (option.attributes['value'].textContent == lang){
                option_ = option
            }
        });

        if (typeof option_ == "undefined") {
            for (let key in LangArr) {
                let objects = document.querySelectorAll(".lng__" + key);
                objects.forEach((object)=>{object.textContent = LangArr[key][lang]})
            }
        }
        else{
            let select_lang = Object.assign(select.textContent);
            let option_lang = Object.assign(option_.textContent);

            select.textContent = option_lang;
            option_.textContent = select_lang;

            let option_value = Object.assign(option_.attributes['value'].textContent);
            let select_value = Object.assign(select.attributes['value'].textContent);

            option_.setAttribute("value", select_value);
            select.setAttribute("value", option_value);

            ChangeLanguage();
        }
    }
    else{
        const url_2 = new URL(window.location.href);
        url_2.searchParams.set('lang', "ENG");
        let newUrl = url_2.toString();
        window.history.pushState({path: newUrl.toString()}, '', newUrl.toString());
    }
}
function ButtonListenerClick(){
    dialog.classList.toggle("header__dialog--open");
}