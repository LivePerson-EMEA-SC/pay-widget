"use strict";(self.webpackChunklptech_pay_widget=self.webpackChunklptech_pay_widget||[]).push([[965],{3643:function(t,o,e){function n(t,o){return function(e,n){Object.defineProperty(e,n,{get:function(){var e,n,i=(null===o||void 0===o?void 0:o.hostEl)?"string"===typeof o.hostEl?this[o.hostEl]:o.hostEl:this.hostEl;if(!i)throw new Error("You have to define @Element() first");return null!==(n=null===(e=(null===o||void 0===o?void 0:o.inHost)?i:i.shadowRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==n?n:null}})}}function i(t,o){return function(e,n){Object.defineProperty(e,n,{get:function(){var e,n=(null===o||void 0===o?void 0:o.hostEl)?"string"===typeof o.hostEl?this[o.hostEl]:o.hostEl:this.hostEl;if(!n)throw new Error("You have to define @Element() first");return null===(e=(null===o||void 0===o?void 0:o.inHost)?n:n.shadowRoot)||void 0===e?void 0:e.querySelectorAll(t)}})}}function r(t,o){return function(e,n){Object.defineProperty(e,n,{get:function(){var e,n,i=(null===o||void 0===o?void 0:o.hostEl)?"string"===typeof o.hostEl?this[o.hostEl]:o.hostEl:this.hostEl;if(!i)throw new Error("You have to define @Element() first");return null!==(n=null===(e=(null===o||void 0===o?void 0:o.inHost)?i:i.shadowRoot)||void 0===e?void 0:e.querySelector("slot"+(t?'[name="'+t+'"]':":not([name])")))&&void 0!==n?n:null}})}}e.d(o,{Q:function(){return n},S:function(){return r},a:function(){return i}})},9965:function(t,o,e){e.r(o),e.d(o,{lp_number_input:function(){return l}});var n=e(7036),i=e(3643),r=function(t,o,e,n){var i,r=arguments.length,l=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(r<3?i(l):r>3?i(o,e,l):i(o,e))||l);return r>3&&l&&Object.defineProperty(o,e,l),l},l=function(){function t(t){var o=this;(0,n.r)(this,t),this.valueState=void 0!==this.value?+this.value:"",this.inputChangeHandler=function(t){o.valueState=o.validateValue(t.target.value)},this.buttonClickHandler=function(t){return function(){switch(t){case"up":o.inputEl.stepUp();break;case"down":o.inputEl.stepDown()}o.valueState=""===o.inputEl.value?o.inputEl.value:+o.inputEl.value}}}return t.prototype.valuePropChangeHandler=function(t){this.valueState=this.validateValue(t)},t.prototype.validateValue=function(t){return void 0!==this.min&&+t<+this.min&&(t=this.min),void 0!==this.max&&+t>+this.max&&(t=this.max),+t},t.prototype.render=function(){return(0,n.h)(n.H,null,(0,n.h)("input",{part:"input",type:"number",min:this.min,max:this.max,step:this.step,value:this.value,readOnly:!0,onChange:this.inputChangeHandler}),(0,n.h)("div",{class:"buttons",part:"buttons"},(0,n.h)("button",{type:"button",part:"button-up",disabled:this.disabled||this.readOnly||""!==this.valueState&&this.valueState>=+this.max,onClick:this.buttonClickHandler("up")}),(0,n.h)("button",{type:"button",part:"button-down",disabled:this.disabled||this.readOnly||""!==this.valueState&&this.valueState<=+this.min,onClick:this.buttonClickHandler("down")})))},Object.defineProperty(t.prototype,"hostEl",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valuePropChangeHandler"]}},enumerable:!1,configurable:!0}),t}();r([(0,i.Q)('input[type="number"]')],l.prototype,"inputEl",void 0),l.style='*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-border:rgba(140, 172, 255, 0.3);--color-border--hover:#F8F8FF;--color-border--active:#175AFC;--color-border--disabled:rgba(140, 172, 255, 0.08);--color-outline:0 0 0 2px #090C43, 0 0 0 4px #FFF;--color-bg:rgba(140, 172, 255, 0.08);--color-text:#F8F8FF;--input-height:38px;--input-text-align:left;--input-padding:12px;--color-button--hover:rgba(140, 172, 255, 0.15);position:relative;display:-ms-inline-flexbox;display:inline-flex;font-family:"Roboto", "Helvetica Neue", Arial, sans-serif;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--color-text)}:host([theme=light]){--color-border:#AEC1EB;--color-border--hover:#5970AB;--color-border--active:#0C50FF;--color-border--disabled:rgba(0, 32, 116, 0.08);--color-outline:0 0 0 2px #FFF, 0 0 0 4px #0C50FF;--color-bg:#FFF;--color-text:#37497D;--color-button--hover:rgba(0, 32, 116, 0.08)}:host([error]:not([error=false])){--color-border:#F7A2B5}:host([error]:not([error=false])[theme=light]){--color-border:#D1153A}:host([size=medium]){--input-height:30px}:host([textAlign=center]){--input-text-align:center}:host([textAlign=right]){--input-text-align:right}input{-ms-flex-positive:1;flex-grow:1;max-width:100%;font:inherit;text-align:var(--input-text-align);font-size:14px;font-weight:400;line-height:1.2;letter-spacing:0;font-size:16px;height:var(--input-height);color:inherit;border:1px solid var(--color-border);outline:none;border-radius:4px;background:var(--color-bg);-webkit-box-shadow:none;box-shadow:none;-webkit-tap-highlight-color:rgba(255, 255, 255, 0);padding:0 2.75em 0 0.75em;margin:0;-webkit-transition:all 0.15s ease-out;transition:all 0.15s ease-out}input[disabled],input[disabled]+.buttons{opacity:0.35}input:not([disabled]):hover{border-color:var(--color-border--hover)}input:not([disabled]):active,input:not([disabled]):focus{border-color:var(--color-border--active)}input:not([disabled]):focus{-webkit-box-shadow:var(--color-outline);box-shadow:var(--color-outline)}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.buttons{position:absolute;top:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:2em;height:100%}.buttons button{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex:1 0 auto;flex:1 0 auto;font:inherit;color:inherit;border:none;background:none;-webkit-box-shadow:none;box-shadow:none;padding:0;margin:0;cursor:pointer;padding:4px;-webkit-transition:all 0.15s ease-out;transition:all 0.15s ease-out}.buttons button[disabled]{cursor:default}.buttons button:not([disabled]):hover{background-color:var(--color-button--hover)}.buttons button:not([disabled]):focus{outline:none}.buttons button:first-child{-ms-flex-align:end;align-items:flex-end}.buttons button:first-child::before{border-top:none;border-bottom-color:var(--color-text)}.buttons button:last-child{-ms-flex-align:start;align-items:flex-start}.buttons button:last-child::before{border-top-color:var(--color-text);border-bottom:none}.buttons button::before{content:"";position:relative;display:block;border:0.3125em solid transparent}'}}]);
//# sourceMappingURL=965.d439396b.chunk.js.map