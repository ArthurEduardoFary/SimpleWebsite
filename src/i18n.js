import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const resources = {
  en: {
    translation: {
        "lang": "Language",
        "contactme": "Contact-me",
        "options": "Options",

        "hello": "Hello",
        "iam": "I am Arthur Fary",
        "iam2": "I am a",
        "dev": "Junior level developer",
        "aboutme": "About me",
        "intrestedin": "What I am interested in",

        "aboutme1": "My name is Arthur, I am a junior Full-Stack developer with a on-going bachelors in Informational Systems.",
        "aboutme2" : "I would describe myself as a coding enthusiast who really enjoys developping stuff. 💻",
        
        "whatsapp": "Hello+Arthur,+I+came+from+your+website!",

        "certificates": "My certificates",
        "webprogrammer": "Web Programmer",
        "english": "English",
        "oop": "Object Oriented Programming",
        "excel": "Advanced level Excel",
        "html": "Advanced level HTML",

        "madewith": "Made with React by Arthur Fary",

    }
  },
  pt: {
    translation: {
        "lang": "Idioma",
        "contactme": "Contato",
        "options": "Opções",
        "hello": "Olá",
        "iam": "Sou Arthur Fary",
        "iam2": "Eu sou um programador",
        "dev": "Junior",
        "aboutme": "Sobre mim:",
        "intrestedin": "Tenho interesse em:",

        "aboutme1": " Meu nome é Arthur, eu sou um developer Full-Stack junior cursando Sistemas de Informação.",
        "aboutme2" : "Eu me descreveria como um entusiasta da programação que gosta muito de desenvolver coisas. 💻",

        "whatsapp": "Oi+Arthur,+vim+do+seu+site!",

        "certificates": "Certificados:",
        "webprogrammer": "Programador Web",
        "english": "Inglês",
        "oop": "Programação Orientada a Obj.",
        "excel": "Excel Avançado",
        "html": "HTML Avançado",

        "madewith": "Feito usando React por Arthur Fary",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getCookie('lang') != "" ? getCookie('lang') : ( () => {document.cookie = "lang=en"; return "en"}) (), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;