(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{290:function(t,e,l){var content=l(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("718980b4",content,!0,{sourceMap:!1})},291:function(t,e,l){var content=l(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("73b1c39e",content,!0,{sourceMap:!1})},292:function(t,e,l){"use strict";l.r(e);var n={name:"ProjectsCardText",props:["name","desc","link"]},r=(l(295),l(52)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"sm:table-cell relative w-full sm:w-1/2 h-1/2 sm:h-full"},[l("div",{staticClass:"absolute inset-0 p-3 overflow-hidden"},[l("div",{staticClass:"text-center w-full text-xl text-fill font-medium"},[l("a",{staticClass:"text-fill",attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.name))])]),t._v(" "),l("div",{staticClass:"table mt-4 project-text overflow-hidden mx-4 xl:mx-12"},[l("div",{staticClass:"table-row h-full"},[l("div",{staticClass:"text-justify text-base text-fill truncate whitespace-normal table-cell align-middle"},[t._v("\n          "+t._s(t.desc)+"\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,l){var content=l(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("a3d5b8e4",content,!0,{sourceMap:!1})},294:function(t,e,l){var content=l(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("53bc0abc",content,!0,{sourceMap:!1})},295:function(t,e,l){"use strict";l(290)},296:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.project-text{\n  height:calc(100% - 1rem - 28px)\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},297:function(t,e,l){"use strict";l(291)},298:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.project-pics>div{\n  transition:.3s ease-out;\n  overflow:hidden;\n  box-shadow:0 -4px 4px rgba(0,0,0,.5)\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},299:function(t,e,l){"use strict";l.r(e);var n={name:"AboutCard",props:["about"]},r=(l(302),l(52)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"min-h-2/3 h-fit rounded-3xl with-bg with-border mx-auto mt-4 mb-4 p-2 pt-8"},[l("div",{staticClass:"text-center"},[l("h3",{staticClass:"font-semibold text-xl text-fill text-center"},[t._v("\n      "+t._s(t.about.name)+"\n    ")])]),t._v(" "),l("div",{staticClass:"text-center mt-6"},[l("div",{staticClass:"text-lg text-center text-fill opacity-90"},t._l(t.about.titles,(function(e){return l("p",{key:e},[t._v(t._s(e)),l("br")])})),0)]),t._v(" "),l("div",{staticClass:"text-center mt-6",attrs:{dir:"ltr"}},[l("div",{staticClass:"text-md text-center text-fill opacity-80"},[l("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","envelope"]}}),t._v("\n      "+t._s(t.about.email)),l("br"),t._v(" "),l("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","twitter"]}}),t._v("\n      "+t._s(t.about.twitter)+"\n      "),l("br"),t._v(" "),l("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","github"]}}),t._v("\n      "+t._s(t.about.github)+"\n      "),l("br"),t._v(" "),l("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","instagram"]}}),t._v("\n      "+t._s(t.about.instagram)+"\n    ")],1)]),t._v(" "),l("div",{staticClass:"mt-6 w-full px-4 mb-4",attrs:{dir:"ltr"}},t._l(t.about.skills,(function(e){return l("div",{key:t.about.skills.indexOf(e),staticClass:"flex mt-2 h-4 items-center"},[l("div",{staticClass:"w-1/4 text-left text-fill uppercase"},[t._v(t._s(e.name))]),t._v(" "),l("div",{staticClass:"w-3/4 h-full text-right"},[l("div",{staticClass:"w-full h-full bg-gray-400 rounded-xl"},[l("div",{staticClass:"h-full rounded-xl bg-custom",style:{width:e.percent+"% !important"}})])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,l){"use strict";l.r(e);l(67);var n={components:{ProjectsCardText:l(292).default},name:"ProjectsCard",props:["projects"],data:function(){var t=this.projects.length;return{selectedSlide:this.projects[0].id,selectedSlideIndex:0,slideCount:t,interval:0,autoSlideTimeout:5e3}},methods:{next:function(){this.selectedSlideIndex==this.slideCount-1?this.selectedSlideIndex=0:this.selectedSlideIndex++,this.selectedSlide=this.projects[this.selectedSlideIndex].id},stopAutoScroll:function(){clearInterval(this.interval)},startAutoScroll:function(){var t=this;this.interval=setInterval((function(){t.next()}),this.autoSlideTimeout)}},mounted:function(){this.startAutoScroll()},beforeDestroy:function(){clearInterval(this.interval)}},r=(l(304),l(52)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"project-card rounded-3xl w-full with-bg with-border mx-auto mt-4 mb-4 p-3 pb-0"},[l("div",{staticClass:"text-center font-semibold text-2xl text-fill mb-4"},[t._v("\n    پروژه های انجام شده\n  ")]),t._v(" "),l("div",{staticClass:"w-full custom-h mt-3 flex",attrs:{dir:"ltr"}},t._l(t.projects,(function(e){return l("div",{key:e.id,staticClass:"h-full w-0 slide",class:{"w-full":t.selectedSlide===e.id},on:{mouseenter:function(e){return t.stopAutoScroll()},mouseleave:function(e){return t.startAutoScroll()}}},[l("div",{staticClass:"sm:table h-full w-full",attrs:{dir:"rtl"}},[l("div",{staticClass:"h-full sm:table-row"},[l("projects-card-text",{attrs:{name:e.name,desc:e.desc,link:e.link}}),t._v(" "),l("projects-card-pics",{attrs:{pics:e.pics}})],1)])])})),0),t._v(" "),l("div",{staticClass:"text-center justify-center items-center flex indicators",attrs:{dir:"ltr"}},t._l(t.projects,(function(e){return l("div",{key:e.id,staticClass:"rounded-full indicator",class:{"indicator-active":t.selectedSlide===e.id},on:{click:function(l){t.selectedSlide=e.id}}})})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectsCardText:l(292).default,ProjectsCardPics:l(301).default})},301:function(t,e,l){"use strict";l.r(e);var n={name:"ProjectsCardPics",props:["pics"]},r=(l(297),l(52)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"sm:table-cell w-full sm:w-1/2 h-1/2 sm:h-full relative"},[l("div",{staticClass:"absolute inset-0 h-full w-full 2xl:px-8 xl:px-6 px-0"},[l("div",{staticClass:"h-full w-full relative project-pics"},[l("div",{staticClass:"w-full absolute h-2/5 rounded-xl top-0 hover:-top-1/5 right-0"},[l("img",{staticClass:"absolute inset-0 h-full w-full",attrs:{src:t.pics[3].pic,alt:t.pics[3].alt}})]),t._v(" "),l("div",{staticClass:"w-full absolute h-2/5 rounded-xl top-1/5 hover:top-0 right-0"},[l("img",{staticClass:"absolute inset-0 h-full w-full",attrs:{src:t.pics[2].pic,alt:t.pics[2].alt}})]),t._v(" "),l("div",{staticClass:"w-full absolute h-2/5 rounded-xl top-2/5 hover:top-1/5 right-0"},[l("img",{staticClass:"absolute inset-0 h-full w-full",attrs:{src:t.pics[1].pic,alt:t.pics[1].alt}})]),t._v(" "),l("div",{staticClass:"w-full absolute h-2/5 rounded-xl top-3/5 right-0"},[l("img",{staticClass:"absolute inset-0 h-full w-full",attrs:{src:t.pics[0].pic,alt:t.pics[0].alt}})])])])])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,l){"use strict";l(293)},303:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.text-fill{\n  color:#284b63!important\n}\n.bg-custom{\n  background-color:#3c6e71!important\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},304:function(t,e,l){"use strict";l(294)},305:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.text-fill{\n  color:#284b63!important\n}\n.bg-custom{\n  background-color:#3c6e71!important\n}\n.custom-h{\n  height:calc(100% - 1.5rem - 64px)\n}\n.indicator{\n  width:20px;\n  height:20px;\n  background:rgba(53,53,53,.45098039215686275)\n}\n.indicators{\n  height:calc(32px + .75rem)\n}\n.indicator:not(:last-child){\n  margin-right:7px\n}\n.indicator.indicator-active{\n  background-color:#3c6e71!important\n}\n.project-card{\n  height:600px\n}\n.slide{\n  transition:.45s linear;\n  left:0\n}\n.slide:not(.w-full){\n  overflow:hidden\n}\nhtml{\n  overflow-x:hidden\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},306:function(t,e,l){var content=l(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("1ebadcfc",content,!0,{sourceMap:!1})},307:function(t,e,l){"use strict";l(306)},308:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.h-100vh{\n  height:100vh!important\n}\n.with-bg{\n  background-color:rgba(248,205,85,.7803921568627451)\n}\n.with-border{\n  border:3px solid #25a5be\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},309:function(t,e,l){"use strict";l.r(e);var n=l(299),r=l(300),o={components:{AboutCard:n.default,ProjectsCard:r.default},name:"FirstLanding",props:["about","projects"]},c=(l(307),l(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"h-100vh items-center w-full"},[l("div",{staticClass:"flex-row lg:flex"},[l("div",{staticClass:"lg:w-1/3 align-middle items-center 2xl:w-1/5 xl:w-1/4 pt-8 pb-4 px-4 mb-2 lg:mb-0 w-full"},[l("div",{staticClass:"my-auto sticky top-2"},[l("img",{staticClass:"rounded-full border-4 w-44 maxw-full mx-auto with-border",attrs:{src:t.about.image,alt:"My Image"}}),t._v(" "),l("about-card",{attrs:{about:t.about}})],1)]),t._v(" "),l("div",{staticClass:"lg:w-2/3 2xl:w-4/5 xl:w-3/4 pt-8 pb-4 px-4 w-full"},[l("projects-card",{attrs:{projects:t.projects}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AboutCard:l(299).default,ProjectsCard:l(300).default})},310:function(t,e,l){var content=l(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("bad8e090",content,!0,{sourceMap:!1})},311:function(t,e,l){"use strict";l(310)},312:function(t,e,l){var n=l(65)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\nhtml{\n  background-color:#92cbdf;\n  direction:rtl!important;\n  font-family:"Sahel","Roboto",sans-serif!important\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},324:function(t,e,l){"use strict";l.r(e);var n=l(8),r=(l(38),{components:{FirstLanding:l(309).default},name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,e.next=3,l("about").fetch();case 3:return n=e.sent,e.next=6,l("projects").fetch();case 6:return r=e.sent,e.abrupt("return",{about:n,projects:r});case 8:case"end":return e.stop()}}),e)})))()}}),o=(l(311),l(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("first-landing",{attrs:{about:t.about,projects:t.projects}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FirstLanding:l(309).default})}}]);