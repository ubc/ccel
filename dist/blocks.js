!function(e){var c={};function t(l){if(c[l])return c[l].exports;var i=c[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=c,t.d=function(e,c,l){t.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,c){if(1&c&&(e=t(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var i in e)t.d(l,i,function(c){return e[c]}.bind(null,i));return l},t.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(c,"a",c),c},t.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},t.p="",t(t.s=30)}({30:function(e,c,t){"use strict";t.r(c);const l=wp.serverSideRender;var i=({attributes:e})=>React.createElement(l,{block:"ccel/prerequisites",attributes:{...e},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/prerequisites/edit.js",lineNumber:8,columnNumber:3}});const{__:s}=wp.i18n,{registerBlockType:r}=wp.blocks;r("ccel/prerequisites",{title:s("Learning Outcome Prerequisites","ubc-ccel"),description:s("List CCEL Learning Outcome prerequisites list","ubc-ccel"),icon:"book",keywords:[s("ccel","ubc-ccel"),s("prerequisites","ubc-ccel")],category:"ccel",edit:i,save:()=>null});const n=wp.serverSideRender;var o=({attributes:e})=>React.createElement(n,{block:"ccel/build-towards",attributes:{...e},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/build_towards/edit.js",lineNumber:8,columnNumber:3}});const{__:u}=wp.i18n,{registerBlockType:a}=wp.blocks;a("ccel/build-towards",{title:u("Learning Outcome Build Towards","ubc-ccel"),description:u("List CCEL Learning Outcome build towards list","ubc-ccel"),icon:"book",keywords:[u("ccel","ubc-ccel"),u("build towards","ubc-ccel")],category:"ccel",edit:o,save:()=>null});const b=wp.serverSideRender;var p=({attributes:e})=>React.createElement(b,{block:"ccel/achieve-by-lessons",attributes:{...e},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/achieve_by_lesson/edit.js",lineNumber:8,columnNumber:3}});const{__:d}=wp.i18n,{registerBlockType:m}=wp.blocks;m("ccel/achieve-by-lessons",{title:d("Learning Outcome Achieve By Lessons","ubc-ccel"),description:d("List lessons that achieves current learning outcome.","ubc-ccel"),icon:"book",keywords:[d("ccel","ubc-ccel"),d("achieve by lessons","ubc-ccel")],category:"ccel",edit:p,save:()=>null});const _=wp.serverSideRender;var k=({attributes:e})=>React.createElement(_,{block:"ccel/align-with-themes",attributes:{...e},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/align_with_themes/edit.js",lineNumber:9,columnNumber:3}});const{__:w}=wp.i18n,{registerBlockType:f}=wp.blocks;f("ccel/align-with-themes",{title:w("Learning Outcome Align with Themes","ubc-ccel"),description:w("List themes that current learning outcome align with.","ubc-ccel"),icon:"book",keywords:[w("ccel","ubc-ccel"),w("align with themes","ubc-ccel")],category:"ccel",edit:k,save:()=>null});const g=wp.serverSideRender;var v=({attributes:e})=>React.createElement(g,{block:"ccel/related-lesson",attributes:{...e},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/related_lessons/edit.js",lineNumber:8,columnNumber:3}});const{__:y}=wp.i18n,{registerBlockType:L}=wp.blocks;L("ccel/related-lesson",{title:y("Related Lesson","ubc-ccel"),description:y("List related lessons.","ubc-ccel"),icon:"book",keywords:[y("ccel","ubc-ccel"),y("related lessons","ubc-ccel")],category:"ccel",edit:v,save:()=>null});var h=()=>React.createElement("div",{style:{padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#e1e1e1"},__self:void 0,__source:{fileName:"/Users/kelvin/Local Sites/wp-make/app/public/wp-content/plugins/ccel/includes/blocks/ccel_filter/edit.js",lineNumber:14,columnNumber:9}},"CCEL Filtering System");const{__:N}=wp.i18n,{registerBlockType:S}=wp.blocks;S("ccel/filter",{title:N("CCEL Filter","ubc-ccel"),description:N("CCEL filtering system on the frontpage.","ubc-ccel"),icon:"book",keywords:[N("ccel","ubc-ccel"),N("filter","ubc-ccel")],category:"ccel",edit:h,save:()=>null})}});