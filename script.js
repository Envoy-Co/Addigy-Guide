document.addEventListener('DOMContentLoaded', function() {
  
  const articleIdMap = {
  "8000039836": "4403549480723",
  "4403542782":"4407930317459",
  "8000040939": "4403549501715",
  "8000041028": "4403542599955",
  "8000041232": "4403549482131",
  "8000041236": "4403542284947",
  "8000041240": "4403542288275",
  "8000041244": "4403542290323",
  "8000041382": "4403542348179",
  "8000041400": "4403542294419",
  "8000041412": "4403542297235",
  "8000041511": "4403549742739",
  "8000041543": "4403542299283",
  "8000041826": "4403726525971",
  "8000041881": "4403542652563",
  "8000041882": "4403542300819",
  "8000042856": "4403549504275",
  "8000042895": "4403542493843",
  "8000043066": "4403720061843",
  "8000043369": "4403549527571",
  "8000043603": "4403542496531",
  "8000043724": "4403549528467",
  "8000044203": "4403542332691",
  "8000047091": "4403542834323",
  "8000047097": "4403542249363",
  "8000048492": "4403542254227",
  "8000048983": "4403542603795",
  "8000049520": "4403542615315",
  "8000049597": "4403726385683",
  "8000049698": "4403542350611",
  "8000050633": "4403720201235",
  "8000050770": "4403720071443",
  "8000051021": "4403542656275",
  "8000051111": "4403542718483",
  "8000051423": "4403542684307",
  "8000051816": "4403549743891",
  "8000052575": "4403542605459",
  "8000053199": "4403720062611",
  "8000053240": "4403549672979",
  "8000053473": "4403549675795",
  "8000053536": "4403726502035",
  "8000053731": "4403542646163",
  "8000053864": "4403549667859",
  "8000053937": "4403726502931",
  "8000053938": "4403542256275",
  "8000054002": "4403542257683",
  "8000054029": "4403542610579",
  "8000054042": "4403542544275",
  "8000054169": "4403542541971",
  "8000054171": "4403726485907",
  "8000054173": "4403542546963",
  "8000054274": "4403726491923",
  "8000054352": "4403542786579",
  "8000054386": "4403549635987",
  "8000054492": "4403720063379",
  "8000054639": "4403549682707",
  "8000054701": "4403720072851",
  "8000054775": "4403549562259",
  "8000055161": "4403542657939",
  "8000055163": "4403549686931",
  "8000055166": "4403549640467",
  "8000055395": "4403549684115",
  "8000055770": "4403542335635",
  "8000055913": "4403542549651",
  "8000056054": "4403719979539",
  "8000056055": "4403549685651",
  "8000056056": "4403542609043",
  "8000056066": "4403726493203",
  "8000056187": "4403549693587",
  "8000056194": "4403720066707",
  "8000056451": "4403542660755",
  "8000056453": "4403549723027",
  "8000056536": "4403549551891",
  "8000056647": "4403542323219",
  "8000056649": "4403549553171",
  "8000056673": "4403542251923",
  "8000056677": "4403542240915",
  "8000057069": "4403542259091",
  "8000057070": "4403549509907",
  "8000057071": "4403542262163",
  "8000057072": "4403542265235",
  "8000057073": "4403726507795",
  "8000057547": "4403542663059",
  "8000057842": "4403726594835",
  "8000058467": "4403542357139",
  "8000058541": "4403549511827",
  "8000058790": "4403542720531",
  "8000059526": "4403542664467",
  "8000061112": "4403726518163",
  "8000061432": "4403542685971",
  "8000061515": "4403720164115",
  "8000061687": "4403549696275",
  "8000061923": "4403726508691",
  "8000061930": "4403720165011",
  "8000062383": "4403542358291",
  "8000063911": "4403542666003",
  "8000064341": "4403542722067",
  "8000064410": "4403549697299",
  "8000064688": "4403726510995",
  "8000064689": "4403542402195",
  "8000064827": "4403549688723",
  "8000065196": "4403549541011",
  "8000065445": "4403549690131",
  "8000065589": "4403542269843",
  "8000065860": "4403549698067",
  "8000065863": "4403542689939",
  "8000066300": "4403549542675",
  "8000066618": "4403726393107",
  "8000066742": "4403726571539",
  "8000067027": "4403542406419",
  "8000067064": "4403542437011",
  "8000067071": "4403542668819",
  "8000068411": "4403542380563",
  "8000068446": "4403542805907",
  "8000068513": "4403549572115",
  "8000068723": "4403542670995",
  "8000068809": "4403549731475",
  "8000068811": "4403542773011",
  "8000069182": "4403549711123",
  "8000069184": "4403542732435",
  "8000069230": "4403542831763",
  "8000069457": "4403726447635",
  "8000069480": "4403542360083",
  "8000069637": "4403542654483",
  "8000071053": "4403542587155",
  "8000071058": "4403542381459",
  "8000071059": "4403549563795",
  "8000071060": "4403549565203",
  "8000071061": "4403549566739",
  "8000071062": "4403549568531",
  "8000071063": "4403542387347",
  "8000071064": "4403542260755",
  "8000071369": "4403542263827",
  "8000071681": "4403542361747",
  "8000071698": "4403542439315",
  "8000071701": "4403720082195",
  "8000071706": "4403542410131",
  "8000071838": "4403542338195",
  "8000072013": "4403726574099",
  "8000072434": "4403726515475",
  "8000072792": "4403542363027",
  "8000073683": "4403542570899",
  "8000073916": "4403719949971",
  "8000074428": "4403542413203",
  "8000074429": "4403549574291",
  "8000074430": "4403549575571",
  "8000074432": "4403542416019",
  "8000074433": "4403549576851",
  "8000074650": "4403542421907",
  "8000074747": "4403542328083",
  "8000074749": "4403542810131",
  "8000075009": "4403549726099",
  "8000075083": "4403549578899",
  "8000075170": "4403549698835",
  "8000075230": "4403542282771",
  "8000075303": "4403542286483",
  "8000075690": "4403542537107",
  "8000075829": "4403549637267",
  "8000076854": "4403542430739",
  "8000077114": "4403542572435",
  "8000077335": "4403720069139",
  "8000077400": "4403549747347",
  "8000078530": "4403549715347",
  "8000078678": "4403542673299",
  "8000078821": "4403549547667",
  "8000078825": "4403542678803",
  "8000078826": "4403542434707",
  "8000078827": "4403549520659",
  "8000078849": "4403726396435",
  "8000078852": "4403549641619",
  "8000078853": "4403549712403",
  "8000078895": "4403719958163",
  "8000078929": "4403726402451",
  "8000078932": "4403542692243",
  "8000078937": "4403726601107",
  "8000078958": "4403542292755",
  "8000079091": "4403542694675",
  "8000079097": "4403542744211",
  "8000079100": "4403542746771",
  "8000079101": "4403542749203",
  "8000079248": "4403542443155",
  "8000079582": "4403726449043",
  "8000080206": "4403542445715",
  "8000080211": "4403720020627",
  "8000080309": "4403542388883",
  "8000080412": "4403542755603",
  "8000080642": "4403542681107",
  "8000080649": "4403549585427",
  "8000080694": "4403542266771",
  "8000080785": "4403542540179",
  "8000080961": "4403726373651",
  "8000081088": "4403542769427",
  "8000081214": "4403726509331",
  "8000081292": "4403542553491",
  "8000081475": "4403549590675",
  "8000081832": "4403542451347",
  "8000081834": "4403549592467",
  "8000081835": "4403549594131",
  "8000081985": "4403726720275",
  "8000082116": "4403726450451",
  "8000082396": "4403542763539",
  "8000082523": "4403720150675",
  "8000082670": "4403542364307",
  "8000082681": "4403542454163",
  "8000082833": "4403542534291",
  "8000082880": "4403542766739",
  "8000082950": "4403549595667",
  "8000083094": "4403542456467",
  "8000083121": "4403542273427",
  "8000083195": "4403542795923",
  "8000083370": "4403542458515",
  "8000083428": "4403549739155",
  "8000083491": "4403542366739",
  "8000083691": "4403542696211",
  "8000083767": "4403549614867",
  "8000084180": "4403542531987",
  "8000084197": "4403542530195",
  "8000084346": "4403542391187",
  "8000084527": "4403720156179",
  "8000084576": "4403542459795",
  "8000084743": "4403549634579",
  "8000084855": "4403549662483",
  "8000085035": "4403726511763",
  "8000085062": "4403542528147",
  "8000085203": "4403549724819",
  "8000085252": "4403542557203",
  "8000085254": "4403542561811",
  "8000085255": "4403542565651",
  "8000085256": "4403542569107",
  "8000085257": "4403549650323",
  "8000085312": "4403542735635",
  "8000085320": "4403549633043",
  "8000085414": "4403542462099",
  "8000085570": "4403542590227",
  "8000085740": "4403542144019",
  "8000085741": "4403542525203",
  "8000085754": "4403542737043",
  "8000085757": "4403542524307",
  "8000085868": "4403542521619",
  "8000085883": "4403549695507",
  "8000085889": "4403542591251",
  "8000085982": "4403542758035",
  "8000086001": "4403542464915",
  "8000086087": "4403542829459",
  "8000086303": "4403549630227",
  "8000086311": "4403542397203",
  "8000086767": "4403542518035",
  "8000086878": "4403542515475",
  "8000086984": "4403726505491",
  "8000087143": "4403542369171",
  "8000087195": "4403726601747",
  "8000087330": "4403549726867",
  "8000087477": "4403549700883",
  "8000087902": "4403542697875",
  "8000088006": "4403542699923",
  "8000088008": "4403542370323",
  "8000088119": "4403542842131",
  "8000088176": "4403542371987",
  "8000088300": "4403542573587",
  "8000088301": "4403542579603",
  "8000088329": "4403542514579",
  "8000088375": "4403549703187",
  "8000088530": "4403720166419",
  "8000088565": "4403549627539",
  "8000088575": "4403726386963",
  "8000088997": "4403542345619",
  "8000088998": "4403549598611",
  "8000089030": "4403549704723",
  "8000089224": "4403549655571",
  "8000089380": "4403542467091",
  "8000089574": "4403549601043",
  "8000089576": "4403542470035",
  "8000089601": "4403542703635",
  "8000089625": "4403549626131",
  "8000089627": "4403542237715",
  "8000089650": "4403549656851",
  "8000089703": "4403549605267",
  "8000089706": "4403719963155",
  "8000089765": "4403549606291",
  "8000089766": "4403542582035",
  "8000089907": "4403542510867",
  "8000089908": "4403549727891",
  "8000089935": "4403542509587",
  "8000090000": "4403542583187",
  "8000090159": "4403542498451",
  "8000090368": "4403542596755",
  "8000090371": "4403542477459",
  "8000090376": "4403542844563",
  "8000090380": "4403549692819",
  "8000090388": "4403542480019",
  "8000090389": "4403549607827",
  "8000090390": "4403542482067",
  "8000090393": "4403720021267",
  "8000090448": "4403542739475",
  "8000090456": "4403720085907",
  "8000090457": "4403542373523",
  "8000090458": "4403542374419",
  "8000090459": "4403542375699",
  "8000090688": "4403549729299",
  "8000090690": "4403542507923",
  "8000090722": "4403549549459",
  "8000090750": "4403542760211",
  "8000090905": "4403542281107",
  "8000091004": "4403542277267",
  "8000091109": "4403542483731",
  "8000091113": "4403542485011",
  "8000091353": "4403542377875",
  "8000091507": "4403542278803",
  "8000091511": "4403549610003",
  "8000091590": "4403542705555",
  "8000091626": "4403549623315",
  "8000091981": "4403542709011",
  "8000092015": "4403542584851",
  "8000092469": "4403549706259",
  "8000092580": "4403726498323",
  "8000092623": "4403542505107",
  "8000092696": "4403549561107",
  "8000092956": "4403542501267",
  "8000093209": "4403542682131",
  "8000093230": "4403549707923",
  "8000093311": "4403542710291",
  "8000093439": "4407930317459",
  "8000093508": "4403542716051",
  "8000093586": "4403720330515",
  "8000093704": "4403549613075",
  "8000093864": "4403542712339",
  "8000093887": "4403542243859",
  "8000093970": "4403542503443",
  "8000093981": "4403726387603",
  }

  function getArticleURL () {
    const url = window.location.href
    const startIdx = url.lastIndexOf('/') + 1
    const freshdeskIdLength = 10
    const endIdx = startIdx + freshdeskIdLength
    const id = url.substring(startIdx, endIdx)

    if (articleIdMap[id]) window.location.replace('https://support.addigy.com/hc/en-us/articles/' + articleIdMap[id])
  }

	getArticleURL()

  /* Custom Javascript for theme --------------------------------------------------------------- */

  // Bottom tabs - recently viewed and promoted
  $("#other-articles").tabs();

  // Add knowledge base filtering automatically
  //$('<input type="hidden" name="type" id="type" value="knowledge_base"/>').appendTo('form.search');
  
  // Accordions
   $('.section-tree h2').click(function() {
      $(this).toggleClass('active');
      $(this).parent().toggleClass('open');
      $(this).next().slideToggle();
      $(this).parent().find('.see-all-sections-link').toggle();
      return false;
  }).next().not(':eq(0)').hide();
 $('.section-tree .section:first-of-type h2').addClass('active');

  /* END Custom Javascript for theme ----------------------------------------------------------- */

  /* Default Copenhagen Javascript below ------------------------------------------------------- */

  // Key map
  var ENTER = 13;
  var ESCAPE = 27;
  var SPACE = 32;
  var UP = 38;
  var DOWN = 40;
  var TAB = 9;

  function closest(element, selector) {
    if (Element.prototype.closest) {
      return element.closest(selector);
    }
    do {
      if (Element.prototype.matches && element.matches(selector) ||
        Element.prototype.msMatchesSelector && element.msMatchesSelector(selector) ||
        Element.prototype.webkitMatchesSelector && element.webkitMatchesSelector(selector)) {
        return element;
      }
      element = element.parentElement || element.parentNode;
    } while (element !== null && element.nodeType === 1);
    return null;
  }

  // social share popups
  Array.prototype.forEach.call(document.querySelectorAll('.share a'), function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '', 'height = 500, width = 500');
    });
  });

  // In some cases we should preserve focus after page reload
  function saveFocus() {
    var activeElementId = document.activeElement.getAttribute("id");
    sessionStorage.setItem('returnFocusTo', '#' + activeElementId);
  }
  var returnFocusTo = sessionStorage.getItem('returnFocusTo');
  if (returnFocusTo) {
    sessionStorage.removeItem('returnFocusTo');
    var returnFocusToEl = document.querySelector(returnFocusTo);
    returnFocusToEl && returnFocusToEl.focus && returnFocusToEl.focus();
  }

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var commentContainerTextarea = document.querySelector('.comment-container textarea'),
    commentContainerFormControls = document.querySelector('.comment-form-controls, .comment-ccs');

  if (commentContainerTextarea) {
    commentContainerTextarea.addEventListener('focus', function focusCommentContainerTextarea() {
      commentContainerFormControls.style.display = 'block';
      commentContainerTextarea.removeEventListener('focus', focusCommentContainerTextarea);
    });

    if (commentContainerTextarea.value !== '') {
      commentContainerFormControls.style.display = 'block';
    }
  }

  // Expand Request comment form when Add to conversation is clicked
  var showRequestCommentContainerTrigger = document.querySelector('.request-container .comment-container .comment-show-container'),
    requestCommentFields = document.querySelectorAll('.request-container .comment-container .comment-fields'),
    requestCommentSubmit = document.querySelector('.request-container .comment-container .request-submit-comment');

  if (showRequestCommentContainerTrigger) {
    showRequestCommentContainerTrigger.addEventListener('click', function() {
      showRequestCommentContainerTrigger.style.display = 'none';
      Array.prototype.forEach.call(requestCommentFields, function(e) { e.style.display = 'block'; });
      requestCommentSubmit.style.display = 'inline-block';

      if (commentContainerTextarea) {
        commentContainerTextarea.focus();
      }
    });
  }

  // Mark as solved button
  var requestMarkAsSolvedButton = document.querySelector('.request-container .mark-as-solved:not([data-disabled])'),
    requestMarkAsSolvedCheckbox = document.querySelector('.request-container .comment-container input[type=checkbox]'),
    requestCommentSubmitButton = document.querySelector('.request-container .comment-container input[type=submit]');

  if (requestMarkAsSolvedButton) {
    requestMarkAsSolvedButton.addEventListener('click', function() {
      requestMarkAsSolvedCheckbox.setAttribute('checked', true);
      requestCommentSubmitButton.disabled = true;
      this.setAttribute('data-disabled', true);
      // Element.closest is not supported in IE11
      closest(this, 'form').submit();
    });
  }

  // Change Mark as solved text according to whether comment is filled
  var requestCommentTextarea = document.querySelector('.request-container .comment-container textarea');

  var usesWysiwyg = requestCommentTextarea && requestCommentTextarea.dataset.helper === "wysiwyg";

  function isEmptyPlaintext(s) {
    return s.trim() === '';
  }

  function isEmptyHtml(xml) {
    var doc = new DOMParser().parseFromString(`<_>${xml}</_>`, "text/xml");
    var img = doc.querySelector("img");
    return img === null && isEmptyPlaintext(doc.children[0].textContent);
  };

  var isEmpty = usesWysiwyg ? isEmptyHtml : isEmptyPlaintext;

  if (requestCommentTextarea) {
    requestCommentTextarea.addEventListener('input', function() {
      if (isEmpty(requestCommentTextarea.value)) {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-translation');
        }
        requestCommentSubmitButton.disabled = true;
      } else {
        if (requestMarkAsSolvedButton) {
          requestMarkAsSolvedButton.innerText = requestMarkAsSolvedButton.getAttribute('data-solve-and-submit-translation');
        }
        requestCommentSubmitButton.disabled = false;
      }
    });
  }

  // Disable submit button if textarea is empty
  if (requestCommentTextarea && isEmpty(requestCommentTextarea.value)) {
    requestCommentSubmitButton.disabled = true;
  }

  // Submit requests filter form on status or organization change in the request list page
  Array.prototype.forEach.call(document.querySelectorAll('#request-status-select, #request-organization-select'), function(el) {
    el.addEventListener('change', function(e) {
      e.stopPropagation();
      saveFocus();
      closest(this, 'form').submit();
    });
  });

  // Submit requests filter form on search in the request list page
  var quickSearch = document.querySelector('#quick-search');
  quickSearch && quickSearch.addEventListener('keyup', function(e) {
    if (e.keyCode === ENTER) {
      e.stopPropagation();
      saveFocus();
      closest(this, 'form').submit();
    }
  });

  function toggleNavigation(toggle, menu) {
    var isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    toggle.setAttribute('aria-expanded', !isExpanded);
  }

  function closeNavigation(toggle, menu) {
    menu.setAttribute('aria-expanded', false);
    toggle.setAttribute('aria-expanded', false);
    toggle.focus();
  }

  var burgerMenu = document.querySelector('.header .menu-button');
  var userMenu = document.querySelector('#user-nav');

  burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleNavigation(this, userMenu);
  });


  userMenu.addEventListener('keyup', function(e) {
    if (e.keyCode === ESCAPE) {
      e.stopPropagation();
      closeNavigation(burgerMenu, this);
    }
  });

  if (userMenu.children.length === 0) {
    burgerMenu.style.display = 'none';
  }

  // Toggles expanded aria to collapsible elements
  var collapsible = document.querySelectorAll('.collapsible-nav, .collapsible-sidebar');

  Array.prototype.forEach.call(collapsible, function(el) {
    var toggle = el.querySelector('.collapsible-nav-toggle, .collapsible-sidebar-toggle');

    el.addEventListener('click', function(e) {
      toggleNavigation(toggle, this);
    });

    el.addEventListener('keyup', function(e) {
      if (e.keyCode === ESCAPE) {
        closeNavigation(toggle, this);
      }
    });
  });

  // Submit organization form in the request page
  var requestOrganisationSelect = document.querySelector('#request-organization select');

  if (requestOrganisationSelect) {
    requestOrganisationSelect.addEventListener('change', function() {
      closest(this, 'form').submit();
    });
  }

  // If multibrand search has more than 5 help centers or categories collapse the list
  var multibrandFilterLists = document.querySelectorAll(".multibrand-filter-list");
  Array.prototype.forEach.call(multibrandFilterLists, function(filter) {
    if (filter.children.length > 6) {
      // Display the show more button
      var trigger = filter.querySelector(".see-all-filters");
      trigger.setAttribute("aria-hidden", false);

      // Add event handler for click
      trigger.addEventListener("click", function(e) {
        e.stopPropagation();
        trigger.parentNode.removeChild(trigger);
        filter.classList.remove("multibrand-filter-list--collapsed")
      })
    }
  });

  // If there are any error notifications below an input field, focus that field
  var notificationElm = document.querySelector(".notification-error");
  if (
    notificationElm &&
    notificationElm.previousElementSibling &&
    typeof notificationElm.previousElementSibling.focus === "function"
  ) {
    notificationElm.previousElementSibling.focus();
  }

  // Dropdowns

  function Dropdown(toggle, menu) {
    this.toggle = toggle;
    this.menu = menu;

    this.menuPlacement = {
      top: menu.classList.contains("dropdown-menu-top"),
      end: menu.classList.contains("dropdown-menu-end")
    };

    this.toggle.addEventListener("click", this.clickHandler.bind(this));
    this.toggle.addEventListener("keydown", this.toggleKeyHandler.bind(this));
    this.menu.addEventListener("keydown", this.menuKeyHandler.bind(this));
  };

  Dropdown.prototype = {

    get isExpanded() {
      return this.menu.getAttribute("aria-expanded") === "true";
    },

    get menuItems() {
      return Array.prototype.slice.call(this.menu.querySelectorAll("[role='menuitem']"));
    },

    dismiss: function() {
      if (!this.isExpanded) return;

      this.menu.setAttribute("aria-expanded", false);
      this.menu.classList.remove("dropdown-menu-end", "dropdown-menu-top");
    },

    open: function() {
      if (this.isExpanded) return;

      this.menu.setAttribute("aria-expanded", true);
      this.handleOverflow();
    },

    handleOverflow: function() {
      var rect = this.menu.getBoundingClientRect();

      var overflow = {
        right: rect.left < 0 || rect.left + rect.width > window.innerWidth,
        bottom: rect.top < 0 || rect.top + rect.height > window.innerHeight
      };

      if (overflow.right || this.menuPlacement.end) {
        this.menu.classList.add("dropdown-menu-end");
      }

      if (overflow.bottom || this.menuPlacement.top) {
        this.menu.classList.add("dropdown-menu-top");
      }

      if (this.menu.getBoundingClientRect().top < 0) {
        this.menu.classList.remove("dropdown-menu-top")
      }
    },

    focusNextMenuItem: function(currentItem) {
      if (!this.menuItems.length) return;

      var currentIndex = this.menuItems.indexOf(currentItem);
      var nextIndex = currentIndex === this.menuItems.length - 1 || currentIndex < 0 ? 0 : currentIndex + 1;

      this.menuItems[nextIndex].focus();
    },

    focusPreviousMenuItem: function(currentItem) {
      if (!this.menuItems.length) return;

      var currentIndex = this.menuItems.indexOf(currentItem);
      var previousIndex = currentIndex <= 0 ? this.menuItems.length - 1 : currentIndex - 1;

      this.menuItems[previousIndex].focus();
    },

    clickHandler: function() {
      if (this.isExpanded) {
        this.dismiss();
      } else {
        this.open();
      }
    },

    toggleKeyHandler: function(e) {
      switch (e.keyCode) {
        case ENTER:
        case SPACE:
        case DOWN:
          e.preventDefault();
          this.open();
          this.focusNextMenuItem();
          break;
        case UP:
          e.preventDefault();
          this.open();
          this.focusPreviousMenuItem();
          break;
        case ESCAPE:
          this.dismiss();
          this.toggle.focus();
          break;
      }
    },

    menuKeyHandler: function(e) {
      var firstItem = this.menuItems[0];
      var lastItem = this.menuItems[this.menuItems.length - 1];
      var currentElement = e.target;

      switch (e.keyCode) {
        case ESCAPE:
          this.dismiss();
          this.toggle.focus();
          break;
        case DOWN:
          e.preventDefault();
          this.focusNextMenuItem(currentElement);
          break;
        case UP:
          e.preventDefault();
          this.focusPreviousMenuItem(currentElement);
          break;
        case TAB:
          if (e.shiftKey) {
            if (currentElement === firstItem) {
              this.dismiss();
            } else {
              e.preventDefault();
              this.focusPreviousMenuItem(currentElement);
            }
          } else if (currentElement === lastItem) {
            this.dismiss();
          } else {
            e.preventDefault();
            this.focusNextMenuItem(currentElement);
          }
          break;
        case ENTER:
        case SPACE:
          e.preventDefault();
          currentElement.click();
          break;
      }
    }
  }

  var dropdowns = [];
  var dropdownToggles = Array.prototype.slice.call(document.querySelectorAll(".dropdown-toggle"));

  dropdownToggles.forEach(function(toggle) {
    var menu = toggle.nextElementSibling;
    if (menu && menu.classList.contains("dropdown-menu")) {
      dropdowns.push(new Dropdown(toggle, menu));
    }
  });

  document.addEventListener("click", function(evt) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.toggle.contains(evt.target)) {
        dropdown.dismiss();
      }
    });
  });


  /* track signup (demo) clicks from KB article template */
  var btn = document.getElementById('sidebar-signup-button');

  // Adds a listener for the "submit" event.
  btn.addEventListener('click', function(event) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Support Site',
      eventAction: 'click',
      eventLabel: 'Request a Demo'
    });
  });


});
$(document).ready(function(){
  //$('.form-field:nth-of-type(4n)').insertBefore('.form-field:nth-of-type(1n)');
  // $('.form-field:nth-of-type(4n)').addClass('topic-field');
  // $('.topic-field').appendTo('.form-field:nth-of-type(1n)');
  if (window.location.href.indexOf("hc/en-us/community") > -1) {
      $(".community-footer").css("display", "flex");
      $(".request-callout").css("display", "none");
    }
  else{
    $(".community-footer").css("display", "none");
      $(".request-callout").css("display", "flex");
  }
  $('.community-hero .search input[type="search"]').attr('placeholder', 'Search Community');
    if ($(".breadcrumbs")){
  var title = $('.breadcrumbs li:first-child').attr('title');
  
  if(title && title.includes("Addigy")) {
      $('.breadcrumbs li:first-child a').text('Support Home');
  }
  } 
  
});