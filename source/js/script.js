const ZERO_VALUE = 0;
const MAX_TELEPHONE_NUMBER = 10;
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const headerMenuButton = document.querySelector('.header__button');
const buyPopup = document.querySelector('.popup');
const overlayPopap = document.querySelector('.popup__overlay');
const closePopup = buyPopup.querySelector('.popup__button-close');
const formPopup = buyPopup.querySelector('.popup__form');
const phoneInputPopup = buyPopup.querySelector('.form__input[type="tel"]');
const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const phoneRegEx = /[0-9]{10}$/;
const successTemplate = document.querySelector('#success').content;
const successBlock = successTemplate.querySelector('.success');
const successButtonClose = successTemplate.querySelector('.success__button-close');
const miniatureList = document.querySelector('.places__miniatures');
const barList = document.querySelector('.places__check-bar');
const fullsizeList = document.querySelector('.places__full-sizes');

const countries = [
  {
    countryName: "Греция",
    srcDesctopMiniature: "img/desctop-greece-miniature.jpg",
    srcSetDesctopMiniature: "img/desctop-greece-miniature@2x.jpg",
    srcSetDesctopMiniatureWebp: "img/desctop-greece-miniature.webp 1x, img/desctop-greece-miniature@2x.webp 2x",
    srcSetTabletMiniature: "img/tablet-greece-miniature.jpg 1x, img/tablet-greece-miniature@2x.jpg 2x",
    srcSetTabletMiniatureWebp: "img/tablet-greece-miniature.webp 1x, img/tablet-greece-miniature@2x.webp 2x",
    srcSetMobileMiniature: "img/mobile-greece-miniature.jpg 1x, img/mobile-greece-miniature@2x.jpg 2x",
    srcSetMobileMiniatureWebp: "img/mobile-greece-miniature.webp 1x, img/mobile-greece-miniature@2x.webp 2x",
    srcDesctopFullsize: "img/desctop-greece-fullsize.jpg",
    srcSetDesctopFullsize: "img/desctop-greece-fullsize@2x.jpg",
    srcSetDesctopFullsizeWebp: "img/desctop-greece-fullsize.webp 1x, img/desctop-greece-fullsize@2x.webp 2x",
    srcSetTabletFullsize: "img/tablet-greece-fullsize.jpg 1x, img/tablet-greece-fullsize@2x.jpg 2x",
    srcSetTabletFullsizeWebp: "img/tablet-greece-fullsize.webp 1x, img/tablet-greece-fullsize@2x.webp 2x",
    srcSetMobileFullsize: "img/mobile-greece-fullsize.jpg 1x, img/mobile-greece-fullsize@2x.jpg 2x",
    srcSetMobileFullsizeWebp: "img/mobile-greece-fullsize.webp 1x, img/mobile-greece-fullsize@2x.webp 2x",
    description: "На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.",
    feedback: "Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!",
    srcUserAvatar: "img/avatar-vlada.png",
    srcSetUserAvatar: "img/avatar-vlada@2x.png",
    srcSetUserAvatarWebp: "img/avatar-vlada.webp 1x, img/avatar-vlada@2x.webp 2x",
    userName: "Влада Голицина"
  },
  {
    countryName: "Албания",
    srcDesctopMiniature: "img/desctop-albania-miniature.jpg",
    srcSetDesctopMiniature: "img/desctop-albania-miniature@2x.jpg",
    srcSetDesctopMiniatureWebp: "img/desctop-albania-miniature.webp 1x, img/desctop-albania-miniature@2x.webp 2x",
    srcSetTabletMiniature: "img/tablet-albania-miniature.jpg 1x, img/tablet-albania-miniature@2x.jpg 2x",
    srcSetTabletMiniatureWebp: "img/tablet-albania-miniature.webp 1x, img/tablet-albania-miniature@2x.webp 2x",
    srcSetMobileMiniature: "img/mobile-albania-miniature.jpg 1x, img/mobile-albania-miniature@2x.jpg 2x",
    srcSetMobileMiniatureWebp: "img/mobile-albania-miniature.webp 1x, img/mobile-albania-miniature@2x.webp 2x",
    srcDesctopFullsize: "img/desctop-albania-fullsize.jpg",
    srcSetDesctopFullsize: "img/desctop-albania-fullsize@2x.jpg",
    srcSetDesctopFullsizeWebp: "img/desctop-albania-fullsize.webp 1x, img/desctop-albania-fullsize@2x.webp 2x",
    srcSetTabletFullsize: "img/tablet-albania-fullsize.jpg 1x, img/tablet-albania-fullsize@2x.jpg 2x",
    srcSetTabletFullsizeWebp: "img/tablet-albania-fullsize.webp 1x, img/tablet-albania-fullsize@2x.webp 2x",
    srcSetMobileFullsize: "img/mobile-albania-fullsize.jpg 1x, img/mobile-albania-fullsize@2x.jpg 2x",
    srcSetMobileFullsizeWebp: "img/mobile-albania-fullsize.webp 1x, img/mobile-albania-fullsize@2x.webp 2x",
    description: "В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния.",
    feedback: "Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)",
    srcUserAvatar: "img/avatar-marishka.png",
    srcSetUserAvatar: "img/avatar-marishka@2x.png",
    srcSetUserAvatarWebp: "img/avatar-marishka.webp 1x, img/avatar-marishka@2x.webp 2x",
    userName: "Маришка"
  },
  {
    countryName: "Македония",
    srcDesctopMiniature: "img/desctop-macedonia-miniature.jpg",
    srcSetDesctopMiniature: "img/desctop-macedonia-miniature@2x.jpg",
    srcSetDesctopMiniatureWebp: "img/desctop-macedonia-miniature.webp 1x, img/desctop-macedonia-miniature@2x.webp 2x",
    srcSetTabletMiniature: "img/tablet-macedonia-miniature.jpg 1x, img/tablet-macedonia-miniature@2x.jpg 2x",
    srcSetTabletMiniatureWebp: "img/tablet-macedonia-miniature.webp 1x, img/tablet-macedonia-miniature@2x.webp 2x",
    srcSetMobileMiniature: "img/mobile-macedonia-miniature.jpg 1x, img/mobile-macedonia-miniature@2x.jpg 2x",
    srcSetMobileMiniatureWebp: "img/mobile-macedonia-miniature.webp 1x, img/mobile-macedonia-miniature@2x.webp 2x",
    srcDesctopFullsize: "img/desctop-macedonia-fullsize.jpg",
    srcSetDesctopFullsize: "img/desctop-macedonia-fullsize@2x.jpg",
    srcSetDesctopFullsizeWebp: "img/desctop-macedonia-fullsize.webp 1x, img/desctop-macedonia-fullsize@2x.webp 2x",
    srcSetTabletFullsize: "img/tablet-macedonia-fullsize.jpg 1x, img/tablet-macedonia-fullsize@2x.jpg 2x",
    srcSetTabletFullsizeWebp: "img/tablet-macedonia-fullsize.webp 1x, img/tablet-macedonia-fullsize@2x.webp 2x",
    srcSetMobileFullsize: "img/mobile-macedonia-fullsize.jpg 1x, img/mobile-macedonia-fullsize@2x.jpg 2x",
    srcSetMobileFullsizeWebp: "img/mobile-macedonia-fullsize.webp 1x, img/mobile-macedonia-fullsize@2x.webp 2x",
    description: "В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.",
    feedback: "Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.",
    srcUserAvatar: "img/avatar-michael.png",
    srcSetUserAvatar: "img/avatar-michael@2x.png",
    srcSetUserAvatarWebp: "img/avatar-michael.webp 1x, img/avatar-michael@2x.webp 2x",
    userName: "Михаил Кузьмин"
  },
  {
    countryName: "Черногория",
    srcDesctopMiniature: "img/desctop-montenegro-miniature.jpg",
    srcSetDesctopMiniature: "img/desctop-montenegro-miniature@2x.jpg",
    srcSetDesctopMiniatureWebp: "img/desctop-montenegro-miniature.webp 1x, img/desctop-montenegro-miniature@2x.webp 2x",
    srcSetTabletMiniature: "img/tablet-montenegro-miniature.jpg 1x, img/tablet-montenegro-miniature@2x.jpg 2x",
    srcSetTabletMiniatureWebp: "img/tablet-montenegro-miniature.webp 1x, img/tablet-montenegro-miniature@2x.webp 2x",
    srcSetMobileMiniature: "img/mobile-montenegro-miniature.jpg 1x, img/mobile-montenegro-miniature@2x.jpg 2x",
    srcSetMobileMiniatureWebp: "img/mobile-montenegro-miniature.webp 1x, img/mobile-montenegro-miniature@2x.webp 2x",
    srcDesctopFullsize: "img/desctop-montenegro-fullsize.jpg",
    srcSetDesctopFullsize: "img/desctop-montenegro-fullsize@2x.jpg",
    srcSetDesctopFullsizeWebp: "img/desctop-montenegro-fullsize.webp 1x, img/desctop-montenegro-fullsize@2x.webp 2x",
    srcSetTabletFullsize: "img/tablet-montenegro-fullsize.jpg 1x, img/tablet-montenegro-fullsize@2x.jpg 2x",
    srcSetTabletFullsizeWebp: "img/tablet-montenegro-fullsize.webp 1x, img/tablet-montenegro-fullsize@2x.webp 2x",
    srcSetMobileFullsize: "img/mobile-montenegro-fullsize.jpg 1x, img/mobile-montenegro-fullsize@2x.jpg 2x",
    srcSetMobileFullsizeWebp: "img/mobile-montenegro-fullsize.webp 1x, img/mobile-montenegro-fullsize@2x.webp 2x",
    description: "Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км.",
    feedback: "Неописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую",
    srcUserAvatar: "img/avatar-anastasia.png",
    srcSetUserAvatar: "img/avatar-anastasia@2x.png",
    srcSetUserAvatarWebp: "img/avatar-anastasia.webp 1x, img/avatar-anastasia@2x.webp 2x",
    userName: "Анастасия Мей"
  },
  {
    countryName: "Хорватия",
    srcDesctopMiniature: "img/desctop-croatia-miniature.jpg",
    srcSetDesctopMiniature: "img/desctop-croatia-miniature@2x.jpg",
    srcSetDesctopMiniatureWebp: "img/desctop-croatia-miniature.webp 1x, img/desctop-croatia-miniature@2x.webp 2x",
    srcSetTabletMiniature: "img/tablet-croatia-miniature.jpg 1x, img/tablet-croatia-miniature@2x.jpg 2x",
    srcSetTabletMiniatureWebp: "img/tablet-croatia-miniature.webp 1x, img/tablet-croatia-miniature@2x.webp 2x",
    srcSetMobileMiniature: "img/mobile-croatia-miniature.jpg 1x, img/mobile-croatia-miniature@2x.jpg 2x",
    srcSetMobileMiniatureWebp: "img/mobile-croatia-miniature.webp 1x, img/mobile-croatia-miniature@2x.webp 2x",
    srcDesctopFullsize: "img/desctop-croatia-fullsize.jpg",
    srcSetDesctopFullsize: "img/desctop-croatia-fullsize@2x.jpg",
    srcSetDesctopFullsizeWebp: "img/desctop-croatia-fullsize.webp 1x, img/desctop-croatia-fullsize@2x.webp 2x",
    srcSetTabletFullsize: "img/tablet-croatia-fullsize.jpg 1x, img/tablet-croatia-fullsize@2x.jpg 2x",
    srcSetTabletFullsizeWebp: "img/tablet-croatia-fullsize.webp 1x, img/tablet-croatia-fullsize@2x.webp 2x",
    srcSetMobileFullsize: "img/mobile-croatia-fullsize.jpg 1x, img/mobile-croatia-fullsize@2x.jpg 2x",
    srcSetMobileFullsizeWebp: "img/mobile-croatia-fullsize.webp 1x, img/mobile-croatia-fullsize@2x.webp 2x",
    description: "В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.",
    feedback: "Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)",
    srcUserAvatar: "img/avatar-vladimir.png",
    srcSetUserAvatar: "img/avatar-vladimir@2x.png",
    srcSetUserAvatarWebp: "img/avatar-vladimir.webp 1x, img/avatar-vladimir@2x.webp 2x",
    userName: "Владимир Мулицин"
  }
];

