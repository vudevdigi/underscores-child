!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.jquery_mmenu_js=e(t.jQuery)}(this,function(t){var e,n,i,s,a,r,o,l,d,h,c,p,f,u,_,g,v,m;return function(t){var e,n,i,s,a,r="mmenu",o="7.0.6";t[r]&&t[r].version>o||(t[r]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},t[r].version=o,t[r].uniqueId=0,t[r].wrappers={},t[r].addons={},t[r].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},t[r].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},t[r].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(i,s){if(this.trigger("openPanel:before",i),i&&i.length&&(i.is("."+e.panel)||(i=i.closest("."+e.panel)),i.is("."+e.panel))){var a=this;if("boolean"!=typeof s&&(s=!0),i.parent("."+e.listitem+"_vertical").length)i.parents("."+e.listitem+"_vertical").addClass(e.listitem+"_opened").children("."+e.panel).removeClass(e.hidden),this.openPanel(i.parents("."+e.panel).not(function(){return t(this).parent("."+e.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",i),this.trigger("openPanel:finish",i);else{if(i.hasClass(e.panel+"_opened"))return;var o=this.$pnls.children("."+e.panel),l=this.$pnls.children("."+e.panel+"_opened");if(!t[r].support.csstransitions)return l.addClass(e.hidden).removeClass(e.panel+"_opened"),i.removeClass(e.hidden).addClass(e.panel+"_opened"),this.trigger("openPanel:start",i),void this.trigger("openPanel:finish",i);o.not(i).removeClass(e.panel+"_opened-parent");for(var d=i.data(n.parent);d;)d=d.closest("."+e.panel),d.parent("."+e.listitem+"_vertical").length||d.addClass(e.panel+"_opened-parent"),d=d.data(n.parent);o.removeClass(e.panel+"_highest").not(l).not(i).addClass(e.hidden),i.removeClass(e.hidden);var h=function(){l.removeClass(e.panel+"_opened"),i.addClass(e.panel+"_opened"),i.hasClass(e.panel+"_opened-parent")?(l.addClass(e.panel+"_highest"),i.removeClass(e.panel+"_opened-parent")):(l.addClass(e.panel+"_opened-parent"),i.addClass(e.panel+"_highest")),a.trigger("openPanel:start",i)},c=function(){l.removeClass(e.panel+"_highest").addClass(e.hidden),i.removeClass(e.panel+"_highest"),a.trigger("openPanel:finish",i)};s&&!i.hasClass(e.panel+"_noanimation")?setTimeout(function(){a.__transitionend(i,function(){c()},a.conf.transitionDuration),h()},a.conf.openingInterval):(h(),c())}this.trigger("openPanel:after",i)}},closePanel:function(t){this.trigger("closePanel:before",t);var n=t.parent();n.hasClass(e.listitem+"_vertical")&&(n.removeClass(e.listitem+"_opened"),t.addClass(e.hidden),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(t){this.trigger("closeAllPanels:before"),this.$pnls.find("."+e.listview).children().removeClass(e.listitem+"_selected").filter("."+e.listitem+"_vertical").removeClass(e.listitem+"_opened");var n=this.$pnls.children("."+e.panel),i=t&&t.length?t:n.first();this.$pnls.children("."+e.panel).not(i).removeClass(e.panel+"_opened").removeClass(e.panel+"_opened-parent").removeClass(e.panel+"_highest").addClass(e.hidden),this.openPanel(i,!1),this.trigger("closeAllPanels:after")},togglePanel:function(t){var n=t.parent();n.hasClass(e.listitem+"_vertical")&&this[n.hasClass(e.listitem+"_opened")?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+e.listitem+"_selected").removeClass(e.listitem+"_selected"),t.addClass(e.listitem+"_selected"),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},_initHooks:function(){for(var t in this.opts.hooks)this.bind(t,this.opts.hooks[t])},_initWrappers:function(){this.trigger("initWrappers:before");for(var e=0;e<this.opts.wrappers.length;e++){var n=t[r].wrappers[this.opts.wrappers[e]];"function"==typeof n&&n.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var e;this.trigger("initAddons:before");for(e in t[r].addons)t[r].addons[e].add.call(this),t[r].addons[e].add=function(){};for(e in t[r].addons)t[r].addons[e].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var t=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var n in this.opts.extensions)this.opts.extensions[n]=this.opts.extensions[n].length?e.menu+"_"+this.opts.extensions[n].join(" "+e.menu+"_"):"",this.opts.extensions[n]&&function(e){t.matchMedia(e,function(){this.$menu.addClass(this.opts.extensions[e])},function(){this.$menu.removeClass(this.opts.extensions[e])})}(n);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before"),this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){t(this).attr("id",e.mm(t(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=t('<div class="'+e.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(e.menu).parent().addClass(e.wrapper),this.trigger("initMenu:after")},_initPanels:function(n){this.trigger("initPanels:before",n),n=n||this.$pnls.children(this.conf.panelNodetype);var i=t(),s=this,a=function(n){n.filter(s.conf.panelNodetype).each(function(n){var r=s._initPanel(t(this));if(r){s._initNavbar(r),s._initListview(r),i=i.add(r);var o=r.children("."+e.listview).children("li").children(s.conf.panelNodetype).add(r.children("."+s.conf.classNames.panel));o.length&&a(o)}})};a(n),this.trigger("initPanels:after",i)},_initPanel:function(t){if(this.trigger("initPanel:before",t),t.hasClass(e.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,e.panel),this.__refactorClass(t,this.conf.classNames.nopanel,e.nopanel),this.__refactorClass(t,this.conf.classNames.inset,e.listview+"_inset"),t.filter("."+e.listview+"_inset").addClass(e.nopanel),t.hasClass(e.nopanel))return!1;var i=t.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;t.removeClass(this.conf.classNames.vertical);var s=t.attr("id")||this.__getUniqueId();t.is("ul, ol")&&(t.removeAttr("id"),t.wrap("<div />"),t=t.parent()),t.attr("id",s),t.addClass(e.panel+" "+e.hidden);var a=t.parent("li");return i?a.addClass(e.listitem+"_vertical"):t.appendTo(this.$pnls),a.length&&(a.data(n.child,t),t.data(n.parent,a)),this.trigger("initPanel:after",t),t},_initNavbar:function(i){if(this.trigger("initNavbar:before",i),!i.children("."+e.navbar).length){var s=i.data(n.parent),a=t('<div class="'+e.navbar+'" />'),r=this.__getPanelTitle(i,this.opts.navbar.title),o="";if(s&&s.length){if(s.hasClass(e.listitem+"_vertical"))return;if(s.parent().is("."+e.listview))var l=s.children("a, span").not("."+e.btn+"_next");else l=s.closest("."+e.panel).find('a[href="#'+i.attr("id")+'"]');var d=(s=(l=l.first()).closest("."+e.panel)).attr("id");switch(r=this.__getPanelTitle(i,t("<span>"+l.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":o=l.attr("href");break;case"parent":o="#"+d}a.append('<a class="'+e.btn+" "+e.btn+"_prev "+e.navbar+'__btn" href="#'+d+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&i.addClass(e.panel+"_has-navbar"),a.append('<a class="'+e.navbar+'__title"'+(o.length?' href="'+o+'"':"")+">"+r+"</a>").prependTo(i),this.trigger("initNavbar:after",i)}},_initListview:function(i){this.trigger("initListview:before",i);var s=this.__childAddBack(i,"ul, ol");this.__refactorClass(s,this.conf.classNames.nolistview,e.nolistview);var a=s.not("."+e.nolistview).addClass(e.listview).children().addClass(e.listitem);this.__refactorClass(a,this.conf.classNames.selected,e.listitem+"_selected"),this.__refactorClass(a,this.conf.classNames.divider,e.listitem+"_divider"),this.__refactorClass(a,this.conf.classNames.spacer,e.listitem+"_spacer");var r=i.data(n.parent);if(r&&r.is("."+e.listitem)&&!r.children("."+e.btn+"_next").length){var o=r.children("a, span").first(),l=t('<a class="'+e.btn+'_next" href="#'+i.attr("id")+'" />').insertBefore(o);o.is("span")&&l.addClass(e.btn+"_fullwidth")}this.trigger("initListview:after",i)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+e.listitem+"_selected").removeClass(e.listitem+"_selected").last().addClass(e.listitem+"_selected"),n=t.length?t.closest("."+e.panel):this.$pnls.children("."+e.panel).first();this.openPanel(n,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var n=this;s.$body.on(i.click+"-oncanvas","a[href]",function(i){var s=t(this),a=s.attr("href"),o=n.$menu.find(s).length,l=s.is("."+e.listitem+" > a"),d=s.is('[rel="external"]')||s.is('[target="_blank"]');if(o&&a.length>1&&"#"==a.slice(0,1))try{var h=n.$menu.find(a);if(h.is("."+e.panel))return n[s.parent().hasClass(e.listitem+"_vertical")?"togglePanel":"openPanel"](h),void i.preventDefault()}catch(t){}var c={close:null,setSelected:null,preventDefault:"#"==a.slice(0,1)};for(var p in t[r].addons){var f=t[r].addons[p].clickAnchor.call(n,s,o,l,d);if(f){if("boolean"==typeof f)return void i.preventDefault();"object"==typeof f&&(c=t.extend({},c,f))}}o&&l&&!d&&(n.__valueOrFn(s,n.opts.onClick.setSelected,c.setSelected)&&n.setSelected(t(i.target).parent()),n.__valueOrFn(s,n.opts.onClick.preventDefault,c.preventDefault)&&i.preventDefault(),n.__valueOrFn(s,n.opts.onClick.close,c.close)&&n.opts.offCanvas&&"function"==typeof n.close&&n.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var t=this;for(var e in this.mtch)!function(){var n=e,i=window.matchMedia(n);t._fireMatchMedia(n,i),i.addListener(function(e){t._fireMatchMedia(n,e)})}()},_fireMatchMedia:function(t,e){for(var n=e.matches?"yes":"no",i=0;i<this.mtch[t].length;i++)this.mtch[t][i][n].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=e.umm(t)),t},__api:function(){var e=this,n={};return t.each(this._api,function(t){var i=this;n[i]=function(){var t=e[i].apply(e,arguments);return void 0===t?n:t}}),n},__valueOrFn:function(t,e,n){if("function"==typeof e){var i=e.call(t[0]);if(void 0!==i)return i}return"function"!=typeof e&&void 0!==e||void 0===n?e:n},__getPanelTitle:function(e,i){var s;return"function"==typeof this.opts.navbar.title&&(s=this.opts.navbar.title.call(e[0])),void 0===s&&(s=e.data(n.title)),void 0!==s?s:"string"==typeof i?t[r].i18n(i):t[r].i18n(t[r].defaults.navbar.title)},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(n)},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+e.listitem+"_divider").not("."+e.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+e.btn+"_next")},__openPanelWoAnimation:function(t){t.hasClass(e.panel+"_noanimation")||(t.addClass(e.panel+"_noanimation"),this.__transitionend(t,function(){t.removeClass(e.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(t))},__transitionend:function(t,e,n){var s=!1,a=function(n){void 0!==n&&n.target!=t[0]||(s||(t.off(i.transitionend),t.off(i.webkitTransitionEnd),e.call(t[0])),s=!0)};t.on(i.transitionend,a),t.on(i.webkitTransitionEnd,a),setTimeout(a,1.1*n)},__getUniqueId:function(){return e.mm(t[r].uniqueId++)}},t.fn[r]=function(a,o){t[r].glbl||(s={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},e={},n={},i={},t.each([e,n,i],function(t,e){e.add=function(t){for(var n=0,i=(t=t.split(" ")).length;n<i;n++)e[t[n]]=e.mm(t[n])}}),e.mm=function(t){return"mm-"+t},e.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),e.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},n.mm=function(t){return"mm-"+t},n.add("parent child title"),i.mm=function(t){return t+".mm"},i.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),t[r]._c=e,t[r]._d=n,t[r]._e=i,t[r].glbl=s),a=t.extend(!0,{},t[r].defaults,a),o=t.extend(!0,{},t[r].configuration,o);var l=t();return this.each(function(){var e=t(this);if(!e.data(r)){var n=new t[r](e,a,o);n.$menu.data(r,n.__api()),l=l.add(n.$menu)}}),l},t[r].i18n=(a={},function(e){switch(typeof e){case"object":return t.extend(a,e),a;case"string":return a[e]||e;case"undefined":default:return a}}),t[r].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions,csstransforms:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms||Modernizr.csstransforms,csstransforms3d:"undefined"==typeof Modernizr||void 0===Modernizr.csstransforms3d||Modernizr.csstransforms3d})}(t),o="offCanvas",(e=t)[r="mmenu"].addons[o]={setup:function(){if(this.opts[o]){var t=this.opts[o],i=this.conf[o];a=e[r].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"object"!=typeof t&&(t={}),t=this.opts[o]=e.extend(!0,{},e[r].defaults[o],t),"string"!=typeof i.pageSelector&&(i.pageSelector="> "+i.pageNodetype),this.vars.opened=!1;var s=[n.menu+"_offcanvas"];e[r].support.csstransforms||s.push(n["no-csstransforms"]),e[r].support.csstransforms3d||s.push(n["no-csstransforms3d"]),this.bind("initMenu:after",function(){var t=this;this.setPage(a.$page),this._initBlocker(),this["_initWindow_"+o](),this.$menu.addClass(s.join(" ")).parent("."+n.wrapper).removeClass(n.wrapper),this.$menu[i.menuInsertMethod](i.menuInsertSelector);var e=window.location.hash;if(e){var r=this._getOriginalMenuId();r&&r==e.slice(1)&&setTimeout(function(){t.open()},1e3)}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){n=e[r]._c,i=e[r]._d,s=e[r]._e,n.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(t,e){var i=this;if(this.opts[o]){var s=this._getOriginalMenuId();if(s&&t.is('[href="#'+s+'"]')){if(e)return this.open(),!0;var r=t.closest("."+n.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),i.__transitionend(r,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(a.$page)return s=a.$page.first().attr("id"),s&&t.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},e[r].defaults[o]={blockUI:!0,moveBackground:!0},e[r].configuration[o]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},e[r].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var t=this;this._openSetup(),setTimeout(function(){t._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},e[r].prototype._openSetup=function(){var t=this,r=this.opts[o];this.closeAllOthers(),a.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),a.$wndw.trigger(s.resize+"-"+o,[!0]);var l=[n.wrapper+"_opened"];r.blockUI&&l.push(n.wrapper+"_blocking"),"modal"==r.blockUI&&l.push(n.wrapper+"_modal"),r.moveBackground&&l.push(n.wrapper+"_background"),a.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(n.menu+"_opened")},e[r].prototype._openFinish=function(){var t=this;this.__transitionend(a.$page.first(),function(){t.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),a.$html.addClass(n.wrapper+"_opening")},e[r].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(a.$page.first(),function(){t.$menu.removeClass(n.menu+"_opened");var s=[n.wrapper+"_opened",n.wrapper+"_blocking",n.wrapper+"_modal",n.wrapper+"_background"];a.$html.removeClass(s.join(" ")),a.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),a.$html.removeClass(n.wrapper+"_opening"),this.trigger("close:after")}},e[r].prototype.closeAllOthers=function(){a.$body.find("."+n.menu+"_offcanvas").not(this.$menu).each(function(){var t=e(this).data(r);t&&t.close&&t.close()})},e[r].prototype.setPage=function(t){this.trigger("setPage:before",t);var i=this,s=this.conf[o];t&&t.length||(t=a.$body.find(s.pageSelector),s.noPageSelector.length&&(t=t.not(s.noPageSelector.join(", "))),t.length>1&&s.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[o].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(n.page+" "+n.slideout),a.$page=t,this.trigger("setPage:after",t)},e[r].prototype["_initWindow_"+o]=function(){a.$wndw.off(s.keydown+"-"+o).on(s.keydown+"-"+o,function(t){if(a.$html.hasClass(n.wrapper+"_opened")&&9==t.keyCode)return t.preventDefault(),!1});var t=0;a.$wndw.off(s.resize+"-"+o).on(s.resize+"-"+o,function(e,i){if(1==a.$page.length&&(i||a.$html.hasClass(n.wrapper+"_opened"))){var s=a.$wndw.height();(i||s!=t)&&(t=s,a.$page.css("minHeight",s))}})},e[r].prototype._initBlocker=function(){var t=this;this.opts[o].blockUI&&(a.$blck||(a.$blck=e('<div class="'+n.page+"__blocker "+n.slideout+'" />')),a.$blck.appendTo(a.$body).off(s.touchstart+"-"+o+" "+s.touchmove+"-"+o).on(s.touchstart+"-"+o+" "+s.touchmove+"-"+o,function(t){t.preventDefault(),t.stopPropagation(),a.$blck.trigger(s.mousedown+"-"+o)}).off(s.mousedown+"-"+o).on(s.mousedown+"-"+o,function(e){e.preventDefault(),a.$html.hasClass(n.wrapper+"_modal")||(t.closeAllOthers(),t.close())}))},p="screenReader",(l=t)[c="mmenu"].addons[p]={setup:function(){var t=this,e=this.opts[p],n=this.conf[p];l[c].glbl,"boolean"==typeof e&&(e={aria:e,text:e}),"object"!=typeof e&&(e={}),(e=this.opts[p]=l.extend(!0,{},l[c].defaults[p],e)).aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+d.listview).children().each(function(){t.__sr_aria(l(this),"hidden",l(this).is("."+d.hidden))})}),this.bind("openPanel:start",function(t){var e=this.$menu.find("."+d.panel).not(t).not(t.parents("."+d.panel)),n=t.add(t.find("."+d.listitem+"_vertical ."+d.listitem+"_opened").children("."+d.panel));this.__sr_aria(e,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(e){var n=e.find("."+d.btn).each(function(){t.__sr_aria(l(this),"owns",l(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var e=t.children("."+d.navbar);this.__sr_aria(e,"hidden",!t.hasClass(d.panel+"_has-navbar"))}),e.text&&(this.bind("initlistview:after",function(t){var e=t.find("."+d.listview).find("."+d.btn+"_fullwidth").parent().children("span");this.__sr_aria(e,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var e=t.children("."+d.navbar),n=!!e.children("."+d.btn+"_prev").length;this.__sr_aria(e.children("."+d.title),"hidden",n)}))),e.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(t){var e=t.children("."+d.navbar),i=e.children("."+d.title).text(),s=l[c].i18n(n.text.closeSubmenu);i&&(s+=" ("+i+")"),e.children("."+d.btn+"_prev").html(this.__sr_text(s))}),this.bind("initListview:after",function(e){var i=e.data(h.parent);if(i&&i.length){var s=i.children("."+d.btn+"_next"),a=s.nextAll("span, a").first().text(),r=l[c].i18n(n.text[s.parent().is("."+d.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);a&&(r+=" ("+a+")"),s.html(t.__sr_text(r))}}))},add:function(){d=l[c]._c,h=l[c]._d,l[c]._e,d.add("sronly")},clickAnchor:function(t,e){}},l[c].defaults[p]={aria:!0,text:!0},l[c].configuration[p]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},l[c].prototype.__sr_aria=function(t,e,n){t.prop("aria-"+e,n)[n?"attr":"removeAttr"]("aria-"+e,n)},l[c].prototype.__sr_role=function(t,e){t.prop("role",e)[e?"attr":"removeAttr"]("role",e)},l[c].prototype.__sr_text=function(t){return'<span class="'+d.sronly+'">'+t+"</span>"},m="scrollBugFix",(f=t)[v="mmenu"].addons[m]={setup:function(){var t=this.opts[m];this.conf[m],g=f[v].glbl,f[v].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof t&&(t={fix:t}),"object"!=typeof t&&(t={}),(t=this.opts[m]=f.extend(!0,{},f[v].defaults[m],t)).fix&&(this.bind("open:start",function(){this.$pnls.children("."+u.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+m]()})))},add:function(){u=f[v]._c,f[v]._d,_=f[v]._e},clickAnchor:function(t,e){}},f[v].defaults[m]={fix:!0},f[v].prototype["_initWindow_"+m]=function(){var t=this;g.$docu.off(_.touchmove+"-"+m).on(_.touchmove+"-"+m,function(t){g.$html.hasClass(u.wrapper+"_opened")&&t.preventDefault()});var e=!1;g.$body.off(_.touchstart+"-"+m).on(_.touchstart+"-"+m,"."+u.panels+"> ."+u.panel,function(t){g.$html.hasClass(u.wrapper+"_opened")&&(e||(e=!0,0===t.currentTarget.scrollTop?t.currentTarget.scrollTop=1:t.currentTarget.scrollHeight===t.currentTarget.scrollTop+t.currentTarget.offsetHeight&&(t.currentTarget.scrollTop-=1),e=!1))}).off(_.touchmove+"-"+m).on(_.touchmove+"-"+m,"."+u.panels+"> ."+u.panel,function(t){g.$html.hasClass(u.wrapper+"_opened")&&f(this)[0].scrollHeight>f(this).innerHeight()&&t.stopPropagation()}),g.$wndw.off(_.orientationchange+"-"+m).on(_.orientationchange+"-"+m,function(){t.$pnls.children("."+u.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})},!0});