const select = document.querySelector(".header__menu-lang-change");
const AllLang = ["ENG","RUS","FRA", "DEU"]

select.addEventListener("change", ListenerChanger)
ChangeLanguage();
function ListenerChanger(){
    const url_1 = new URL(window.location.href);
    url_1.searchParams.set('lang', select.value);
    let newUrl = url_1.toString();
    window.history.pushState({path: newUrl.toString()}, '', newUrl.toString());

    ChangeLanguage();
}
function ChangeLanguage(){
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    console.log(lang);
    if (AllLang.includes(lang)){
        select.value = lang;
        for (let key in LangArr){
            let object = document.querySelector(".lng__" + key);
            console.log(object)
            object.textContent = LangArr[key][lang];
        }
    }
    else{
        const url_2 = new URL(window.location.href);
        url_2.searchParams.set('lang', "ENG");
        let newUrl = url_2.toString();
        window.history.pushState({path: newUrl.toString()}, '', newUrl.toString());
    }
}