const addMessage = (object) => {
  body.appendChild(object);
};

const removeMessage = (object) => {
  if (body.contains(object)) {
    body.removeChild(object);
  }
};

const closeMessage = (button, object) => {
  button.addEventListener('click', () => {
    removeMessage(object);
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      removeMessage(object);
    }
  });

  window.addEventListener('click', () => {
    if (!(document.activeElement.isEqualNode(object)) && !(document.activeElement.isEqualNode(button))) {
      removeMessage(object);
    }
  });
};

const navigationMenuWork = () => {
  const navigationMenuLink = header.querySelectorAll('.nav__link');
  header.classList.remove('header--no-js');
  headerMenuButton.addEventListener('click', () => {
    if (header.classList.contains('header--menu-close')) {
      header.classList.remove('header--menu-close');
      header.classList.add('header--menu-open')
    } else if (header.classList.contains('header--menu-open')) {
      header.classList.add('header--menu-close');
      header.classList.remove('header--menu-open');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      header.classList.add('header--menu-close');
      header.classList.remove('header--menu-open');
    }
  });

  navigationMenuLink.forEach((closeMenu) => {
    closeMenu.addEventListener('click', closeMenuFromLink)
  });

  function closeMenuFromLink() {
    header.classList.add('header--menu-close');
    header.classList.remove('header--menu-open');
  };
}

const createCountryElements = () => {
  const miniatureTemplate = document.querySelector('#miniature').content;
  const miniatureElement = document.createDocumentFragment();
  const barTemplate = document.querySelector('#bar-button').content;
  const barElement = document.createDocumentFragment();
  const fullsizeTemplate = document.querySelector('#fullsize').content;
  const fullsizeElement = document.createDocumentFragment();

  countries.forEach(({countryName, srcDesctopMiniature, srcSetDesctopMiniature, srcSetDesctopMiniatureWebp, srcSetTabletMiniature, srcSetTabletMiniatureWebp, srcSetMobileMiniature, srcSetMobileMiniatureWebp}) => {
    const newMiniatureElement = miniatureTemplate.cloneNode(true);
    newMiniatureElement.querySelector('#desctop-Image-miniature').setAttribute('src', srcDesctopMiniature);
    newMiniatureElement.querySelector('#desctop-Image-miniature').setAttribute('srcset', srcSetDesctopMiniature);
    newMiniatureElement.querySelector('#desctop-Image-miniature').setAttribute('alt', countryName);
    newMiniatureElement.querySelector('#desctop-Image-miniature-webp').setAttribute('srcset', srcSetDesctopMiniatureWebp);
    newMiniatureElement.querySelector('#tablet-Image-miniature').setAttribute('srcset', srcSetTabletMiniature);
    newMiniatureElement.querySelector('#tablet-Image-miniature-webp').setAttribute('srcset', srcSetTabletMiniatureWebp);
    newMiniatureElement.querySelector('#mobile-Image-miniature').setAttribute('srcset', srcSetMobileMiniature);
    newMiniatureElement.querySelector('#mobile-Image-miniature-webp').setAttribute('srcset', srcSetMobileMiniatureWebp);
    newMiniatureElement.querySelector('.places__miniature-text').textContent = countryName;
    newMiniatureElement.querySelector('.places__miniature-link').setAttribute('href', `#link${countryName}`);
    miniatureElement.appendChild(newMiniatureElement);
  });

  countries.forEach(({countryName}) => {
    const newButtonElement = barTemplate.cloneNode(true);
    newButtonElement.querySelector('.places__check-button').textContent = countryName;
    barElement.appendChild(newButtonElement);
  });

  countries.forEach(({countryName, description, srcDesctopFullsize, srcSetDesctopFullsize, srcSetDesctopFullsizeWebp, srcSetTabletFullsize, srcSetTabletFullsizeWebp, srcSetMobileFullsize, srcSetMobileFullsizeWebp, feedback, srcUserAvatar, srcSetUserAvatar, srcSetUserAvatarWebp, userName}) => {
    const newFullsizeElement = fullsizeTemplate.cloneNode(true);
    newFullsizeElement.querySelector('.places__full-size-title').textContent = countryName;
    newFullsizeElement.querySelector('.places__full-size-text').textContent = description;
    newFullsizeElement.querySelector('.places__qick-link').setAttribute('id', `link${countryName}`);
    newFullsizeElement.querySelector('#desctop-Image-fullsize').setAttribute('src', srcDesctopFullsize);
    newFullsizeElement.querySelector('#desctop-Image-fullsize').setAttribute('srcset', srcSetDesctopFullsize);
    newFullsizeElement.querySelector('#desctop-Image-fullsize').setAttribute('alt', countryName);
    newFullsizeElement.querySelector('#desctop-Image-fullsize-webp').setAttribute('srcset', srcSetDesctopFullsizeWebp);
    newFullsizeElement.querySelector('#tablet-Image-fullsize').setAttribute('srcset', srcSetTabletFullsize);
    newFullsizeElement.querySelector('#tablet-Image-fullsize-webp').setAttribute('srcset', srcSetTabletFullsizeWebp);
    newFullsizeElement.querySelector('#mobile-Image-fullsize').setAttribute('srcset', srcSetMobileFullsize);
    newFullsizeElement.querySelector('#mobile-Image-fullsize-webp').setAttribute('srcset', srcSetMobileFullsizeWebp);
    newFullsizeElement.querySelector('.places__comment-text').textContent = feedback;
    newFullsizeElement.querySelector('#user-Avatar-Image').setAttribute('src', srcUserAvatar);
    newFullsizeElement.querySelector('#user-Avatar-Image').setAttribute('srcset', srcSetUserAvatar);
    newFullsizeElement.querySelector('#user-Avatar-Image').setAttribute('alt', userName);
    newFullsizeElement.querySelector('#user-Avatar-Image-Webp').setAttribute('srcset', srcSetUserAvatarWebp);
    newFullsizeElement.querySelector('.places__user-name').textContent = userName;
    fullsizeElement.appendChild(newFullsizeElement);
  });

  miniatureList.appendChild(miniatureElement);
  barList.appendChild(barElement);
  fullsizeList.appendChild(fullsizeElement);
};

const workPlaces = () => {
  const miniatureButtonElements = miniatureList.querySelectorAll('.places__miniature-link')
  const barButtonElements = barList.querySelectorAll('.places__check-button');
  const fullsizeElements = fullsizeList.querySelectorAll('.places__full-size-element');


  const setHiddenClass = (elementIndex) => {
    fullsizeElements.forEach(function(el) {
      el.classList.add('hidden');
    });

    barButtonElements.forEach(function(el) {
      el.classList.remove('places__check-button--active');
    });

    barButtonElements[elementIndex].classList.add('places__check-button--active');
    fullsizeElements[elementIndex].classList.remove('hidden');
  };

  const clickInMiniature = () => {
    miniatureButtonElements.forEach(function(goToFullsize) {
      goToFullsize.addEventListener('click', showFullsize)
    });

    function showFullsize(evt) {
      const miniatureIndex = Array.from(miniatureButtonElements).indexOf(evt.target);
      setHiddenClass(miniatureIndex)
    };
  }

  const clickBarButton = () => {
    barButtonElements.forEach(function(goToFullsizeFromBar) {
      goToFullsizeFromBar.addEventListener('click', showFullsizeFromBar)
    });

    function showFullsizeFromBar(evt) {
      const barButtonIndex = Array.from(barButtonElements).indexOf(evt.target);
      setHiddenClass(barButtonIndex)
    };

    (function() {
      function scrollHorizontally(e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          barList.scrollLeft -= (delta*40);
          e.preventDefault();
      }
      if (barList.addEventListener) {
          barList.addEventListener("mousewheel", scrollHorizontally, false);
          barList.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
          barList.attachEvent("onmousewheel", scrollHorizontally);
      }
    })();
  }


  setHiddenClass(0);
  clickInMiniature()
  clickBarButton();
}

const openBuyBlock = () => {
  const buyButtons = document.querySelectorAll('.button-buy');
  buyButtons.forEach((openBuyModal) => {
    openBuyModal.addEventListener('click', openBlock)
  });

  function openBlock(evt) {
    evt.preventDefault();
    buyPopup.classList.add('popup--open');
    phoneInputPopup.focus();
  };
}

const workForm = () => {
  const forms = document.querySelectorAll('.form');
  const telephonInputs = document.querySelectorAll('.form__input[type="tel"]');
  const emailInputs = document.querySelectorAll('.form__input[type="email"]');
  const submitButtons = document.querySelectorAll('.button[type="submit"]');

  const checkPhoneField = () => {
    telephonInputs.forEach((validationPhone) => {
      validationPhone.addEventListener('blur', checkPhone)
    });

    function checkPhone(event) {
      if (event.target.value.length === ZERO_VALUE) {
        event.target.classList.remove('form__input--error');
      } else if (!phoneRegEx.test(event.target.value)) {
        event.target.classList.add('form__input--error');
      } else if (phoneRegEx.test(event.target.value)) {
        event.target.classList.remove('form__input--error');
      };
    };
  }

  const checkMailField = () => {
    emailInputs.forEach((validationEmail) => {
      validationEmail.addEventListener('blur', checkEmail)
    });

    function checkEmail(event) {
      if (event.target.value.length === ZERO_VALUE) {
        event.target.classList.remove('form__input--error');
      } else if (!mailRegEx.test(event.target.value)) {
        event.target.classList.add('form__input--error');
      } else if (mailRegEx.test(event.target.value)){
        event.target.classList.remove('form__input--error');
      };
    };
  }

  checkPhoneField()
  checkMailField()

  submitButtons.forEach((checkError) => {
    checkError.addEventListener('click', stopSubmit)
  });

  function stopSubmit(evt) {
    let parent = this.parentElement;
    let childrens = parent.querySelectorAll('.form__input');
    if (childrens[0].classList.contains('form__input--error') || childrens[1].classList.contains('form__input--error')) {
      evt.preventDefault();
    };
  }

  const closePopapAuto = () => {
    if(buyPopup.classList.contains('popup--open')) {
      buyPopup.classList.remove('popup--open')
    } else {
      return
    };
  }

  forms.forEach((sentData) => {
    sentData.addEventListener('submit', pushMessage)
  });

  function pushMessage(evt) {
    evt.preventDefault();
    let telephon = this.children[2].value;
    localStorage.setItem('tel', telephon);
    let email = this.children[4].value;
    localStorage.setItem('email', email);

    closePopapAuto();
    this.reset();
    addMessage(successBlock);
    closeMessage(successButtonClose, successBlock);
  };
}

const closeBuyBlock = () => {
  closePopup.addEventListener('click', () => {
    buyPopup.classList.remove('popup--open');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      buyPopup.classList.remove('popup--open');
    }
  });

  overlayPopap.addEventListener('click', () => {
    buyPopup.classList.remove('popup--open');
  });
}

navigationMenuWork();
createCountryElements();
workPlaces();
openBuyBlock();
workForm();
closeBuyBlock();
